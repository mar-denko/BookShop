<?php 

class SqlManager{
private $login; //* Логин для бд 
private $password; //* Пароль для бд
private $hostName; //* Имя хоста
private $nameDB; //* Имя баззы данных
private $port; //* Порт хоста
private $connect; //* соединение с бд

//* конструктор для получения переменных для подключения бд
function __construct($loginAdmin, $passwordAdmin, $hostNameServer, $nameDatabase, $port){
    $this->port = $port;
    $this->login = $loginAdmin;
    $this->password = $passwordAdmin;
    $this->hostName = $hostNameServer;
    $this->nameDB = $nameDatabase;
    $this->connect = pg_connect($this->hostName, $this->port, $this->nameDB, $this->login, $this->password);
}

function connect(){ return $this->connect; }

public function getQuery($query){ return pg_query($this->connect, $query); }

//* Методы для получения, удаления, изменения и добавления данных в таблицы
//TODO: Использовать методы удаления только в случае редактирования в панели администратора в других случиях метод не вызывать

function getTableData($nameTable, $typeIterator){
    $query = "SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '{$nameTable}'";
    $result = $this->getQuery($query);
    while ($row = pg_fetch_assoc($result))
    {
        $columnsType[] = $row['DATA_TYPE'];
    }
    return $columnsType[$typeIterator];
}

public function addDataTable($tableName, $arrayColumnTable, $arrayNewColumnTable){
    if(count($arrayColumnTable) == count($arrayNewColumnTable))
    {
        $itemColumn = implode(",", $arrayColumnTable);
        $itemNewColumn = implode(",", $arrayNewColumnTable);
        if(count($arrayColumnTable) == count($arrayNewColumnTable))
        {
            $query = "INSERT INTO $tableName($itemColumn) VALUES ($itemNewColumn)";
            $this->getQuery($query);
        }
        else{ echo "error-2"; }
    }
    else{ echo "error-2"; }
}

public function updateDataTable($tableName, $id, $arrayColumn, $arrayEdit){
    $position = 1;
    $index = 1;
    for($i = 0; $i < count($arrayColumn); $i++)
    if(count($arrayColumn) == count($arrayEdit))
    {
        if($i == $position){ 
            array_splice($arrayColumn, $position, 0, "=".$arrayEdit[$i-$index].","); 
            $position += 2; 
            $index += 1;
            for($i = 0; $i < count($arrayColumn); $i++)
            {
                if($i == $position)
                { 
                    array_splice($arrayColumn, $position, 0, "=".$arrayEdit[$i-$index].","); 
                    $position += 2; 
                    $index += 1;
                }
            }
            array_splice($arrayColumn, $position, 0, "=".$arrayEdit[$index - 1]);
            $itemColumn = implode("", $arrayColumn);
            echo $itemColumn;
            $query = "UPDATE $tableName SET $itemColumn WHERE Id = $id";
            $this->getQuery($query);
        }
    }
}

public function deleteDataTable($tableName, $id){
    $query = "DELETE FROM $tableName WHERE Id = '{$id}'";
    return $this->getQuery($query);
}

public function getTableDataRow($nameTable, $param){
    $query = "SELECT * FROM '{$nameTable}' WHERE `name_book` = '{$param}'";
    return $this->getQuery($query);
}


public function closeConnection(){
    return pg_close($this->connect);
}

}