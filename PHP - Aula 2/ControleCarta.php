<?php
require_once './Conexao.php';
class ControleCarta{
    public function inserir(){
        $sql = 'insert into cards (nome, descricao) values (?, ?)';
        $preparado = Conexao::preparaComando($sql);
        $nome = 'Carta base';
        $descricao = 'Uma carta qualquer';
        $preparado = Conexao::preparaComando($sql);
        $preparado->bindValue(1, $nome);
        $preparado->bindValue(2, $descricao);

        if($preparado->execute()){
            echo 'Gravou';
        }else {
            echo 'Erro';
            echo $preparado->errorInfo();
        }
    }

    public function listar(){
        $sql = 'select * from cards';
        $todos = [];
        $preparado = Conexao::preparaComando($sql);
        if($preparado->execute()){
            $todos = $preparado->fetchAll(PDO::FETCH_ASSOC);
        }
        return $todos;
    }
}