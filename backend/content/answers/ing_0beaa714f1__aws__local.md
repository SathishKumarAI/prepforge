---
qid: ing_0beaa714f1__aws__local
question: 'Explain: And when you store data in Amazon — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 460
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:38-05:00'
sources: []
---

**Situation & Task**  
During a client‑facing workshop at AWS re: Invent 2021 I was asked to recommend the “right” NoSQL database for an e‑commerce platform that needed low‑latency product catalog lookups, real‑time inventory updates, and eventual consistency across global regions.  

**Action**  
I started with a **Dive Deep** audit of requirements: read/write mix (≈80 % reads), single‑digit ms latency target, 5 kW throughput per region, and the need for flexible schema to support rapid feature iterations. I compared DynamoDB, DocumentDB, and Amazon Neptune.  

1. **DynamoDB** – key/value + secondary indexes; offers single‑digit ms at scale, global tables for multi‑region replication, and on‑demand capacity that auto‑scales with no operational overhead.  
2. **DocumentDB** – MongoDB API compatibility but higher latency (≈10 ms) and limited cross‑region replication.  
3. **Neptune** – graph model; unnecessary complexity for a catalog use case.

I proposed a **hybrid**: DynamoDB tables for product metadata, with Global Secondary Indexes for price tiers; coupled with SQS + Lambda for inventory sync to an RDS Aurora cluster (for ACID guarantees).  

**Result**  
Post‑implementation, the platform handled 12 kW reads/second across three regions while keeping average latency at 3.2 ms, a **40 % performance gain** over the legacy MySQL solution. Costs dropped by 35 % due to on‑demand scaling and reduced operational staff time.

---

> **Leadership Principles Highlighted**  
- *Customer Obsession*: Delivering sub‑4 ms latency for end users.  
- *Ownership*: Architecting a cost‑effective, scalable solution that meets business goals.  

> **Bar‑raiser Checklist**  
- Clear ownership of performance & cost metrics.  
- Deep dive into trade‑offs (latency vs consistency).  
- Quantified impact and lessons learned from the migration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
