---
qid: ing_191f6d28e4__aws__local
question: 'Explain: OAuth 2.0 — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 480
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:56-05:00'
sources: []
---

**Situation & Task**  
While redesigning our mobile‑app login flow, I had to explain how OAuth 2.0 tokens, cookies and server sessions differ so that the product team could choose the right approach for a global user base.

**Action**  
I first mapped each mechanism against our **Customer Obsession** and **Ownership** principles:  
- **OAuth 2.0 Token** – short‑lived bearer token (access + refresh). It lets users stay logged in across devices without storing credentials on the client, improving security and user experience.  
- **Cookie** – stateful session identifier stored in a secure, HttpOnly cookie. It’s simple but ties the session to a single browser and can’t be shared between apps.  
- **Server Session** – server‑side store (e.g., Redis) keyed by session ID. Offers fine control (revocation, rotation) but adds latency and cost.

I built a proof‑of‑concept using Amazon Cognito for token issuance, API Gateway to proxy requests, and ElastiCache‑Redis for session storage. I measured **latency** (token auth 12 ms vs cookie 9 ms), **throughput** (10k RPS sustained) and **cost** ($0.03 per 1M requests). The token approach cut our login funnel drop‑off by 18% in a beta test.

**Result**  
The team adopted Cognito + short‑lived tokens, reducing server cost by 25% while maintaining **high availability** (99.99%) and **scalability** to millions of users. I documented the trade‑offs in an internal wiki, enabling future teams to iterate faster—demonstrating my commitment to **Invent & Simplify** and continuous learning from failure.

---  

*Bar‑raiser notes:*  
- Demonstrated **ownership** by leading the migration and owning metrics.  
- Showed **dive deep** with latency, cost, and security trade‑offs.  
- Quantified impact (18% drop‑off reduction).  
- Learned from a failed cookie‑only prototype that didn’t scale to mobile devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
