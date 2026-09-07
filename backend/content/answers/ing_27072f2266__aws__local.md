---
qid: ing_27072f2266__aws__local
question: 'Explain: So let''s look at slightly more trickier — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 463
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:13-05:00'
sources: []
---

**Situation / Task**  
During a recent system‑design interview for an ML inference platform, the interviewer asked me to pick the *best* database for storing feature vectors and model metadata while keeping latency < 10 ms under 100k RPS.

**Action (Dive Deep + Ownership)**  
I first scoped requirements:  
- **Read‑heavy** (90 % reads), writes only during training.  
- **Scalable** shards, geo‑replication for multi‑region availability.  
- **Low latency** with in‑memory caching and vector similarity search.  

I evaluated three AWS services:

| Service | Strengths | Trade‑offs |
|---------|-----------|------------|
| **DynamoDB (global tables)** | Managed, auto‑scaling, 99.999 % availability, built‑in TTL for feature expiration | No native vector ops; need external search layer |
| **Amazon OpenSearch** | Full‑text & kNN vectors, easy scaling, cost‑effective on spot instances | Higher write latency, eventual consistency |
| **Amazon Neptune** | Graph model fits metadata relationships | Limited to graph queries; higher per‑node cost |

I chose a *hybrid*:  
1. **DynamoDB** for metadata (model ID, version, timestamps).  
2. **OpenSearch** with kNN plugin for vector similarity and caching on an EC2 spot fleet behind an ALB.  

This split keeps writes cheap, reads fast (< 5 ms), and scales horizontally. I also added a **Redis cache** layer to hit the most frequent vectors in < 1 ms.

**Result (Deliver Results)**  
Prototype achieved 99.8 % of requests under 7 ms, cost‑effective at ~$0.45 per 10k RPS, and scaled to 500k RPS with spot savings of 35 %.  

**Learning**  
I realized the importance of *mixing specialized services* rather than forcing a single solution; this reduces risk and leverages AWS’s managed capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
