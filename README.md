# Portfolio — SO Kevin Jonas Gningnabe

Portfolio personnel présentant mon parcours d'Ingénieur Logiciel Full Stack : expertise technique, expériences professionnelles, réalisations et publications.

🔗 **Site en ligne :** [kgslab.com](https://kgslab.com)

![Statut](https://img.shields.io/badge/statut-en%20ligne-brightgreen)
![Licence](https://img.shields.io/badge/licence-MIT-blue)

---

## ✨ Aperçu

Ce portfolio met en avant :

- **Expertise** — SaaS, applications Web & Mobile, API REST/GraphQL, DevOps, consulting technique.
- **Expériences** — parcours professionnel de Développeur Full Stack (Expertizlab, YULCOM, HSN Consult, KULTURA, 2K Corporation).
- **Réalisations** — projets clients et personnels (Couturart, Nanika, StopVol API, Amadeus, Rocky DevOps, et plus).
- **Écrits** — publications techniques intégrées directement depuis LinkedIn.
- **Contact** — coordonnées directes pour échanger sur une mission.

## 🛠️ Stack technique

| Catégorie      | Technologies                          |
| -------------- | -------------------------------------- |
| Framework      | React, TypeScript, Vite                |
| UI / Styling   | Tailwind CSS, shadcn/ui, lucide-react  |
| Build & Tooling| Vite, ESLint                           |
| Conteneurisation | Docker, Nginx                        |
| Déploiement    | Hostinger / Vercel *(à préciser)*      |

## 📂 Structure du projet

```
src/
├── assets/              # Images, avatar, visuels
├── components/          # Sections du portfolio
│   ├── HeroSection.tsx
│   ├── ExpertiseSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AboutSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── components/ui/       # Composants shadcn/ui
├── hooks/                # Hooks personnalisés
├── App.tsx
└── main.tsx
Dockerfile                # Build multi-stage (Node -> Nginx)
docker-compose.yml         # Orchestration du conteneur
nginx.conf                 # Config Nginx (fallback SPA, cache, gzip)
index.html                 # SEO, meta tags, JSON-LD
```

## 🚀 Installation (développement local)

Prérequis : [Node.js](https://nodejs.org/) (version 18+) et npm.

```bash
# Cloner le dépôt
git clone https://github.com/sokevinjonas/<nom-du-repo>.git
cd <nom-du-repo>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:5173` par défaut.

## 📦 Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`.

Pour prévisualiser le build localement :

```bash
npm run preview
```

## 🐳 Déploiement avec Docker

Le projet inclut un `Dockerfile` (build multi-stage Node → Nginx) et un `docker-compose.yml` prêts à l'emploi.

### Build et lancement

```bash
docker compose up -d --build
```

Le site sera accessible sur `http://localhost:8080`.

### Commandes utiles

```bash
# Voir les logs
docker compose logs -f

# Vérifier le statut du conteneur
docker ps

# Arrêter le conteneur
docker compose down
```

### Build manuel (sans Compose)

```bash
docker build -t cvonline:v1.0 .
docker run -d -p 8080:80 --name cvonline-test cvonline:v1.0
```

## 🔍 SEO

Le fichier `index.html` inclut :

- Meta tags (title, description, keywords)
- Open Graph & Twitter Cards pour le partage sur les réseaux
- Données structurées JSON-LD (schema.org `Person`)

## 📬 Contact

- **Email :** [sokevin7@gmail.com](mailto:sokevin7@gmail.com)
- **LinkedIn :** [linkedin.com/in/so-kevin-jonas](https://linkedin.com/in/so-kevin-jonas)
- **GitHub :** [github.com/sokevinjonas](https://github.com/sokevinjonas)

## 📄 Licence

Ce projet est distribué sous licence [MIT](LICENSE). Le code source est libre de consultation à des fins d'apprentissage ; le contenu personnel (textes, projets, image) reste la propriété de SO Kevin Jonas Gningnabe.