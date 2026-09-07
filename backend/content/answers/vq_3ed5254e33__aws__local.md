---
qid: vq_3ed5254e33__aws__local
question: Which of the following is not correct about a View ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 363
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:59-05:00'
sources: []
---

**Situation / Task**  
I was interviewing for an AWS Solutions Architect role where the interviewer asked me to critique statements about *Views* in relational databases. The goal was to demonstrate both my technical depth and how I own a problem.

**Action (Technical)**  
I mapped each claim to core SQL concepts:  
1️⃣ A view is a virtual table – **True**.  
2️⃣ Views store data physically – **False**; they’re stored as metadata only.  
3️⃣ Querying a view incurs no performance penalty – **False**; it re‑executes the underlying query unless materialized.  
4️⃣ You can index a view directly – **False** in most engines (you index base tables).  

I then explained how, on AWS, you’d use Amazon RDS or Aurora with *materialized views* (Aurora Serverless v2) to cache expensive joins, trading off write latency for query speed. I highlighted the cost trade‑off: extra storage vs. reduced compute.

**Result (Behavioral)**  
I received a “great” rating because I:  
- **Owned** the clarification by pulling up actual AWS docs and showing real metrics from a production migration (query time dropped 65% after materializing).  
- **Dived Deep** into indexing nuances and the impact on ACID guarantees.  
- Delivered a concise, data‑driven answer that balanced *Customer Obsession* (improving user query latency) with *Ownership* (choosing the right AWS service).

This aligns with Amazon’s Leadership Principles of **Customer Obsession**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
