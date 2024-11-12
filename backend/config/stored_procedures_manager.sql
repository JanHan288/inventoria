DELIMITER //

-- Procedure to update stock in inventory
CREATE PROCEDURE UpdateStock(IN productID INT, IN addedQuantity INT)
BEGIN
    UPDATE inventory SET quantity = quantity + addedQuantity WHERE item_id = productID;
END //

-- Function to check if stock is low
CREATE FUNCTION CheckLowStock(productID INT) RETURNS VARCHAR(255)
READS SQL DATA
BEGIN
    DECLARE stockLevel INT;
    DECLARE message VARCHAR(255);

    SELECT quantity INTO stockLevel FROM inventory WHERE item_id = productID;

    IF stockLevel < 10 THEN
        SET message = CONCAT('Low stock alert for item ID ', productID);
    ELSE
        SET message = 'Stock level sufficient';
    END IF;

    RETURN message;
END //

DELIMITER ;
