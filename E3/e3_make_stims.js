let n_per_frame = 10

// Generate frame orders
let frame_order_study = shuffle_array(frames)
const number_array = ['first', 'second', 'third', 'last']
const frame_dict = {
  'par': 'public park',
  'mus': 'museum',
  'tst': 'train station',
  'sud': 'suburban dowtown area',
}

// // // // // // // // // // // // // // // // // // 
// STUDY AND TEST BLOCK   /  /  /  /  /  /  /  /  /
// // // // // // // // // // // // // // // // // 

// Generate talker order
let talker_order = shuffle_array(talker_list)

// Decide which alts go in study 
let alts_array = []
for (let i = 0; i<frames.length; i++) {
  let frame_alts = []
  for (let j = 0; j<n_per_frame; j++) {
    let alt = Math.floor(Math.random()*2) + 1
    frame_alts.push(alt)
  }
  alts_array.push(frame_alts)
} 

// Generate truth order. Which items from study will be 
// repeated, and which will not?
let truth_array = []
for (let i = 0; i < frames.length; i++) {
  let truth = []
  for (let i = 0; i < n_per_frame/2; i++) {
    truth.push(true)
    truth.push(false)
  }
  truth_array.push(shuffle_array(truth))
}

// Iterate over trials array csv output to put everything in pairs
let trial_pairs = {}
for (let i = 0; i < trials.length; i++) {
  let frame_code = trials[i].frame_code
  if (!(frame_code in trial_pairs)) {
    trial_pairs[frame_code] = {}
  }
  let code = trials[i].code.substring(0,6)
  if (!(code in trial_pairs[frame_code])) {
    trial_pairs[frame_code][code] = []
  }
  trial_pairs[frame_code][code].push(trials[i])
}

// Iterate over the frame alts (which sentence?), putting trials 
// into an array of arrays of 10 objects. Add the talker and path 
// to the object.
let study_blocks = []
let test_blocks = []
for (let i = 0; i < alts_array.length; i++) {
// for (let i = 0; i < 2; i++) {
  let study_trial_array = []
  let test_trial_array = []
  let curr_frames = trial_pairs[frame_order_study[i]]
  let curr_alts = alts_array[i]
  let j = 0
  for (const [key, value] of Object.entries(curr_frames)) {
    // First find the correct study trial
    let curr_study_trial = value.find(trial => trial.alt === String(curr_alts[j]))
    let study_trial = {}
    study_trial.number = Math.floor(Math.random()*100)
    study_trial.frame = curr_study_trial.frame
    study_trial.frame_code = curr_study_trial.frame_code
    study_trial.frame_no = curr_study_trial.frame_no
    study_trial.alt = curr_study_trial.alt
    study_trial.code = curr_study_trial.code
    study_trial.sentence = curr_study_trial.sentence
    study_trial.talker = talker_order[i]
    let rec = recordings.find(obj => obj.talker === talker_order[i] & obj.code === study_trial.code)
    study_trial.audio_path = `../audio/${talker_order[i]}/meaning/${study_trial.code}_${talker_order[i]}_${rec.recording}.wav`
    preload_audio.push(study_trial.audio_path)
    study_trial_array.push(study_trial)

    // Find the test trial. 
    // The meaning of 'truth_array' has changed slightly from the text version to the
    // image version. Whereas 'true' used to indicate a repeated sentence, it now indicates
    // that the correct answer is on the LEFT side.
    let correct_alt = curr_alts[j]
    let incorrect_alt = 2 - ((correct_alt + 1) % 2)      
    let curr_test_trial = value.find(trial => trial.alt === String(correct_alt))
    let test_trial = {}
    test_trial.frame = curr_test_trial.frame
    test_trial.frame_code = curr_test_trial.frame_code
    test_trial.frame_no = curr_test_trial.frame_no
    test_trial.alt = curr_test_trial.alt
    test_trial.code = curr_test_trial.code
    test_trial.sentence = curr_test_trial.sentence
    test_trial.talker = talker_order[i]
    test_trial.correct_side = truth_array[i][j] ? "left" : "right"
    let inc_frame_code = curr_test_trial.frame_no === '10' ? "10" : `0${curr_test_trial.frame_no}`
    let incorrect_code = `${curr_test_trial.frame_code}_${inc_frame_code}_${incorrect_alt}`
    test_trial.left_image = test_trial.correct_side === "left" ? `../img/jpgs/${curr_test_trial.code}.jpg` : `../img/jpgs/${incorrect_code}.jpg` 
    test_trial.right_image = test_trial.correct_side === "right" ? `../img/jpgs/${curr_test_trial.code}.jpg` : `../img/jpgs/${incorrect_code}.jpg` 
    preload_imgs.push(test_trial.left_image, test_trial.right_image)
    test_trial_array.push(test_trial)
    j++;
  }
  study_blocks.push(shuffle_array(study_trial_array))
  test_blocks.push(shuffle_array(test_trial_array))
}
test_blocks = shuffle_array(test_blocks)
