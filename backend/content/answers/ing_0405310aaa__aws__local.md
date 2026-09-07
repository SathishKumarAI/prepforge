---
qid: ing_0405310aaa__aws__local
question: 'Explain: Components of Distributed Caching — What is Distributed Caching?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 493
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:48-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **Context:** I led a feature‑flag service that required sub‑millisecond reads for millions of users. The monolithic cache was hitting a single Redis node, causing 30 % latency spikes during traffic surges.

### S – Situation
Our product needed to serve flag values in <2 ms across all regions while supporting >10 M concurrent requests.

### T – Task
Design a **distributed caching layer** that scales horizontally, remains highly available, and keeps cost under $5k/month.

### A – Action
1. **Requirements & Design**  
   * Shard key space by user ID → consistent hashing (AWS ElastiCache for Redis Cluster).  
   * Replicate each shard to 3 AZs → automatic failover.  
   * Use **Redis Memory Optimized** nodes; enable **Cluster Mode** for auto‑partitioning.  
2. **Services & Architecture**  
   * **ElastiCache** (Redis) for in‑memory store, integrated with **Amazon CloudWatch** alarms and Auto Scaling based on CPU/Memory metrics.  
   * **AWS Lambda + API Gateway** for flag retrieval; cache hit rates >95 %.  
3. **Scalability & Availability**  
   * Horizontal scaling via cluster nodes; 99.999% availability SLA.  
4. **Cost & Trade‑offs**  
   * Started with 2 node replicas → $3k/month, then added read replicas only for hot keys to reduce latency without doubling cost.

### R – Result
- **Latency dropped from 15 ms to <1 ms** (90 % improvement).  
- **Throughput increased to 25 M req/s** with no outages.  
- Cost remained below the $5k/month budget, yielding a **30 % ROI** in Q2.

### Learnings
I *dived deep* into Redis eviction policies and monitored key distribution; after noticing hotspot keys, I introduced **hash tags** to balance load, turning an initial 10 % performance dip into a stable system. This ownership mindset ensured we delivered results without compromising customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
