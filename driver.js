function ComputerPlay() 
{
    let max=2,min=0;
    let ra = Math.floor(Math.random()*(max-min+1)) + min;
    let arr = ['Rock','Paper','Scissors'];
    return arr[ra];
}

const buttons=document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener ('click',playRound);
});

let pscore=0,rounds=0;
function playRound(ps,cs)
{
    rounds++;
    console.log(this.value);
    ps=this.value;
    cs=ComputerPlay();
    console.log(cs);
    res=document.querySelector('#res');
    comp=document.querySelector('#com');
    comp.textContent=`Computer chose ${cs}`;
if (ps=='Paper' && cs == 'Rock' || ps=='Rock' && cs=='Scissors' || ps=='Scissors' && cs=='Paper')
{res.textContent = "You win!";
pscore++;
}
else
res.textContent = "You Lose!";
const score=document.querySelector('#score');
score.textContent=`Your current Score : ${pscore}/${rounds}`;
}

// function game()
// {
//     let pscore = 0;
//     for (let i=1; i<=5;i++)
//     {
//         alert(`Round ${i}`);
//         let ps = prompt("Enter Rock, Paper or Scissors");
//         let cs = ComputerPlay();
//         alert (`Computer chose ${cs}`);
// function playRound(ps,cs)
// {
// if (ps=='Paper' && cs == 'Rock' || ps=='Rock' && cs=='Scissors' || ps=='Scissors' && cs=='Paper')
// {pscore++;alert ("You Win!");}
// else
// alert ("You Lose!");
// }
// playRound(ps,cs);
//     }
// if (pscore >=3)
// alert (`Congratulations! You won in ${pscore}/5 games against Computer!`);
// else
// alert (`Sorry! You lost in ${5-pscore}/5 games against Computer!`);
// }

// game();