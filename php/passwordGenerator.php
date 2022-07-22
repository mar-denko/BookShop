<?php
class PasswordGenerator
{
    private $arraySymbol = array(); // array symbol 
    const length = 15; // length password
    private $password; // password
    // constructor 
    public function __construct() 
    {
        $this->arraySymbol = array_merge(range('0', '9'), range('a', 'z'), range('A', 'Z')); 
        $this->passwordGeneratro(); 
    }
    // Method for generation password
    private function passwordGeneratro()
    {
        for($i = 0; $i < PasswordGenerator::length; $i++)
        {   
            $this->password .= $this->arraySymbol[rand(0, count($this->arraySymbol) - 1)];
        }
    }
    public function getPassword(){return $this->password;}
}
?>

//TODO: передать пароль на клиент средствами ajax 