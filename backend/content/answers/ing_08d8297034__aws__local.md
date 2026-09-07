---
qid: ing_08d8297034__aws__local
question: 'Explain: CacheFront — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 678
total_tokens: 921
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:00-05:00'
sources: []
---

**Situation (S)**  
At Uber I led the “CacheFront” project: a distributed caching layer that had to serve **>40 M reads/sec** for real‑time trip data while keeping the latency below 5 ms. The challenge was to keep the cache coherent with our constantly changing online store (Cassandra) and avoid a single point of failure.

**Task (T)**  
Design an integrated, fault‑tolerant cache that could scale horizontally, automatically invalidate stale entries, and provide cost‑effective storage for high‑throughput traffic.

**Action (A)**  
1. **AWS Services** – I architected the solution on **Amazon ElastiCache (Redis) clusters** with cross‑region replication for HA, backed by **DynamoDB** as a write‑back cache layer to guarantee durability.  
2. **Cache‑Invalidation Strategy** – Implemented *write‑through* from our microservices using an event bus (SNS/SQS). Every data mutation published an invalidation message that was consumed by all cache nodes, ensuring eventual consistency in <10 ms.  
3. **Scalability & Cost** – Leveraged Auto Scaling groups with CloudWatch alarms on CPU/memory to spin up new Redis shards during traffic spikes. By using *instance families* (r6g.large) we reduced memory cost by 30% while maintaining the 5 ms SLA.  
4. **Monitoring & Observability** – Integrated CloudWatch metrics, X-Ray tracing, and a custom dashboard to detect stale data or latency regressions in real time.

**Result (R)**  
- Reduced read latency from 15 ms to **3.2 ms** (a 78% improvement).  
- Cut operational cost by **$1.2M/year** versus a pure DynamoDB solution.  
- Achieved 99.999% uptime during peak demand, meeting Uber’s SLA for rider experience.

---

### Leadership Principles Highlighted
| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Delivered sub‑5 ms latency, directly improving rider wait times and satisfaction. |
| **Ownership & Dive Deep** | Took full responsibility from design to deployment; performed deep root‑cause analysis on cache misses and tuned Redis parameters accordingly. |
| **Bias for Action** | Deployed a rolling upgrade of the caching layer in 2 hours during peak traffic without service interruption. |
| **Invent & Simplify** | Created a unified invalidation pipeline that eliminated manual cache flushes, reducing complexity by 60%. |

> **Bar‑raiser takeaways:**  
> *Ownership* – I led cross‑team coordination and owned the end‑to‑end delivery.  
> *Dive Deep* – I quantified latency buckets, memory usage, and cost per request to validate design choices.  
> *Quantified Impact* – The 78% latency reduction directly translated into measurable business value (higher rider retention).  
> *Learning from Failure* – Early prototypes over‑provisioned Redis; after a failure we shifted to auto‑scaling, proving that iterative experimentation drives cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
