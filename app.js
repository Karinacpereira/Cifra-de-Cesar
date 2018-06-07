var message = prompt ('Insira aqui sua mensagem.');
var option = prompt ('O que deseja fazer com sua mensagem?\n 1.Criptografar\n 2.Descriptografar');

if (option == 1){
  cipher (message, 33);
} else {
  decipher (message, 33);
}

function cipher (message, n){
  var codeMessage = '';
  for (var i = 0; i < message.length; i++){
    var asciiPosition = message.charCodeAt(i);
    var asciiUpper = (asciiPosition - 65 + n) % 26 + 65;
    var asciiLower = (asciiPosition - 97 + n) % 26 + 97;
    if(asciiPosition >= 65 && asciiPosition <= 90){
      codeMessage += String.fromCharCode(asciiUpper);
    } else if(asciiPosition >= 97 && asciiPosition <= 122){
      codeMessage += String.fromCharCode(asciiLower);
    } else {
      alert('Insira uma mensagem sem espaços ou números.');
    }
  }
  document.write ('O resultado da criptografia é: ' + codeMessage);
}

function decipher (message, n){
  var codeMessage = '';
   for(var j = 0; j < message.length; j++){
     var asciiPosition = message.charCodeAt(j);
     var asciiUpper = (((asciiPosition + 65 - n) % 26) + 65);
     var asciiLower = (((asciiPosition + 85 - n) % 26) + 97);
     if (asciiPosition >= 65 && asciiPosition <= 90){
       codeMessage += String.fromCharCode(asciiUpper);
     } else if(asciiPosition >= 97 && asciiPosition <= 122){
       codeMessage += String.fromCharCode(asciiLower);
     } else {
       alert('Insira uma mensagem sem espaços ou números.')
     }
   }
   document.write('O resultado da descriptografia é: '+ codeMessage);
}
