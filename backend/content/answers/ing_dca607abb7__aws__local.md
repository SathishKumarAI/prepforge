---
qid: ing_dca607abb7__aws__local
question: 'Explain: Identify Bottlenecks — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 392
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:58-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
When I joined a fintech startup, we had to launch an ML‑powered fraud detector within two months. The data pipeline stalled on ingestion, so I owned the task of identifying bottlenecks before the design interview with AWS.

**Action (Dive Deep & Bias for Action)**  
1. **Profiling** – ran *AWS CloudWatch* metrics and *X-Ray* traces on our Kinesis Data Streams; latency spiked at 120 ms during peak hours, CPU hit 90 % on the ingestion EC2s.  
2. **Root‑cause analysis** – discovered that the batch size of 10k records was too large for the downstream Lambda, causing throttling (5 k TPS vs 15 k expected).  
3. **Redesign** – split the stream into two shards, added an *SQS* buffer, and switched to *AWS Glue* ETL jobs with parallel workers (auto‑scaling).  
4. **Cost & Availability** – estimated savings of 35 % by moving from on‑prem servers to spot instances; achieved 99.9 % availability by enabling multi‑AZ deployment.

**Result (Deliver Results)**  
After the redesign, ingestion latency dropped to <30 ms and throughput increased to 18 k TPS. The fraud detector went live two weeks early, reducing false positives by 42 % in the first month, saving ~$250K annually.

**Bar‑raiser takeaway**  
Ownership: I led the whole investigation. Dive deep: used metrics & tracing. Quantified impact: latency, throughput, cost savings. Learned from failure: scaling strategy had to evolve with traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
