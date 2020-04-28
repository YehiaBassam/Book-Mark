var inputname = document.getElementById("input-Name")
var inputurl = document.getElementById("input-Url")
var mybtn = document.getElementById("mybtn")
var myrow = document.getElementById("myrow")

//var siteName = document.getElementById("input-Name").value
//var siteUrl = document.getElementById("input-Url").value


//var arr ;
//
//if(!validateForm(siteName, siteUrl)){
//    return false;
//  }


if (localStorage.getItem("bookmarks")==null)
    {
        arr = [] ;
    }

else
    {
     arr=JSON.parse(localStorage.getItem("bookmarks"))
     display()   
    } 
        
mybtn.addEventListener("click",function(){
    
    addsite ()
    display()
    clear ()
    validation ()
})

function addsite ()
{
    var obj ={
                name:inputname.value ,
                url:inputurl.value
             }
    arr.push(obj)
     localStorage.setItem("bookmarks",JSON.stringify(arr))
    console.log(arr)
}


function display()
{
    var col=""

for (var i =0 ; i<arr.length ; i++ )
    {
        col+='<div class="col-md-12"><div class="item d-flex jumbotron"><h3 class="mx-4">'+arr[i].name+'</h3><a href='+arr[i].url+'><button class="btn btn-light mx-2">Visit</button></a> <button class="btn btn-danger" onclick="deleteitem('+i+')" >Delete</button></div></div>'
    }
    document.getElementById("myrow").innerHTML=col
   
}


function deleteitem (index)
{
    arr.splice(index,1)    
 localStorage.setItem("bookmarks",JSON.stringify(arr))
    display()
}


function clear ()
{
    inputname.value="";
    inputurl.value="";
    
//    var inputs = document.getElementsByClassName("form-control")
//    for (var j=0 ; j<inputs.length ; j++ )
//        inputs[j].value=""
}


function validation ()
{
    if ( inputname.value =="" || inputurl.value =="" )
        {
            alert("please fill site name & site url")
        }
}



// Validate Form
//function validateForm(siteName, siteUrl){
//  if(!siteName || !siteUrl){
//    alert('Please fill in the form');
//    return false;
//  }
//
//  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
//  var regex = new RegExp(expression);
//
//  if(!siteUrl.match(regex)){
//    alert('Please use a valid URL');
//    return false;
//  }
//
//  return true;
//}
//
//function addhttp(url) {
//  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
//      url = "http://" + url;
//  }
//  return url;
////}



