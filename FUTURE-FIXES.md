# Future Fixes

## Medium Priority

- **API keys in Git history** – `GETADDRESS_API_KEY` and `GOOGLE_MAPS_API_KEY` are in `.env` and `netlify.toml` which are tracked. Rotate keys and set them only via hosting platform UI.
- **`.env` not in `.gitignore`** – Only `.env.local` is excluded. Add `.env` to `.gitignore`.
- **CSP mismatch between `netlify.toml` and `vercel.json`** – Vercel CSP is missing Google Analytics/GTM in `connect-src`. Align both policies.
- **No postcode lookup tests** – Lead API has good test coverage (170 tests), but postcode lookup functions have none.

## Low Priority

- **Missing skip-to-content link** – No skip link for keyboard users to jump past header navigation.
- **`wrangler.toml` has empty `account_id`/`zone_id`** – Only matters if deploying the Cloudflare Worker.
- **XSS in address dropdown text** – `a.line` from the getAddress.io API isn't HTML-escaped when injected via `innerHTML`. Low real-world risk since the API is trusted.
- **In-memory rate limiting resets on function restart** – Standard for serverless; acceptable for current traffic level. Consider persistent store (Redis/Supabase) if traffic grows.
- **Phone validation too loose** – Frontend only checks for 10+ digits. Could use a proper UK phone number regex.
- **No CSRF protection on forms** – Forms don't include CSRF tokens. Low risk since API is same-origin with no auth cookies.
