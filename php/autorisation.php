//* Registration
<?php 

//* HandlerData используется для вызова методов определённых классов таких как генератор паролий и менеджер базы данных;
require_once 'HandlerData.php';

$HandlerData = new HandlerData(); //* объект класса оброботчика данных

$nickname = $_POST['nickname'];
$email = $_POST['email'];
$password = $_POST['password'];
$password_confirmation = $_POST['password_confirmation'];

if($nickname === $nickname_DB){

    if($password === $password_confirmation){
        //continue...
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "To: <$email>\r\n";
        $headers .= "From: <mail@example.com>\r\n"; //! После подключения к хосту поменять на активную почту
        // Сообщение для Email
        // Заменить ссылку на другую example.com/confirmed.php
        $message = '
                <html>
                <head>
                <title>Подтвердите Email</title>
                </head>
                <body>
                <p>Что бы подтвердить Email, перейдите по <a href="http://example.com/confirmed.php?hash=' . $hash . '">ссылка</a></p>
                </body>
                </html>
                ';
        // проверяет отправилась ли почта
        if (mail($email, "Подтвердите Email на сайте", $message, $headers)) {
            // Если да, то выводит сообщение
            echo 'Подтвердите на почте';
        }
    }   
    else {
        // Если ошибка есть, то выводить её 
        echo $error; 
    }
    $data = array($nickname, $email, $password);
    $password = md5($password);
    $SqlManager->addDataTable("users", "", $data);
}
else{
    die("Пароли не совподают");
}

?>



//* Autorisations
<?php 
//session_start(); //! Раскоментить при подключение провиля 
//$_SESSION['user'][$dataProfile]; //! Раскоментить при подключение провиля 
require_once 'SqlManager.php';
$HandlerData = new HandlerData();
$password = md5($_POST['password']);
$check = $HandlerData->Sql->getQuery("SELECT * FROM users WHERE `login` = '$login' AND `password` = '$password'");

if(pg_num_rows($check) > 0){
    pg_fetch_assoc($check);
    $dataProfile = array($check);
    //$_SESSION['user'][$dataProfile]; //! Раскоментить при подключение провиля 
    //header("../....") //! Подключить путь к профилю(ожидает вёрстки) 
}
else{
    die("err");
}
?>

<?php 
//* Проверяет подтверждение почты
if ($_GET['hash']) {
    $hash = $_GET['hash'];
    // Получаем id и подтверждено ли Email
    if ($result = pg_query($HandlerData->Sql->connect(), "SELECT `id`, `email_confirmed` FROM `user` WHERE `hash`='" . $hash . "'")) {
        while( $row = pg_fetch_assoc($result) ) { 
            echo $row['id'] . " " . $row['email_confirmed'];
            // Проверяет получаем ли id и Email подтверждён ли 
            if ($row['email_confirmed'] == 1) {
                // Если всё верно, то делаем подтверждение
                pg_query($HandlerData->Sql->connect(), "UPDATE `user` SET `email_confirmed`=0 WHERE `id`=". $row['id'] );
                echo "Email подтверждён";
            } else {
                echo "Что то пошло не так";
            }
        } 
    } else {
        echo "Что то пошло не так";
    }
} else {
    echo "Что то пошло не так";
}
?>
//TODO: Разбить на 3 файла авторизация и регистрация и проверка почты и выбрать передачу данных json или просто переменные через ajax
