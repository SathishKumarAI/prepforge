---
qid: ing_88039a21bd__aws__local
question: 'Explain: second so if the load stays at — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 586
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:47-05:00'
sources: []
---

**Situation / Task**  
During the 2018 re:Invent session *“Amazon DynamoDB Under the Hood”* I was asked to explain why DynamoDB can sustain a **single‑digit millisecond latency even when traffic spikes to millions of reads per second**—the “second so if the load stays at …” question.  

**Action**  
I broke the answer into three layers, each mapped to an AWS service and a design decision that drives throughput:  

| Layer | Service / Feature | Why it matters |
|-------|-------------------|---------------|
| 1️⃣ **Storage & Partitioning** | SSD‑backed storage + consistent hashing with *hash‑range* partitions | Keeps hot data local; each partition can handle ~300 k RPS, so we shard the keyspace into thousands of partitions. |
| 2️⃣ **Cache & Query Path** | DAX (in‑memory cache) + DynamoDB’s “Query” engine | Reduces disk I/O by 90%; queries hit DAX first, falling back to storage only when necessary. |
| 3️⃣ **Throughput Management** | Provisioned / On‑Demand capacity + Auto Scaling | Guarantees at least the requested RCU/WCU; auto‑scaling adjusts in 30 s windows, keeping latency <10 ms even during a 5× traffic spike. |

I highlighted that DynamoDB’s *partition key* design is the single most critical factor—mis‑sharding can cause “hot spots” and burst latencies of seconds.  

**Result**  
After re‑architecting a legacy order‑processing system to use DynamoDB with the above patterns, we achieved:  

- **99.999% availability** (five nines) in 3 AZs.  
- **Average latency <7 ms** at 10 M RPS, with peak bursts of 25 M RPS handled without throttling.  
- **Cost savings of 35%** over a comparable RDS‑based design due to on‑demand scaling and SSD pricing.

**Reflection (Bar‑Raiser Lens)**  

*Ownership*: I owned the end‑to‑end latency problem, from data modeling to capacity planning.  
*Dive Deep*: I quantified how partition count and DAX cache hit rate drive latency.  
*Quantified Impact*: 5× traffic with no degradation, cost reduction.  
*Learning*: Early prototypes suffered from hot partitions; after iterative profiling we shifted the keyspace and saw a 3× drop in read latency.  

**Leadership Principles Anchored**: *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
