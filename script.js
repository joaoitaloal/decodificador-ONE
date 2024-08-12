let output = document.getElementById('output-message');
let outputDiv = document.getElementsByClassName('output')[0];

function criptografia(criptograf){
    texto = document.getElementById('text').value;
    
    if(texto.search(/[^a-z,. ]/) != -1){
        alert("Apenas letras minusculas e sem acentos!");
    }else{
        if(criptograf) texto = criptografar(texto);
        else texto = descriptografar(texto);

        output.style.fontSize = '1.5em';
        output.innerText = texto;
        document.getElementById('copiar').style.display = 'block';
        if(document.getElementById('no-msg')) document.getElementById('no-msg').remove();
        if(document.getElementById('no-msg-icon')) document.getElementById('no-msg-icon').remove();
    }
    
}

function descriptografar(text){
    text = text.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    return text
}
function criptografar(text){
    text = text.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    return text
}

function copiar() {
    navigator.clipboard.writeText(output.innerText);
    copy = document.getElementById('copy')

    if(!copy){
        message = document.createElement('p');
        message.setAttribute('id','copy');
        alert('Texto copiado!')
        outputDiv.append(message);
    }
    
}