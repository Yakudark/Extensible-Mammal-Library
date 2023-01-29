 <?php
   header("Cache-Control: no-store");
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   header("Access-Control-Allow-Headers: *");
   header("Access-Control-Allow-Credentials: true");
   header("Access-Control-Max-Age: 86400");

   $xml = simplexml_load_file('../index.xml');
   $data = json_decode($_POST['data']);
   // $data = new SimpleXMLElement();

   $species = $xml->addChild('species');
   $species->addChild('name', $data->name);
   $species->addChild('img', $data->img);
   $species->addChild('description', $data->description);
   $species->addChild('height', $data->height);
   $species->addChild('weight', $data->weight);
   $species->addChild('speed', $data->speed);
   $species->addChild('lifeSpan', $data->lifeSpan);
   $species->addChild('gestationPeriod', $data->gestationPeriod);
   $species->addChild('dailySleep', $data->dailySleep);
   $species->addChild('location', $data->location);
   $species->addChild('famousAnimal', $data->famousAnimal);
   $xml->saveXML('../index.xml');

   echo  "ok!";
