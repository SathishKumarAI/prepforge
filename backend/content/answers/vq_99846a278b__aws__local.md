---
qid: vq_99846a278b__aws__local
question: WHAT IS THE DIFFERENCE BETWEEN A PRIMARY KEY AND A UNIQUE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 352
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:01-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a data‑engineering sprint for our customer‑facing analytics platform, I was asked to explain the difference between a *primary key* and a *unique key*.  
- **Customer Obsession & Ownership:** I first clarified that both keys enforce uniqueness, but only the primary key is the table’s “identity” and cannot be NULL.  
- **Dive Deep (technical):** In RDS MySQL, a `PRIMARY KEY` creates an implicit unique clustered index; a `UNIQUE KEY` creates a separate non‑clustered index. The primary key becomes the target for foreign keys, while a unique key can have multiple columns and allows NULLs if defined as such.  
- **Bias for Action (AWS services):** I suggested using Aurora Serverless for auto‑scaling read replicas to handle peak analytics loads, and leveraging DynamoDB’s *partition key* (unique) vs. *sort key* (secondary unique constraint) when moving the workload to a NoSQL tier.  
- **Deliver Results:** By switching from a `UNIQUE KEY` on `email` to a `PRIMARY KEY` on `user_id`, we reduced query latency by 35 % and eliminated duplicate insert errors, cutting data‑cleaning costs by $12K annually.  

**Bar‑raiser takeaway:** I demonstrated ownership (explain why it matters), depth (index mechanics & AWS options), quantified impact (latency & cost savings), and learning from failure (previous duplicate issue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
