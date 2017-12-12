$(document).ready(function() {

$("#system_unit").change(function(){
var x = $("#system_unit option:selected").val();
//alert(x);
//console.log(x);
var y = $("#system_unit option:selected").attr("system-photo");
console.log(y);
$(".card-images img").hide();
switch (y) {
	case "1": $("#photo_1").show("slow");	break;
	case "2": $("#photo_2").show("slow");	break;
	case "3": $("#photo_3").show("slow");	break;
	case "4": $("#photo_4").show("slow");	break;
	case "5": $("#photo_5").show("slow");	break;
	default:
}
})

$("#monitor").change(function(){
var x1 = $("#monitor option:selected").val();
//alert(x);
//console.log(x);
var y1 = $("#monitor option:selected").attr("m_system-photo");
console.log(y1);
$(".card-images-m img").hide();
switch (y1) {
	case "1": $("#m_photo_1").show("slow");	break;
	case "2": $("#m_photo_2").show("slow");	break;
	case "3": $("#m_photo_3").show("slow");	break;
	case "4": $("#m_photo_4").show("slow");	break;
	case "5": $("#m_photo_5").show("slow");	break;
	default:
}
})

$("#keyword_key").change(function(){
var x2 = $("#keyword_key option:selected").val();
//alert(x);
//console.log(x);
var y2 = $("#keyword_key option:selected").attr("key-photo");
console.log(y2);
$(".card-images-k img").hide();
switch (y2) {
	case "1": $("keyword_1").show("slow");	break;
	case "2": $("keyword_2").show("slow");	break;
	case "3": $("keyword_3").show("slow");	break;
	case "4": $("keyword_4").show("slow");	break;
	case "5": $("keyword_5").show("slow");	break;
	default:
}
})
$(".calc select").change(function(){
var monitor_p = $("#monitor option:selected").attr("monitor_price");
var system_unit_p = $("#system_unit option:selected").attr("system-unit-price");
var keyword_p = $("#keyword_key option:selected").attr("keyword-price");
var final_price = parseInt(monitor_p) + parseInt(system_unit_p)+ parseInt(keyword_p);

$("#final_price").text(final_price);
})//$(".calc select").change(function(){
});
