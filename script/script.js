let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function createBackground()
{
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function createSnake()
{
    for(let i=0; i < snake.length; i++)
    {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function checkDirection(direction, snakex, snakey)
{
    switch(direction)
    {
        case "right":
            snake += box;
            break;
        case "left":
            snakex -= box;
            break;
        case "down":
            snakey += box;
            break;
        case "up":
            snakey -= box;
            break;
    }
}

function initGame() // Function definida para iniciar o jogo
{   
        createBackground();
        createSnake();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        checkDirection(direction, snakeX, snakeY);
        snake.pop();

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead);
}

let game = setInterval(initGame, 100);

