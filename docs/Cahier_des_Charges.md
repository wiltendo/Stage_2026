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

### Acteurs du système

#### 1. Visiteur

Le visiteur est un utilisateur non connecté/non inscrit. Il peut donc s'agir d'une personne extérieure au système, mais également
de n'importe quel autre type d'utilisateur ne s'étant simplement pas encore connecté à la plateforme. Il est ainsi vital que l'affichage
de la page d'accueil dans le format Visiteur soit efficace et ergonomique, car tout type d'utilisateur sera amené à la visiter.

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

Pour les ressources logicielles, GitHub sera utilisé pour tenir un registre du projet, les IDE Jetbrains ainsi que VSCode seront utilisés pour le développement. Enfin, l'utilisation de logiciels comme Excalidraw ou StarUML permettrons la réalisation des diagrammes et les schémas de conception.
