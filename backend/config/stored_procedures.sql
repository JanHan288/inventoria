-- Stored Procedures

DELIMITER //

CREATE PROCEDURE AddSupplier(
    IN supplierName VARCHAR(255),
    IN contactInfo VARCHAR(255),
    IN productName VARCHAR(255),
    IN initialQuantity INT
)
BEGIN
    DECLARE supplierID INT;

    -- Insert supplier into suppliers table
    INSERT INTO suppliers (name, contact_info) VALUES (supplierName, contactInfo);
    SET supplierID = LAST_INSERT_ID();

    -- Insert initial product into inventory table associated with the supplier
    INSERT INTO inventory (product_name, quantity, supplier_id) VALUES (productName, initialQuantity, supplierID);
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE UpdateStock(
    IN productID INT,
    IN addedQuantity INT
)
BEGIN
    UPDATE inventory SET quantity = quantity + addedQuantity WHERE item_id = productID;
END //

DELIMITER ;
