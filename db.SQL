CREATE TABLE drink (
    name text PRIMARY KEY,
    recipe text,
    instructions text
);

INSERT INTO drink (name, recipe, instructions) VALUES
    ('negroni', E'1 oz gin\n1 oz campari\n1 oz sweet vermouth', 'add all ingredients and mix'),
    ('daiquiri', E'2 oz rum\n1 oz lime juice\n1 oz simple syrup', 'add all ingredients and shake');


SELECT * FROM drink;