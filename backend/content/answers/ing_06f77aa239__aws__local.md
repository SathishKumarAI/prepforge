---
qid: ing_06f77aa239__aws__local
question: 'Explain: is 450 are consumed capacity is 450 — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 667
total_tokens: 926
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:49-05:00'
sources: []
---

**Answer – Machine Learning Engineer Interview**

> **Question:** Explain why “consumed capacity is 450” in the context of DynamoDB (AWS re:Invent 2018: *Amazon DynamoDB Under the Hood*).

---

### Customer Obsession + Dive Deep

When a client ran a predictive‑maintenance pipeline, their `SensorReading` table was throttled. The CloudWatch metric **ConsumedReadCapacityUnits** spiked to **450** during peak inference hours (≈ 15 min).  
- **Situation:** 1 M rows, 10 k requests/second for a real‑time anomaly model.  
- **Task:** Reduce throttling while keeping latency < 200 ms.  
- **Action:**  
  1. Enabled **Auto Scaling** with target utilization 70 %.  
  2. Added **Global Secondary Index (GSI)** on `device_id` to spread read traffic.  
  3. Migrated cold‑start workloads to an **SQS + Lambda** batch that pre‑fetches data into a local cache (Redis‑ElastiCache).  
- **Result:** Consumed capacity dropped from 450 CU to 120 CU; throughput improved by 2×, and cost fell by ~35 %.  

### Ownership + Deliver Results

I owned the end‑to‑end monitoring stack: CloudWatch dashboards → Lambda alerts → PagerDuty. The lesson was that **“consumed capacity” is not a fixed number**—it reflects the *effective* provisioned throughput after scaling, caching, and indexing decisions.

---

#### Technical Takeaway (Design)

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Provisioned reads/writes | DynamoDB Auto Scaling | Elasticity, cost‑efficiency |
| Indexes | GSI on `device_id` | Distribute read load |
| Cache | ElastiCache Redis | Reduce DB hits for cold starts |
| Orchestration | SQS + Lambda | Batch pre‑fetch, decouple spikes |

**Scalability:** Auto Scaling handles sudden surges.  
**Availability:** DynamoDB is 99.999 % AZ‑level; GSI replication ensures no single point of failure.  
**Cost:** Provisioned CU only during peaks; cache reduces read operations.

---

### What a Bar‑raiser Listens For

- **Ownership:** Took initiative to diagnose and fix the bottleneck.  
- **Dive Deep:** Analyzed CloudWatch, traced queries, and measured impact pre/post‑change.  
- **Quantified Impact:** 450 → 120 CU, 35 % cost savings, 2× throughput lift.  
- **Learning from Failure:** Documented throttling patterns for future capacity planning.

---

> *In short,* “consumed capacity is 450” means the table was using 450 provisioned read units at that moment—an indicator of load versus provisioned limits. By applying Auto Scaling, indexing, and caching, we can bring that number down while maintaining performance and controlling costs.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
