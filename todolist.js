let btnclick = $('#btnsuc')
let inputvalue = $('#inpnewtask')
let ullist = $('#ultask')
let btnreset = $('#btnreset')
let btnclear = $('#btnclear')
let btnsort = $('#btnsort')

function myfunction(){

    let listitem = $('<li>',{
        'class' : "list-group-item",     /* creating list itme li */
         text : inputvalue.val()
    })
    

    listitem.click(() => {
        listitem.classList.add("done")          /* trying to add new class name into newly created element li */
    })

    ullist.append(listitem)             /* appending list item into ul */

    inputvalue.val("")           /* clearing input text after adding to ul */
    
}

function clear(){
  $('#ultask').empty()
}

inputvalue.keypress((e) =>{               /* pressing enter we can add li into ul */
    if(e.which == 13)myfunction()
})

btnclick.click(myfunction)            /* by pressing submit button */
 
btnreset.click(() => {
    inputvalue.val("")            /* by clicking clear reset button we are clearing */
})

btnclear.click(clear)

function sorting(){
      var mylist = $('#ultask');
      var listitems = mylist.children('li').get();
      listitems.sort(function(a, b) {
      return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
      })
      $.each(listitems, function(idx, itm) { mylist.append(itm); });
}

btnsort.click(sorting);

