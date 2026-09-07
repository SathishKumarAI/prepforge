---
qid: ing_efb69ca7b5__aws__local
question: 'Explain: Load Balancing — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 453
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:09-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When launching a real‑time recommendation engine for our e‑commerce platform, the API latency hit 350 ms on peak traffic (10k QPS), hurting conversion by ~2%. I owned the performance sprint and needed to expose model predictions faster while keeping cost under $5K/month.

**Action (Dive Deep + Bias for Action)**  
1. **Identify hot data:** Profileed cache misses → 80% of requests hit the same 500 product vectors.  
2. **Design distributed cache layer:** Deployed an Amazon ElastiCache‑Redis cluster with 3 shards, each node 8 GB RAM, using Redis Cluster mode for automatic sharding and fail‑over.  
3. **Integrate load balancing:** Placed an Application Load Balancer (ALB) in front of the API tier; ALB’s sticky session policy routed a user to the same cache node across requests, reducing re‑serialization overhead.  
4. **Auto‑scaling & cost control:** Enabled Auto Scaling on Redis nodes with CloudWatch metrics (CPU >70% → add node). Set daily snapshots for backup.  
5. **Testing:** Simulated 15k QPS; average latency dropped to 75 ms, a 78% improvement.

**Result (Deliver Results + Invent & Simplify)**  
- **Conversion lift:** +1.8% on the product page within two weeks.  
- **Cost:** <$4,200/month vs projected $7,500 for a monolithic cache.  
- **Reliability:** 99.95% uptime with automatic fail‑over; no manual intervention during outages.

**Bar‑raiser notes** – I demonstrated end‑to‑end ownership, deep data profiling, quantified impact (latency & conversion), and learned that sticky sessions can significantly reduce cache churn in ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
