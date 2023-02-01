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
 createPost("https://crudcrud.com/api/08b732f09d104be29ae7357ba88792cd/sellers",obj);
 }
 function showOnScreen(obj){
    function showUnderTitles(id){
        const parentelem = id;
        const childelem = document.createElement('li');
        childelem.textContent = obj.s_price +'-'+obj.p_name+'-'+obj.cat;
        parentelem.appendChild(childelem);
        const deletebutton = document.createElement('input');
        deletebutton.type="button";
        deletebutton.value="Delete Order";
        deletebutton.className="btn btn-danger btn-sm"
        deletebutton.onclick=()=>{
            axios.delete(`https://crudcrud.com/api/08b732f09d104be29ae7357ba88792cd/sellers/${obj._id}`)
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
   
 if(obj.cat == 'Electronics'){
   let items1 = document.getElementById('item1')
    showUnderTitles(items1); //item1
}
 
   else if(obj.cat == 'Food'){ 
let items2 = document.getElementById('item2')
    showUnderTitles(items2); //item1
 }

   else {
    let items3 = document.getElementById('item3')
   showUnderTitles(items3);
}
    
 }

 window.addEventListener("DOMContentLoaded",()=>{
    const data = axios.get("https://crudcrud.com/api/08b732f09d104be29ae7357ba88792cd/sellers")
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

 