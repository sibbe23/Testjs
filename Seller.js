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

    async function createPost(url, obj) {
        try {      
         const response = await fetch(url, {      
          method: 'POST',      
          body: JSON.stringify(obj),      
          headers: { 'Content-Type': 'application/json' },       
         });      
         const json = await response.json();      
         return json;      
        } catch (error) {      
         console.error(error);  
        } 
       }
 createPost("https://crudcrud.com/api/0a8313bff0cf4f2dbe450c3c1e303544/sellers",obj);
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
    const editButton1 = document.createElement('input')
    editButton1.type = "button"
    editButton1.value="Edit"
    editButton1.onclick=()=>{
        localStorage.removeItem(obj.childelem1)
        parentelem1.removeChild(childelem1)
        document.getElementById('amount').value=obj.s_price;
        document.getElementById('name').value = obj.p_name;
        document.getElementById('items').value = obj.cat;
    }
    childelem1.appendChild(deletebutton1);
    childelem1.appendChild(editButton1);
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
    const editButton2 = document.createElement('input')
    editButton2.type = "button"
    editButton2.value="Edit"
    editButton2.onclick=()=>{
        localStorage.removeItem(obj.childelem2)
        parentelem2.removeChild(childelem2)
        document.getElementById('amount').value=obj.s_price;
        document.getElementById('name').value = obj.p_name;
        document.getElementById('items').value = obj.cat;
    }
    childelem2.appendChild(deletebutton2);
    childelem2.appendChild(editButton2);
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
    const editButton3 = document.createElement('input')
    editButton3.type = "button"
    editButton3.value="Edit"
    editButton3.onclick=()=>{
        localStorage.removeItem(obj.childelem3)
        parentelem3.removeChild(childelem3)
        document.getElementById('amount').value=obj.s_price;
        document.getElementById('name').value = obj.p_name;
        document.getElementById('items').value = obj.cat;
    }
    childelem3.appendChild(deletebutton3);
    childelem3.appendChild(editButton3);
    parentelem3.appendChild(childelem3);

}
    
    
 }

 window.addEventListener("DOMContentLoaded",()=>{
    const data = axios.get("https://crudcrud.com/api/0a8313bff0cf4f2dbe450c3c1e303544/sellers")
    .then((response)=>{
        console.log(response);
        for(let i =0;i<response.data.length;i++)
        {
            showOnScreen(response.data[i])
        }    
    })
    .catch((error)=>{
        console.log(error)
    })
    
 })