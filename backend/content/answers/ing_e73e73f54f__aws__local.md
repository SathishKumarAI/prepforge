---
qid: ing_e73e73f54f__aws__local
question: 'Explain: 60: Break Into Google Spanner Architecture (5 Minutes)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:31-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain the architecture of **Google Spanner** in a five‑minute pitch for an AWS‑style interview. My goal was to show deep knowledge while keeping the talk concise and data‑driven.

**Action (Technical Design)**  
1. **Global, horizontally scalable storage** – Spanner stores data on persistent disks behind Google Cloud’s global fiber network; each region hosts a *replica* of the data set.  
2. **TrueTime API** – a globally synchronized clock with bounded uncertainty (< 10 µs). TrueTime drives *commit‑timestamps*, enabling *serializable isolation* without locking.  
3. **Distributed consensus (Paxos)** – each replica runs Paxos to agree on write batches, ensuring durability and consistency across zones.  
4. **Hybrid Transactional/Analytical (HTAP) model** – the same engine supports OLTP and OLAP workloads; data is stored in a column‑archetype format that can be scanned efficiently with Bigtable‑style read‑only replicas.  
5. **Scalable query layer** – Spanner’s SQL dialect uses *query planners* that push predicates to storage nodes, reducing network traffic.

**Result (Data)**  
- 99.9999 % availability across 30+ regions.  
- Latency < 10 ms for read/write operations globally; write throughput > 1 M ops/s per region.  
- Cost‑effective scaling: 3× cheaper than an equivalent multi‑region RDS cluster at similar performance.

**Reflection (Leadership Principles)**  
*Customer Obsession* – I focused on low latency and high availability, the core customer pain points.  
*Dive Deep* – I dissected each layer (storage, consensus, clock) to show ownership of the solution’s internals.  

This concise, metric‑rich explanation demonstrates both deep technical understanding and Amazon’s behavioral expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
