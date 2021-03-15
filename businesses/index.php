<?php
if(session_status()!=PHP_SESSION_ACTIVE) session_start();
//создание массива
$arrayNumb = array();
//перемення-флаг для отслеживания не нажатия кнопок
$flag = true;
//количество строк и столбцов
$countTr = 9;
$countTd = 10;

//обработка нажатия на кнопку Заполнить
if(isset($_POST['addArray'])){
    echo"<div class='mainTable'> <table border='2'>";
    for ($i=0; $i<$countTr; $i++){
        echo"<tr>";
        for ($j=0; $j<$countTd; $j++){
            echo"<td>";
            $arrayNumb[$i][$j]=  rand(1,100);
            echo $arrayNumb[$i][$j];
            echo"</td>";
        }
        echo"</tr>";
    }
    echo"</table></div>"; 
//    сохранение массива в сессию для последующих дествий с ним
    $_SESSION['arr'] =  $arrayNumb;
    $flag = false;  
}

//обработка нажатия на кнопку Очистить   
if(isset($_POST['delArray'])){
    $arrayNumb=$_SESSION['arr'];
    
    $arrayNumb = array();
    echo"<div class='mainTable'> <table border='2'>";
    for ($i=0; $i<$countTr; $i++){
        echo"<tr>";
        for ($j=0; $j<$countTd; $j++){
            echo"<td> </td>";
        }
        echo"</tr>";
    }
    echo"</table></div>"; 
        
    $_SESSION['arr'] =  $arrayNumb;
    
    $flag = false;  
    
}
//обработка нажатия на кнопку Рассчитать
if(isset($_POST['calcArray'])){
    $arrayNumb=$_SESSION['arr'];

    if($arrayNumb){
       $min=1000;
    
        //нахождение последнего минимального элемента
        for ($i=0; $i<$countTr; $i++){

            for ($j=0; $j<$countTd; $j++){
                if($arrayNumb[$i][$j] <= $min){
                    $min = $arrayNumb[$i][$j];
                    $minI=$i;
                    $minJ=$j;
                }


            }
     
        }
        //удаление строки с последним минимальным элементом
        $countTr=$countTr-1;
        for ($i=$minI; $i<$countTr; $i++){

            for ($j=0; $j<$countTd; $j++){
                
                    $arrayNumb[$i][$j] = $arrayNumb[$i+1][$j];
                    
                }


        }
        //удаление столбца с последним минимальным элементом //обработка нажатия на кнопку Заполнить
        $countTd=$countTd-1;
        for ($i=0; $i<$countTr; $i++){

            for ($j=$minJ; $j<$countTd; $j++){
                
                    $arrayNumb[$i][$j] = $arrayNumb[$i][$j+1];
                    
                }


        }
        
        //Вывод нового массива
        echo"<div class='mainTable'> <table border='2'>";
        for ($i=0; $i<8; $i++){
            echo"<tr>";
            for ($j=0; $j<9; $j++){
                echo"<td>";
                
                echo $arrayNumb[$i][$j];
                echo"</td>";
            }
            echo"</tr>";
        }
        echo"</table> </div>"; 
 
    }
    else{
       echo"<div class='mainTable'><h3> Массив не заполнен! </h3> </div>";
    }
    
    $flag = false;  
    
}

//Создание массива при запуске страницы и вывод пустой таблицы
if($flag){
    $arrayNumb = array();
    echo"<div class='mainTable'> <table border='2'>";
    for ($i=0; $i<9; $i++){
        echo"<tr>";
        for ($j=0; $j<10; $j++){
            echo"<td> </td>";
        }
        echo"</tr>";
    }
    echo"</table> <div>"; 
    $_SESSION['arr']=$arrayNumb;
}

?>


<html>
    <head>
    
        <style>
            .mainTable{
                width: 40%;
                margin: 5% 30%;
            }
            
            table {
                font-family:  'Montserrat', sans-serif;
                font-size: 14px;
                border-collapse: collapse;
                text-align: center;
                border-style: solid;
                border-width: 0 1px 1px 0;
                border-color: white;
            }
           th, td {
                border-style: solid;
                border-width: 0 1px 1px 0;
                border-color: white;
            }
            td {
                background: #4F7DB7;
                color: white;
                width: 50px;
                height: 50px;
            }
            
            .mainTable h3{
                font-family: 'Montserrat', sans-serif;
                font-size: 24px;
                width: 80%;
                text-align: center;
                color: #1B4070;
            }
            form{
                width: 60%;
                margin: 5% 24%;
            }
            
            
            .inputBtn {
              text-decoration: none;
              display: inline-block;
              color: white;
              padding: 20px 30px;
              margin: 10px 20px;
              border-radius: 10px;
              font-family: 'Montserrat', sans-serif;
              
              letter-spacing: 2px;
              font-size: 14px;
              background-image: linear-gradient(to right, #1B4070 0%, #4F7DB7 51%, #1B4070 100%);
              background-size: 200% auto;
              box-shadow: 0 0 20px rgba(0, 0, 0, .3);
              transition: .5s;
                
               border-style: solid;
                border-width: 0 1px 1px 0;
                border-color: white;
            }
            .inputBtn:hover {
              background-position: right center;
            }
        </style>
    </head>
<body>
    <form method="post">
        <input type="submit" name="addArray" value="Заполнить массив" class="inputBtn">
        <input type="submit" name="delArray" value="Очистить массив" class="inputBtn">
        <input type="submit" name="calcArray" value="Рассчитать" class="inputBtn">
    </form>
</body>
</html>