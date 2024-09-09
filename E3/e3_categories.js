let start_time = 0
let duration = 18 * 1000
let n_cats = 32
let n_items = 12

let category_instructions_1 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br><span style="color: white;">.In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_2 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br><span style="color: white;">Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_3 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br><span style="color: white;"> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_4 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br><span style="color: white;">Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_5 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br><span style="color: white;">There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_6 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br><span style="color: white;">Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_7 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br><span style="color: white;"></span>Click to continue</p></div>`
  },
  choices: ['Continue']
}

let category_instructions_8 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `<div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the next section, you'll see a collection of ${n_items} images sitting outside of a big square.<br><br>Your job is to create categories by grouping images together.<br><br> You can create groups by dragging and dropping the images into some region of the square.<br><br>Images that are part of one category should be placed next to each other or overlapping.<br><br>There are no pre-existing categories to choose from, so be creative and try to sort the images into as few groups as you can. But it's okay if there are one or two images you can't find a group for.<br><br>Any similarity could be useful for sorting the images. For example, groups could be based on shapes ("round", "square"), colors ("blue", "red"), functions ("foods", "tools"), or even the words themselves ("starts with 'L'"). Choose anything that makes sense to you!<br><br>When you're ready to begin, click continue.</p></div>`
  },
  choices: ['Continue'],
  on_finish: function() {
    let now = new Date()
    start_time = now.getTime()
    console.log(start_time)
  }
}

let curr_time = 0
let over_time = false

let category_procedure = []
let during_directions = `Create categories by placing images near each other or on top of each other if they have something in common.<br>Be creative, and try to create as few categories as you can. <br><br>`
for (let i = 0; i < n_cats; i++) {
  let stimuli = shuffle_array(pics).slice(0,n_items)
  let cat_trial = {
    type: jsPsychFreeSortMod,
    stimuli: function() {
      return over_time ? [] : stimuli
    },
    trial_duration: function() {
      return over_time ? 0 : 1000*60*60
    },
    sort_area_shape: 'square',
    sort_area_height: 720,
    sort_area_width: 720,
    stim_height: 100,
    stim_width: 100,
    counter_text_finished: `${during_directions}All items placed. Feel free to reposition items if necessary.`,
    counter_text_unfinished: `${during_directions}You still need to place %n% item%s% inside the sort area.`,
    data: {
      completed: function() {return over_time ? false : true}
    },
    on_finish: function() {
      if (!over_time) {
        let now = new Date()
        curr_time = now.getTime()
        if ((curr_time - start_time) > duration) {
          over_time = true;
        }
      }
    }
  }
  // let text_trial = {
  //   type: jsPsychSurveyTextDur,
  //   trial_duration: function() {return 1000},
  //   questions: [
  //     {
  //       prompt: 'What were the groups you created on the last page? <br>Separate your answers with a semicolon (;). <br>For example, "<i>animals; round things; found in a refrigerator; blue things</i>"',
  //       rows:3, 
  //       columns: 50
  //     }
  //   ],
  //   data: {
  //     completed: function() {return over_time ? false : true}
  //   },
  //   on_finish: function() {
  //     console.log("hi")
  //     if (!over_time) {
  //       let now = new Date()
  //       curr_time = now.getTime()
  //       if ((curr_time - start_time) > duration) {
  //         over_time = true;
  //       }
  //     }
  //   }
  // }
  category_procedure.push(cat_trial)
}