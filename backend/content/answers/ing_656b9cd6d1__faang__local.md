---
qid: ing_656b9cd6d1__faang__local
question: 'Explain: Setting Up a Reverse Proxy with Nginx — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 486
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:10-05:00'
sources: []
---

**Setting Up an NGINX Reverse Proxy – Quick‑Start Guide**

| Section | What I’ll Cover |
|---------|----------------|
| **Clarify** | We’re asked how to spin up a reverse proxy with NGINX and differentiate it from a simple forward proxy. |
| **Approach** | 1️⃣ Outline the architecture. <br>2️⃣ Show minimal config snippets. <br>3️⃣ Explain the role of each directive. |
| **Depth** | A *reverse* proxy sits in front of one or more backend services (e.g., `app.local:3000`) and forwards client requests to them, hiding internal structure and providing load‑balancing, SSL termination, caching, etc. A *forward* (regular) proxy sits between the client and any server it connects to; it is used by clients to route outbound traffic. <br>**NGINX config:**<br>`server { listen 80; server_name api.example.com; location / { proxy_pass http://app.local:3000; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } }` <br>This forwards all `/` requests to the backend while preserving headers. |
| **Edge Cases** | • Backend downtime → use `proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504`. <br>• Slow clients → enable `client_body_timeout`, `send_timeout`. <br>• SSL termination → add `listen 443 ssl; ssl_certificate …`. |
| **Optimize & Communicate** | • Add health‑check via `proxy_intercept_errors` and custom error pages. <br>• For high traffic, use `upstream` block with `least_conn` or `round_robin`. <br>Explain that reverse proxies help scale, secure, and isolate services—key for production systems at FAANG. |

**TL;DR:** A reverse proxy like NGINX forwards incoming requests to internal servers, handling SSL, load‑balancing, and caching, whereas a forward proxy routes outbound traffic from clients. Use `proxy_pass` plus header directives for basic setup, then layer health checks and load‑balancing as needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
