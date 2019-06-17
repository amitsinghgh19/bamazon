# bamazon

**Creator**: `Amit Singh`

**Created on**: `June 9th 2019`

- - -

## ABOUT THE APP
An interactive shopping node app where MySQL and Node.JS are used to allow users to purchase items as a customer & view, track and update the product inventory as a manager.
- - -

## BAMAZON CUSTOMER APP
The Bamazon Customer Portal allows users to view the current items available for purchase.  The user will be prompted to enter the item id# and how many items they wish to purchase.  If the item is in stock, the order will be completed and the user will see the total amount of their purchase.
- - -
## HOW TO USE BAMAZON CUSTOMER APP

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

## BAMAZON MANAGER APP
The Bamazon Customer Portal allows users to view and edit the inventory of the store.  The user will be prompted to choose from the following options:
* View products for sale
* View low inventory
* Add to inventory
* Add a new product
* End Session
- - -

## HOW TO USE BAMAZON MANAGER APP

### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `bamazonManager.js` file. 
3. You will be presented with a list of option to chose from.  
    * View Products for Sale
    * View Low Inventory
    * Add to Inventory
    * Add New Product
    * End Session

     **Screen-shot**: List of option
    
    ![Results](/screenshots/mrg_list_of_option.PNG)


4. If the manager selects `View Products for Sale`, it lists all of the products in the store including all of their details.
    
    **Screen-shot**: View Products for Sale
    
    ![Results](/screenshots/mrg_view_prod_for_sale.PNG)


5. If the manager selects `View Low Inventory`, it'll list all the products with less than 10 items in its Stock Quantity column.

     **Screen-shot**: View Low Inventory
    
    ![Results](/screenshots/mrg_view_low_inv.PNG)


6. If the manager selects `Add to Inventory`, it allows the manager to select a product and add inventory.
    
    **Screen-shot**: Add to Inventory

    ![Results](/screenshots/mrg_add_inv.PNG)
    
    ![Results](/screenshots/mrg_add_inv1.PNG)

7. The system `validates` if a user enters the correct Item ID.

    **Screen-shot**: Validation
    ![Results](/screenshots/validation4.PNG)
    
    ![Results](/screenshots/validation5.PNG)

8. If the manager selects `Add New Product`, it allows the manager to add a new product to the store.
    
     **Screen-shot**: Add New Product
    
    ![Results](/screenshots/mrg_add_new_prod.PNG)

9. The system `validates` if a user enters valid product name(does not take null and number value), department name(does not take null and number value), price(does not take null & string value) & stock quantity(does not take null & string value).
    
    **Screen-shot**: Validation
    
    ![Results](/screenshots/validation6.PNG)
    
    ![Results](/screenshots/validation7.PNG)
    
    ![Results](/screenshots/validation8.PNG)
    
    ![Results](/screenshots/validation9.PNG)


10. If the manager selects `End Session`, it ends the session and doesn't go back to the menu.
    
    **Screen-shot**: End Session
    
    ![Results](/screenshots/mrg_end_session.PNG)


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