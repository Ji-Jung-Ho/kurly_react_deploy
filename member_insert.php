<?
  // 리액트 서버와 PHP/MYSQL 서버주소가 서로 다르기 때문에 데이터베이스 접속 불가능
  // CORS API 접속 권한 헤더문을 추가하여 접속 권한을 풀어준다.
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: *');

  // 1. 데이터베이스 인증 정보 (열기 = 접속)
  // http://kiik52.dothome.co.kr/kurly_study/member_insert.php

  $db_sever     = 'localhost';
  $db_uesr_name = 'kiik52';
  $db_password  = 'wlwjdgh2!#';
  $db_name      = 'kiik52';
  $conn = mysqli_connect($db_sever, $db_uesr_name, $db_password, $db_name);
  mysqli_set_charset($conn, 'utf8');

  if ($conn == false) {
    die('데이터베이스 접속 실패');
  }
  else {
    echo('데이터베이스 접속 성공');
  }

  // 2. 데이터베이스에 저장 INSERT SQL 
  // 입력데이터 : 회원가입 입력상자에 입력받은 값을 저장 => AJAX를
  $id         = $_POST['id'];
  $pw         = $_POST['pw'];
  $irum       = $_POST['irum'];
  $email      = $_POST['email'];
  $hp         = $_POST['hp'];
  $addr       = $_POST['addr'];   // 주소1 + 주소2
  $gender     = $_POST['gender'];
  $birth      = $_POST['birth'];  // 생년 + 생월 + 생일
  $addInput   = $_POST['addInput'];
  $service    = $_POST['service'];
  $gaibDate   = $_POST['gaibDate'];

  // SQL INSERT INTO 저장할테이블이름 VALUES
  $sql = "INSERT INTO kurly_portfolio(id, pw, irum, email, hp, addr, gender, birth, add_input, service, gaim_date)
          VALUES('$id', '$pw', '$irum', '$email', '$hp', '$addr', '$gender', '$birth', '$addInput', '$service', '$gaibDate')";
  $result = mysqli_query($conn, $sql);

  // INSERT문 실행 결과 확인
  if ($result == false) {
    echo('데이터베이스 데이터 저장 실패!');
  }
  else {
    echo($irum . '데이터베이스 데이터 저장 성공!');
  }

  // 3. 데이터베이스 닫기


?>