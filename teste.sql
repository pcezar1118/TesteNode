CREATE TABLE usuarios(
nome VARCHAR(50),
email VARCHAR(100),
idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Paulo", 
    "email@teste.com",
    39
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "João", 
    "email@teste2.com",
    45
);



SELECT * FROM usuarios WHERE idade = 39;
SELECT * FROM usuarios WHERE nome = "João";
SELECT * FROM usuarios WHERE idade >= 40;

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Pedro", 
    "email@teste3.com",
    8
);

DELETE FROM usuarios WHERE nome = "Pedro";

UPDATE usuarios SET nome = "Nome Teste" WHERE nome = "João";

