Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [*] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [*] "Start" button toggles between "Start" and "Stop" when clicked.
- [*] Game buttons each light up and play a sound when clicked.
- [*] Computer plays back sequence of clues including sound and visual cue for each button
- [*] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [*] User wins the game after guessing a complete pattern
- [*] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [*] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [*] Buttons use a pitch (frequency) other than the ones in the tutorial
- [*] More than 4 functional game buttons
- [*] Playback speeds up on each turn
- [*] Computer picks a different pattern each time the game is played
- [*] Player only loses after 3 mistakes (instead of on the first mistake)
- [] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
[GIF link to big to show in readme had to link](https://gfycat.com/anguishedslipperybaleenwhale.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   - w3schools.com, Primarily used this source to refer to javascript documentation for specific functions like random etc.
   - Stackoverflow when looking over the provided code for Tone as I wanted to go over how it works.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   <p>I suppose one possible challenge was getting the correct time to increase the speed of the pattern. As I saw during testing that it's
   straightforward to overdo the timer to where it will go too fast. Or it does the opposite, where it doesn't look like it's decreasing at all. This was pretty
   easy to overcome by just testing by intervals of multiples of 10 until I felt the speed increase was fair to the player. The last challenge was implementing
   the randomness part of the pattern from the extra features. As I was personally debating on different ways to do whether it would be a helper function or
   to implement it by appending the random numbers to a list in the base game logic. I ultimately decided to do a helper function as I felt that I could use
   that helper function for both the pattern and two other ideas that I wanted to implement into the game as an add-on or option. With the helper function, I set it up
   to append the random numbers to the empty pattern list setting a for loop to loop 5 times to append to the random numbers using .floor and .random.
   To limit the random function to only output numbers between a range of 1-6, I had to conduct some operations that limited it to that range which is how I solved that implementation.</p>

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   - What performance tools can be used to improve the performance?

   - What are the different workflow styles to webdevelopment?

   - When making diffent page styles on a website is it better to have multiple css files or have it in one file?

   -Better yet is it better to have the css styles in their own library?

   - How is security done in webdevelopment is it more of a backend thing or frontend? Or is it both?

   - What techstacks does codepath.org use?

   - Would we be able to use CORS in this website?

   - How is UX performance, security, and the ability to maintence the project managed with being able to seen in search engines?

   - What is the prefered Javascript formatting style for web development?

   - How do you apply customer feedback of design choices and difficulties to improve the website?

   -

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
  <p>I did not use any outside sources to help other then the links to the photos to credit, and the tutorial.</p>

## Interview Recording URL Link

[Link to Interview recording](https://youtu.be/oV0BcBH8NIE)

## License

    Copyright James Hill

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
