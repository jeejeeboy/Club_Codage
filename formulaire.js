function action_javascript() {

    var email=document.getElementById('email');
    var bouton_remettre=document.getElementById('bouton_java_remettre');

    if (bouton_remettre.style.display!='') {
        email.style.display='none';
        document.getElementById('label_email').style.display='none';
        document.getElementById('bouton_java_enlever').style.display='none';
        bouton_remettre.style.display='';

    } else {
        email.style.display='';
        email.value="et en plus on change le texte";
        document.getElementById('label_email').style.display='';
        document.getElementById('bouton_java_enlever').style.display='';
        bouton_remettre.style.display='none';
    }
    
}    
    