---
qid: ing_28bbe95689__aws__local
question: 'Explain: screen of user or POS right so — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 516
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:47-05:00'
sources: []
---

**Situation (S)** – At my previous company we built a real‑time POS screen that needed to stay in sync with a cloud dashboard (Google‑Docs style). 15 k users edited product lists simultaneously and the system had to deliver <50 ms latency while keeping data consistent across thousands of terminals.

**Task (T)** – Design an operational‑transformation (OT) backend that scales, is highly available, and costs <$5 M/yr.

**Action (A)**  
1. **Data model & OT engine** – Store the document in a *Delta* stream (Append‑Only log) in Amazon Kinesis Data Streams.  Each edit becomes an operation (`insert`, `delete`, `move`). A stateless Lambda streams ops through a Redis‑cluster (ElastiCache) that runs the classic *OT algorithm* to resolve conflicts on the fly and produce a canonical state per user.  
2. **Real‑time delivery** – Publish the resolved ops to Amazon AppSync GraphQL subscriptions; each terminal receives only diffs, keeping bandwidth <1 kb/s.  
3. **Durability & recovery** – Persist every op in DynamoDB (event sourcing) and snapshot full documents into S3 every 5 min for fast roll‑back.  
4. **Scalability & cost** – Kinesis scales to millions of ops/second with <$0.02/op. Lambda + Redis keep latency <30 ms; AppSync charges per subscription (~$0.005/user/month). Total estimate: ~$3.8 M/yr for 15 k users, 1 TB data.

**Result (R)** – Achieved 99.999% availability, <45 ms average sync latency, and cut operational costs by 40 % compared to the legacy polling system.  

*Bar‑raiser focus*: I owned the entire stack, dove deep into OT mathematics, quantified latency and cost savings, and learned that a stateless Lambda + Redis pattern scales far better than monolithic solutions—an insight we later applied to our next real‑time analytics platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
