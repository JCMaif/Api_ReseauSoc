# Brief 05 - Création API avec BDD SQL

## Installation
1. `npm init -y`
2. `npm i express pg cors jsonwebtoken` (nodemon est installé en global sur mon poste)
3. Création d'une database "miniature" appartenant à "postgres"
4. Ajout des scripts dans package.json : 
```json
    "type": "module",
    "dev": "nodemon src/index.js",
    "db:create": "psql -U postgres -d miniature -f ./data/structure.sql",
    "db:seed": "psql -U postgres -d miniature -f ./data/data.sql"
```
5.  Pour lancer le serveur, utiliser la commande `npm run dev`. 

## Tâches à exécuter

### Authentification et Gestion des Utilisateurs

   [x] Endpoint pour l'inscription (Register) d'un nouvel utilisateur.      (/signup.html)
   [x] Endpoint pour la connexion (Login) d'un utilisateur existant.        (/login.html)
   [x] Endpoint pour la déconnexion (Logout) d'un utilisateur authentifié.  (/logout)

### Fil d'actualité

    [x] Endpoint pour récupérer les publications les plus récentes.         (/newest)
    [x] Endpoint pour récupérer les publications les plus likées.           (/trending)

### Publications et commentaires

    [] Endpoint pour créer une nouvelle publication.
    [] Endpoint pour écrire un commentaire sur une publication.

### Intéractions Sociales

    [] Endpoint pour liker une publication.
    [] Endpoint pour suivre un utilisateur.
