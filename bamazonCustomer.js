//Dependencies
var mysql = require("mysql"); //MySQL
var inquirer = require("inquirer"); //Inquirer
var Table = require('cli-table'); //For Table formatting
var chalk = require('chalk'); //For font color and properties

//Create the connection for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "prasadmanimysql19", //password
    database: "bamazon"
  });
  
  //Connect to the mysql server and sql database
  connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id " + connection.threadId);
      connection.end();
  });