var ting = prompt("Thing:");
var thing = ting.toUpperCase();
if (thing == "GMAIL") window.open("https://gmail.com","_self");
if (thing == "PEARSON") window.open("https://accounts.google.com/o/saml2/initsso?idpid=C00t0cavg&spid=701197821690&forceauthn=false","_self");
if (thing == "DONGLES") alert("iPhone 7 has many Dongles");
if( thing.indexOf('CAIDEN') >= 0)alert("Caiden was here");
if( thing.indexOf('JOEY') >= 0)alert("Joey was here");
if( thing.indexOf('CAIDEN') >= 0) && thing.indexOf('JOEY') >= 0)alert("Test was here");;
else alert(ting);
