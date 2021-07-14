// let itemArray = {};
let indexNo = 1;

let addItem = document.querySelector('.menu');
addItem.addEventListener('submit', function addItems(e){
    e.preventDefault();
    let inputItemTag = document.querySelector('input.item');
    let itemName = inputItemTag.value;
    if(itemName === ''){
        alert("Enter any value");
    }
    else{
        // itemArray[indexNo] = indexNo;
        // itemArray['itemName'] = itemName;
        display(itemName,indexNo);
        indexNo++;
        inputItemTag.value='';
    }
});

//add item to list container
function display(itemName, indexNo){
    let itemRow = document.createElement('div');
    itemRow.classList.add('item-row');
    //Creating Serial No Tag
    let serialNoTag = document.createElement('div');
    serialNoTag.classList.add('serialNo');
    serialNoTag.innerText = indexNo;
    itemRow.appendChild(serialNoTag);
    //Creating Item Name Tag
    let itemNameTag = document.createElement('div');
    itemNameTag.classList.add('item-name');
    itemNameTag.innerText = itemName;
    itemRow.appendChild(itemNameTag);

    let listcontainer = document.querySelector('.listcontainer');
    listcontainer.appendChild(itemRow);
    changeSerialNo();
}

function changeSerialNo(){
    let serialNo_tag = document.querySelectorAll('.serialNo');
    let sno = 1;
    for(let s of serialNo_tag){
        s.innerText = sno;
        sno++;
    }
}



let allItemRows = document.querySelector('.listcontainer');
let popup = document.querySelector('.PopUp');
let completebtn = document.querySelector('.Complete');
let removebtn = document.querySelector('.remove');
let canclebtn = document.querySelector('.cancle');

let targetEle = {};
allItemRows.addEventListener('click',function(e){
    // console.log(e.target);
    if(hasClass(e.target,'item-name')){
        popup.style.display = 'block';
        e.stopPropagation();
        targetEle = e;
        console.log(targetEle);
    }
});

completebtn.addEventListener('click',function(){
    targetEle.target.style.textDecoration = 'line-through';
    popup.style.display = 'none';     
});
removebtn.addEventListener('click',function(){
    targetEle.target.parentNode.remove();
    popup.style.display = 'none';
    changeSerialNo();
});
canclebtn.addEventListener('click',function(){
    popup.style.display = 'none';
});
    
    
function hasClass(elem, className){
    return elem.classList.contains(className);
}

