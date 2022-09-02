//array of Numbers
let nums = [1,2,3,6,9,8,7,4];
const ids = [1,2,3,6,9,8,7,4];

// variables of keys
const btn9 = document.getElementById("key9")
const btn8 = document.getElementById("key8")
const btn7 = document.getElementById("key7")
const btn6 = document.getElementById("key6")
const btn5 = document.getElementById("key5")
const btn4 = document.getElementById("key4")
const btn3 = document.getElementById("key3")
const btn2 = document.getElementById("key2")
const btn1 = document.getElementById('key1')

let index = 0;

const colorSet1 = ['#00FFAB', 'green', '#F94892', 'purple', '#F07DEA','#FBDF07','coral', 'rgb(69,99,113)'];

const colorSet2 = ['red', 'gold', 'violet', '#FF7F3F', '#A460ED', 'indingo', '#F94892', 'rgb(235,145,96)']

// calling the butons and setting the numbers
const keys = document.querySelectorAll(".key")

for(j= 0; j < keys; i++) {
    keys[j].addEventListener('click', function(){
        nums.push(nums.shift());
        for (i = 7; i >= 0; i--) {
            document.getElementById("key" + ids[i]).innerHTML = nums[i];
        }
    });
}



btn5.addEventListener('click', function() {

  btn9.style.backgroundColor = colorSet2[index];
  btn9.style.color = 'white';

  btn8.style.backgroundColor = colorSet1[index];
  btn8.style.color = 'white';

  btn7.style.backgroundColor = colorSet2[index];
  btn7.style.color = 'white';

  btn6.style.backgroundColor = colorSet1[index];
  btn6.style.color = 'white';

  btn5.style.backgroundColor = 'transparent';

  btn4.style.backgroundColor = colorSet1[index];
  btn4.style.color = 'white';

  btn3.style.backgroundColor = colorSet2[index];
  btn3.style.color = 'white';

  btn2.style.backgroundColor = colorSet1[index];
  btn2.style.color = 'white';

  btn1.style.backgroundColor = colorSet2[index];
  btn1.style.color = 'white';

  index = index >= colorSet1.length - 1 ? 0 : index + 1;
});
   // Javascript code for the view instruction button

let openBtn = document.querySelector('#open-btn');
let instructContainer = document.querySelector('#instruct-container');
let closeBtn = document.querySelector('#close-btn');
let bgColor = document.querySelector('#body')


function open () {
    instructContainer.style.display = 'block';
    bgColor.style.backgroundColor = '#74d37cad'
};
openBtn.addEventListener('click', open);

 // another way to do the above function
closeBtn.addEventListener('click', function(){
    instructContainer.style.display = 'none';
    bgColor.style.backgroundColor = ' #ceecd1ad'
});