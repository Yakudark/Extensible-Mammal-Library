<?php
header("Cache-Control: no-store");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");

$xml = simplexml_load_file('../index.xml');
$data = $_POST['data'];

for ($i = 0; $i < count($xml->species); $i++) {
    if ($xml->species[$i]->name->__toString() == $data) {
        unset($xml->species[$i]);
    }
};

$xml->saveXML('../index.xml');
echo  "ok!";
