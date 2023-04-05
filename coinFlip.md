## Further Study: Coin Flip
    Make a new React project with create-react-app, and make Git repositories so you can save your work.

    For this part, you will create a coin flipping counter.

    The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

    Before building anything, think about the structure of your React app. Don’t build this application with a single component: think about how to break your app up into at least two separate components!

## How I might do this...

### <App />
    Renders the Game
### <Game />
    Renders a Coin
    Holds the state of the coin
    holds the flip function
    pass flip function to the coin and the side that should display

    also holds the state of:
    Number of flips
    Number of time head appears
    Number of time tails appears
    flip button could also stay on the game component

### <Coin side={} filp={}/>
    Renders a coin <image/> dependeing on the props.side
    hold the two URLs for the images
    flip is a function that updates the state held on the Game component
    which causes the rerender of the coin with the current statel
    class and styles would be defined on the coin
    button would need to be on this component if we are passing the 
    flip funciton to it. 

### Optionally <GameStatus/>
    Could be the display for the state of the game
    example
    "Out of 4 flips, there have been 3 heads and 1 tails"