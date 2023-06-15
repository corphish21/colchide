function required()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
alert("Veuillez remplir tout les champs");
return false;
}
else 
{
alert('Message envoyé');
return true; 
}
}