---
qid: ing_374399cb28__aws__local
question: 'Explain: Three Core Functionalities of GraphQL — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 473
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:33-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role I led a migration from a monolithic REST API to GraphQL for our recommendation engine. The question was: *“What are the three core functionalities of GraphQL and how does it differ from REST?”*  

**S – Situation:** We had 12 micro‑services exposing CRUD endpoints. Clients were hitting >30 calls per page load, causing >200 ms latency spikes during peak traffic (10k concurrent users).  
**T – Task:** Reduce round‑trips, lower payload size, and improve developer velocity while keeping cost < $5K/month.  
**A – Action:** I mapped the core GraphQL capabilities:  

1. **Declarative data fetching** – Clients specify exactly what fields they need; we use AWS AppSync with DynamoDB resolvers to return only requested attributes (cut payload by 45%).  
2. **Single endpoint & type system** – One HTTPS endpoint (`/graphql`) replaces 12 REST routes; this simplifies IAM policies and reduces Lambda cold starts (30 % fewer invocations).  
3. **Real‑time subscriptions** – Leveraging AppSync’s WebSocket support for live updates, eliminating polling loops that previously added ~2 ms per request.  

I compared REST vs GraphQL: REST’s over‑fetch/under‑fetch problem and versioning overhead versus GraphQL’s self‑describing schema and batched queries. I ran a canary test; latency dropped from 200 ms to 120 ms, and developer onboarding time fell by 30 %.  

**R – Result:** The migration delivered a 35 % cost reduction (from $12K to $7.8K/month) while improving API throughput by 1.5×. I documented lessons: always start with query complexity analysis, and monitor resolver cold‑start metrics to fine‑tune caching.  

**Leadership Principles:** *Customer Obsession* – we tuned for end‑user speed; *Ownership* – drove the full migration cycle; *Dive Deep* – analyzed per‑field payloads; *Deliver Results* – met budget and performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
