{/* <div id="one" class="first">
hello everyone
</div> */}
document.getElementById('one').className // -> first
document.getElementById('one').id // -> one
document.getElementById('one').getAttribute('id') // -> one
document.getElementById('one').getAttribute('class') // -> first

document.getElementById('one').setAttribute('class', 'two first') // -> if only give new value then it override previous one so to keep new and previous also.

const title = document.getElementById('one')
title.style.backgroundColor = 'orange'

title.innerHTML // --> hello everyone
title.innerText // -> hello everyone
title.textContent // -> hello everyone

// diff. between innerText and textContent
// if we use display none property then inner text show only visible content otherhand textContent show all text including display none text

// e.g. -> <div id="one" class="first">
// hello everyone <span style="display:none">new text</span>
// </div>

// innerText -> hello everyone
// textContent -> hello everyone new text
// innerHTML -> hello everyone <span style="display:none">new text</span>

{/* <div>
    <h1>smash everybody</h1>
    <h1>do or die</h1>
</div> */}

// document.querySelector('h1') ->  <h1>smash everybody</h1> // return only first tag
// in query selector we can select (.)class and (#)id also or (input[type='text']) or ('p:first-child')



{/* <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul> */}

// const list = document.querySelector('ul')
// list.querySelector('li').style.backgroundColor = 'red' // we can apply again qS to qS.

// const list = document.querySelectorAll('li')
// list -> // return type of this is nodeList but it is not proper array due in its prototype not map mathod found
// list[0].style.color = 'green' or
// list.forEach((ele) => ele.style.color = 'red') -> to give style for all elements

// note - if you want to use map then first convert nodelist into array and then use that array.

<ul>
    <li class='list-item'>one</li>
    <li class='list-item'>two</li>
    <li class='list-item'>three</li>
</ul> 
const li = document.getElementsByClassName('list-item')
// li returns html collection of li. to use map or other iteratable methods on it first convert it into array then use them
// const arrLi = Array.from(li)
// arrLi -> this returns now array format to use iteratable methods
