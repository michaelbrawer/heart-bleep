# Heart-Bleep

### *A chiptune inspired drum sequencer built on React / Tone.js*
----
![ScreenShot](https://i.imgur.com/XBFVK6a.png)
----
### Getting Started
- [CLICK HERE](https://aqueous-temple-93653.herokuapp.com/) to play in browser... 

---
### Core Technologies Used:
- Tone.js
- Mongo DB
- Express.Js
- React 
- Node.Js
- HTML 
- CSS

### Additional Libraries / Frameworks:
- React Materialize for styling
- Bcrypt & JSON Webtokens for authentication / authorization
- Mongoose for DB management
- Tone.js for consistent event timing / audio scheduling, groovy playback methods.  See this great article: ![A Tale of Two Clocks](https://www.html5rocks.com/en/tutorials/audio/scheduling/)
---

### Future Enhancements: 
- I'd still like to get WebMidi cooking in this app... Building in a sprint, I found myself in a place facing a fork in the road development-wise; pursue midi functionality or experiment tone.js.  I chose to work with tone - it's amazing!

### Unsolved Problems: 
- Tone's initial buffering can be a bit strange when loading larger files / samples.  setTimeout is helping here for the time being.  I'd like to work in a slicker implementation...

---

## App Development:

### [Trello Board](https://trello.com/b/pFZWBZKW/heart-bleep)

![ERD](https://i.imgur.com/ey2508j.png)
----
#### Initial Wireframes:

![Initial WireFrame](https://i.imgur.com/dRTcQdx.png)
----

#### Build History:
![Animated Build Gif](https://i.imgur.com/B5dvTYb.gif)
----

### Credits: 

This project owe's an enormous debt of gratitude to [Pierlo-Upitup's Polyrhythmical](https://github.com/pierlo-upitup/polyrhythmical/blob/master/src/components/StepSequencer.js), as well as [Kirie's excellent TR808 project](https://github.com/kirie/StepSequencer) (not to mention [the Roland TR Series](https://en.wikipedia.org/wiki/Roland_TR-808) itself...  Studying (and borrowing liberally from) from these projects really helped me understand how tools I've long used in the recording studio (step sequencers) might be implemented programatically.  Huge Thanks to my 
GA instructors [Jim Clark](https://github.com/jim-clark) and [Jonathan Tamsut](https://github.com/jtamsut) for their incredibly capable piloting of our cohort's WDI-ship, and for never once throwing something at me out of frustration.

(Even through I likely deserved it...  406 Error Forever!)

-MCB, Dec. 2017