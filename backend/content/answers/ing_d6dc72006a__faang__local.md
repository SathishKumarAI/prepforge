---
qid: ing_d6dc72006a__faang__local
question: 'Explain: Access OpenSearch Dashboards using the NGINX proxy and set it
  up for embedding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 613
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:58:54-05:00'
sources: []
---

**Clarify**

You’re asked to expose an **OpenSearch Dashboard** instance through an **NGINX reverse‑proxy** so that the UI can be embedded (e.g., via an iframe or component).  
Key assumptions:  
1. OpenSearch is running on a known host/port (`opensearch.example.com:5601`).  
2. NGINX has root access and SSL termination will be handled externally.  
3. The embedding client can send `POST` requests (for authentication) and expects the dashboard to load in a sub‑origin.

**Approach**

1. Configure NGINX as a reverse proxy (`location /dash/`).  
2. Add CORS & security headers (`Access-Control-Allow-Origin`, `X-Frame-Options: SAMEORIGIN`).  
3. Proxy‑pass to OpenSearch and forward the original host header.  
4. Enable WebSocket support for real‑time data streams.  
5. Optionally, inject a small JavaScript snippet that rewrites internal URLs (e.g., `/app/dashboards/` → `/dash/app/dashboards/`) so resources resolve correctly when embedded.

**Depth**

```nginx
server {
    listen 443 ssl;
    server_name dashboards.example.com;

    # SSL certs omitted for brevity

    location /dash/ {
        proxy_pass https://opensearch.internal:5601/;   # internal OpenSearch endpoint
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        add_header X-Frame-Options SAMEORIGIN;
        add_header Access-Control-Allow-Origin https://app.example.com;
        # rewrite relative paths
        sub_filter '/app/' '/dash/app/';
        sub_filter_once off;
    }
}
```

*Complexity*: O(1) per request; NGINX handles concurrency natively.  
*Trade‑offs*: Tight coupling to path structure; any UI changes in OpenSearch require re‑substitution.

**Edge Cases**

- **Authentication**: If dashboards use Basic/Digest, add `proxy_set_header Authorization` or a custom login endpoint.
- **WebSocket timeouts**: Ensure `proxy_read_timeout` is long enough for Kibana‑style websockets.
- **Cross‑origin scripts**: Scripts loaded from the dashboard may block if not whitelisted.

**Optimize & Communicate**

- Cache static assets (`expires 1d;`) to reduce backend load.  
- Use a separate sub‑domain for dashboards (`dashboards.example.com`) to isolate cookies and CSP.  
- Log proxy metrics (latency, errors) to detect issues early.  

Explain that this setup keeps the OpenSearch cluster internal while allowing safe embedding, meeting security & performance goals typical of a FAANG stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
