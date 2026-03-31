# Incoming templates

Depose ici les templates a retravailler avant integration dans le showroom public.

## Ou mettre les fichiers

- Un template par dossier :
  - `site/showroom/_incoming/nom-du-template/`
- Le dossier doit contenir au minimum :
  - `index.html`
  - les sous-dossiers d'assets du template (`css/`, `js/`, `images/`, `img/`, etc.)

## Recommandation

- Garde le template brut ici, sans ecraser un template deja visible dans `site/showroom/`.
- Si tu as un zip, tu peux le deposer ici ou l'extraire directement dans un dossier dedie.
- Utilise un nom de dossier propre en kebab-case :
  - `artisan-bakery-light`
  - `coach-premium-onepage`
  - `plombier-local-pro`

## Workflow

1. Tu depose le template dans `_incoming/`.
2. Je l'adapte au positionnement et au prompt.
3. Je l'integre ensuite dans `site/showroom/<slug>/`.
4. Je mets a jour :
   - `site/showroom/index.html`
   - `site/index.html`

## Important

Le dossier `_incoming/` sert de zone de depot.
Les templates visibles par les visiteurs restent dans `site/showroom/`.
