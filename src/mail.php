<?php 

$frm_name = "Your Name";
$recepient = "seriiburduja@gmail.com";
$sitename = "Armata Financial Group";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formName = trim($_POST["hiddenform"]);
//$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");