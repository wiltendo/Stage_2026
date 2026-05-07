# Stage_2026
Stage 2026 réaliser par William Herubel. L'objectif est de crée une application web écrite avec le framework Express côté serveur et un framework côté client (Angular, Vue).

L’application est destinée à contruire un tableau de de bord pour un service de reprographie avec desfonctionnalités suivantes :

• connexion/déconnexion d’un utilisateur.

• dépôt de fichiers pdf

• notification de prise en charge du fichier par le service de reprographie.

• notification du travail terminé.

• notification en cas d’erreur.


## Installation du serveur

Le développement de ce projet a été réalisé dans un environnement **Windows**.

J’utilise trois logiciels pour lancer le serveur et interagir avec l’application :

- **Node.js**, que j’exécute depuis un terminal de commande avec la commande `node app.js`. Je l’ai installé en suivant le tutoriel disponible sur le site officiel : https://nodejs.org/en/download  
- **MongoDB**, que j’utilise via un fichier `.exe` lançant un serveur local MongoDB. Je l’ai installé en suivant le tutoriel disponible sur le site officiel : https://www.mongodb.com/try/download/community  
- **MongoDB Compass**, que j’utilise pour accéder à la base de données MongoDB et pour visualiser, modifier et supprimer les différentes données présentes dans la base.

Liste dépendance : 
- **bcrypt**
- **csurf** 
- **ejs**
- **express**
- **express-fileupload**
- **express-session**
- **mongoose**
- **node-mailjet**
