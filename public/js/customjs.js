// Ajax pagination
/*$(window).on('hashchange', function () {
 if (window.location.hash) {
 var page = window.location.hash.replace('#', '');
 if (page == Number.NaN || page <= 0) {
 return false;
 } else {
 getProducts(page);
 }
 }
 });
 $(function () {
 $('#ajaxproducts').on('click', '.pagination a', function (e) {
 var url = $(this).attr('href');
 var hashes = url.split("?")[1];
 var page = $(this).attr('href').split('page=')[1];
 getProducts(hashes.split('page').reverse()[1], page);
 e.preventDefault();
 });
 });
 function getProducts(data, page) {
 $.ajax({
 url: '?' + data + 'page=' + page,
 type: "GET",
 dataType: 'json',
 }).done(function (data) {
 $('#ajaxproducts').html(data);
 }).fail(function () {
 alert('Posts could not be loaded.');
 });
 }*/
// End Ajax pagination
//Repair brower back button with pushState.
/*$(function(){
 var replacePage = function(url) {
 $.ajax({
 type: "GET",
 url: url,
 dataType: 'json',
 }).done(function (data) {
 $('#ajaxproducts').html(data);
 }).fail(function () {
 alert('Items could not be loaded.');
 });
 }

 $(document).on('click', '.pagination a', function(e){
 console.log(this.href);
 history.pushState(null, null, this.href);
 replacePage(this.href);
 e.preventDefault();
 });

 $('#status').val($('#status').val() + ' on ' + new Date());

 $(window).bind('popstate', function(){
 replacePage(location.pathname);
 });
 });*/
//End repair back button.
//Start checkbox filter
/*$(document).ready(function () {
 function showValues() {
 var baseUrl = document.location.origin;
 var url = $(location).attr('href');
 var parentId = url.split( '/')[5].split('?').reverse()[1];
 var categ = '';
 var size = '';
 var color = '';
 var brand = '';
 var price = '';
 var name = '';
 $("input:checkbox").each(function () {
 categ = $('input[name="categ[]"]:checked').serialize();
 size = $('input[name="size[]"]:checked').serialize();
 color = $('input[name="color[]"]:checked').serialize();
 brand = $('input[name="brand[]"]:checked').serialize();
 price = $('input[name="price"]:checked').serialize();
 name = $('input[name="name"]:checked').serialize();
 });

 $("input[name=price]").on('change', function() {
 $("input[name=price]").not(this).prop('checked', false);
 });
 $("input[name=name]").on('change', function() {
 $("input[name=name]").not(this).prop('checked', false);
 });
 var main_string = categ+"&"+size+"&"+color+"&"+brand+"&"+price+"&"+name;

 $.ajax({
 type: "GET",
 url: baseUrl + "/filter/products/"+parentId,
 data: main_string,
 dataType: 'json',
 }).done(function (data) {
 $('#ajaxproducts').html(data);
 }).fail(function () {
 alert('Items could not be loaded.');
 });
 }
 $("input[type='checkbox']").on("click", showValues);
 });*/
//End checkbox filter
$(function () {
    $('#categories input:checkbox').on('click', function () {
        if ($(this).is(":checked"))
            $("#categories").submit();
        if ($('input:checkbox').is(':checked'))
            $("#categories").submit();
    });
    $(".submit").hide();
});
/*$("input[name=price]").on('change', function () {
 $("input[name=price]").not(this).prop('checked', false);
 });
 $("input[name=name]").on('change', function () {
 $("input[name=name]").not(this).prop('checked', false);
 });*/
$(document).ready(function () {
    $('#priceasc,#pricedesc,#nameasc,#namedesc').on('click', function (e) {
        e.preventDefault();
        var inputAttr = {};
        inputAttr.type = 'hidden';
        if (this.id == 'priceasc') {
            inputAttr.name = 'price';
            inputAttr.value = 'asc';
        } else if (this.id == 'pricedesc') {
            inputAttr.name = 'price';
            inputAttr.value = 'desc';
        } else if (this.id == 'nameasc') {
            inputAttr.name = 'name';
            inputAttr.value = 'asc';
        } else if (this.id == 'namedesc') {
            inputAttr.name = 'name';
            inputAttr.value = 'desc';
        }
        $('<input>').attr(inputAttr).appendTo('form');
        $('#categories').submit();
    });
});
/* $(document).ready(function(){
 $("li.pagination a, li.prev a, li.next a, li.active a ").click(function() {
 $.ajax({
 type: "GET",
 url: $(this).attr('href'),
 dataType: 'html',
 success: function(html){
 var $page_data = $(html);
 $('#container').html($page_data.find('div#container'));
 }
 });
 return false;
 });
 }); */