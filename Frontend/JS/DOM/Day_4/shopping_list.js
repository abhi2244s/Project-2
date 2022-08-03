var shopping_list = [];

function addItem(){
     var name = document.getElementById('name').value
   
     var qty = document.getElementById('qty').value

     var item = {
        name : name,
        qty : qty
     }

      shopping_list.push(item)
      renderDom()
}

function removeItem(){
   event.target.parentElement.remove()
    

}

function renderDom(element){
     var target = document.getElementById('res')
     target.innerHTML =" "
     var div1 = document.createElement('div')
     for(var i=0;i<shopping_list.length;i++){
        var item = shopping_list[i]
        var div = document.createElement('div')

        var p = document.createElement('p')
        p.textContent = item.name + "--" + item.qty
        console.log(p)
        var btn = document.createElement('button')
        btn.textContent = 'remove'
        btn.addEventListener('click',removeItem)
        div.append(p,btn)
        div1.append(div)
     }
     target.append(div1)
    }







window.addEventListener('load',function(){
    var btn=document.getElementById('submit')
    btn.addEventListener('click',addItem)

})