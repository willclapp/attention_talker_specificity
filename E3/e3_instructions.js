// // // // // // // // // // // // // // // // // // // // // // // // // // //

// STUDY FA

let study_instructions_1_FA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div><p class="instructions">We're now ready to begin the experiment. <br><br><span style="color: white;">There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings. <br><br>After you hear each sentence, you can press the space bar to continue.<br><br></span>Press the space bar to continue.</p><div>`,
  choices: [' '] 
};

let study_instructions_2_FA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br><span style="color: white;">In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings. <br><br>After you hear each sentence, you can press the space bar to continue.<br><br></span>Press the space bar to continue.</p><div>`,
  choices: [' ']
};

let study_instructions_3_FA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br><span style="color: white;">As your tour guide tells you about the space, try to imagine your surroundings. <br><br>After you hear each sentence, you can press the space bar to continue.<br><br></span>Press the space bar to continue.</p><div>`,
  choices: [' ']
};

let study_instructions_4_FA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings. <br><br><span style="color: white;">After you hear each sentence, you can press the space bar to continue.<br><br></span>Press the space bar to continue.</p><div>`,
  choices: [' ']
};

let study_instructions_5_FA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings. <br><br>After you hear each sentence, you can press the space bar to continue.<br><br>Press the space bar to continue.</p><div>`,
  choices: [' ']
};

let study_instructions_6_FA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings. <br><br>After you hear each sentence, you can press the space bar to continue.<br><br>Press the space bar to begin the experiment.</p><div>`,
  choices: [' '],
  post_trial_gap: 1000
};

let study_instructions_FA = [study_instructions_1_FA, study_instructions_2_FA, study_instructions_3_FA, study_instructions_4_FA, study_instructions_5_FA, study_instructions_6_FA]


// // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// STUDY DA

let even_key = button_order == "OLD_NEW" ? "D" : "K"
let odd_key = button_order == "OLD_NEW" ? "K" : "D"

let study_instructions_1_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment.<span style="color: white;"> <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_2_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<span style="color: white;"><br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_3_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <span style="color: white;"><br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_4_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<span style="color: white;"><br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_5_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<span style="color: white;"><br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_6_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<span style="color: white;"><br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_7_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<span style="color: white;"><br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_8_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<span style="color: white;"><br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_9_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<span style="color: white;"><br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_10_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<span style="color: white;"><br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_11_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<span style="color: white;"><br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_12_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<span style="color: white;"><br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br></span>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_13_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br>Press the spacebar to continue.</p><div>`},
  choices: [' '] 
};

let study_instructions_14_DA = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">We're now ready to begin the experiment. <br><br>There will be three parts of the experiment.<br><br>In the first part, you will go on an imaginary tour of four different public spaces while a tour guide describes the space to you. <br><br>As your tour guide tells you about the space, try to imagine your surroundings.<br><br> In addition to listening to the tour guide though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br>Press the spacebar to begin.</p><div>`},
  choices: [' '] 
};

let study_instructions_DA = [study_instructions_1_DA, study_instructions_2_DA, study_instructions_3_DA, study_instructions_4_DA, study_instructions_5_DA, study_instructions_6_DA, study_instructions_7_DA, study_instructions_8_DA, study_instructions_9_DA, study_instructions_10_DA, study_instructions_11_DA, study_instructions_12_DA, study_instructions_13_DA, study_instructions_14_DA]


// // // // // // // // // // // // // // // // // // // // // // // // // // //

// // Test

let test_instructions_1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br><span style="color: white;">Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br><span style="color: white;">If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<span style="color: white;"><br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_4 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><span style="color: white;"><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/blank.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_5 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/test_1.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/test_2.jpg" width="250" height="250" style="margin-left: 48px;"><span style="color: white;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_6 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/test_1.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/test_2.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<span style="color: white;"><br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_7 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/test_1.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/test_2.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br><span style="color: white;">If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_8 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/test_1.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/test_2.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <span style="color: white;"><br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_9 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/test_1.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/test_2.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b><span style="color: white;"></span> <br><br>Press the space bar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_10 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll see two images on each page. The images represent things you heard about during the audio tours.<br><br>Based on what you heard earlier, one image from each pair is TRUE, and one is FALSE. Your job is to select the TRUE image.<br><br>If you think the left image is consistent with what you heard before, select it by pressing the 'D' key. If you think the right image is consistent with what you heard before, select it by pressing the 'K' key.<br><br> For example, imagine that earlier, you heard the sentence "There is a plant on the window sill." You may see these two images:<br><br><img src="../img/jpgs/test_1.jpg" width="250" height="250" style="margin-right: 48px;"><img src="../img/jpgs/test_2.jpg" width="250" height="250" style="margin-left: 48px;"><br><br>In this case, the image on the right side would be the correct response because it is TRUE based on the sentence "There is a plant on the window sill." You would select it by pressing 'K.'<br><br>The image on the left is FALSE, because it shows a book rather than a plant on the window sill.<br><br>If you don't respond within 5 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the space bar when you're ready to begin.<div>`
  },
  choices: [' ']
}



let test_instructions = [test_instructions_1, test_instructions_2, test_instructions_3, test_instructions_4, test_instructions_5, test_instructions_6, test_instructions_7, test_instructions_8, test_instructions_9, test_instructions_10]
