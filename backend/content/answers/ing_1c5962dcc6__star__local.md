---
qid: ing_1c5962dcc6__star__local
question: 'Explain: Real-World Example of a Reverse Proxy — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 329
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:01-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an internal analytics dashboard that had to serve both internal staff and external partners. The public-facing API was hosted on a legacy server running an older version of Node, while the secure partner portal ran on a newer micro‑service stack in Docker. Traffic spikes during quarterly reporting caused the public server to time out for partner requests.

**Task:**  
I needed to create a seamless routing layer that would forward partner traffic to the new service without exposing internal URLs or changing existing client code, all while keeping SSL termination and load balancing.

**Action:**  
I set up NGINX as a reverse proxy on our edge router. Using `proxy_pass` I mapped `/partner/*` requests to `http://docker‑cluster:8080/partner`. I added header rewrites (`add_header X-Forwarded-For $remote_addr;`) and configured health checks so traffic would automatically shift back if the micro‑service failed. For public users, a standard forward proxy was already in place on an internal gateway; I kept that unchanged. The reverse proxy also handled TLS termination, caching static assets, and rate limiting for partner calls.

**Result:**  
Load times for partner requests dropped from 8 s to under 200 ms, and the error rate fell by 95%. The solution was fully automated with Docker Compose and Terraform, giving us a single point of control for both proxy types. I learned that choosing the right proxy model can dramatically improve performance while keeping infrastructure simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
