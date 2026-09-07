---
qid: ing_64ddf8d3db__aws__local
question: 'Explain: Clustering columns — Partition Key vs Composite Key vs Clustering
  Columns in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 456
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:52-05:00'
sources: []
---

**Situation** – While leading a migration of our customer‑profile service from MySQL to Apache Cassandra, I had to design the schema so that *search by region and last‑login date* would be lightning fast for 30 M users.

**Task** – Choose between **partition key**, **composite key**, or **clustering columns** to model `user_id`, `region`, `last_login`. The goal: sub‑10 ms reads, 1 % error rate, and cost ≤ $5k/month on AWS managed Cassandra (Amazon Keyspaces).

**Action** –  
- **Partition key = region** – gives even data distribution across nodes (≈ 30 M/50 nodes ≈ 600 K rows per partition).  
- **Clustering column = last_login DESC** – orders rows within a region, so the most recent logins are fetched first.  
- Added an **auxiliary table** with `user_id` as partition key for point‑lookups (avoiding full scans).  

Used AWS Keyspaces with *Provisioned throughput* set to 10 K RCUs/10 K WCUs; auto‑scaling kept usage within budget. I wrote a test harness in Python that simulated 5,000 concurrent queries and verified latency < 8 ms, error rate < 0.02%.

**Result** –  
- Read latency dropped from 120 ms (MySQL) to **7 ms**.  
- Cost reduced by **40 %** ($3.6k/month).  
- Incident rate on profile service fell from 5/day to **< 1/day**.

**Learnings** –  
- *Dive Deep* into partitioning logic is critical; a poor key choice can create hotspots.  
- *Ownership*: I took full responsibility for schema, monitoring, and cost control.  
- *Bias for Action*: Implemented the new design in production within two weeks instead of waiting for a formal review.

**Bar‑raiser notes** – Look for clear ownership, quantitative impact, and evidence that you iterated on the solution after observing real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
