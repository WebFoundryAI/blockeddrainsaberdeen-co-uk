# Deployment Guide: 8 Plumber Website Repositories

This guide explains how to create all 8 separate GitHub repositories for the plumber websites.

## Target Repositories

| # | Domain | GitHub URL |
|---|--------|------------|
| 1 | bristolemergencyplumber.co.uk | github.com/WebFoundryAI/bristolemergencyplumber.co.uk |
| 2 | nottinghamplumberservices.co.uk | github.com/WebFoundryAI/nottinghamplumberservices.co.uk |
| 3 | stockportplumbercheshire.co.uk | github.com/WebFoundryAI/stockportplumbercheshire.co.uk |
| 4 | stokeplumbersandboilers.co.uk | github.com/WebFoundryAI/stokeplumbersandboilers.co.uk |
| 5 | bath-plumbers.co.uk | github.com/WebFoundryAI/bath-plumbers.co.uk |
| 6 | chesterplumbernearme.co.uk | github.com/WebFoundryAI/chesterplumbernearme.co.uk |
| 7 | greatyarmouthplumbers.co.uk | github.com/WebFoundryAI/greatyarmouthplumbers.co.uk |
| 8 | plumberspoole.co.uk | github.com/WebFoundryAI/plumberspoole.co.uk |

---

## Method 1: Automated Script (Recommended)

### Prerequisites
1. Install GitHub CLI: https://cli.github.com/
2. Authenticate: `gh auth login`

### Run the Script
```bash
cd plumber-repos-template
chmod +x create-repos.sh
./create-repos.sh
```

The script will:
- Create all 8 repositories on GitHub
- Initialize each with the template files
- Push to main branch

---

## Method 2: Manual Creation

For each domain, run these commands:

```bash
# Example for bristolemergencyplumber.co.uk
DOMAIN="bristolemergencyplumber.co.uk"

# Create repo on GitHub
gh repo create WebFoundryAI/$DOMAIN --private

# Clone and add files
git clone https://github.com/WebFoundryAI/$DOMAIN.git
cp -r plumber-repos-template/* $DOMAIN/
rm $DOMAIN/create-repos.sh $DOMAIN/DEPLOYMENT.md
cd $DOMAIN
git add -A
git commit -m "Initial commit: plumber website template"
git push origin main
```

Repeat for all 8 domains.

---

## Post-Deployment: Enable GitHub Pages

For each repository:

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Click **Save**

### Custom Domain Setup

1. In **Settings** → **Pages**, enter your domain
2. Add DNS records at your registrar:

**A Records (root domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (www):**
```
webfoundryai.github.io
```

---

## Customization Per Domain

After creating repos, customize each site:

1. **Update `index.html`:**
   - Business name
   - Phone number
   - Local area references
   - Canonical URL

2. **Update `sitemap.xml`:**
   - Replace `example.com` with actual domain

3. **Update `robots.txt`:**
   - Replace `example.com` with actual domain

4. **Add images:**
   - `images/favicon.ico`
   - `images/og-image.jpg` (1200x630px)
   - `images/logo.png`

5. **Update Schema.org data in `index.html`:**
   - Business name
   - Address
   - Phone number
   - Coordinates

---

## Repository Structure

Each repository contains:

```
/
├── pages/
│   ├── services.html
│   ├── areas.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
├── images/
│   └── .gitkeep
├── data/
│   └── services.json
├── seo/
│   └── meta-templates.json
├── schemas/
│   ├── local-business.json
│   └── service.json
├── assets/
│   └── css/
│       └── style.css
├── index.html
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## Technical Specifications

- **Type:** Static HTML/CSS
- **Frameworks:** None (pure HTML/CSS)
- **Hosting:** GitHub Pages compatible
- **SSL:** Free via GitHub Pages
- **CDN:** GitHub's global CDN

---

## Need Help?

Contact the WebFoundryAI team for support with deployment or customization.
