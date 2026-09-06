---
qid: ing_25d73e9fd7__think__local
question: 'Explain: MySQL at Canva: Growing Pains — From Zero to 50 Million Uploads
  per Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 484
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:09:43-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- **Goal:** Summarize why and how MySQL was scaled for Canva’s media uploads.  
- **Assumptions:** The reader knows basic DB concepts, but not the specific engineering context (Canva, media pipeline, upload volume).  

**2️⃣ Adopt a “problem–solution–impact” mental model**  
1. Identify *the problem* (MySQL bottlenecks at 50 M uploads/day).  
2. Outline *engineering solutions* (sharding, read replicas, caching, schema refactor).  
3. Highlight *business impact* (reduced latency, cost savings, reliability).  

**3️⃣ Step‑by‑step reasoning**  
- **Start with context:** Canva’s growth → 50 M uploads/day → single‑node MySQL can’t keep up.  
- **Explain pain points:** Write amplification, contention on primary key, slow query times, limited horizontal scaling.  
- **Detail solutions in order of deployment:**  
  - *Sharding* by user ID or upload bucket → distributes load.  
  - *Read replicas* for analytics queries → offloads read traffic.  
  - *Connection pooling & async writes* to reduce contention.  
  - *Schema redesign* (e.g., separating metadata from blob pointers).  
- **Show metrics pre‑/post‑change:** latency drop, throughput increase, cost per GB.  

**4️⃣ Avoid common traps**  
- Don’t over‑simplify “sharding is enough.” Mention trade‑offs: cross‑shard joins, rebalancing.  
- Avoid jargon without explanation (e.g., “CAP theorem” unless you define it).  
- Don’t ignore operational complexity—monitoring, backup strategies, failover plans.  

**5️⃣ Sanity‑check & communicate**  
- Re‑read the summary to ensure each section flows logically.  
- Verify numbers: 50 M/day ≈ 580 uploads/sec; does your architecture support that?  
- End with a concise takeaway: “By sharding, replicating, and refactoring schema, Canva moved from single‑node MySQL to a horizontally scalable system that can comfortably handle tens of millions of daily uploads.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
