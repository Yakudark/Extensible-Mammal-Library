 <?php
   $file = fopen("./../index.xml", "r+");
   $xmlDoc = "";
   while (($buffer = fgets($file, 4096)) !== false) {
      $xmlDoc .= $buffer;
   }
   print_r($xmlDoc);
   $xml = simplexml_load_string($xmlDoc);
   $data = json_decode($_POST['data']);
   $xml = new SimpleXMLElement('./index.xml');
   $xml->addChild("test", "test");


   // array_push($xml->children(), $array);

   // print_r(count($xml->species));
   // $tab = []
   // for($i = 0; i< count($xml->species); i++){

   // }




   $xml->saveXML('./../index.xml');
   echo "$testxml OK!";
