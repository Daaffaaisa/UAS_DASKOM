<?php //php tag
            if(isset($_POST['tbl'])){
                echo $_POST['nama_lengkap'],"<br>";
                echo $_POST['jenis_kelamin'],"<br>";
                echo "<br>";
                echo $_POST['alamat'],"<br>";
                if (isset ($_POST['sosmed']))
                {
                    foreach($_POST['sosmed'] as $value)
                    {
                        echo $value," ";
                    }
                }
                echo "<br>";
                echo $_POST['email'],"<br>";
                echo $_POST['info'],"<br>";
                echo $_POST['pesan'],"<br>";
            }
        ?>