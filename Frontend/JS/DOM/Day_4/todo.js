
function addTodo(){
  var input = document.getElementById('input').value;
  var div = document.createElement('div')
  div.style.border = "1px solid black "
  div.style.margin = "10px"
  var p = document.createElement('p')
  p.textContent= input;

  var btn = document.createElement('button')
  btn.textContent = 'remove'
  btn.addEventListener('click',remove)

  var edit = document.createElement('button')
  edit.textContent = 'edit'
  btn.addEventListener('click',edit)


  div.append(p,btn,edit)
  renderDom(div)


}

function edit(){

}




function remove(){
   event.target.parentElement.remove()
}

function renderDom(element){
    var res = document.getElementById('res')
    res.append(element)
}




window.addEventListener('load',function(){
    var btn = this.document.getElementById('submit')
    btn.addEventListener('click',addTodo)
})