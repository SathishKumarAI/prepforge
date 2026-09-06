---
qid: ing_656b9cd6d1__fp__local
question: 'Explain: Setting Up a Reverse Proxy with Nginx — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 544
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:40:46-05:00'
sources: []
---

**Why a reverse proxy is indispensable**

When an HTTP client sends a request it addresses a *hostname* and port.  
A **proxy** sits between the client and *any* upstream server: it receives the
client’s request, forwards it (optionally modifying headers), and returns the
upstream response back to the client. The client still “knows” the target host.

In contrast, a **reverse proxy** hides the set of backend servers from the
client. The client talks only to the reverse‑proxy hostname; the proxy decides,
often based on URL or load‑balancing logic, which internal server actually
serves the request. The upstream servers are invisible to the client.

---

### Example: a single public domain for many services

| Client → | Reverse Proxy (nginx) | Backend |
|----------|-----------------------|---------|
| `GET /api/v1/users` | routes to `http://10.0.0.2:8000` |
| `GET /static/…`      | serves from local `/var/www/static` |

The client never sees the internal IPs; the reverse proxy can terminate TLS,
add rate‑limiting, or rewrite URLs—all while keeping the backend architecture
flexible.

---

### Deeper principle

A reverse proxy embodies **information hiding**: it presents a *single* interface
to clients while delegating to multiple specialized services. This mirrors
encapsulation in software design and reduces coupling between client and
backend evolution.

**Non‑obvious insight:**  
Because the reverse proxy can rewrite *Host* headers, it can also enable
**multitenancy on a single IP**: different subdomains or URL prefixes map to
different internal applications without extra DNS records. This is often overlooked
when people think of proxies only as TLS terminators or load balancers.

---

#### Nginx configuration snippet

```nginx
server {
    listen 80;
    server_name api.example.com;

    location /api/ {
        proxy_pass http://10.0.0.2:8000;   # backend
        proxy_set_header Host $host;
    }

    location /static/ {
        alias /var/www/static/;
    }
}
```

The `proxy_pass` directive implements the reverse‑proxy logic, while `alias`
serves static files directly—illustrating how a single reverse‑proxy can juggle
multiple roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
