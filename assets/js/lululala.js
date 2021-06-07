var jawab_1 = ['2988101'];
var jawab_2 = ['109798954','-455462009']
var jawab_3 = ['3500203'];
var jawab_4 = ['-891218456','-473559108'];
var jawab_5 = ['100890845'];
var jawab_6 = ['1687912367'];
var jawab_7 = ['-891202001','-1807097424'];
var jawab_8 = ['-52706282'];
$("#jawab").click(function(){
    var nilai = 0;
    // console.log($("#no_1").val());
    in_1 = stringToHash( $("#no_1").val().toLowerCase());
    in_2 = stringToHash( $("#no_2").val().toLowerCase());
    in_3 = stringToHash( $("#no_3").val().toLowerCase());
    in_4 = stringToHash( $("#no_4").val().toLowerCase());
    in_5 = stringToHash( $("#no_5").val().toLowerCase());
    in_6 = stringToHash( $("#no_6").val().toLowerCase());
    in_7 = stringToHash( $("#no_7").val().toLowerCase());
    in_8 = stringToHash( $("#no_8").val().toLowerCase());
    
    if (jawab_1.includes(in_1)) {
        nilai +=1;
    }
    if (jawab_2.includes(in_2)) {
        nilai +=1;
    }
    if (jawab_3.includes(in_3)) {
        nilai +=1;
    }
    if (jawab_4.includes(in_4)) {
        nilai +=1;
    }
    if (jawab_5.includes(in_5)) {
        nilai +=1;
    }
    if (jawab_6.includes(in_6)) {
        nilai +=1;
    }
    if (jawab_7.includes(in_7)) {
        nilai +=1;
    }
    if (jawab_8.includes(in_8)) {
        nilai +=1;
    }
    $('h2').text(nilai+'/8');
    // var encrypted1 = CryptoJS.AES.encrypt(in_1, "Secret Passphrase");
    // var encrypted2 = CryptoJS.AES.encrypt(in_2, "Secret Passphrase");
    // var encrypted3 = CryptoJS.AES.encrypt(in_3, "Secret Passphrase");
    // var encrypted4 = CryptoJS.AES.encrypt(in_4, "Secret Passphrase");
    // var encrypted5 = CryptoJS.AES.encrypt(in_5, "Secret Passphrase");
    // var encrypted6 = CryptoJS.AES.encrypt(in_6, "Secret Passphrase");
    // var encrypted7 = CryptoJS.AES.encrypt(in_7, "Secret Passphrase");
    // var encrypted8 = CryptoJS.AES.encrypt(in_8, "Secret Passphrase");
    $('#encode').text(
        'jawab1 = '+in_1+'\n'+
        'jawab2 = '+in_2+'\n'+
        'jawab3 = '+in_3+'\n'+
        'jawab4 = '+in_4+'\n'+
        'jawab5 = '+in_5+'\n'+
        'jawab6 = '+in_6+'\n'+
        'jawab7 = '+in_7+'\n'+
        'jawab8 = '+in_8+'\n'

        );
        console.log(in_1);
})
function stringToHash(string) {
                  
    var hash = 0;
      
    if (string.length == 0) return hash;
      
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
      
    return ''+hash;
}
  
// String printing in hash
var gfg = "GeeksforGeeks"