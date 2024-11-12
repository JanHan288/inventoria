-- Create products table to store product details
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create suppliers table (this may already exist, just showing it here for completeness)
CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255) NOT NULL
);

-- Inventory table that links products to inventory levels
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    supplier_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- Stored Procedure to add a product along with initial stock
DELIMITER //

CREATE PROCEDURE AddProduct(
    IN productName VARCHAR(255),
    IN productDescription TEXT,
    IN productPrice DECIMAL(10, 2),
    IN productCategory VARCHAR(100),
    IN initialQuantity INT,
    IN supplierName VARCHAR(255),
    IN supplierContact VARCHAR(255)
)
BEGIN
    DECLARE productID INT;
    DECLARE supplierID INT;

    -- Insert supplier into suppliers table
    INSERT INTO suppliers (name, contact_info) VALUES (supplierName, supplierContact);
    SET supplierID = LAST_INSERT_ID();

    -- Insert product into products table
    INSERT INTO products (name, description, price, category) 
    VALUES (productName, productDescription, productPrice, productCategory);
    SET productID = LAST_INSERT_ID();

    -- Insert initial product into inventory table
    INSERT INTO inventory (product_id, supplier_id, quantity) 
    VALUES (productID, supplierID, initialQuantity);
END //

DELIMITER ;

-- Stored Procedure to update stock for a product
DELIMITER //

CREATE PROCEDURE UpdateStock(
    IN productID INT,
    IN addedQuantity INT
)
BEGIN
    UPDATE inventory SET quantity = quantity + addedQuantity WHERE product_id = productID;
END //

DELIMITER ;

-- Function to check if stock is low for a product
DELIMITER //

CREATE FUNCTION CheckLowStock(productID INT) RETURNS VARCHAR(255)
READS SQL DATA 
BEGIN
    DECLARE stockLevel INT;
    DECLARE message VARCHAR(255);

    -- Retrieve the current stock level of the specified product
    SELECT quantity INTO stockLevel FROM inventory WHERE product_id = productID;

    -- Check if stock level is below the threshold (e.g., 10 units)
    IF stockLevel < 10 THEN
        SET message = CONCAT('Alert: Low stock for product ID ', productID);
    ELSE
        SET message = 'Stock level sufficient';
    END IF;

    RETURN message;
END //

DELIMITER ;
