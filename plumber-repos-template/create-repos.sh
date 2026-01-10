#!/bin/bash

# Create Plumber Website Repositories
# This script creates all 8 plumber website repos on GitHub
# Requires: GitHub CLI (gh) authenticated

set -e

# Configuration
GITHUB_ORG="WebFoundryAI"
TEMPLATE_DIR="$(dirname "$0")"

# List of domains (one repo each)
DOMAINS=(
    "bristolemergencyplumber.co.uk"
    "nottinghamplumberservices.co.uk"
    "stockportplumbercheshire.co.uk"
    "stokeplumbersandboilers.co.uk"
    "bath-plumbers.co.uk"
    "chesterplumbernearme.co.uk"
    "greatyarmouthplumbers.co.uk"
    "plumberspoole.co.uk"
)

echo "==================================="
echo "Plumber Website Repository Creator"
echo "==================================="
echo ""

# Check for GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Install it from: https://cli.github.com/"
    exit 1
fi

# Check authentication
if ! gh auth status &> /dev/null; then
    echo "Error: GitHub CLI is not authenticated."
    echo "Run: gh auth login"
    exit 1
fi

echo "Authenticated with GitHub. Creating repositories..."
echo ""

# Create each repository
for domain in "${DOMAINS[@]}"; do
    echo "----------------------------------------"
    echo "Creating repository: $domain"
    echo "----------------------------------------"

    # Create temp directory
    REPO_DIR="/tmp/$domain"
    rm -rf "$REPO_DIR"
    cp -r "$TEMPLATE_DIR" "$REPO_DIR"

    # Remove this script from the copy
    rm -f "$REPO_DIR/create-repos.sh"

    # Customize README
    sed -i "s/\[domain-name\]/$domain/g" "$REPO_DIR/README.md"

    # Create repo on GitHub (private by default, use --public for public)
    if gh repo view "$GITHUB_ORG/$domain" &> /dev/null; then
        echo "Repository already exists, skipping creation..."
    else
        gh repo create "$GITHUB_ORG/$domain" --private --description "Plumber website for $domain"
        echo "Repository created successfully."
    fi

    # Initialize and push
    cd "$REPO_DIR"
    git init
    git add -A
    git commit -m "Initial commit: plumber website template for $domain"
    git branch -M main
    git remote add origin "https://github.com/$GITHUB_ORG/$domain.git"
    git push -u origin main

    echo "✓ $domain completed"
    echo ""

    # Cleanup
    cd /tmp
    rm -rf "$REPO_DIR"
done

echo "==================================="
echo "All repositories created!"
echo "==================================="
echo ""
echo "Repositories created:"
for domain in "${DOMAINS[@]}"; do
    echo "  - https://github.com/$GITHUB_ORG/$domain"
done
echo ""
echo "Next steps:"
echo "1. Enable GitHub Pages on each repository"
echo "2. Configure custom domains"
echo "3. Update content for each location"
