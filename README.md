# application-GYM-MERN-stack
Ce projet est destiné aux débutants qui souhaitent apprendre les bases du backend avec Node.js et Express, et savoir comment intégrer les fonctionnalités backend dans un frontend réalisé avec React.js et Vite. Il permet d'implémenter une fonctionnalité de contact par email.

<img src="gym.png">

## Fonctionnalités
- Envoi de mails de contact

## Backend

### Technologies Utilisées
- **Node.js** : Environnement d'exécution pour JavaScript côté serveur.
- **Express** : Framework web minimaliste pour Node.js permettant de gérer les routes et les middlewares.
- **cors** : Middleware pour permettre les requêtes cross-origin.
- **dotenv** : Module pour charger les variables d'environnement à partir d'un fichier `.env`.
- **nodemon** : Outil de développement qui redémarre automatiquement le serveur Node.js lorsque des changements sont détectés.
- **nodemailer** : Module pour envoyer des emails depuis Node.js.

### Dépendances
```bash
npm install express cors dotenv nodemon nodemailer
```
## Frontend

### Technologies Utilisées
- **React.js** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Vite** : Outil de construction rapide et optimisé pour le développement front-end moderne. Il améliore la vitesse de démarrage et les temps de construction.

### Dépendances
```bash
npm install axios lucide-react react-router-dom react-spinners react-toastify
```
### Technologies Utilisées

- **axios** : Bibliothèque pour effectuer des requêtes HTTP depuis le navigateur.
- **lucide-react** : Collection d'icônes en SVG pour React.
- **react-router-dom** : Bibliothèque de routage pour naviguer entre les différentes pages de l'application.
- **react-spinners** : Collection de spinners (indicateurs de chargement) pour React.
- **react-toastify** : Bibliothèque pour afficher des notifications toast dans l'application.


## Environment Variables
Create `.env` file in the backend folder and add the following
```
PORT=4000
URL_FRONTEND=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
APP_EMAIL_ADDRESS=
APP_EMAIL_PASSWORD=
```


## Install Dependencies
**backend**
```
cd backend
npm install
```
**frontend**
```
cd frontend
npm install
```


## Run
**Run the backend**
```
cd backend
npm run dev
```

**Run the frontend**
```
cd frontend
npm run dev
```
