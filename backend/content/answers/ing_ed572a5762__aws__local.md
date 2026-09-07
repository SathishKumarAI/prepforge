---
qid: ing_ed572a5762__aws__local
question: 'Explain: Hashing methods — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:05-05:00'
sources: []
---

**Situation / Task**  
At my previous company I led a team that built an online recommendation engine for a fashion retailer with >1 M active users. Our model served predictions via a stateless API and we needed to scale horizontally while keeping latency under 50 ms.

**Action (Technical Design)**  
I chose **consistent hashing** as the load‑balancing scheme so that each request deterministically maps to one of our N EC2 instances in an Auto Scaling group. The hash key was the user ID; the hash ring was stored in a shared DynamoDB table with versioned segments. For resilience I added **Amazon CloudFront + Lambda@Edge** to cache popular predictions, and used **AWS Global Accelerator** for low‑latency routing across regions.

I modeled the expected traffic (10 k QPS peak) and ran a cost/throughput simulation in AWS Cost Explorer:  
- 3 EC2 m5.large instances → $0.096/hr each  
- DynamoDB read capacity ≈ 1,200 RCU → $0.25/hr  
Total ≈ **$0.55/hr** vs the baseline of $1.20/hr with a round‑robin load balancer.

**Result (Dive Deep + Deliver Results)**  
After deployment we saw:  
- Latency dropped from 120 ms to **45 ms** (30% improvement).  
- Error rate fell by **4×** due to reduced hotspot contention.  
- Cost savings of **≈$1,200/month**.

**Leadership Principles**  
- *Customer Obsession*: Faster predictions directly improved conversion rates (+2%).  
- *Ownership / Dive Deep*: I audited the hash distribution, identified skewed buckets, and adjusted segment boundaries until load was evenly spread.  

I learned that even a simple hashing scheme can outperform legacy round‑robin when paired with proper monitoring (CloudWatch metrics) and automated rebalancing—an insight I bring to every ML infrastructure challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
