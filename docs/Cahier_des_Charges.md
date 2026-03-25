# Stage 2026 - Cahier des charges

## Table des matières

* [**Chapitre 1**](#part1) **:** _Introduction_
* [**Chapitre 2**](#part2) **:** _Instruction_
* [**Chapitre 3**](#part3) **:** _Prérequis_

## <a id="part1"></a>Introduction

Ce Cahier des Charges décrit les attendus du projet, et exprime les besoins du client. Ce document a été rédigé dans le but de présenter efficacement les objectifs du système, tant pour les intervenants au projet que pour le client.

Le projet joue un rôle central dans l'évaluation et la validation du projet, en veillant à ce que toutes les conditions et objectifs énoncés dans ce document soient pleinement satisfaits. Il constitue ainsi une étape critique pour certifier la conformité du projet aux attentes du client.

Ce cahier des charges commencera par une description détaillée du contexte de développement et des objectifs que le projet doit atteindre. Ensuite, les contraintes imposées au projet seront données autour desquelles le projet devra se concentrer. Enfin, il détaillera les connaissances, ressources matérielles et logicielles, ainsi que les compétences nécessaires à la réalisation du projet.


---

## <a id="part2"></a>Instruction

## _Objectifs du projet_

Le projet vise à mettre en place une application web réalisée avec le framework Express pour le côté serveur et le framework JS pour le côté client. L'application sera destinée à construire un tableau de bord utiliser pour un service de reprographie. 

### Fonctionnalité

Le systéme devra permettre :
- L'inscription d'un utilisateur
- La création d'un compte reprographe
- La connexion et déconnexion
- La modification d'un mot de passe
- La création d'un ticket
- La modification d'un ticket
- L'ajout d'un fichier
- Le téléchargement d'un fichier
- La consultation des tickets
- La visualisation d'un tableau de bord
- La modification du status d'un ticket


### Objets du système

#### <em> Gestion des tickets </em>
Le projet étant une plateforme destinée à un service de reprographie, les demandes seront représentées sous la forme de tickets (appelés requêtes). 

Un ticket devra contenir les informations suivantes :
- Le type à imprimer. 
- Le nombre de pages du document, afin d'estimer la charge de travail.
- Une option recto ou recto-verso (valeur booléenne).
- Une option agrafe indiquant si les pages doivent être agrafées ou non (valeur booléenne).
- Une date de retour correspondant à la date limite d'impression du document.
- Une date de création de la demande
- L'utilisateur ayant créé la demande

Chaque ticket possède également un état (status) permettant de connaître l'avancement de la demande, un ticket peut avoir trois états:
- Ouvert (état par défaut du ticket)
- En cours de traitement 
- Compléter

Les états d'un ticket évoluent dans l'ordre suivant :
Ouvert -> En cours de traitement -> Complété

#### <em> Cycles de vie d'un ticket </em>

Le cycle de vie d’un ticket est le suivant :

1. Un utilisateur crée une demande de reprographie : le ticket est créé avec l’état Ouvert.
2. Un reprographe prend en charge la demande : le ticket passe à l’état En cours de traitement.
3. Une fois l’impression terminée : le ticket passe à l’état Complété.
4. Le ticket reste ensuite consultable dans l’historique des demandes de l’utilisateur.


#### <em> Compte Utilisateur </em>

Afin de déterminer la provenance d’une demande et d’identifier son auteur, un système d’inscription et d’authentification devra être mis en place.

Chaque utilisateur devra posséder un compte personnel afin d’accéder aux fonctionnalités de la plateforme et de créer des demandes de reprographie.

Un compte utilisateur sera composé des informations suivantes :
- Identifiant
- Nom
- Prénom
- Adresse e-mail
- Mot de passe
- Département

Le mot de passe sera associé au compte utilisateur et devra être chiffré avant d’être stocké dans la base de données afin de sécuriser l’accès au système.

Chaque utilisateur sera également associé à un département. Les départements possibles sont :
- INFO
- GEII 
- MMI
- RT

Cette liste pourra être modifiée ultérieurement par l’administrateur.

#### <em> Plateforme web </em>

La plateforme web sera divisée en plusieurs pages :
- Page d'accueil : Change de contenu selon le type d'utilisateur, mais contient toujours le logo du site web, ainsi que son nom.
- Page de connexion : Permet à un utilisateur non connecté d'entrer un login et un mot de passe pour se connecter.
- Page d'inscription : Permet à un utilisateur non inscrit de créer un login et un mot de passe. Le formulaire devra être confirmé avec un captcha.
- Page de profil : Permet de consulter les informations de son profil et de changer son mot de passe.
- Page de Ticket : Permettant à un utilisateur de remplir des formulaires pour réaliser des demandes de reprographie
- Page de tableau de bord : Permettant à un utilisateur de voir ses requêtes réalisées et leurs statuts
- Page de Reprographie : Seulement visible par un reprographe, elle permet de valider des demandes et de connaître les demandes réalisées par les utilisateurs
- Page d'administrateur : Seulement visible par l'administrateur, elle permet de modifier les paramètres du serveur et de modifier la base de données

### Acteurs du système

#### 1. Visiteur

Le visiteur est un utilisateur non connecté/non inscrit. Il peut donc s'agir d'une personne extérieure au système, mais également de n'importe quel autre type d'utilisateur ne s'étant simplement pas encore connecté à la plateforme. Il est ainsi vital que l'affichage de la page d'accueil dans le format Visiteur soit efficace et ergonomique, car tout type d'utilisateur sera amené à la visiter.

#### 2. Utilisateur Connecter

L'utilisateur connecté pourra remplir un formulaire permettant de réaliser une demande de reprographie d'un document. 
L'utilisateur disposera d'un historique de toutes ses demandes précédentes.
Il pourra se déconnecter du site via la page Web.

La page montrera en évidence un tableau de bord. Il s'agit de la liste des demandes publiées par l'utilisateur ainsi que leur état.

#### 3. Reprographe
Le reprographe pourra visualiser toutes les demandes des utilisateurs. Il pourra alors modifier leurs états pour indiquer leurs avancées. Il pourra se déconnecter du site via la page Web.


#### 4. Administrateur

L'administrateur pourra configurer les différents paramétre du serveur. Il pourra aussi manipuler la base de données pour modifier, ajouter ou supprimer différents élements. 
Il pourra se déconnecter du site via la page Web.

## _Contraintes et Exigences_

L'application web devra être développée avec Node.js et Express.Il devra utiliser MongoDB pour la base de données.Il devra être accessible via un navigateur web et pouvoir être utilisé sur un réseau.

La base de données devra respecter le RGPD et sécuriser les mots de passe qui seront enregistrés.

Le système devra limiter les injections et attaques web.

Un GitHub du projet devra être partagé avec les professeurs souhaitant le consulter, et devra contenir tous les éléments du projet, de sa documentation à son code.

---

## <a id="part3"></a>Pré-requis
Le projet demande des compétences en Node.JS, Express et MongoDB ainsi qu'en analyse des besoins et en conception. Des connaissances en HTML, CSS, JavaScript seront nécessaires pour la bonne réalisation du projet.

Il est nécessaire de savoir travailler avec Git, ainsi que de posséder des compétences en communication dans la rédaction de la documentation et la réalisation de la charte graphique à réaliser.

Le systéme devra chiffrer les mots de passe et protéger les injections

Pour les ressources logicielles, GitHub sera utilisé pour tenir un registre du projet, les IDE Jetbrains ainsi que VSCode seront utilisés pour le développement. Enfin, l'utilisation de logiciels comme Excalidraw ou StarUML permettrons la réalisation des diagrammes et les schémas de conception.
