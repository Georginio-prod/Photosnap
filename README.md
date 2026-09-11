# Photosnap — Site multi-pages (Frontend Mentor)

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-3F54A3)

🔗 **Démo en ligne** : <https://photosnap-tau-blush.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/Photosnap>
🎯 **Défi** : [Photosnap multi-page website](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW) (niveau *Advanced*)

---

## 📌 Présentation

Site vitrine de **Photosnap**, plateforme fictive de partage de photos : 4 pages
(Accueil, Stories, Features, Pricing) au design très visuel (grandes photographies,
sections alternées image / texte, dégradé signature sur les titres).

Le défi est classé *Advanced* : il combine **routing multi-pages**, **grilles d'images
responsives**, **toggle de prix** et **tableau comparatif** des formules.

## ✨ Fonctionnalités

- **Accueil** : sections alternées texte / image plein écran, grille de « stories » avec effet *hover*, liste de fonctionnalités.
- **Stories** (`/StoriesView`) : histoire mise en avant + grille de 16 cartes avec dates, auteurs et lien « Read Story ».
- **Features** (`/FeaturesView`) : présentation des 6 fonctionnalités clés.
- **Pricing** (`/PricingView`) : toggle mensuel / annuel, 3 formules, tableau comparatif « Compare » responsive.
- Navigation commune (navbar + footer) et menu mobile.

## 🛠️ Stack

Vue 3 · Vue Router 4 · Vite 5 · Tailwind CSS 3.

## 📁 Structure

```
Photosnap/
├── src/
│   ├── App.vue · main.js · assets/main.css
│   ├── router/index.js       # /, /StoriesView, /FeaturesView, /PricingView
│   ├── views/                # HomeView, StoriesView, FeaturesView, PricingView
│   └── components/
│       ├── navView.vue · menuView.vue · footerView.vue
│       ├── storView.vue      # Grille de stories
│       ├── featView.vue      # Liste de fonctionnalités
│       └── priView.vue       # Formules + tableau comparatif
├── public/                   # Photos (mobile / tablet / desktop)
└── tailwind.config.js · vite.config.js
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/Photosnap.git
cd Photosnap
npm install
npm run dev
```

## 🌐 Déploiement

Déployé sur **Vercel**. Aucune configuration nécessaire.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
