<?php 
require_once 'SqlManager.php';
require_once 'HandlerData.php';
$Handler = new HandlerData();

$file_name = $_POST['filePath'];

$filename = $Handler->Sql->getTableDataRow("book", $file_name);

if(ini_get('zlib.output_compression'))
  ini_set('zlib.output_compression', 'Off');
  
$file_extension = strtolower(substr(strrchr($filename,"."),1));
  
if( $filename == "" )
{
          echo "ОШИБКА: УКАЖИТЕ ИМЯ ФАЙЛА.";
          exit;
} elseif ( ! file_exists( $filename ) )
{
          echo "ОШИБКА: данного файла не существует.";
          exit;
};
switch( $file_extension )
{
          case "pdf": $ctype="application/pdf"; break;
          case "exe": $ctype="application/octet-stream"; break;
          case "zip": $ctype="application/zip"; break;
          case "doc": $ctype="application/msword"; break;
          case "xls": $ctype="application/vnd.ms-excel"; break;
          case "ppt": $ctype="application/vnd.ms-powerpoint"; break;
          case "mp3": $ctype="audio/mp3"; break;
          case "mp4": $ctype="video/mp4"; break;
          case "gif": $ctype="image/gif"; break;
          case "png": $ctype="image/png"; break;  
          case "jpeg":
          case "jpg": $ctype="image/jpg"; break;
          default: $ctype="application/force-download";
}
header("Pragma: public"); 
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private",false); 
header("Content-Type: $ctype");
header("Content-Disposition: attachment; filename=\"".basename($filename)."\";" );
header("Content-Transfer-Encoding: binary");
header("Content-Length: ".filesize($filename));
readfile("$filename");
exit();
?>
