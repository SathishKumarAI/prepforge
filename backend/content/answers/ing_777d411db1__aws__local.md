---
qid: ing_777d411db1__aws__local
question: 'Explain: RIGHT JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 636
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:23-05:00'
sources: []
---

**Situation / Task**

In a recent data‑science project I had to build a recommendation engine for an e‑commerce platform that served 12 M active users daily. The model needed real‑time user purchase history and product catalog metadata from two separate data lakes on S3. My task was to create a scalable ETL pipeline that merged these tables efficiently, ensuring low latency for the downstream ML inference service.

**Action**

I designed a **right join** strategy in Amazon Athena (serverless SQL) because the product catalog is the “right” table (stable, ~5 M rows) and user history is the “left” table (volatile, ~30 M rows). The right join guarantees that every product appears at least once, even if a user has never purchased it—critical for cold‑start recommendations.

Key AWS services:
- **Athena** – runs ANSI‑SQL on S3 without provisioning clusters.
- **Glue Data Catalog** – schema registry and crawler to keep tables up‑to‑date.
- **Lambda + Step Functions** – orchestrate nightly ETL, trigger Athena queries, and load results into DynamoDB for inference.

Scalability: Athena automatically partitions the user history table by `user_id` and month; query costs drop from $0.05 per GB to <$0.01 with proper partitioning. Availability is 99.9 % as Athena runs on AWS infrastructure. Cost trade‑off: using Athena avoids EC2 maintenance but adds a modest per‑query charge; however, the overall cost was < $200/month versus > $1k for an EMR cluster.

**Result**

The pipeline processed 35 M rows in under 10 minutes nightly, delivering a refreshed join table that fed the recommendation model. The resulting inference latency dropped from 500 ms to 120 ms (a 76 % improvement), and click‑through rate increased by **4.2 %** over two months—directly boosting revenue by ~$3 M annually.

---

### Leadership Principles Highlighted

- **Customer Obsession** – Delivered faster, more accurate recommendations that improved user experience.
- **Ownership & Dive Deep** – Took full responsibility for the end‑to‑end data flow and optimized every component (partitioning, query design).
- **Bias for Action** – Chose Athena + Lambda to accelerate deployment instead of waiting for a larger cluster.

---

### What a Bar‑Raiser Looks For

1. **Quantified Impact** – Clear metrics (latency reduction, CTR lift, cost savings).  
2. **Technical Depth** – Justification of right join choice, partitioning strategy, service trade‑offs.  
3. **Learning from Failure** – Mentioned earlier attempts with EMR that suffered high cost and maintenance; pivoted to serverless for agility.  

By blending customer focus with deep technical ownership, I delivered a scalable ML data pipeline that directly drove business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
