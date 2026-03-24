# SAÉ S3 - Recueil des besoins


## Sommaire

<a id="Sommaire"></a>

### [I – Objectif et portée](#p1)
- <b>[a) Quel est le champ d'application et les objectifs généraux ?](#p1a)</b>
- <b>[b) Examen du cahier des charges](#p1b) </b>
- <b>[c) Diagrammes et graphiques visuels](#p1c) </b>
### [II – Terminologie / Glossaire](#p2)
### [III – Cas d’utilisation](#p3)
- <b>[a) Principaux acteurs et leurs objectifs généraux](#p3a)</b>
- <b>[b) Cas d'utilisation stratégiques](#p3b)</b>
- <b>[c) Cas d'utilisation utilisateur](#p3c)</b>
- <b>[d) Cas d'utilisation du système](#p3d)</b>
### [IV – Technologies employées](#p4)
- <b>[a) Quelles sont les exigences technologiques de ce système ?](#p4a)</b>
- <b>[b) Avec quels systèmes ce système interagira-t-il, et avec quelles exigences ?](#p4b)</b>
### [V – Autres exigences](#p5)
- <b>[a) Processus de développement](#p5a)</b>
    - <b>[i. Qui sont les participants au projet ?](#p5ai)</b>
    - <b>[ii. Quelles valeurs doivent être privilégiées ? (par exemple, simplicité, disponibilité, rapidité, flexibilité, etc.)](#p5aii)</b>
    - <b>[iii. Quels retours d'information ou quelle visibilité les utilisateurs et les sponsors attendent-ils sur le projet ?](#p5aiii)</b>
    - <b>[iv. Quelles sont les autres exigences du processus ? (par exemple, tests, installation, etc.)](#p5aiv)</b>
    - <b>[v. Quelles sont les dépendances du projet ?](#p5av)</b>
- <b>[b) Performance](#p5b)</b>
- <b>[c) Opérations, sécurité, documentation](#p5c)</b>
- <b>[d) Facilité d'utilisation et convivialité](#p5d)</b>
- <b>[e) Maintenance et portabilité](#p5e)</b>
### [VI – Ressources humaines, questions juridiques, politiques et organisationnelles](#p6)
- <b>[a) Quelles sont les exigences légales et politiques ?](#p6a)</b>
- <b>[b) Quels sont les besoins en formation ?](#p6b)</b>
- <b>[c) Quelles hypothèses et dépendances affectent l'environnement humain ?](#p6c)</b>

<br>

---

### <a name="p1" id="p1"></a>I – Objectif et portée

- #### <a id="p1a"></a>a) Quel est le champ d'application et les objectifs généraux ?

  - **Objectives:**
    - Développer une application web permettant aux utilisateur d'utiliser un service de reprographie.
    - S’assurer que le système est sécurisé, maintenable et évolutif, et conforme au RGPD et aux autres réglementations applicables.
      
  - **Scope:**
    - **Inclusion:**
      - Conception et mise en œuvre d'une interface web permettant aux utilisateurs de soumettre des documents et visualiser leur état.
      - Mise en œuvre de l'authentification des utilisateurs, de la gestion des sessions et des contrôles d'administration pour la supervision du système.
      - Mesures de conformité en matière de protection des données et de respect de la vie privée selon le RGPD.

    - **Exclusion:**
      - Intégration avec d'autres services tiers non mentionnés dans les exigences techniques.
      - La version en ligne de la plateforme n'est pas prévue pour cette version.
      - Prise en charge des navigateurs anciens (par exemple, Internet Explorer).

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

- #### <a id="p1b"></a>b) cahier des charges du projet

  - **Project Importance:**
    - Ce projet vise à fournir une solution pratique pour réaliser des demandes de reprographie.
    
  - **Résultats attendus:**
    - Une plateforme web entièrement fonctionnelle qui récupère et traite des demandes de reprographie de fichiers.
    - Des fonctionnalités améliorées de sécurité et de gestion des utilisateurs qui protègent les données des utilisateurs et garantissent l'intégrité et la fiabilité du système.
    
<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

- #### <a id="p1c"></a>c) Diagrammes et graphiques visuels

  - **Diagramme descriptif des niveaux :** Représentation visuelle de l’architecture du système, montrant comment les différents composants interagissent et comment les données circulent dans le système.
  - **Diagramme de cas d'utilisation :** illustre les interactions entre les utilisateurs (administrateurs et utilisateurs finaux) et le système, en mettant en évidence les principales fonctionnalités et les flux de contrôle.

**Diagramme à ajouter** 
<div align="center">
    <img height="400" width="900" src="img/Cas_Utilisation.png" title="diagramme CU"/>
</div>
<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

---

### <a id="p2"></a>II – Terminology / Glossary

| Words                | Definition                                                                                                                                                                                  |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reprographie         | Ensemble des procédés permettant la duplication de documents |
| CNIL                 | Commission nationale pour l'informatique et les libertés (CNIL). Autorité administrative française indépendante chargée de veiller à ce que les technologies de l'information soient au service du citoyen. |
| Échec de la tentative de connexion | L'échec d'une tentative de connexion à un système ou à un compte utilisateur en raison d'informations incorrectes ou d'un problème technique.                                                                           |
| Cookie               | (En informatique) : Un petit fichier stocké par un serveur sur l'appareil d'un utilisateur (ordinateur, téléphone, etc.) et associé à un domaine web.                                                            |
| Demande d'assistance      | Une demande soumise par un utilisateur pour signaler un problème ou une difficulté technique nécessitant une intervention ou une résolution (ticket) de la part de l'équipe de support informatique.                                       |
| Injection SQL        | Une technique permettant d'injecter des éléments SQL dans les champs de formulaires Web ou les liens de pages, dans le but de les envoyer au serveur Web pour modifier des éléments dans une base de données.                             |
| Labels               | Étiquettes ou mots-clés attribués à un ticket informatique pour catégoriser, organiser et faciliter la recherche de problèmes ou de demandes d'assistance similaires.                                                        |
| RGPD                 | Règlement général sur la protection des données (RGPD). Texte de référence en matière de protection des données personnelles. Il renforce et harmonise la protection des données des personnes physiques au sein de l'Union européenne.                   |
| SGBD                 | Système de gestion de bases de données.                                                                                                                                                                 |
| Assistance informatique          | Assistance technique qui traite les demandes de support, résout les problèmes techniques et répond aux questions liées aux technologies de l'information.                                                                    |
| Tableau de bord            | Une interface en ligne affichant des informations récapitulatives et des données clés pour aider les utilisateurs à surveiller et gérer les opérations liées aux tickets et au support informatique..                                           |
| W3C                  | Consortium World Wide Web (W3C). Une organisation internationale qui définit les normes techniques du Web et les règles que tous les développeurs du monde entier doivent respecter.                                      |
| Wave                 | Une extension de navigateur qui évalue l'accessibilité d'une page web pour les personnes handicapées.                                                                                            |

<br>

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

---

### <a id="p3"></a>III – Cas d’utilisation

- **<a id="p3a"></a>a) Les principaux acteurs et leurs objectifs.**

    - <u>Le visiteur (un ou plusieurs) </u>
        > - S’inscrit / Crée un compte
        > - Accéder à la page d'accueil

  <br>

  Pour différencier un utilisateur d'un visiteur, les visiteurs doivent s'inscrire et remplir un formulaire pour devenir des utilisateurs.
    
    - <u>L'utilisateur (un ou plusieurs) :</u>
        > - Se connecte, se déconnecte
        > - Créer une demande de reprographie
        > - Accède à leur histoire
        > - Consulter l'historique
    
  <br>

    - <u>Le reprographe (un ou plusieurs) :</u>
        > - Est un utilisateur, mais avec des droits d'administrateur supplémentaires
        > - Voir toutes les demandes réalisées par les utilisateurs
        > - Télécharger des documents
        > - Changer l'état d'une demande (En attente -> Préparation -> Finie)

  <br>

    - <u>L'administrateur (seulement un) :</u>
        > - Est un utilisateur, mais avec des droits d'administrateur supplémentaires
        > - Configurer le serveur
        > - Modifier la base de données

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

- **<a id="p3b"></a>b) Cas d'utilisation stratégiques.**

#### Cas d'utilisation 1 : Administration
**Nom :** Administration <br>
**Contexte d'utilisation :** La plateforme doit permettre aux administrateurs de gérer les éléments. <br>
**Portée :** Organisation boite noir <br>
**Niveau :**  Stratégique <br>
**Acteur principal :** Administrateur <br>
**Précondition :** Administrateur est connecter <br>
**Garanties en cas de succès :** Modification des données  <br>
**Granties minimales:** Aucune Modification effectués <br>
**Déclencheur :** Besoin de modifier les données de la plateforme <br>
**Scénario nominal :**
1. L'administrateur accéde aux données
2. Les données sont modifier par l'administrateur

**Exception :**

a. Impossible d'accéder à la base de données
1. Un message d'error est afficher pour Chargement (ECHEC)

b. Error durant la modification :
1. Un message d'error est afficher pour Modification (ECHEC)
***

#### Cas d'utilisation 2 : Gestion des Utilisateurs
**Nom :** Gestion des Utilisateurs <br>
**Contexte d'utilisation :** La plateforme doit permettre aux administrateurs de gérer les comptes utilisateurs. <br>
**Portée :** Organisation boite blanche <br>
**Niveau :**  Stratégique <br>
**Acteur principal :** Administrateur <br>
**Précondition :** Administrateur est connecter <br>
**Garanties en cas de succès :** Création d'un compte utilisateur  <br>
**Garanties minimales:** Les données entrée ne sont pas stocker <br>
**Déclencheur :** Une demande de création d'utilisateur est réaliser <br>
**Scénario nominal :**
1. Une demande de création de compte est reçu
2. Accés à la base de données
3. Création d'un nouveau compte utilisateur

**Exception :**

a. Les champs obligatoires du formulaire ne sont pas tous remplis :
1. Un message d'error est envoyés pour la création d'un compte (ECHEC)

b. Impossible d'acceder à la base de données :
1. Un message d'error est envoyés pour la création d'un compte (ECHEC)

c. Une erreur est arriver durant la création dû compte
1. Un message d'error est envoyés pour la création d'un compte (ECHEC)

***
#### Cas d'utilisation 3 : Gestion Profil
**Nom :** Gestion Profil <br>
**Contexte d'utilisation :** Un utilisateur possédant un compte inscrit souhaite consulter ses informations, changer et/ou récupérer son mot de passe. <br>
**Portée :** Systéme boite noir <br>
**Niveau :**  Stratégique <br>
**Acteur principal :** Utilisateur <br>
**Précondition :** Un utilisateur est connecté <br>
**Garanties minimales :** Les données seront privées et le mot de passe est masqué  <br>
**Déclencheur :** Evénement interne concernant le profil d'un utilisateur <br>
**Scénario nominal :**
1. Accéder à la base de données
2. Extraire les informations du compte
3. Gérer la demande de l'utilisateur

**Exception :**

1. a. Impossible d'accéder à la base de données :
    1. Afficher une erreur. (ECHEC)
***
#### Cas d'utilisation 4 : Gestion requête
**Nom :** Gestion requête <br>
**Contexte d'utilisation :**  La plateforme doit permettre de gérer et afficher des demandes de reprographie. <br>
**Portée :**  Organisation boîte noire<br>
**Niveau :**  Stratégique <br>
**Acteur principal :** Utilisateur <br>
**Précondition :**  Utilisateur connecté <br>
**Garanties minimale :** Possibilité de crée des requêtes de reprographie <br>
**Déclencheur :** Requête de l'utilisateur <br>
**Scénario nominal :** <br>
1. L'utilisateur réaliser une demande (créer, voir, modifier)
2. Une interaction avec la base de données à lieu

**Exception :**

a. La demande n'a pas fonctionner
1. Un message d'erreur est afficher indiquant l'erreur

b. L'affichage à échoué
1. Un message d'erreur est afficher

***

#### Cas d'utilisation 5 : Consultation des requêtes
**Nom :** Consultation des requêtes <br>
**Contexte d'utilisation :**  Un utilisateur réalise une demande pour voir les requêtes<br>
**Portée :** Systéme boite noir <br>
**Niveau :** Stratégique  <br>
**Acteur principal :** Utilisateur <br>
**Précondition :** Utilisateur doit être connecter<br>
**Garanties en cas de succès :** Un tableau est affichés contenant les informations  <br>
**Déclencheur :** Demande de l'utilisateur pour voir les requêtes <br>
**Scénario nominal :** <br>
1. L'utilisateur fait une demande
2. Une intéraction à lieu avec la base de données
3. Le résultat est affiché

**Exception :**

a. Impossible d'accéder à la base de données :
1. Afficher une erreur (ECHEC)

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

---

- <b><a id="p3c"></a>c) Cas d'utilisation utilisateurs.</b>

  **À ajouter après les Cu**

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

---

- <b><a id="p3d"></a>d) Cas d'utilisation système.</b>

  **À ajouter après les Cu**

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

---

### <a id="p4"></a>IV – Technologies utilisées

- **<a id="p4a"></a>a) Quelles sont les exigences techniques de ce système ?**  <br><br>
    L’application doit utiliser : MongoDB, HTML, CSS, JS, Express.<br>
    - MongoDB est un système de gestion de base de données NoSQL permettant de stocker les données sous forme de documents.<br>
    - Le HTML et le CSS sont utilisés pour créer les pages du site web.<br>
    - Express est un Framework permettant de créer des serveurs web, gérer les routes, les requêtes HTTP et la communication entre le site web et la base de données<br>
    - JavaScript (JS) est utilisé pour rendre les pages web interactives et gérer les actions de l'utilisateur côté client (navigation, formulaires, requêtes, etc.).<br>

    <br><br>

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

- **<a id="p4b"></a>b) Quels systèmes seront interfacés avec ce système, et quelles sont leurs exigences ?**<br><br>

    Pour garantir le bon fonctionnement de l'application web finale,  il faudra vérifier que le site web fonctionne correctement sur le réseau de l'IUT de Vélizy.<br>


<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>


---

### <a id="p5"></a>V – Autres exigences

- **<a id="p5a"></a>a) Processus de développement**

    - <u><a id="p5ai"></a>i. Qui sont les participants au projet ?</u><br><br>

        Le projet a été réalisé par William Herubel
      <br>
      <br>
  
    - <u><a id="p5aii"></a>ii. Quelles valeurs doivent être privilégiées ? (par exemple, simplicité, disponibilité, rapidité, flexibilité, etc.)</u><br>
      - ### Efficiency
        Nous privilégions l'efficacité afin de garantir les meilleures performances de nos algorithmes. Les calculs doivent être exécutés le plus rapidement possible.
      - ### Flexibility
        Notre application doit être extensible, permettant l'ajout de nouvelles fonctionnalités sans réécrire le code
      - ### Portability
        La plateforme web devra permettre une accecibilité depuis le réseau de l'IUT
      - ### Sécurité
        Les données doivent être protégées et le site ne doit afficher que les informations auxquelles chaque utilisateur est autorisé à accéder. Il est essentiel de sécuriser les requêtes SQL effectuées par les fichiers Node.js afin de restreindre au maximum l'accès et de limiter les failles de sécurité. De plus, tous les mots de passe doivent être chiffrés avant d'être stockés dans la base de données afin d'atténuer les conséquences d'une éventuelle fuite de données.<br>
      <br>
  
    - <u><a id="p5aiii"> </a> iii. Quels retours et quelle visibilité sur le projet les utilisateurs et les commanditaires attendent-ils ?</u><br><br>
      Ce projet s’inscrivant dans le cadre d’un stage universitaire, le commanditaire sera mon enseignant. Il bénéficie d’une visibilité importante sur son avancement et recevra la documentation relative au projet et à ses avancées. Une communication régulière entre moi et l'enseignant est recommandée afin de garantir que le projet réponde à leurs attentes. Les échanges avec mon professeur se feront par courriel et en personne.<br>
      Mon client, M. HOGUIN, devrait avoir un accès complet au projet : GitHub<br>
      
  
    - <u><a id="p5aiv"> </a>iv. Quelles sont les autres exigences du processus ? (par exemple, tests, installation, etc.)</u><br><br>
      Les exigences du projet incluent une phase de tests afin de garantir le bon fonctionnement de l’application. Les clients doivent avoir accès au dépôt Git pour évaluer l’avancement du projet et fournir des commentaires si nécessaire.<br><br>
  
    - <u><a id="p5av"> </a>v. Quelles sont les dépendances du projet ?</u><br><br>
      Ce projet ne présente aucune dépendance majeure grâce à la stabilité de Node.js, JavaScript et MongoDB.<br><br>

- <b><a id="p5b"> </a>b) Performance</b><br><br>
  Le logiciel doit être aussi performant que possible afin de faciliter l’accès. Les programmes seront optimisés et testés pour minimiser le nombre d’opérations. Les systèmes de stockage de données seront choisis en conséquence afin de maximiser les performances de la plateforme.<br><br>

- <b><a id="p5c"> </a>c) Opérations, Documentation </b><br><br>
  Tout le code utilisé dans le projet doit être documenté afin d’en garantir la lisibilité. Toutes les fonctions générées seront accompagnées d’une docstring. De plus, un dossier de tests et la documentation du code seront inclus.<br><br>

- <b><a id="p5d"> </a>d) l’utilisabilité et convivialité</b><br><br>
  Nous veillerons à ce que l’application soit accessible conformément à la norme W3C UAAG 2.1. Nous utiliserons l’extension de navigateur « Wave » pour vérifier cette conformité. Tout outil supplémentaire permettant d’améliorer l’accessibilité est le bienvenu. 
  <br><br>

- <b><a id="p5e"> </a>e) Maintenance and Portability</b><br><br>
  La portabilité et la maintenabilité de l'application web seront vérifiées à l'aide du validateur du W3C. Cela garantit la compatibilité avec tous les navigateurs et permet de s'assurer que le code est conforme aux normes en vigueur. Node.js et MongoDB fonctionnent aussi bien sur des serveurs Windows que Linux. Nous effectuerons des tests d'intégration afin de garantir la bonne intégration des différents modules dans notre projet.

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

---

### <a id="p6"></a>VI – Ressources Humaines, Questions Juridiques, Politiques et Organisationnelles

- <b><a id="p6a"></a>a) Quelles sont les exigences légales et politiques ?</b><br><br>
  L’application doit être conforme à la loi française « Informatique et Libertés » du 6 janvier 1978, modifiée le 1er juin 2019, relative à l’informatique, aux fichiers et aux libertés.<br>
  Elle est également soumise au Règlement général sur la protection des données (RGPD) européen du 27 avril 2016, relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données, et abrogeant la directive 95/46/CE.<br>
  <br>
  Il convient de noter que la CNIL émet des recommandations concernant cette législation, notamment en matière de cookies.<br>
  <br>
  Ces recommandations sont consultables via les liens ci-dessous :
    - <u>Loi "Informatique et Liberté" :</u><br>
      https://www.cnil.fr/fr/la-loi-informatique-et-libertes <br>
    - <u>Règlement européen « Règlement général sur la protection des données » :</u><br>
      https://www.cnil.fr/fr/reglement-europeen-protection-donnees <br>
    - <u>À propos des cookies :</u><br>
      https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies <br>
      <br>

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

- <b><a id="p6b"></a>b) Quelles sont les training requirements?</b><br><br>
  En général, les utilisateurs doivent savoir utiliser un ordinateur et un navigateur Internet.<br>
  <br>

  Une page web proposant des conseils aux utilisateurs pourra également être créée.<br>
  <br>

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

- **<a id="p6c"></a>c) Quelles hypothèses et dépendances affectent l'environnement humain ?**<br><br>
    - Je suppose que :<br>
        - Tous les élèves, enseignants et membres du personnel concernés disposent d'une connexion internet et savent utiliser un ordinateur et un navigateur internet.<br>
        - L’utilisation de l’application par les personnes handicapées peut différer.<br>
          <br>
    - L'application dépend de :<br>
        - La présence des administrateurs.
        - La loi française « Informatique et Libertés » et le RGPD au sein de l’Union européenne sont des textes de loi applicables. Toute modification de ces lois peut nécessiter une réévaluation de l’application afin d’en garantir la conformité continue.
        - L'évolution des navigateurs internet. L'application risque de devenir obsolète.

<div align="right">
    <a href="#Sommaire">⮐ retour au Sommaire</a>
</div>

