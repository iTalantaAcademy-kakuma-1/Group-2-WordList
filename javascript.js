let writtenWord=document.getElementById('exampleInputText')
let addButton=document.getElementsByClassName('btn-info')
let orderedList1=document.getElementById('orderedList')
let removeAll=document.querySelector('#deletAll')

function function1(){
                      
                      let listElement=document.createElement('li')
                      listElement.setAttribute('id','element')
                      let btnEdit=document.createElement('button')
                      btnEdit.setAttribute('onclick','edit()')
                      btnEdit.setAttribute('class','btn btn-primary')
                      btnEdit.innerText="Edit"
                      let btnDelete=document.createElement('button')
                      btnDelete.setAttribute('onclick','delet()')
                      btnDelete.setAttribute('class','btn btn-danger')
                      btnDelete.innerHTML='Delete'
                      let parragraph2=document.createElement('p')
                      
                      listElement.innerHTML=writtenWord.value+listElement.appendChild(parragraph2).outerHTML+btnEdit.outerHTML+ btnDelete.outerHTML
                      
                      orderedList1.appendChild(listElement); 
                      writtenWord.value=''                        
                     
                     
                      }
                      function delet(){
                         let delet1=document.getElementById('element')
                         delet1.outerHTML='' 
                      }
                      function edit(){
                        let parra=document.createElement('p')
                        let input1=document.createElement('input')
                        
                        input1.setAttribute('type','text')
                        input1.setAttribute('id','input2')
                        input1.setAttribute('value','New Word')
                        let btnFinish=document.createElement('button')
                        btnFinish.innerHTML='Finish'
                        btnFinish.setAttribute('onclick','Finish()')
                        btnFinish.setAttribute('class',"btn btn-success")

                        
                        parra.innerHTML+= input1.outerHTML+btnFinish.outerHTML
                        let element=document.getElementById('element')
                        element.innerHTML=parra.outerHTML
                        //onclick put it to empty
                        function display(){
                          input2.value='';
                        }
                        input2.addEventListener('click',display)
                      }
                      function Finish(){
                        let parragraph2=document.createElement('p')
                        parra=document.getElementById('element')
                        let value2=document.getElementById('input2').value
                        let btnEdit=document.createElement('button')
                      btnEdit.setAttribute('onclick','edit()')
                      btnEdit.setAttribute('class','btn btn-primary')
                      btnEdit.setAttribute('id','btnDown')
                      btnEdit.innerText="Edit"
                      let btnDelete=document.createElement('button')
                      btnDelete.setAttribute('onclick','delet()')
                      btnDelete.setAttribute('class','btn btn-danger')
                      btnDelete.setAttribute('id','btnDown')
                      btnDelete.innerHTML='Delete'
                        parra.innerHTML=value2+btnEdit.outerHTML+ btnDelete.outerHTML
                        

                      }
                      //function for delete all
                      
                      
                      //add event for delete All
                      
                      removeAll.addEventListener('click',()=>{return orderedList1.innerHTML=''})                                      
                      

                      
