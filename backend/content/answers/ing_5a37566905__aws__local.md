---
qid: ing_5a37566905__aws__local
question: 'Explain: Time to Live (TTL) — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 734
total_tokens: 972
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:50-05:00'
sources: []
---

**TL;DR:**  
I built a global, low‑latency recommendation service that used **TTL + five eviction policies (LRU, LFU, FIFO, Random, and Least‑Recently‑Used‑by‑Frequency)** to keep the cache size under 10 GB while serving 30 M requests/second. The result: *20 % hit rate improvement* → *$1.2 M/month saved in backend compute*.  

---

## Behavioral (STAR)

**Situation:** Our recommendation engine served millions of users daily; stale data caused a 5 % drop in click‑through rates.  
**Task:** Reduce cache churn and keep fresh content without over‑provisioning memory.  
**Action:** I led a cross‑functional squad to implement a hybrid eviction strategy in **Amazon ElastiCache Redis**. We stored key metadata (last access, frequency) and switched policies based on traffic patterns:  
- **LRU** for high‑frequency keys,  
- **LFU** for long‑term trending items,  
- **FIFO** for one‑time promotions,  
- **Random** as a fallback to avoid hot spots.  
We added a *TTL* of 12 h per key and used a Lambda function to rotate policies every hour based on real‑time metrics.  

**Result:** Hit rate rose from 15 % to 35 %; the service now handles 30 M RPS with <1 ms latency, cutting EC2 costs by **$1.2 M/month** and improving user engagement by **18 %**.  

---

## Technical / System Design

| Requirement | Solution | AWS Services | Scalability | Availability | Cost |
|-------------|----------|--------------|------------|--------------|------|
| Global low‑latency cache | Multi‑AZ Redis cluster with read replicas | ElastiCache, CloudWatch, Lambda | Auto‑scaling via Redis Cluster Slots | 99.99 % SLA | Pay per node; savings from reduced backend traffic |
| Dynamic eviction | Custom Lua scripts + TTL metadata | ElastiCache (Redis), SNS for policy changes | O(1) eviction lookup | Hot‑standby replicas | Minimal overhead |
| Policy rotation | EventBridge rule → Lambda → Redis config update | EventBridge, Lambda | Near real‑time updates | Zero downtime with rolling updates | Free tier Lambda invocations |

**Trade‑offs:**  
- **Complexity vs. Simplicity:** Adding Lua scripts increases codebase complexity but yields >10 % hit rate improvement versus vanilla LRU.  
- **Cost vs. Freshness:** Shorter TTLs reduce staleness but increase write traffic; we settled on 12 h after A/B testing.

---

### What a Bar‑Raiser Looks For

1. **Ownership** – I drove the end‑to‑end solution, from metrics to deployment.  
2. **Dive Deep** – Explored Redis internals and Lambda performance to justify policy choices.  
3. **Quantified Impact** – Reported concrete savings ($1.2 M/month) and engagement lift (18 %).  
4. **Learning from Failure** – Early attempts with a single LRU policy hit 10 % hit rate; pivoting to hybrid strategy was the key learning.

> *Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
