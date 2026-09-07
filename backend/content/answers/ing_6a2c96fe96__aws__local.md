---
qid: ing_6a2c96fe96__aws__local
question: 'Explain: How to Choose the Number of Topics/Partitions in a Kafka Cluster?
  | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 454
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:40-05:00'
sources: []
---

**Situation:**  
In a recent migration from on‑prem Kafka to an Amazon MSK cluster for our real‑time analytics pipeline, the team was unsure how many topics and partitions to create. Too few partitions throttled throughput; too many increased overhead and cost.

**Task:**  
Design a data‑driven method to set optimal partition counts per topic while keeping costs under 15 % of the baseline.

**Action (Dive Deep + Ownership):**  
1. **Collect metrics** – Export broker metrics (CPU, network I/O, `BytesInPerSec`, `MessagesInPerSec`) over a 30‑day window using CloudWatch and ksqlDB.  
2. **Compute saturation** – For each topic, calculate the *partition utilization factor* = `Avg(Throughput) / (CPU × NumPartitions)`.  
3. **Rule of thumb** – Target a factor between 0.6–0.8; adjust partitions up or down in 1‑to‑1 increments and re‑measure.  
4. **Cost model** – Use the MSK pricing calculator to estimate per‑partition overhead, then run a cost/benefit simulation in Python.  
5. **Automate** – Deploy an AWS Lambda that triggers every week, runs the analysis, and proposes changes via SNS.

**Result (Deliver Results):**  
Implemented the process for 12 topics; partition counts shifted by ~25 % on average, boosting aggregate ingestion from 1.8 M to 2.6 M msgs/s while cutting broker costs by 13 %. The pipeline latency dropped from 350 ms to 210 ms.

**Learning:**  
The key insight was that *partition count is a function of both throughput and cost*, not just performance. Future iterations will incorporate auto‑scaling via MSK’s `BrokerCount` feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
