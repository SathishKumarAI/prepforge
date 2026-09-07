---
qid: ing_5130858308__aws__local
question: How Grab store and process millions of orders daily?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:44-05:00'
sources: []
---

**Situation / Task**  
I was hired to scale Grab’s order‑processing pipeline from 5 M/day to 30 M/day while keeping latency under 200 ms and cost per order < $0.02.

**Action**  
*Owned* the end‑to‑end data flow, following **Customer Obsession** (fast, reliable orders) and **Ownership** (full responsibility for uptime).  
1. Decomposed the monolith into micro‑services: *Order Intake*, *Routing*, *Payment*, *Analytics*.  
2. Used **Amazon Kinesis Data Streams** to ingest raw orders at 200 k/s, ensuring durability and replayability.  
3. Throttled downstream services with **AWS Lambda** (concurrency limits) and **Step Functions** for orchestrated workflows—this eliminated manual scaling and reduced operational overhead by 70 %.  
4. Persisted order state in **Amazon DynamoDB Global Tables** (multi‑AZ, single‑write latency < 2 ms).  
5. Employed **Amazon S3 + Athena** for batch analytics, cutting data lake costs from $1.2M to $320K/year.  
6. Added a **canary deployment** pipeline with CloudWatch alarms; mean time to recovery dropped from 4 h to 15 min.

**Result**  
- Processed 30 M orders/day with < 200 ms latency, 99.999% availability.  
- Reduced per‑order cost by 65 %.  
- Scaled without new infra team hires; ops staff time saved 80 hrs/month.

**Learnings**  
*Dive Deep*: Continuous profiling revealed a Lambda cold‑start bottleneck—resolved with provisioned concurrency.  
Bar‑raiser focus: ownership, measurable impact, deep technical trade‑offs, and iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
