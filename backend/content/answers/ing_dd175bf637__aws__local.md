---
qid: ing_dd175bf637__aws__local
question: 'Explain: Approach #2: Choreography — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 433
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:54-05:00'
sources: []
---

**Situation / Task**  
I led a team to build a large‑scale web crawler for an e‑commerce recommendation engine. The goal was to ingest fresh product data from 10 k+ partner sites daily while keeping latency under 4 h and cost < $5k/month.

**Action**  
We chose *choreography*—each site hosts its own crawler agent that pushes data to a central topic, eliminating a single point of failure.  
- **Agents** run in AWS Fargate (CPU‑optimized), auto‑scaling via CloudWatch metrics.  
- Data is published to an Amazon SNS topic; each message contains the URL, timestamp, and JSON payload.  
- A Lambda function subscribed to SNS triggers an SQS queue that feeds a Kinesis Data Firehose stream into Redshift for analytics.  
- We added an API Gateway endpoint for manual overrides (e.g., pause a crawler).  

**Result**  
The system processed 12 M pages/day, achieving 99.8% success rate and <1 h end‑to‑end latency. Monthly spend dropped to $3.6k thanks to Fargate’s pay‑per‑second billing and Kinesis’ auto‑scaling. We reduced incident response time from 30 min to 5 min by decoupling components.

**Reflection (Bar‑raiser notes)**  
- **Ownership:** I owned the entire architecture, from design to ops.  
- **Dive Deep:** I benchmarked Fargate vs EC2 and chose the most cost‑effective option.  
- **Quantified Impact:** 40% faster data freshness, $1.4k monthly savings.  
- **Learning:** Early version had a single point of failure; we pivoted to choreography after an outage, proving agility.  

**Leadership Principles**: Ownership, Customer Obsession (fast, reliable data for recommendation accuracy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
