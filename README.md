# Cactus 🌵

Application web pour couples à distance.

## Objectif

Créer une app où deux partenaires peuvent jouer à des mini-jeux pour se découvrir, comparer leurs réponses et discuter.

## V1

- [x] Écran accueil
- [x] Écran pseudo
- [x] Écran espace couple
- [x] Dashboard
- [x] Mode Classements
- [x] Chargement depuis JSON
- [x] Drag & drop en swap
- [x] Sauvegarde locale
- [ ] Firebase Auth
- [ ] Vrais espaces couple
- [ ] Comparaison avec partenaire
- [ ] Version mobile / PWA

## Structure

```txt
css/
  style.css

data/
  rankings.json
  questions.json
  green-red-flags.json
  guess-my-answer.json
  ok-pas-ok.json
  princess-treatment.json
  who-is-most-likely.json

js/
  script.js
  screens.js
  utils.js
  storage.js
  rankings.js
  questions.js
```

## Notes

Pour tester en local, utiliser Live Server dans VS Code.

Plus tard, le projet pourra devenir une PWA installable sur téléphone, puis éventuellement une vraie app mobile avec Capacitor ou React Native.
