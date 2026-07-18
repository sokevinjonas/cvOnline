# ---------- Stage 1 : Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Installer les dépendances (layer mis en cache tant que package*.json ne change pas)
COPY package.json package-lock.json* ./
RUN npm ci

# Copier le reste du code source et builder l'app
COPY . .
RUN npm run build

# ---------- Stage 2 : Serve (Nginx) ----------
FROM nginx:1.27-alpine AS runner

# Config Nginx custom (SPA fallback vers index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Récupérer uniquement le build depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]