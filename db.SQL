CREATE TABLE drink (
    name text PRIMARY KEY,
    recipe text,
    instructions text
);

INSERT INTO drink (name, recipe, instructions) VALUES
    ('negroni', E'1 oz gin\n1 oz campari\n1 oz sweet vermouth', 'Pour all ingredients directly into a chilled old fashioned glass filled with ice, Stir gently. Garnish with a half orange slice.'),
    ('daiquiri', E'2 oz rum\n1 oz lime juice\n1 oz simple syrup', 'In a cocktail shaker add all ingredients. Stir well to dissolve the sugar. Add ice and shake. Strain into chilled cocktail glass.'),
    ('boulevardier', E'1.5 oz bourbon\n1 oz campari\n1 oz sweet vermouth', 'Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into a chilled cocktail glass. Garnish with orange zest, optionally a lemon zest.'),
    ('manhattan', E'2 oz rye\n1 oz sweet vermouth\n1 dash angostura bitters', 'Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into a chilled cocktail glass. Garnish with orange zest, optionally a lemon zest.'),
    ('old fashioned', E'1.5 oz rye\n1 sugar cube\n1 dash angostura bitters', 'Place sugar cube in old fashioned glass and saturate with bitter, add few dashes of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Stir gently. Garnish with an orange slice or zest, and a cocktail cherry.'),
    ('americano', E'1 oz campari\n1 oz sweet vermouth\n1 splash soda water', 'Mix the ingredients directly in an old fashioned glass filled with ice cubes. Add a splash of Soda Water. Stir gently. Garnish with half orange slice and a lemon zest.'),
    ('gin fizz', E'1.5 oz gin\n1 oz lemon juice\n0.25 oz simple syrup\n1 splash soda water', 'Shake all ingredients with ice except soda water. Pour into thin tall Tumbler glass , top with a splash soda water.');


SELECT * FROM drink;