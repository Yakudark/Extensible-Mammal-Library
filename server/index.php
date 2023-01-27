 <?php
   $file = fopen("./../index.xml", "r+");
   $xmlDoc = "";
   while (($buffer = fgets($file, 4096)) !== false) {
      $xmlDoc .= $buffer;
   }



   $xml = simplexml_load_string($xmlDoc);
   $data = json_decode($_POST['data']);

   $xml->addChild("test", "test");


   // array_push($xml->children(), $array);

   // print_r(count($xml->species));
   // $tab = []
   // for($i = 0; i< count($xml->species); i++){

   // }



   if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
      header('Access-Control-Allow-Origin:* ');
      header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
      header('Access-Control-Allow-Headers: token, Content-Type');
      header('Access-Control-Max-Age: 1728000');
      header('Content-Length: 0');
      header('Content-Type: text/plain');
      header("Sec-Fetch-Mode", "no-cors");
      header("Sec-Fetch-Site", "cross-site");
      die();
   }

   header('Access-Control-Allow-Origin: *');
   header('Content-Type: application/json');
   $xml->saveXML('./../index.xml');
   echo "$testxml OK!";
