Examen NODE JS
===============

**Note générale :**

 * Défense d'utiliser d'autres packages que ceux pré-installés !
 * Ne pas modifier le code des tests !
 * La valdation de l'examen se fera par Pull Request, sur GitHub, en fin de séance. Préciser votre prénom + nom dans le descriptif de cette dernière !

TESTS & LINTER (Bonus)
----------------------

* Faire en sorte que, lorsqu'un utilisateur lance les tests, le linter soit éxécuté *à la suite* de ces derniers - 1pt
* De plus, l'ensemble du code de l'examen doit respecter les règles du linter, sans bypass ! - 1pt

BASIC-AUTH  - 3pts
------------------

* Implémenter le middleware d'authentification basic auth, l'authentification doit être valide quand
  * le login vaut `node` 
  * le mot de passe vaut `password`, encodé en sha1
    * L'encodage d'une chaine de caractère se fera avec [la classe Hash du module natif 'crypto'](https://nodejs.org/docs/latest-v10.x/api/crypto.html#crypto_class_hash)

API REST + Services - 10pts
---------------------------

* Faire en sorte que le serveur se lance via la commande `npm run start:rest` - 1pt
* Implémenter la v1 de l'API people, dans api/api.js et api/people-service.js
  * route de modification : permet de modifier une personne existante - 3pts
  * routes de récupération de toutes les personne, avec filtres. Les filtres consistent en des paramètres à ajouter dans l'url. Si aucun filtre n'est précisé, l'ensemble des personnes doit être renvoyé (1 pt). Sinon, ne renvoyer que les personnes dont les attributs correspondent exactement aux filtres (+5 pts)

I/O - 3pts
----------

* Implémenter la fonction decodeHexFileContent du fichier io/io.js
  * prend en paramètre un chemin de fichier, dont le contenu est encodé en **hexadécimal**
  * retourne une promesse contenant le contenu du fichier décodé (en utf8)

WebSocket - 4pts
----------------

Soit un serveur websocket simple, gérant des messages d'utilisateurs non-authentifiés
  * Faire en sorte que le serveur web affichant la page (contenue dans le dossier websocket/public) et lançant le serveur websocket se lance via la commande `npm run start:websocket` - 1pt
  * Modifier le code de façon à ce que tout nouvel utilisateur reçoive l'historique des messages quand il se "connecte" - 3pts
  