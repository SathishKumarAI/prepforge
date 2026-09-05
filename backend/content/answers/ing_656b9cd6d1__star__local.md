---
qid: ing_656b9cd6d1__star__local
question: 'Explain: Setting Up a Reverse Proxy with Nginx — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 387
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:36-05:00'
sources: []
---

**Situation** – At my previous startup we were migrating our monolithic Rails app to a micro‑service architecture. The front‑end React bundle was served from an S3 bucket while the API lived behind a Node.js cluster on EC2. When we hit load testing, users complained of CORS errors and slow TLS handshakes because every request went directly to the backend.

**Task** – I needed to expose a single HTTPS endpoint that would route traffic to the correct service, terminate SSL, compress responses, and cache static assets—all without rewriting URLs in client code.

**Action** – I installed Nginx on an Elastic Load Balancer instance. First, I created two server blocks: one for `api.example.com` pointing to the Node cluster via `proxy_pass http://backend_cluster;`, adding headers (`X-Real-IP`, `X-Forwarded-For`) and setting a 30‑second timeout. For static content, I used `location /static/ { root /var/www/static; try_files $uri $uri/ =404; }` to serve files directly from the EC2 instance. I also enabled gzip (`gzip on; gzip_types text/css application/javascript;`) and set up a reverse proxy cache with `proxy_cache_path /tmp/nginx-cache levels=1:2 keys_zone=mycache:10m max_size=100m;`.

**Result** – After deployment, TLS handshake times dropped from 350 ms to under 80 ms, API latency decreased by 40%, and the number of CORS errors vanished. The caching layer reduced backend load by ~25%. I learned how a well‑configured reverse proxy can unify diverse services while improving performance and security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
