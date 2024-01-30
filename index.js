
const url ='https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';





async function getMenu(){
    const response =await fetch(url);
    const menuData = await response.json();
    displayMenu(menuData);
    return menuData;

}

// to add the content the divs are created and then we used the api url to get the values and then will do the append
function displayMenu(menuData){
       const foodMenu= document.querySelector('.food-menu');
    menuData.forEach(item=>{
        const mainDiv = document.createElement('div');
        const foodDiv = document.createElement('div');
        const sliceDiv = document.createElement('div');
        const menuDiv = document.createElement('div');
        const button = document.createElement('div');
        const itemName = document.createElement('h4');
        const itemPrice= document.createElement('span');
        const img = document.createElement('img');


       itemName.className='item-name';
       itemPrice.className='price';
       sliceDiv.className='slice';
       foodDiv.setAttribute('id','burg');
       mainDiv.className='menu-divs';
       itemName.innerText=`${item.name}`;
       itemPrice.innerText =`${item.price}/-`;
       img.src=`${item.imgSrc}`;
       itemPrice.style.color='white';
       button.innerHTML=` <span class="material-symbols-outlined btnnn" >
       add
         </span>`

//used to append
       menuDiv.append(itemName);
       menuDiv.append(itemPrice);
       sliceDiv.append(menuDiv);
       sliceDiv.append(button);
       foodDiv.append(img);
       foodDiv.append(sliceDiv);
       mainDiv.append(foodDiv);
       foodMenu.append(mainDiv);

     

        // itemName.innerText=`${item.name} `;
        // itemPrice.innerText=`${item.price}`;
 

    
    })

}
function takeorder(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const order ={
                burgers:['cheeseburger','tacos','pizza']
            };
            resolve(order);
        },2500)
    })
}

function orderprep(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const orderState ={
              order_status : true, paid :false
            };
            resolve(orderState);
        },1500)
    })
}


function payOrder(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const paymentStatus ={
              order_status : true, paid :false
            };
            resolve(paymentStatus);
        },1000)
    })
}

async function thankYouFunc(){
    alert("thank you for ordering from us");
}

async function placeOrder()
{
    await getMenu();
    const takeorder = await takeorder();
    const orderprep =await orderprep();
    const payOrder =await payOrder();
    thankYouFunc();
}







getMenu();

