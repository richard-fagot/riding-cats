# riding-cats


## Déploiement sur OVH

### Configuration du serveur

Le nouveau système de routing d'angular 2 s'appui sur l'historique du navigateur ce qui fait disparaître le `/#/route` au profit d'un `/route`. Du coup, le serveur cherche ce chemin et renvoi un 404. Pour éviter cela, il faut configurer le serveur pour qu'il redirige les requête vers `/index.html`.


Chez OVH, ça se faire comme ça ([source](https://stackoverflow.com/questions/39185802/configuring-htaccess-file-to-serve-angular-and-api-routes/39186052#39186052)) dans le `.htaccess` :

```bash
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html (html5mode)
RewriteRule ^ /index.html
```
### Packaging de l'appli

le `npm start` utilisé tel qu'indiqué dans le tutoriel [Tour of heroes](https://angular.io/docs/ts/latest/tutorial/) génère tous les fichiers nécessaires. Il suffit de copier tout le répertoire projet à la racine du serveur web.

Ce **N'EST PAS** la meilleure solution.

Il vaut mieux passer par **angular-cli**.
