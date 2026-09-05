---
qid: ing_1c5962dcc6__fp__local
question: 'Explain: Real-World Example of a Reverse Proxy — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 420
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:06:14-05:00'
sources: []
---

**Reverse‑proxy in action**

Suppose an e‑commerce site has three services:

| Service | Host / Port |
|---------|-------------|
| Frontend UI | `app.example.com:80` |
| API server | `api.internal:3000` |
| Image CDN | `img.internal:443` |

A **reverse proxy** (e.g., Nginx, HAProxy) sits at the edge (`example.com`) and forwards every incoming request to the appropriate backend based on URL or header.  

1. A browser requests `https://www.example.com/products/42`.  
2. The reverse proxy receives the TLS handshake, decrypts it, then routes the path `/products/42` to `api.internal:3000`.  
3. Responses are re‑encrypted and sent back to the client.

**Why this design works**

- **Security & Isolation** – Backends never expose public IPs; only the proxy is reachable.  
- **Load Balancing** – The proxy can distribute identical requests across several API instances, optimizing throughput (a classic *minimisation* of response latency).  
- **Protocol Translation** – It can accept HTTP/2 from clients and speak plain HTTP to backends, or terminate TLS, thereby reducing computational load on services.  

A **forward proxy** does the opposite: it sits between a client and the internet, hiding the client’s identity. The reverse proxy is invisible to end users; it merely *reverse‑maps* incoming traffic to internal services.

**Non‑obvious insight:**  
Many think a reverse proxy merely “forwards” requests. In reality, it performs **stateless routing**—each request contains all context (URL, headers). This statelessness allows the proxy to be horizontally scaled with minimal coordination, turning what could be a bottleneck into an *optimisation* point that can itself be replicated for fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
