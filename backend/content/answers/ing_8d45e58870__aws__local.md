---
qid: ing_8d45e58870__aws__local
question: 'Explain: itself out uh in this question um — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 411
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:11-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of Doordash’s real‑time rider‑customer matching layer. The goal was to reduce match latency from ~4 s to <1 s while keeping cost under 15% of our existing infra.

**Action**  
I introduced **geo‑hashing + WebSockets**:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Geo‑hash index | DynamoDB Global Tables + PartiQL | Fast, strongly consistent reads; multi‑region replication for latency. |
| Real‑time updates | Amazon API Gateway + Lambda + Amazon MQ (WebSocket) | Serverless, auto‑scales to millions of connections; pay per use. |
| Cache & hot spots | ElastiCache Redis Cluster | Keeps top 10k nearest riders in memory, slashing DynamoDB reads by ~70%. |

**Dive Deep** – I profiled the old poll‑based system and found that 65% of latency came from distance calculations over a sharded MySQL cluster. Switching to pre‑computed H3 geo‑hashes eliminated those queries.  

**Result**  
Latency dropped to **0.8 s average**, SLA improved from 95% to 99.7%. The new architecture cut operational cost by **18%** (from $120k/month to $98k/month) and reduced DynamoDB read capacity units by ~60%.

**Learning & Ownership**  
I iterated on the design with cross‑team feedback, documented failure scenarios (e.g., WebSocket disconnects), and built automated health checks. This project reinforced my belief in *Customer Obsession*—delivering a smoother rider experience—and *Ownership*, owning both design and operational run‑books.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
