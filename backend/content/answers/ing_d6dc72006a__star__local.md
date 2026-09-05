---
qid: ing_d6dc72006a__star__local
question: 'Explain: Access OpenSearch Dashboards using the NGINX proxy and set it
  up for embedding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 450
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:23-05:00'
sources: []
---

**Situation** – At my last company we were rolling out a new customer‑facing analytics portal that needed to embed OpenSearch Dashboards charts within our existing React SPA. The dashboards were running on port 5601 behind a corporate firewall, and the team required secure, single‑sign‑on access via our internal NGINX reverse proxy.

**Task** – I had to expose the Dashboards UI through NGINX, configure path rewrites so all assets loaded correctly, enable OAuth2 integration with Okta for SSO, and ensure the embedded iframe could communicate securely with the parent app without leaking credentials.

**Action** – I started by editing `/etc/nginx/conf.d/opensearch.conf`, adding a `location /dashboards/` block that proxies to `http://opensearch-dashboards:5601`. I used the `sub_filter` module to rewrite all URLs from `/app/*` to `/dashboards/app/*` and added `proxy_set_header X-Forwarded-For $remote_addr;` for proper client IP logging. For authentication, I installed the Okta OIDC plugin on NGINX, set up a new realm in OpenSearch Dashboards (`opensearch_security.auth.type: oidc`) and mapped the Okta group to the `admin` role. Finally, I configured CORS headers (`Access-Control-Allow-Origin: https://myapp.company.com`) so the iframe could postMessage back to the parent without cross‑origin errors.

**Result** – The dashboards were accessible at `https://portal.company.com/dashboards/`, loading in under 1 s with all visualizations rendering correctly. We saw a 30% reduction in support tickets related to “broken links” and earned a 4.5/5 rating from the product team for seamless integration. I learned how to combine NGINX path rewriting, OIDC SSO, and CORS to embed complex analytics tools securely within a larger application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
