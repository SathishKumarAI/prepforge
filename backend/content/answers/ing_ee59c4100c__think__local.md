---
qid: ing_ee59c4100c__think__local
question: 'Explain: Data storage — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 428
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:46:35-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
   • Confirm whether you need a *high‑level* overview or a deep dive into specific storage choices (SQL vs NoSQL, caching, sharding).  
   • State assumptions: traffic volume, latency SLA, consistency needs, cost constraints.  

**2️⃣ Adopt a layered mental model**  
   1. **Persistence layer** – primary DB (relational, document, key‑value).  
   2. **Cache layer** – in‑memory stores for hot data.  
   3. **Replication & sharding strategy** – how to scale horizontally.  
   4. **Backup / archival** – cold storage and disaster recovery.  

**3️⃣ Step‑by‑step reasoning**  
   • Start with *what* data must survive (user profiles, logs).  
   • Decide *how* often it changes → choose write‑heavy vs read‑heavy stores.  
   • Map latency requirements to cache placement.  
   • Apply CAP: pick consistency model that fits business constraints.  
   • Quantify partitioning: key design, range vs hash sharding.  
   • Add fault tolerance: replication factor, read replicas.  

**4️⃣ Avoid common pitfalls**  
   – Don’t mix “data storage” with “message queue”; keep them separate.  
   – Beware of over‑optimizing caching—introduces stale reads if not invalidated.  
   – Forget to account for eventual consistency delays in analytics pipelines.  

**5️⃣ Sanity‑check & verbalize**  
   • Ask: “If traffic doubles, does my sharding scale?”  
   • Explain each layer’s trade‑offs aloud—this reveals hidden assumptions or gaps.  
   • Summarize the design in one sentence before diving into details.  

Use this checklist to structure any system‑design interview answer on data storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
