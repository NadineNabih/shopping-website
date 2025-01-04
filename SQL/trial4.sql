--@block
CREATE TABLE  product_gender(
    product_gender_id INT,
    gender_name VARCHAR(10),
    CONSTRAINT pk_prodgender
    PRIMARY KEY (product_gender_id)
);
INSERT INTO product_gender(product_gender_id,gender_name)VALUES
(1,"women"),
(2,"men");
--@block
CREATE TABLE product_category(
    product_category_id INT,
    category_name VARCHAR(100),
    category_image VARCHAR(400),
    product_gender_id INT,
    CONSTRAINT pk_productcategory
    PRIMARY KEY(product_category_id),
    CONSTRAINT fk_product_gender
    FOREIGN KEY (product_gender_id)REFERENCES product_gender(product_gender_id)
);
INSERT INTO product_category(product_category_id,category_name,category_image,product_gender_id)VALUES
--@martinaarmanios fill the data according to front 
(1,'makeup','path/to/image.extension',1),
(2,'dresses','path/to/inage.extension'1),
(3,'');

