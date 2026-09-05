---
qid: ing_7896507ba0__eli5__local
question: 'Explain: How TLS Works — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 279
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:46-05:00'
sources: []
---

Think of TLS (Transport Layer Security) as a secure post‑office for web traffic.  
When you visit a site with HTTPS, your browser is the sender and the server is the receiver.  

1. **Handshake (the “letter” exchange)** – The two sides first share a short “handshake note.” They agree on which encryption method to use (like choosing a lock type).  
2. **Certificate (proof of identity)** – The server shows its digital ID card, signed by a trusted authority (a post‑office certificate). Your browser checks this ID against a list it already trusts; if it matches, you know the server is who it says it is.  
3. **Session key (the secret envelope)** – After trust, they agree on a one‑time secret key, hidden inside that handshake note. This key will lock and unlock all data that travels between them for this visit—just like sealing an envelope with a unique wax stamp.  

All subsequent HTTP messages travel through this encrypted tunnel; even if someone intercepts the packets, without the session key they read nothing. Thus TLS keeps your web traffic private and authentic, just as a secure post‑office keeps mail safe from prying eyes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
