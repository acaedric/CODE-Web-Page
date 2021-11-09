CREATE DATABASE codedb;
USE codedb;
/* UPDATE user SET max_questions = 0 WHERE user = 'you username or root';
FLUSH PRIVILEGES; */
CREATE TABLE consultas(
    id INT(11) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    email TEXT NOT NULL,
    tema VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL
);
CREATE TABLE registro
(
   id_usr INT(9)  NOT NULL,
   nomb_vc VARCHAR(50) NOT NULL,
   apel_vc VARCHAR(80) NOT NULL,
   dni_vc VARCHAR(80) NOT NULL,
   email_usr TEXT NOT NULL,
   num_telef INT(9) NOT NULL,
   institucion_vc VARCHAR(40) NOT NULL,
   
); 
ALTER TABLE registro
   ADD PRIMARY KEY (id_usr);
ALTER TABLE registro
  add fecha datetime;
ALTER TABLE registro
    MODIFY id_usr INT(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE consultas
    ADD PRIMARY KEY (id);

ALTER TABLE consultas
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- LINKS TABLES
CREATE TABLE pagos (
    id INT(11) NOT NULL,
    email TEXT NOT NULL,
    stripeTokenID TEXT NOT NULL,
    stripeSource TEXT
);

ALTER TABLE pagos ADD PRIMARY KEY (id);

ALTER TABLE pagos
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"SVX9kdUwaO","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"CtGIitkFgu","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"0s3hNbIwfq","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"EA6SIhNEH9","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"Bh4P5v6FyE","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"yMrJQTmFET","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"wjvm3gx1Eq","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"n2ndrGiLdE","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"jmgvXQxu5f","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"9JiSyN1GEM","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"eGIrnIDlpS","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"R0Qd6IA9dL","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"NrMZ2XEn1M","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"UZvAbsFeN0","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"59K853HfVi","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"byyEQAZA9k","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"zvNPOlD4vS","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"sf2AJjSPRc","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"PqU0tPHcjm","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"i6RVMG22xb","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"pxNqy0isqb","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"hGoFZ8WMSg","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"SEDamvB9L7","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"kkuwziknun","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"viTy9nogEq","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"68X0y9Xfob","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"sTjgzs557T","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"jQfKVqjGHC","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"TJFTjRJ2xL","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"8iy1DowubT","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"9ddgWMXawO","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"kuBYBIuBSU","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"wf25DhHywq","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"d8NcGlKpDZ","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"sPLtIwR8WZ","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"GHiKc9sZgh","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"CPqsbRRNcu","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"oi2bSO2KZf","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"K56hLlzUfu","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"Gj86Ab5HyF","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"e9TOW0fE22","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"TvwVhV4TDC","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"FGdtsVwyWr","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"ZKlTbnKg5p","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"IZABqLAxM9","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"vdWnqzRZ8C","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"7458ry33rz","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"pZVV5DsZBi","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"rwhaVhmmSN","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"G9l2vmxi1R","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"9guWbAwylM","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"a1HC2J6fMe","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"bh6XqZw31p","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"4VliWjxZtK","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"cqRAHH7TMz","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"nPon5BL3om","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"l97AhS10hS","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"xrVYAMKtQB","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"k3HuPy3Dw4","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"wEoZsI9myj","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"8ovYF7SEfM","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"cUzl0lr0Q9","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"rp69EufANB","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"XszSGmLoTw","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"t1bMiXZ0sa","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"kBqmNeV97u","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"XtLDy35D0x","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"oPOPlYcCLu","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"S0s55TYXwu","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"adYABflssh","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"99tfOfhOAS","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"a6qzCCxepL","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"xvrATBvfxY","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"eBvqL5xj7Q","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"FvjLqoOgiE","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"112dxdJDe7","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"KyhR8opzT5","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"XUdfReK9Pc","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"qBHesx9bGE","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"l8yUh6udVG","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"uL4P4GL2bK","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"snEZsg8xjo","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"rqb0rzQd6x","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"6lPEtya6B5","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"KDTkr3nYPR","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"cXdvCWh6hb","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"QlHIeC8epb","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"oj93R40P7y","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"cHh0s1o2td","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"77MD9Chum4","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"Ss4mgmEzPP","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"TGcYIlD5q6","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"KqnjWHVHdt","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"2ykBgj8w3s","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"OO9YS4UOy4","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"qPXB54bDBQ","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"ODOVgCOMrm","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"bLHhqKBVXP","por comprar","por verificar");
INSERT INTO tickets (idtipodetickets, codigoqr, estado,verificacion) VALUES (1,"PGe1Sve6y4","por comprar","por verificar");