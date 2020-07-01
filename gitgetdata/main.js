var client_id="Iv1.3a88629892833063";
var client_secret="ad4bf3a4b76a8d08af4b40f63a1412c1ed57f15d";

var getgitdata = async() =>{
    var user=document.getElementById("user").value;
    var link='https://api.github.com/users/'+user+'?client_id=Iv1.3a88629892833063&client_secret=ad4bf3a4b76a8d08af4b40f63a1412c1ed57f15d';
    
    var api_call= await fetch(link);
    var data= await api_call.json();
    document.getElementById("name").textContent=data.login;
    document.getElementById("public_repo").textContent=data.public_repos;
    document.getElementById("avtar").innerHTML='<img src="'+data.avatar_url+'" width="200px" height="200px">';
    
}
