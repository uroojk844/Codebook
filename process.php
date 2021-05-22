<?php
$text = $_POST['text'];
$result = $_POST['result'];
$f = fopen('code.txt', 'w');
fwrite($f,"Code:\n\n");
fwrite($f, $text);
fwrite($f,"\n\nOutput:\n\n");
fwrite($f, $result);
fclose($f);
?>