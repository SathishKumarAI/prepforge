---
qid: vq_b907ab4b40__aws__local
question: WHAT ARE THE DIFFERENT NORMAL FORMS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 433
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:11:01-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles – Ownership & Dive Deep)**  
I was leading a data‑migration project for a fintech client that moved from a legacy on‑prem system to Amazon RDS MySQL. The team had to redesign the schema so that it could scale horizontally and support real‑time analytics without compromising ACID guarantees.

**Action (Bias for Action, Deliver Results)**  
I started by mapping the existing tables to their *functional dependencies*. I then walked the team through the 1st–3rd Normal Forms (1NF, 2NF, 3NF) and finally Boyce–Codd Normal Form (BCNF). We identified transitive dependencies that caused update anomalies and decided to split the `customer_orders` table into:

| Table | Primary Key | Dependencies |
|-------|-------------|--------------|
| `customers` | `customer_id` | – |
| `orders` | `order_id` | `customer_id`, `product_id` |
| `products` | `product_id` | – |

We used **AWS Schema Conversion Tool** to generate the new DDL and **AWS Database Migration Service (DMS)** for zero‑downtime migration. Post‑migration, we enabled **Aurora Serverless v2** to auto‑scale read replicas during peak analytics loads.

**Result (Customer Obsession & Deliver Results)**  
- Normalization eliminated 40 % of duplicate data, reducing storage costs by **$12k/month**.  
- Query latency for order history dropped from 1.8 s to **350 ms** on average.  
- Read throughput scaled from 200 RPS to 4,500 RPS without manual intervention.

**Bar‑raiser takeaway**  
I demonstrated *ownership* by taking full responsibility for the schema redesign, *dive deep* into dependencies, quantified the impact with real metrics, and learned that early migration testing on a subset of data prevented costly rollbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
