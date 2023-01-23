 function myfunction(event){
   event.preventDefault();
    const s_price = event.target.amount.value;
    const p_name = event.target.name.value;
    const cat = event.target.items.value;
    console.log(s_price,p_name,cat);

    localStorage.setItem('amount',s_price)
    localStorage.setItem('name',p_name)
    localStorage.setItem('items',cat)

    const obj ={
        s_price,
        p_name,
        cat
    }
    localStorage.setItem('userdetails',JSON.stringify(obj))
    showOnScreen(obj)

    axios.post("https://crudcrud.com/api/4d3220a94d1944d3868f740ed6a2e660/Seller",obj)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
 }
 function showOnScreen(obj){
   
 if(obj.cat == 'Electronics'){
    const parentelem1 = document.getElementById('item1');
    const childelem1 = document.createElement('li');
    childelem1.textContent = obj.s_price +'-'+obj.p_name+'-'+obj.cat;
    parentelem1.appendChild(childelem1);
    const deletebutton1 = document.createElement('input');
    deletebutton1.type="button";
    deletebutton1.value="Delete Order";
    deletebutton1.onclick=()=>{
        localStorage.removeItem(obj.cat)
        parentelem1.removeChild(childelem1);
    }
    childelem1.appendChild(deletebutton1);
    parentelem1.appendChild(childelem1);
}
 
   else if(obj.cat == 'Food'){ const parentelem2 = document.getElementById('item2');
    const childelem2 = document.createElement('li');
    childelem2.textContent = obj.s_price +'-'+obj.p_name+'-'+obj.cat;
    parentelem2.appendChild(childelem2);
    const deletebutton2 = document.createElement('input');
    deletebutton2.type="button";
    deletebutton2.value="Delete Order";
    deletebutton2.onclick=()=>{
        localStorage.removeItem(obj.cat)
        parentelem2.removeChild(childelem2);
    }
    childelem2.appendChild(deletebutton2);
    parentelem2.appendChild(childelem2);
 }

   else {const parentelem3 = document.getElementById('item3');
    const childelem3 = document.createElement('li');
    childelem3.textContent = obj.s_price +'-'+obj.p_name+'-'+obj.cat;
    parentelem3.appendChild(childelem3);
    const deletebutton3 = document.createElement('input');
    deletebutton3.type="button";
    deletebutton3.value="Delete Order";
    deletebutton3.onclick=()=>{
        localStorage.removeItem(obj.cat)
        parentelem3.removeChild(childelem3);
    }
    childelem3.appendChild(deletebutton3);
    parentelem3.appendChild(childelem3);

}
    
    
 }