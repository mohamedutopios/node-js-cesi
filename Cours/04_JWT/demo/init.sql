
-- Création d'un utilisateur pour l'API
CREATE USER IF NOT EXISTS 'apiuser'@'%' IDENTIFIED BY 'secret';

-- Donner tous les droits sur la base 'monapp'
GRANT ALL PRIVILEGES ON monapp.* TO 'apiuser'@'%' WITH GRANT OPTION;

-- Appliquer les changements
FLUSH PRIVILEGES;
