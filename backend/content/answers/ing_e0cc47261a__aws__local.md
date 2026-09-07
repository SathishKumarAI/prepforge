---
qid: ing_e0cc47261a__aws__local
question: 'Explain: Solution — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:37-05:00'
sources: []
---

**Situation & Task**  
I was tasked with exposing a real‑time recommendation engine to multiple front‑end apps (web, iOS, Android) while keeping latency <50 ms and scaling to 10M daily users.

**Action – API Gateway + Backends for Frontends (BFF)**  
* **API Gateway**: Wrote a single entry point per region, enabled caching (TTL = 30 s), throttling (5 req/s/user) and JWT validation.  
* **Backend‑for‑Frontend services**: Implemented three lightweight Lambda functions (`WebBff`, `iOSBff`, `AndroidBff`) that aggregate data from the recommendation microservice, user profile store (DynamoDB), and feature flag service (AppConfig). Each BFF formats responses to match its client’s expectations, eliminating over‑fetching on the front end.  
* **Observability**: Integrated CloudWatch metrics & X-Ray traces; set alarms for >80 ms latency.

**Result**  
- Reduced average round‑trip time from 120 ms to **42 ms** (45% improvement).  
- Cut API calls per user by **70 %**, lowering backend compute cost by **$12k/month**.  
- Achieved 99.9 % availability during a sudden 2× traffic spike.

**Leadership Principles Highlighted**  
*Customer Obsession*: Tailored responses to each client’s UX, improving satisfaction scores by 15%.  
*Ownership & Dive Deep*: Tracked every metric, iterated on cache strategy, and learned that a 30‑s TTL balanced freshness vs cost.  

**Bar‑raiser Takeaway**  
Demonstrated end‑to‑end ownership, deep technical reasoning (caching, throttling, Lambda concurrency), quantifiable impact, and lessons from early latency spikes—exactly what the interview panel looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
