var jawab_1 = ['aceh'];
var jawab_2 = ['sumatera utara','sumatra utara','sumut'];
var jawab_3 = ['riau'];
var jawab_4 = ['sumatera barat','sumatra barat','sumbar'];
var jawab_5 = ['jambi'];
var jawab_6 = ['bengkulu'];
var jawab_7 = ['sumatera selatan','sumatra selatan','sumsel'];
var jawab_8 = ['lampung'];
$("#jawab").click(function(){
    var nilai = 0;
    // console.log($("#no_1").val());
    if (jawab_1.includes($("#no_1").val().toLowerCase())) {
        nilai +=1;
    }
    if (jawab_2.includes($("#no_2").val())) {
        nilai +=1;
    }
    if (jawab_3.includes($("#no_3").val())) {
        nilai +=1;
    }
    if (jawab_4.includes($("#no_4").val())) {
        nilai +=1;
    }
    if (jawab_5.includes($("#no_5").val())) {
        nilai +=1;
    }
    if (jawab_6.includes($("#no_6").val())) {
        nilai +=1;
    }
    if (jawab_7.includes($("#no_7").val())) {
        nilai +=1;
    }
    if (jawab_8.includes($("#no_8").val())) {
        nilai +=1;
    }
    $('h2').text(nilai+'/8');
})
