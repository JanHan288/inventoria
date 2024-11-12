DELIMITER //

CREATE FUNCTION CheckLowStock(productID INT) RETURNS VARCHAR(255)
READS SQL DATA  -- Add this line to meet the binary logging requirements
BEGIN
    DECLARE stockLevel INT;
    DECLARE message VARCHAR(255);

    -- Retrieve the current stock level of the specified product
    SELECT quantity INTO stockLevel FROM inventory WHERE item_id = productID;

    -- Check if stock level is below the threshold (e.g., 10 units)
    IF stockLevel < 10 THEN
        SET message = CONCAT('Alert: Low stock for item ID ', productID);
    ELSE
        SET message = 'Stock level sufficient';
    END IF;

    RETURN message;
END //

DELIMITER ;
