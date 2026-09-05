---
qid: ing_176710eae0__star__local
question: 'Explain: We''re also, the second pillar is what — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 369
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:35-05:00'
sources: []
---

**Situation:**  
During a data‑migration project at my previous company, we had to move a legacy customer‑profile system from an on‑premises relational database into the cloud. The new architecture required real‑time personalization and high write throughput, while still supporting complex queries for reporting.

**Task:**  
I was tasked with choosing the right NoSQL database in AWS that could handle both low‑latency writes for the API layer and flexible query patterns for analytics, all within a tight three‑month deadline.

**Action:**  
I started by profiling the workload: 80 % of traffic consisted of simple key–value lookups, 15 % were range queries on user attributes, and 5 % involved secondary indexes. I compared DynamoDB (serverless, auto‑scaling), Amazon DocumentDB (MongoDB compatible), and Amazon Neptune (graph). Considering cost, operational overhead, and the need for native secondary indexing, I opted for **Amazon DynamoDB** with a Global Secondary Index on `email` and a Time‑to‑Live policy for session data. I used AWS Data Migration Service to stage the migration, wrote unit tests against a local DynamoDB emulator, and set up CloudWatch metrics to monitor provisioned throughput.

**Result:**  
The switch reduced average API latency from 200 ms to under 30 ms, increased write capacity to 10 k RPS without throttling, and cut infrastructure costs by ~25 % compared to a self‑managed MongoDB cluster. I learned the importance of matching workload patterns to AWS service strengths and validating with real metrics before finalizing architecture choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
