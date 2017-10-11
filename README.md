# Dot Game
In this game, a dot moves from the top to the bottom of the screen. A player tries to click on the dot and receives points when they are successful.

## Play the Game!
- The Start button changes to a Pause button, which should pause the game until the button is touched or clicked again.
- The dot falls at a constant rate. A player can use a slider to control the rate at which the dot falls, with a range of 10-100 pixels per second.
- The dot appears at a random horizontal position at the top of the box every second.
- The dot will vary randomly in size from 10px in diameter to 100px in diameter.
- The dots value is inversely proportional to its size, with the smallest dot worth 10 points, and the largest dot worth 1 point.
- When a player touches or clicks a dot, the dot should disappear from the box, and the score should be increased based on the dot's value.

## Technology
### Animation
This game is built with pure Javascript and jQuery. For the animation, I used the Javascript method, "window.requestAnimationFrame". I chose this method over a CSS animation or referencing animation to a event handler because the number of callbacks with this method is on average 60 fps (frames per second) OR it will match the display refresh rate of most web browsers. As such, the animation was very smooth and consistent.

### Randomization and Location of Dot Spawn
I used .offset() to determine where the dot was clicked/disappeared and where it was last spawned so that I could randomize the next spawn location with a function using the method Math.random(). I used Math.random() again to randomize the size of each dot that was spawned.
