# Saqeel Resources

A static website that centralizes Saqeel Youth Development Association resources, with a Decap CMS admin panel for content updates.

## Overview

The home page routes users to these resource sections:

- **Association Data** (`data.html`): official association documents.
- **Visual Identity** (`identity.html`): logos and identity assets.
- **Projects** (`projects.html`): project entries with per-project files in collapsible sections.
- **Social Media** (`social-media.html`): official social links with quick copy actions.

## Tech Stack

- **Frontend:** HTML + CSS + Vanilla JavaScript
- **Content Management:** Decap CMS
- **Authentication/Admin:** Netlify Identity + Git Gateway
- **Hosting/Deployment:** GitHub + Netlify

## Data Model

Dynamic pages read JSON files in `data/`:

- `data/association.json` for association files (`files_list`)
- `data/identity.json` for identity files (`files_list`)
- `data/projects.json` for projects (`projects_list` and nested `project_files`)

> Note: `data/files.json` and `assets/js/main.js` are part of an older structure; current pages actively use the three files above.

## CMS

- Path: `admin/`
- Config: `admin/config.yml`
- Configured branch: `master`

Editors can upload files and update content through the CMS, and changes are committed back to the repository.

## Project Structure

```text
saqeel-resources/
├── admin/
│   ├── index.html
│   └── config.yml
├── assets/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── uploads/
├── data/
│   ├── association.json
│   ├── identity.json
│   ├── projects.json
│   └── files.json
├── index.html
├── data.html
├── identity.html
├── projects.html
└── social-media.html
```

## Local Development

No build step is required:

1. Clone the repository
2. Open it in your editor
3. Run any local static server (e.g., Live Server)

## Deployment

Deployment is handled by Netlify. Updates pushed to the configured branch are published automatically.
