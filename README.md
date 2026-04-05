# Ma Vitrine Online

Site vitrine principal de `Ma Vitrine Online` avec une home bilingue FR/EN, un showroom de templates multi-activite et les pages legales minimales.

## Etat actuel

- production en ligne sur `https://mavitrine.online`
- home agence finalisee
- showroom finalise avec 6 categories
- templates showroom personnalises pour la marque
- deploiement VPS via script dedie

## Structure utile

- `site/`
  site public deploye
- `site/assets/`
  branding, images, CSS et JS globaux
- `site/showroom/`
  showroom public + templates adaptes
- `site/showroom/_incoming/`
  zone de depot pour nouveaux templates avant adaptation
- `08-devops/deploy/vps_update.sh`
  script de deploiement VPS

## Showroom

Le showroom est organise en 6 categories:

- Food
- Professional Services
- Beauty & Wellness
- Local Services
- Business & Freelance
- Events & Venues

Les textes de la page showroom et le catalogue des templates sont centralises dans:

- `site/showroom/shared/showroom-content.js`

La page showroom principale est:

- `site/showroom/index.html`

## Langues

- la home supporte `?lang=fr` et `?lang=en`
- le showroom supporte `?lang=fr` et `?lang=en`
- les liens home <-> showroom gardent la langue courante

## Ajouter un nouveau template

1. deposer le template brut dans `site/showroom/_incoming/`
2. l adapter au branding `Ma Vitrine Online`
3. l integrer dans `site/showroom/<slug>/`
4. ajouter son entree dans `site/showroom/shared/showroom-content.js`
5. verifier la categorie, les images preview et les liens `Open demo` / `View brief`

## Deploiement

Depuis le repo:

```bash
cd /mnt/data/restaurants/mavitrine-online
git push origin main
```

Puis sur le VPS:

```bash
cd /opt/deploy/mavitrine-online
bash 08-devops/deploy/vps_update.sh
```

## Nettoyage

Les anciens fichiers de travail temporaires utilises pendant la refonte showroom ont ete retires du repo. Le dossier `notes/` n est plus utilise pour la version finale.
