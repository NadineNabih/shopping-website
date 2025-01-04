--@block
CREATE TABLE  product_gender(
    product_gender_id INT,
    gender_name VARCHAR(10),
    CONSTRAINT pk_prodgender
    PRIMARY KEY (product_gender_id)
);
INSERT INTO