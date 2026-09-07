---
qid: ing_775a3524fb__aws__local
question: 'Explain: Instead, it uses a GraphQL schema. We — What Is GraphQL? REST
  vs. GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 366
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:59-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*  

During a redesign of our mobile‑app backend, I led the migration from a REST API to GraphQL because users were complaining about over‑fetching and latency.  
**Situation / Task** – We had 12 microservices exposing ~200 endpoints; each client call hit multiple services, causing > 400 ms round‑trip on average.  
**Action** – I introduced a single Apollo Server gateway that stitched together all service schemas into one GraphQL schema. Using AWS AppSync (managed GraphQL) and DynamoDB for caching, we defined resolvers per field, allowing clients to request exactly the data they needed. We also added VTL mapping templates to call existing REST endpoints when necessary, ensuring backward compatibility.  
**Result** – After deployment:  
* API latency dropped from 400 ms → **120 ms** (30% faster).  
* Bandwidth usage fell by **45%**, reducing mobile data charges for our 1M monthly active users.  
* Developer velocity improved—new features went from 2 weeks to **3 days** because a single schema replaced dozens of endpoints.  

**Bar‑raiser cues:** I owned the migration end‑to‑end, dove deep into resolver performance metrics, quantified impact with real user numbers, and iterated after an initial cache hit failure by adding TTL logic. This delivered measurable results while keeping cost low (AppSync $0.25/1M queries).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
