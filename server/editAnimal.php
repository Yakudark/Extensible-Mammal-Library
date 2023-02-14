<?php
header("Cache-Control: no-store");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");

$xml = simplexml_load_file('../index.xml');
$data = json_decode($_POST['data']);

for ($i = 0; $i < count($xml->species); $i++) {
    if ($xml->species[$i]->name->__toString() == $data->name) {
        $xml->species[$i]->img = $data->img;
        $xml->species[$i]->description = $data->description;
        $xml->species[$i]->height = $data->height;
        $xml->species[$i]->weight = $data->weight;
        $xml->species[$i]->speed = $data->speed;
        $xml->species[$i]->lifeSpan = $data->lifeSpan;
        $xml->species[$i]->gestationPeriod = $data->gestationPeriod;
        $xml->species[$i]->dailySleep = $data->dailySleep;
        $xml->species[$i]->location = $data->location;
        $xml->species[$i]->famousAnimal = $data->famousAnimal;
    }
};

$xml->saveXML('../index.xml');

echo  "ok!";
