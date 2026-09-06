---
qid: ing_d6dc72006a__fp__local
question: 'Explain: Access OpenSearch Dashboards using the NGINX proxy and set it
  up for embedding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 720
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:53-05:00'
sources: []
---

**Why a reverse proxy is the right solution**

OpenSearch Dashboards (OSD) listens on its own port and expects requests that originate from `localhost` or an explicitly whitelisted host. Exposing it directly to the internet would violate the *principle of least privilege*: the dashboard should be reachable only through a controlled entry point, not as a stand‑alone service. A reverse proxy such as NGINX solves this by:

1. **Port unification** – all traffic arrives on standard HTTP/HTTPS ports (80/443).
2. **Access control** – you can enforce TLS termination, client authentication, and IP whitelisting before the request even reaches OSD.
3. **Path rewriting** – requests to `/opensearch-dashboards/*` are transparently forwarded to `localhost:5601`, keeping internal URLs unchanged.

**Step‑by‑step set‑up**

| Step | Action | Why |
|------|--------|-----|
| 1 | Install NGINX and obtain a TLS cert (e.g. Let’s Encrypt). | Secure the tunnel; OSD only accepts HTTPS in production. |
| 2 | Create `/etc/nginx/conf.d/opensearch.conf` with: |
```
server {
    listen 443 ssl;
    server_name dashboards.example.com;

    ssl_certificate /etc/ssl/fullchain.pem;
    ssl_certificate_key /etc/ssl/privkey.pem;

    location /opensearch-dashboards/ {
        proxy_pass http://localhost:5601/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_http_version 1.1;
        proxy_request_buffering off;   # keep WebSocket alive
    }
}
```
| 3 | Reload NGINX (`nginx -s reload`). | Apply the config. |
| 4 | Test access: `https://dashboards.example.com/opensearch-dashboards/`. | Should display OSD UI. |

**Embedding in another web app**

1. **CORS / CSP** – In your host application, add a frame‑busting header or use an `<iframe>` with `src="https://dashboards.example.com/opensearch-dashboards/"`.  
2. **Same‑origin policy** – Because the iframe shares the same domain (`dashboards.example.com`), you can communicate via postMessage if needed.  
3. **Security hardening** – Set `X-Frame-Options: SAMEORIGIN` and a restrictive CSP (`frame-src 'self' https://dashboards.example.com;`) to prevent click‑jacking.

**Non‑obvious insight**

Most people forget that OSD’s internal API endpoints are *not* automatically prefixed with `/opensearch-dashboards/`. When embedding, you must also rewrite the `basePath` in `opensearch_dashboards.yml` (e.g., `server.basePath: /opensearch-dashboards`) so all asset URLs resolve correctly inside the iframe. Without this, the dashboard will load but subsequent AJAX calls fail with 404s.

This configuration gives you a single, auditable gateway to OSD while preserving its internal security assumptions and enabling seamless embedding in external portals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
