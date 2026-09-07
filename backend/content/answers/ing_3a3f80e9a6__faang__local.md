---
qid: ing_3a3f80e9a6__faang__local
question: 'Explain: HTTP/2 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:46-05:00'
sources: []
---

**Clarify**  
You’re asking how HTTP/2 differs from the classic HTTP/1.x (and HTTPS) stack and what that implies for system design. I’ll assume you want an overview of protocol changes, benefits for web‑app backends, and a quick sketch of architectural adjustments.

**Approach**  
1. List key differences in wire format & semantics.  
2. Explain performance gains (latency, multiplexing).  
3. Translate those gains into system‑level design choices: load balancers, TLS offload, caching, monitoring.  

**Depth**  
- **Binary framing** vs text frames → easier parsing, lower CPU cost.  
- **Header compression (HPACK)** → fewer bytes for repeated headers.  
- **Multiplexed streams** on a single TCP/TLS connection → no head‑of‑line blocking; simultaneous GET/POST without new connections.  
- **Server push** allows pre‑sending resources.  
- **TLS mandatory**: HTTPS is the only supported mode, so TLS termination moves to edge or dedicated proxies.  

*Design impact*:  
- Edge load balancers must support HTTP/2 (ALPN).  
- Application servers can keep a single persistent connection per client, reducing connection churn.  
- Caching layers need to understand stream IDs for push handling.  
- Monitoring tools must expose stream‑level metrics (latency, flow control windows).

**Edge Cases**  
- Legacy browsers or proxies that drop HTTP/2 → fallback to HTTP/1.1.  
- Large header tables can explode memory if not capped.  
- Push may send unused data; need policy controls.

**Optimize & Communicate**  
I’d highlight that migrating to HTTP/2 reduces connection overhead by ~70 % and cuts page load times by 30–50 %. I’d suggest a staged rollout: enable ALPN on CDN, test with key clients, then deprecate HTTP/1.1 support. This shows clear trade‑offs (TLS cost vs multiplexing) while keeping the answer concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
