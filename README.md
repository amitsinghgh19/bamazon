# bamazon

**Creator**: `Amit Singh`

**Created on**: `June 9th 2019`

- - -

## ABOUT THE APP
`Bamazon` is a command line node app that takes in orders from customers and depletes stock from the store's inventory. 
- - -

## HOW TO USE BAMAZON

### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `bamazonCustomer.js` file. 
3. You will be presented with a lits of products  

    **Screen-shot**: List of products
    
    ![Results](/screenshots/listproducts.PNG)

4. The system `validates` if a user enters the correct Item ID and also validates if there is sufficient quantity available.

    **Screen-shot**: Validation
    
    ![Results](/screenshots/validation1.PNG)

    ![Results](/screenshots/validation2.PNG)
    

5. If quantity is insuffucent, the user is asked if they want to purchase another item.

    **Screen-shot**: Quantity Check

    ![Results](/screenshots/validation3.PNG)

6. If a valid Item ID is entered and there is enough quantity available, the app will sucessfully process the transaction and display the output to the user. The stock quantity is also deducted and display to the user.

    **Screen-shot**: Successfull Transaction
    
    ![Results](/screenshots/success1.PNG)

    ![Results](/screenshots/success2.PNG)

7. After the first transaction is complete, the user is asked if they want to continue shopping. 
8. If the user choses to continue shopping, then a list of products is displayed again, other wise the app will shut down.

    **Screen-shot**: Good Bye Msg
    
    ![Results](/screenshots/thankyou.PNG)

- - -
## HOW TO USE BAMAZON MANAGER's APP
-----------------------

#. `bamazonManager.js`

    * Starts with a menu:
        * View Products for Sale
        * View Low Inventory
        * Add to Inventory
        * Add New Product
        * End Session

    * If the manager selects `View Products for Sale`, it lists all of the products in the store including all of their details.

    * If the manager selects `View Low Inventory`, it'll list all the products with less than five items in its StockQuantity column.

    * If the manager selects `Add to Inventory`, it allows the manager to select a product and add inventory.

    * If the manager selects `Add New Product`, it allows the manager to add a new product to the store.

    * If the manager selects `End Session`, it ends the session and doesn't go back to the menu.

-----------------------
## TECHNOLOGIES USED
* Javascript
* Nodejs
* MySQL
* Node packages:
    * MySQL
    * Inquirer
    * Cli-table
    * Chalk
* Git
* GitHub