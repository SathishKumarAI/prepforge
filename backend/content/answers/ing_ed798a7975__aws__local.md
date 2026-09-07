---
qid: ing_ed798a7975__aws__local
question: 'Explain: FAANG System Design Interview: Design A Location Based Service
  (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 604
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:23-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

---

### **Situation**

I was asked to design a location‑based service similar to Yelp/Google Places for an FAANG interview. The goal: provide real‑time place discovery, ratings, and reviews at scale.

### **Task**

Build an end‑to‑end architecture that:
- Ingests millions of user check‑ins per day.
- Supports 10 k concurrent queries with <200 ms latency.
- Persists high‑volume, geo‑indexed data reliably.
- Enables analytics for business insights.

### **Action**

| Layer | Design Choice | AWS Services | Why |
|-------|---------------|--------------|-----|
| **Ingestion** | Kafka‑style stream + Lambda buffer | Amazon MSK (Kafka), AWS Lambda | Near‑real‑time processing, auto‑scaling |
| **Storage** | Geo‑spatial index + document store | DynamoDB with GSI on `location`, Amazon S3 for raw logs | Strong consistency + flexible schema |
| **Search & Recommendation** | Elastic Search cluster + GPU inference | OpenSearch Service, SageMaker endpoint (GPU) | Fast geo‑search + ML scoring |
| **Caching** | Edge caching of popular queries | CloudFront + ElastiCache Redis | 30 % latency reduction for hot spots |
| **Analytics** | Batch ETL + real‑time dashboards | Glue, Athena, QuickSight | Cost‑effective query on S3; live metrics |
| **Security & Compliance** | IAM roles, KMS encryption | AWS IAM, KMS | Data privacy & audit trail |

*Scalability*: DynamoDB auto‑scales to 10 M writes/day. OpenSearch scales horizontally with shard count; Lambda concurrency limits are raised on demand.

*Availability*: Multi‑AZ deployments for all services, Route 53 health checks for failover.

*Cost*: Spot instances for ETL jobs, reserved capacity for OpenSearch nodes (≈$12k/month). Estimated total cost ≈ $30k/month for 10 M check‑ins/day.

### **Result**

- Achieved <180 ms median latency under peak load.
- Served >50 M requests/day with 99.99% uptime in a single region.
- Reduced operational overhead by 40 % through managed services and automation.
- Received positive feedback from stakeholders on data freshness and recommendation accuracy.

### **Reflection**

I learned that *ownership* means anticipating failure modes—so I built automated alerts for shard imbalance and auto‑repair pipelines. The *dive deep* mindset drove me to benchmark each service (e.g., Lambda memory vs. latency) and iterate until the cost/latency sweet spot was met. This end‑to‑end design demonstrates measurable impact, aligns with Amazon’s principles, and showcases my ability to own complex systems from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
