---
qid: ing_57ac550b56__aws__local
question: 'Explain: How It Works — Strong vs. Eventual Consistency - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 502
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:58-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the migration of a high‑traffic e‑commerce catalog from a relational DB to **Amazon DynamoDB**. The business required near‑real‑time inventory updates while maintaining data integrity across multiple regions.

**Task (T)**  
I had to explain and implement the trade‑off between *strong* and *eventual consistency* so that developers could choose the right model for each use case, ensuring minimal latency yet accurate stock levels.

**Action (A)**  
1. **Clarified requirements:**  
   - *Strong consistency* needed for checkout flows (no overselling).  
   - *Eventual consistency* acceptable for product listing pages (slight delay is tolerable).  

2. **Designed the system:**  
   - Used DynamoDB’s **Conditional Writes** and **Transactions** for strong‑consistency paths, guaranteeing ACID semantics at a per‑item level.  
   - Leveraged **Global Tables** with *eventual consistency* replication across regions to serve read traffic cost‑effectively.  

3. **AWS services & trade‑offs:**  
   - `DynamoDB Streams` → trigger Lambda for inventory reconciliation (cost: ~0.25 $ per 1M records).  
   - `S3` + CloudFront for static assets (high availability, low latency).  
   - Evaluated **RDS Aurora** as an alternative; however, DynamoDB offered lower operational overhead and better scalability for write‑heavy workloads.

4. **Metrics & Results (R):**  
   - Reduced checkout failure rate from 3.7 % to <0.1 %.  
   - Cut read latency on product pages by 40 %, while keeping costs down by ~30 % compared to a fully strongly consistent design.

**Leadership Principles:**  
- **Customer Obsession** – ensuring customers never see out‑of‑stock items during checkout.  
- **Ownership & Dive Deep** – I owned the migration, dug into consistency semantics, and quantified the impact on both performance and cost.  

This experience demonstrates how to balance consistency models pragmatically in AWS, delivering measurable business value while maintaining system reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
