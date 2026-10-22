const soap = require("soap");

soap.createClient("http://localhost:8000/book?wsdl", (err, client) => {
  client.addBook({ title: "Clean Code" }, (err, result) => {
    console.log(result);
    console.log("SOAP Request:", client.lastRequest);
    console.log("SOAP Response:", client.lastResponse);
  });
});
CREATE DATABASE college;

USE college;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    pn VARCHAR(15)
);