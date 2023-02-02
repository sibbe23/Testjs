 function myfunction(event){
   event.preventDefault();

   //taking the value from the input
    const s_price = event.target.amount.value; 
    const p_name = event.target.name.value;
    const cat = event.target.items.value;
    console.log(s_price,p_name,cat);

    //storing in local storage
    localStorage.setItem('amount',s_price)
    localStorage.setItem('name',p_name)
    localStorage.setItem('items',cat)

    //creating an object with the inputs
    const obj ={
        s_price,
        p_name,
        cat
    }
    localStorage.setItem('userdetails',JSON.stringify(obj))
    showOnScreen(obj)

    //using async await function 
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
 createPost("https://crudcrud.com/api/3de0cf8c7a314de883a6de0452481d64/sellers",obj); //creating the sellers in crudcrud
 }
 function showOnScreen(obj){ //function to show the contents on screen

    function showUnderTitles(id){ //function to show each values under their respective titles 
        const parentelem = id;
        const childelem = document.createElement('li');
        childelem.textContent = obj.s_price +'-'+obj.p_name+'-'+obj.cat;
        parentelem.appendChild(childelem);
        const deletebutton = document.createElement('input');
        deletebutton.type="button";
        deletebutton.value="Delete Order";
        deletebutton.className="btn btn-danger btn-sm"
        deletebutton.onclick=()=>{
            axios.delete(`https://crudcrud.com/api/3de0cf8c7a314de883a6de0452481d64/sellers/${obj._id}`)
            .then((response)=>{
                
            })
            .catch((error)=>{
                console.log(error);
            })
            localStorage.removeItem(obj.cat)
            parentelem.removeChild(childelem);           
        }
        const editButton = document.createElement('input')
        editButton.type = "button"
        editButton.value="Edit"
        editButton.className="btn btn-outline-secondary btn-sm"
        editButton.onclick=()=>{         
            localStorage.removeItem(obj.childelem)
            parentelem.removeChild(childelem)
            document.getElementById('amount').value=obj.s_price;
            document.getElementById('name').value = obj.p_name;
            document.getElementById('items').value = obj.cat;
        }
        childelem.appendChild(deletebutton);
        childelem.appendChild(editButton);
        parentelem.appendChild(childelem);
     }
   
 if(obj.cat == 'Electronics'){ //getting element by category
   let items1 = document.getElementById('item1')
    showUnderTitles(items1); //item1
}
 
   else if(obj.cat == 'Food'){ //getting element by category
let items2 = document.getElementById('item2')
    showUnderTitles(items2); //item2
 }

   else { //getting element by category
    let items3 = document.getElementById('item3')
   showUnderTitles(items3); //items3
}
    
 }

 window.addEventListener("DOMContentLoaded",()=>{ //backend data from crudcrud
    const data = axios.get("https://crudcrud.com/api/3de0cf8c7a314de883a6de0452481d64/sellers")
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

 