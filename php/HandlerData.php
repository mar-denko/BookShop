<?php 
require_once 'SqlManager.php';
require_once 'passwordGenerator.php';

class HandlerData{

    public $Sql;
    public $PasswordHelper;

    public function __construct(){
        $this->Sql = new SqlManager("","","","",""); //! Указать путь к бд
        $this->PasswordHelper = new PasswordGenerator;
    }
}

?>