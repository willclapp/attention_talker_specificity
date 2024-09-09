let timeline = [];

const jsPsych = initJsPsych({
  on_finish: function(data) {
    proliferate.submit({"trials": data.values()});
  }
})

const preload = {
  type: jsPsychPreload,
  audio: preload_audio,
  images: preload_imgs
}


const enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true,
  message: `
  <div class="instructions">This experiment requires use of your full screen.<br> To enter full screen mode and continue with the experiment, click below.</div>
  `
}

const irb = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div class="instructions"><font size="3">DESCRIPTION: We invite you to participate in a research study on language comprehension. In this experiment, you will complete a linguistic task where you will hear spoken sentences and make decisions about them.<br><br>RISKS AND BENEFITS: The risks associated with this study are minimal. Study data will be stored securely, in compliance with Stanford University standards, minimizing the risk of confidentiality breach. This judgment is based on a large body of experience with the same or similar procedures with people of similar ages, sex, origins, etc.  We cannot and do not guarantee or promise that you will receive any benefits from this study. You will help us to understand how people recognize and perceive auditory stimuli.<br><br>TIME INVOLVEMENT: Your participation in this experiment is expected to take between 10 and 20 minutes and will not take longer than 45 minutes.<br><br>PAYMENTS: You will be paid for your participation at the posted rate, consisted with online payment standards.<br><br>SUBJECT'S RIGHTS: If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to answer particular questions. Your individual privacy will be maintained in all published and written data resulting from the study.<br><br>CONTACT INFORMATION: Questions, Concerns, or Complaints: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, please contact William Clapp at wsclapp@stanford.edu.<br><br>Independent Contact: If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, Stanford, CA 94305-5401 or email irbnonmed@stanford.edu.<br><br>WAIVER OF DOCUMENTATION: If you agree to participate in this research, please continue to begin the study.</font></div>`,
  choices: ['Continue']
};

const audio_check = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div class="instructions">This experiment uses audio. Please make sure that your headphones are plugged in and that your volume is turned up. The audio below is similar to what you'll hear in the experiment, so you can play it as many times as you need while you adjust your volume to a comfortable level.<br><br> <audio controls src="../audio/test.wav"></audio></div>`,
  choices: ['Continue']
}

timeline.push(preload, enter_fullscreen, irb, audio_check)

// // // // // // // // // // // // 
// STUDY BLOCK
// // // // // // // // // // // 

let d_response = even_key == "D" ? "Even" : "Odd"
let k_response = even_key == "K" ? "Even" : "Odd"

if (attention_condition=="FA") {
  for (let i=0; i<study_instructions_FA.length; i++) {
    timeline.push(study_instructions_FA[i])
  }
} else {
  for (let i=0; i<study_instructions_DA.length; i++) {
    timeline.push(study_instructions_DA[i])
  }
}

// Wrap the four frame stories in a for loop
for (let i = 0; i < frames.length; i++) {
  const study_intro = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {
        if (attention_condition === "FA") {
          return `<div><p class="space">For the ${number_array[i]} story, you will take a tour of a ${frame_dict[frame_order_study[i]]}. Listen carefully to your tour guide and try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br>Press the space bar to continue after each sentence.</p><div>`
        } else {
          return `<div><p class="space">For the ${number_array[i]} story, you will take a tour of a ${frame_dict[frame_order_study[i]]}. Listen carefully to your tour guide and try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br>Decide whether the numbers are both even, both odd, or neither.<br><br>Press the spacebar to continue.</p><div>`
        }
      },
      choices: [" "]
    }
  let prev_num = Math.floor(Math.random()*99) + 1
  const first_number = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
      return `<div class="da-container">Try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br>Remember this number: <b><i style="font-size: larger;">${prev_num}</b></i>Press the spacebar to begin.<div class="da-option-container"><div class="da-even-odd-container"><p class="da-even-odd"><i>Both ${d_response}</i><br>Press D</p><p class="da-even-odd"><i>Both ${k_response}</i><br>Press K</p></div><div class="da-spacebar-container"><i>One ${d_response}; One ${k_response}</i><br>Press Spacebar</div></div></div>`
    },
    data: {
      number: function() {return prev_num}
    },
    choices: [" "]
  }

  const study_procedure = {
    timeline: [
      {
        type: jsPsychAudioKeyboardResponse,
        stimulus: jsPsych.timelineVariable('audio_path'),
        choices: [' ', 'd', 'k'],
        response_allowed_while_playing: false,
        prompt: function() {
          if (attention_condition==="FA") {
            return `<div><p class="space"> Try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br>Press the space bar to continue.</p></div>`
          } else {
            return `<div class="da-container">Try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br>Remember this number: <b><i style="font-size: larger;">${jsPsych.timelineVariable('number')}</b></i><br><div class="da-option-container"><div class="da-even-odd-container"><p class="da-even-odd"><i>Both ${d_response}</i><br>Press D</p><p class="da-even-odd"><i>Both ${k_response}</i><br>Press K</p></div><div class="da-spacebar-container"><i>One ${d_response}; One ${k_response}</i><br>Press Spacebar</div></div></div>`
          }
        },
        data: {
          frame: jsPsych.timelineVariable('frame'),
          frame_code: jsPsych.timelineVariable('frame_code'),
          frame_no: jsPsych.timelineVariable('frame_no'),
          alt: jsPsych.timelineVariable('alt'),
          code: jsPsych.timelineVariable('code'),
          sentence: jsPsych.timelineVariable('sentence'),
          talker: jsPsych.timelineVariable('talker'),
          number: jsPsych.timelineVariable('number'),
          condition: function() {return attention_condition},
          correct_answer: function() {
            if (jsPsych.timelineVariable('number') % 2 == 0 & prev_num % 2 == 0) {
              return 'even'
            } else if (jsPsych.timelineVariable('number') % 2 == 1 & prev_num % 2 == 1) {
              return 'odd'
            } else {
              return 'neither'
            }
          },
          phase: "study",
          block: i,
          button_order: function() {return button_order}
        }
      },
      {
        type: jsPsychAudioKeyboardResponse,
        stimulus: '../audio/silence.wav',
        response_allowed_while_playing: false,
        prompt: function() {
          if (attention_condition==="FA") {
            return `<div><p class="space">Try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br> Press the space bar to continue.</p></div>`
          } else {
            return `<div class="da-container">Try to imagine the ${frame_dict[frame_order_study[i]]}.<br><br>Remember this number: <b><i style="font-size: larger; color: white;">${jsPsych.timelineVariable('number')}</b></i><br><div class="da-option-container"><div class="da-even-odd-container"><p class="da-even-odd"><i>Both ${d_response}</i><br>Press D</p><p class="da-even-odd"><i>Both ${k_response}</i><br>Press K</p></div><div class="da-spacebar-container"><i>One ${d_response}; One ${k_response}</i><br>Press Spacebar</div></div></div>`
          }
        },
        choices: [''],
        trial_duration: 1000,
        on_finish: function() {
          prev_num = jsPsych.timelineVariable('number')
        }
      }
    ],
    timeline_variables: study_blocks[i]
  }
  if (attention_condition==="FA") {
    timeline.push(study_intro, study_procedure)
  } else {
    timeline.push(study_intro, first_number, study_procedure)
  }
}


// // // // // // // // // // // // 
// FILLER BLOCK
// // // // // // // // // // // 

timeline.push(category_instructions_1, category_instructions_2, category_instructions_3, category_instructions_4, category_instructions_5, category_instructions_6, category_instructions_7, category_instructions_8)
for (let i = 0; i < n_cats; i++) {
  timeline.push(category_procedure[i])
}

// // // // // // // // // // // // 
// TEST BLOCK
// // // // // // // // // // // 

let d_ans = button_order == "OLD_NEW" ? "TRUE" : "FALSE"
let k_ans = button_order == "OLD_NEW" ? "FALSE" : "TRUE"

for (let i=0; i<test_instructions.length; i++) {
  timeline.push(test_instructions[i])
}

for (let i = 0; i < frames.length; i++) {
  let space = frame_dict[test_blocks[i][0].frame_code]
  const test_intro = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
      return `<div><p class="space"> Try to remember the tour of the <em><b>${space}</b></em>. Read each sentence carefully and decide whether it's TRUE or FALSE based on what you remember from your tour of the ${space}. <br><br> Please respond as quickly and accurately as possible. If you do not respond within 4 seconds, the experiment will progress automatically. <br><br>Place your fingers on the 'D' and 'K' keys and then press the  spacebar to continue. The first sentence will appear in 5 seconds.  </p><div>`
    },
    choices: [" "]
  }
  const test_between = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: '../audio/silence.wav',
    response_allowed_while_playing: false,
    prompt: function() {
      return `<div class="math-container test_container"><em>Is this sentence true based on what you remember hearing about the <b>${space}</b>?<br><br></em><p class="test_sentence test_sentence_iti">Filler</p><div class="option-container-test"><p class="option">Press D<br><b>${d_ans}</b></p><p class="option">Press K<br><b>${k_ans}</b></p></div></div>`
    },
    choices: [''],
    trial_duration: 5000
  }
  const test_procedure = {
    timeline: [
      {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function() {
          return `<div class="math-container test_container"><em>Is this sentence true based on what you remember hearing about the <b>${space}</b>?<br><br></em><p class="test_sentence">${jsPsych.timelineVariable('sentence')}</p><div class="option-container-test"><p class="option">Press D<br><b>${d_ans}</b></p><p class="option">Press K<br><b>${k_ans}</b></p></div></div>`
        },
        trial_duration: 5000,
        choices: ['d','k'],
        data: {
          frame: jsPsych.timelineVariable('frame'),
          frame_code: jsPsych.timelineVariable('frame_code'),
          frame_no: jsPsych.timelineVariable('frame_no'),
          alt: jsPsych.timelineVariable('alt'),
          code: jsPsych.timelineVariable('code'),
          sentence: jsPsych.timelineVariable('sentence'),
          talker: jsPsych.timelineVariable('talker'),
          repeated: jsPsych.timelineVariable('repeated'),
          phase: "test",
          block: i + 4,
          button_order: function() {return button_order}
        }
      },
      {
        type: jsPsychAudioKeyboardResponse,
        stimulus: '../audio/silence.wav',
        response_allowed_while_playing: false,
        prompt: function() {
          return `<div class="math-container test_container"><em>Is this sentence true based on what you remember hearing about the <b>${space}</b>?<br><br></em><p class="test_sentence test_sentence_iti">${jsPsych.timelineVariable('sentence')}</p><div class="option-container-test"><p class="option">Press D<br><b>${d_ans}</b></p><p class="option">Press K<br><b>${k_ans}</b></p></div></div>`
        },
        choices: [''],
        trial_duration: 1500
      }
    ],
    timeline_variables: test_blocks[i]
  }
  timeline.push(test_intro, test_between, test_procedure)
}

// // // // // // // // // // // // 
// Questionnaire
// // // // // // // // // // // 
const quest_instructions = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: `<p class="instructions"> That's the end of the experiment! Thank you for your responses. To help us analyze our results, it would be helpful to know know a little more about you. Please answer the following questions.</p>`
}

const thanks = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: "Thank you for your time! Please click 'Continue' and then wait a moment until you're directed back to Prolific.<br><br>"
}

timeline.push(quest_instructions, questionnaire, thanks)
jsPsych.data.addProperties({condition: attention_condition})
  
jsPsych.run(timeline);