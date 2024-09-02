const stims_header = ["﻿Frame", "frame_code", "frame_no", "alt", "code", "sentence"]

const trials = [
	{
		frame: "park",
		frame_code: "par",
		frame_no: "1",
		alt: "1",
		code: "par_01_1",
		sentence: "The entrance is marked by a gray stone arch."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "1",
		alt: "2",
		code: "par_01_2",
		sentence: "The entrance is marked by two red brick columns."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "2",
		alt: "1",
		code: "par_02_1",
		sentence: "A family of ducklings is swimming in a pond."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "2",
		alt: "2",
		code: "par_02_2",
		sentence: "A pair of swans is swimming in a pond."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "3",
		alt: "1",
		code: "par_03_1",
		sentence: "Vegetables are growing in a public garden."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "3",
		alt: "2",
		code: "par_03_2",
		sentence: "Flowers are growing in a public garden."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "4",
		alt: "1",
		code: "par_04_1",
		sentence: "Some kids are playing baseball in a field."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "4",
		alt: "2",
		code: "par_04_2",
		sentence: "Some kids are playing soccer in a field."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "5",
		alt: "1",
		code: "par_05_1",
		sentence: "A rickety wooden bridge crosses the creek."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "5",
		alt: "2",
		code: "par_05_2",
		sentence: "An ornate steel bridge crosses the creek."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "6",
		alt: "1",
		code: "par_06_1",
		sentence: "A pianist is playing on an outdoor stage."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "6",
		alt: "2",
		code: "par_06_2",
		sentence: "A folk band is playing on an outdoor stage"
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "7",
		alt: "1",
		code: "par_07_1",
		sentence: "There's a brass statue of a World War II soldier."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "7",
		alt: "2",
		code: "par_07_2",
		sentence: "There's a brass statue of a Revolutionary War soldier."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "8",
		alt: "1",
		code: "par_08_1",
		sentence: "In a fountain, water shoots out of a dolphin's mouth."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "8",
		alt: "2",
		code: "par_08_2",
		sentence: "In a fountain, water shoots up from the ground."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "9",
		alt: "1",
		code: "par_09_1",
		sentence: "There's a playground designed to look like a castle."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "9",
		alt: "2",
		code: "par_09_2",
		sentence: "There's a playground with brightly colored monkey bars."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "10",
		alt: "1",
		code: "par_10_1",
		sentence: "Some people are sunbathing on a blanket."
	},
	{
		frame: "park",
		frame_code: "par",
		frame_no: "10",
		alt: "2",
		code: "par_10_2",
		sentence: "Some people are reading books on a blanket."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "1",
		alt: "1",
		code: "sud_01_1",
		sentence: "The main street is paved with red bricks."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "1",
		alt: "2",
		code: "sud_01_2",
		sentence: "The main street is paved with cobble stones."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "2",
		alt: "1",
		code: "sud_02_1",
		sentence: "There's parking lot full of cars."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "2",
		alt: "2",
		code: "sud_02_2",
		sentence: "There's a parking lot that's pretty much empty."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "3",
		alt: "1",
		code: "sud_03_1",
		sentence: "On the corner, there's a post office."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "3",
		alt: "2",
		code: "sud_03_2",
		sentence: "On the corner, there's a dentist's office."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "4",
		alt: "1",
		code: "sud_04_1",
		sentence: "There's a patio where people drink wine under umbrellas."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "4",
		alt: "2",
		code: "sud_04_2",
		sentence: "There's a patio where people drink coffee under umbrellas."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "5",
		alt: "1",
		code: "sud_05_1",
		sentence: "Kids are looking into the window of a pet store."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "5",
		alt: "2",
		code: "sud_05_2",
		sentence: "Kids are looking into the window of a toy store."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "6",
		alt: "1",
		code: "sud_06_1",
		sentence: "An old trolley runs up and down the street."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "6",
		alt: "2",
		code: "sud_06_2",
		sentence: "A city bus runs up and down the street."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "7",
		alt: "1",
		code: "sud_07_1",
		sentence: "The town hall has a big dome."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "7",
		alt: "2",
		code: "sud_07_2",
		sentence: "The town hall has a clock tower."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "8",
		alt: "1",
		code: "sud_08_1",
		sentence: "People are eating outside at an Italian restaurant."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "8",
		alt: "2",
		code: "sud_08_2",
		sentence: "People are eating outside at a Chinese restaurant."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "9",
		alt: "1",
		code: "sud_09_1",
		sentence: "There's a brass statue of two kids sitting on a bench."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "9",
		alt: "2",
		code: "sud_09_2",
		sentence: "There's a brass statue of a man reading a newspaper on a bench."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "10",
		alt: "1",
		code: "sud_10_1",
		sentence: "High schoolers are riding bikes on the sidewalk."
	},
	{
		frame: "suburban downtown",
		frame_code: "sud",
		frame_no: "10",
		alt: "2",
		code: "sud_10_2",
		sentence: "High schoolers are riding skateboards on the sidewalk."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "1",
		alt: "1",
		code: "mus_01_1",
		sentence: "The façade looks Roman, with big marble columns."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "1",
		alt: "2",
		code: "mus_01_2",
		sentence: "The façade looks modern, with big glass windows."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "2",
		alt: "1",
		code: "mus_02_1",
		sentence: "Outside is sculpture that looks like a giant paper clip."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "2",
		alt: "2",
		code: "mus_02_2",
		sentence: "Outside is a sculpture that looks like a giant pair of scissors."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "3",
		alt: "1",
		code: "mus_03_1",
		sentence: "The security guards wear all-black outfits."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "3",
		alt: "2",
		code: "mus_03_2",
		sentence: "The security guards wear all-white outfits."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "4",
		alt: "1",
		code: "mus_04_1",
		sentence: "The front desk is attended by an elderly man."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "4",
		alt: "2",
		code: "mus_04_2",
		sentence: "The front desk is attended by a woman in her 20s."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "5",
		alt: "1",
		code: "mus_05_1",
		sentence: "The gift shop sells mostly books."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "5",
		alt: "2",
		code: "mus_05_2",
		sentence: "The gift shop sells mostly trinkets like mugs."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "6",
		alt: "1",
		code: "mus_06_1",
		sentence: "In the atrium, there's a skeleton from a whale."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "6",
		alt: "2",
		code: "mus_06_2",
		sentence: "In the atrium, there's a skeleton from a dinosaur."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "7",
		alt: "1",
		code: "mus_07_1",
		sentence: "There's a display with examples of gold mining carts."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "7",
		alt: "2",
		code: "mus_07_2",
		sentence: "There's a display with examples of ancient pottery."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "8",
		alt: "1",
		code: "mus_08_1",
		sentence: "There's a café serving cakes."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "8",
		alt: "2",
		code: "mus_08_2",
		sentence: "There's a café serving sandwiches."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "9",
		alt: "1",
		code: "mus_09_1",
		sentence: "There's a tour group from a local middle school."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "9",
		alt: "2",
		code: "mus_09_2",
		sentence: "There's a tour group from a local retirement home."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "10",
		alt: "1",
		code: "mus_10_1",
		sentence: "Visitors are given a heart-shaped pin."
	},
	{
		frame: "museum",
		frame_code: "mus",
		frame_no: "10",
		alt: "2",
		code: "mus_10_2",
		sentence: "Visitors are given a rectangular pin."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "1",
		alt: "1",
		code: "tst_01_1",
		sentence: "Passengers wait for a train on a bench."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "1",
		alt: "2",
		code: "tst_01_2",
		sentence: "Passengers wait for a train on a row of chairs."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "2",
		alt: "1",
		code: "tst_02_1",
		sentence: "A map shows routes for the blue line and the green line."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "2",
		alt: "2",
		code: "tst_02_2",
		sentence: "A map shows routes for the yellow line and the orange line."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "3",
		alt: "1",
		code: "tst_03_1",
		sentence: "A street performer is playing the guitar."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "3",
		alt: "2",
		code: "tst_03_2",
		sentence: "A street performer is playing the drums."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "4",
		alt: "1",
		code: "tst_04_1",
		sentence: "There's a woman carrying three shopping bags."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "4",
		alt: "2",
		code: "tst_04_2",
		sentence: "There's a woman carrying three suitcases."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "5",
		alt: "1",
		code: "tst_05_1",
		sentence: "The time is shown on a big analog clock."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "5",
		alt: "2",
		code: "tst_05_2",
		sentence: "The time is shown on a big digital clock."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "6",
		alt: "1",
		code: "tst_06_1",
		sentence: "A conductor is checking his watch."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "6",
		alt: "2",
		code: "tst_06_2",
		sentence: "A conductor is blowing his whistle."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "7",
		alt: "1",
		code: "tst_07_1",
		sentence: "Someone is trying to drag a bicycle onto the train."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "7",
		alt: "2",
		code: "tst_07_2",
		sentence: "Someone is trying to drag an electric scooter onto the train."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "8",
		alt: "1",
		code: "tst_08_1",
		sentence: "Tickets are sold at an automatic kiosk."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "8",
		alt: "2",
		code: "tst_08_2",
		sentence: "Tickets are sold at a counter."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "9",
		alt: "1",
		code: "tst_09_1",
		sentence: "The escalator is out of service."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "9",
		alt: "2",
		code: "tst_09_2",
		sentence: "The elevator is out of service."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "10",
		alt: "1",
		code: "tst_10_1",
		sentence: "A family is headed to the airport with Hawaiian shirts."
	},
	{
		frame: "train station",
		frame_code: "tst",
		frame_no: "10",
		alt: "2",
		code: "tst_10_2",
		sentence: "A family is headed to the airport with coats and skis."
	}
]

const recordings = [
	{
		talker: "PF01",
		code: "mus_01_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_01_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_01_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_01_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_01_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_01_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_01_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_01_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_02_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_02_1",
		recording: "3"
	},
	{
		talker: "PM01",
		code: "mus_02_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_02_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_02_2",
		recording: "4"
	},
	{
		talker: "PF02",
		code: "mus_02_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_02_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_02_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_03_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_03_1",
		recording: "3"
	},
	{
		talker: "PM01",
		code: "mus_03_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_03_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_03_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_03_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_03_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_03_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_04_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_04_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_04_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_04_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_04_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_04_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_04_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_04_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_05_1",
		recording: "4"
	},
	{
		talker: "PF02",
		code: "mus_05_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_05_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_05_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_05_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_05_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_05_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_05_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_06_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_06_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_06_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_06_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_06_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_06_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_06_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_06_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_07_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_07_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_07_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_07_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_07_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_07_2",
		recording: "3"
	},
	{
		talker: "PM01",
		code: "mus_07_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_07_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_08_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_08_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_08_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_08_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_08_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_08_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_08_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_08_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_09_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_09_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_09_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_09_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_09_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_09_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_09_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_09_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_10_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_10_1",
		recording: "3"
	},
	{
		talker: "PM01",
		code: "mus_10_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_10_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "mus_10_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "mus_10_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "mus_10_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "mus_10_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_01_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_01_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_01_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_01_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_01_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_01_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_01_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_01_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_02_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_02_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_02_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_02_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_02_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_02_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_02_2",
		recording: "3"
	},
	{
		talker: "PM02",
		code: "par_02_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_03_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_03_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_03_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_03_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_03_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_03_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_03_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_03_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_04_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_04_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_04_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_04_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_04_2",
		recording: "4"
	},
	{
		talker: "PF02",
		code: "par_04_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_04_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_04_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_05_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_05_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_05_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_05_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_05_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_05_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_05_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_05_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_06_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_06_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_06_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_06_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_06_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_06_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_06_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_06_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_07_1",
		recording: "2"
	},
	{
		talker: "PF02",
		code: "par_07_1",
		recording: "2"
	},
	{
		talker: "PM01",
		code: "par_07_1",
		recording: "1"
	},
	{
		talker: "PM02",
		code: "par_07_1",
		recording: "2"
	},
	{
		talker: "PF01",
		code: "par_07_2",
		recording: "2"
	},
	{
		talker: "PF02",
		code: "par_07_2",
		recording: "1"
	},
	{
		talker: "PM01",
		code: "par_07_2",
		recording: "2"
	},
	{
		talker: "PM02",
		code: "par_07_2",
		recording: "1"
	},
	{
		talker: "PF01",
		code: "par_08_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_08_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_08_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_08_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_08_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_08_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_08_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_08_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_09_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_09_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_09_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_09_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_09_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "par_09_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_09_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_09_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_10_1",
		recording: "4"
	},
	{
		talker: "PF02",
		code: "par_10_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_10_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_10_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "par_10_2",
		recording: "4"
	},
	{
		talker: "PF02",
		code: "par_10_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "par_10_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "par_10_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_01_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_01_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_01_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_01_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_01_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_01_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_01_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_01_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_02_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_02_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_02_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_02_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_02_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_02_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_02_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_02_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_03_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_03_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_03_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_03_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_03_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_03_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_03_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_03_2",
		recording: "3"
	},
	{
		talker: "PF01",
		code: "sud_04_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_04_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_04_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_04_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_04_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_04_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_04_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_04_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_05_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_05_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_05_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_05_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_05_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_05_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_05_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_05_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_06_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_06_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_06_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_06_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_06_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_06_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_06_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_06_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_07_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_07_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_07_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_07_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_07_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_07_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_07_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_07_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_08_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_08_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_08_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_08_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_08_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_08_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_08_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_08_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_09_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_09_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_09_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_09_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_09_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_09_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_09_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_09_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_10_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_10_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_10_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_10_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "sud_10_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "sud_10_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "sud_10_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "sud_10_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_01_1",
		recording: "1"
	},
	{
		talker: "PF02",
		code: "tst_01_1",
		recording: "1"
	},
	{
		talker: "PM01",
		code: "tst_01_1",
		recording: "2"
	},
	{
		talker: "PM02",
		code: "tst_01_1",
		recording: "1"
	},
	{
		talker: "PF01",
		code: "tst_01_2",
		recording: "2"
	},
	{
		talker: "PF02",
		code: "tst_01_2",
		recording: "1"
	},
	{
		talker: "PM01",
		code: "tst_01_2",
		recording: "1"
	},
	{
		talker: "PM02",
		code: "tst_01_2",
		recording: "1"
	},
	{
		talker: "PF01",
		code: "tst_02_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_02_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_02_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_02_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_02_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_02_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_02_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_02_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_03_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_03_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_03_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_03_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_03_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_03_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_03_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_03_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_04_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_04_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_04_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_04_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_04_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_04_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_04_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_04_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_05_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_05_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_05_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_05_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_05_2",
		recording: "4"
	},
	{
		talker: "PF02",
		code: "tst_05_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_05_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_05_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_06_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_06_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_06_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_06_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_06_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_06_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_06_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_06_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_07_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_07_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_07_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_07_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_07_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_07_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_07_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_07_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_08_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_08_1",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_08_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_08_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_08_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_08_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_08_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_08_2",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_09_1",
		recording: "2"
	},
	{
		talker: "PF02",
		code: "tst_09_1",
		recording: "2"
	},
	{
		talker: "PM01",
		code: "tst_09_1",
		recording: "1"
	},
	{
		talker: "PM02",
		code: "tst_09_1",
		recording: "1"
	},
	{
		talker: "PF01",
		code: "tst_09_2",
		recording: "2"
	},
	{
		talker: "PF02",
		code: "tst_09_2",
		recording: "2"
	},
	{
		talker: "PM01",
		code: "tst_09_2",
		recording: "2"
	},
	{
		talker: "PM02",
		code: "tst_09_2",
		recording: "1"
	},
	{
		talker: "PF01",
		code: "tst_10_1",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_10_1",
		recording: "3"
	},
	{
		talker: "PM01",
		code: "tst_10_1",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_10_1",
		recording: "4"
	},
	{
		talker: "PF01",
		code: "tst_10_2",
		recording: "3"
	},
	{
		talker: "PF02",
		code: "tst_10_2",
		recording: "4"
	},
	{
		talker: "PM01",
		code: "tst_10_2",
		recording: "4"
	},
	{
		talker: "PM02",
		code: "tst_10_2",
		recording: "4"
	}
]