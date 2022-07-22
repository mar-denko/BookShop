<?php 

class Parser{
    private $zip;
    private $xml;
    private $text;

    public function __construct($filePath)
    {
        $this->setParse($filePath);
    }

    private function setParse($filePath)
    {
        $pars = new ZipArchive;
        $this->zip = $pars->open($filePath);
        $pars->extractTo('./doc');
        $this->xml = simplexml_load_file('doc/word/document.xml');
        $this->text = implode($this->xml->xpath('//w:t'));
        $this->text = explode('\t', $this->text);
        $this->text = implode('\t', $this->text);
        $file = fopen("file.text", "w");
        fwrite($file, $this->text.'\t');
        fclose($file);
        $this->rrmdir("doc");
        $file = fopen("file.text", "r");

        while(!feof($file))
        {
            $this->text = htmlentities(fgets($file));
        }
        unlink("file.text");
        // $this->rrmdir("doc");
    }

    public function getParse()
    {
        return $this->zip;
    }

    public function getXml()
    {
        return $this->xml;
    }

    public function getText()
    {
        return $this->text;
    }
    private function rrmdir($dir) {
        if (is_dir($dir)) {
          $objects = scandir($dir);
          foreach ($objects as $object) {
            if ($object != "." && $object != "..") {
              if (filetype($dir."/".$object) == "dir") 
                 $this->rrmdir($dir."/".$object); 
              else unlink   ($dir."/".$object);
            }
          }
          reset($objects);
          rmdir($dir);
        }
       }
}
?>

<?php 

$a = new Parser("draft.docx");
echo json_encode($a->getText());
// echo $a->getText();



?>
