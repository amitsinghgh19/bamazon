// Node npm var declarations
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var chalk = require('chalk'); //For font color and properties
var colors = require('colors');

//creates a connection to MySQL database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "prasadmanimysql19", //password
    database: "bamazon"
});
//Provides status of SQL connection
connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id' + connection.threadId);
    startMrgApp();
});

console.log(chalk.red.bold('***********************************************'));
console.log(chalk.blue.bold("****** WELCOME TO BAMAZON MANAGER's APP ******".bold));
console.log(chalk.red.bold('***********************************************'));

//builds startup menu for manangement interface
var startMrgApp = function() {
    inquirer.prompt([{
        name: "Menu",
        type: "rawlist",
        message: "What would you would like to do?",
        choices:['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'End Session']
    }]).then(function(answer) {

            // switch for different options

            switch(answer.Menu) {
                case 'View Products for Sale': 
                    viewProductsForSale();
                    break;
                case 'View Low Inventory':
                    viewLowInventory();
                    break;
                case 'Add to Inventory':
                    addToInventory();
                    break;
                case 'Add New Product':
                    addNewProduct();
                    break;
                case "End Session": 
                    //continueYN();
                    endSession();
                    break;
            } // end of switch

        }); // end of inquirer prompt function
}  
    //Function to prompt user if they want to continue or end connection
    function endSession() {
        inquirer.prompt({
                    name: "continue",
                    type: "confirm",
                    message: "End Session? Are You Sure?".bold,
                }).then(function(answer) {
                    if (answer.continue == true) {
                        console.log("\nEnding Session With Bamazon Manager's App!".bold);
                        console.log ("\nGOOD BYE!".bold);
                        connection.end();
                    } else {
                        startMrgApp();
                    }
                }); 
    };

    //Function to prompt user if they want to continue or end connection
    function continueYN() {
    inquirer.prompt({
                name: "continue",
                type: "confirm",
                message: "Would you like to go back to the main menu?".bold,
            }).then(function(answer) {
                if (answer.continue == true) {
                    startMrgApp();
                } else {
                    console.log("\nEnding Session With Bamazon Manager's App!".bold);
                    console.log ("\nGOOD BYE!".bold);
                    connection.end();
                }
            }); 
    };

    //Lists the products for sale
    function viewProductsForSale() {
    connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    //Table formatting using Cli-table package
    var table = new Table({
        head: ['ITEM ID', 'PRODUCT NAME','DEPT', 'PRICE','QTY'],
        colWidths: [10, 40, 20, 15, 10]
    });
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(chalk.bold("Bamazon Inventory"));
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    for(var i=0; i <res.length; i++){
        table.push ([res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity]);
    }
    console.log (table.toString());
    console.log ("");
    startMrgApp();
});
    }
    //List the Products based on inventory < 10
    function viewLowInventory() {
    connection.query('SELECT * FROM Products', function(err, res) {
        if (err) throw err;
        console.log('---------------------------------');
        console.log('>>>>>>Viewing Low Inventory<<<<<<'.bold);
        console.log('---------------------------------');
        // New Table instance to format returned sql data
            var table = new Table({
                head: ['ITEM ID', 'PRODUCT NAME', 'DEPT', 'PRICE', 'QTY'],
                colWidths: [10, 40, 20, 15, 10]
            });
        for (var i=0; i < res.length; i++) {
            if (res[i].stock_quantity < 10) {
            var productArray = [res[i].item_id, res[i].product_name, res[i].department_name, "$" +res[i].price, res[i].stock_quantity];
            table.push(productArray);
            }
        }
        console.log(table.toString());
        startMrgApp();
        });
    }
    var resLength;
    //Function to add inventory to database
    function addToInventory() {
        connection.query('SELECT * FROM Products', function(err, res) {
        if (err) throw err;
        resLength=res.length;
        // New Table instance to format returned sql data
            var table = new Table({
                head: ['ITEM ID', 'PRODUCT NAME', 'DEPT', 'PRICE', 'QTY'],
                colWidths: [10, 40, 40, 15, 10]
            });
        for (var i=0; i < res.length; i++) {
        var productArray = [res[i].item_id, res[i].product_name, res[i].department_name, "$" +res[i].price, res[i].stock_quantity];
        table.push(productArray);    
        }
        console.log('\n');
        console.log(table.toString());
       
        });
            inquirer.prompt([{
                name:'item_id',
                type:'input',
                message: '\nEnter the ID of the Product you want to increase the inventory of',

                validate: function(value){
                    if (value!=="" && isNaN(value) == false &&  value<=resLength ) {
                        return true;
                    } else {
                        return chalk.bgRed("**ERROR** Invalid ID, enter a valid ID from the list");
                    }
                }
            }, {
                name: 'qty',
                type:'input',
                message: 'Enter the quantity you want to add to inventory'
            }]).then(function(answer) {
                var addAmount = (parseInt(answer.qty));
                //Queries the database to retrieve the current StockQuantity to perform the addition
                connection.query("SELECT * FROM Products WHERE ?", [{item_id: answer.item_id}], function(err, res) {
                            if(err) {
                                throw err;
                            } else {
                            var updateQty = (parseInt(res[0].stock_quantity) + addAmount);                      
                            }
                    //Updates the database with new quantity
                    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [updateQty, answer.item_id], function(err, results) {
                            if(err) {
                                throw err;
                            } else {
                            console.log('New Inventory Added!\n'.bold);
                            continueYN();                      
                            }
                    });

                });


                
        });
    }
    
    //Add a new product to the database
    function addNewProduct() {
        inquirer.prompt([{
            name: "product",
            type: "input",
            message: "Type the name of the Product you want to add to Bamazon"
        }, {
            name: "department",
            type: "input",
            message: "Type the Department name of the Product you want to add to Bamazon"
        }, {
            name: "price",
            type: "input",
            message: "Enter the price of the product without currency symbols"
        }, {
            name: "quantity",
            type: "input",
            message: "Enter the amount you want to add to the inventory"
        }]).then(function(answers) {
            var product_name = answers.product;
            var department_name = answers.department;
            var price = answers.price;
            var stock_quantity = answers.quantity;
            connection.query('INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)', [product_name, department_name, price, stock_quantity], function(err, data) {
                if (err) {
                    throw err;
                } else {
                console.log('\n\nProduct: ' + product_name + ' added successfully!\n\n'.bold);
                continueYN();
                }
            });
        });
    }   
