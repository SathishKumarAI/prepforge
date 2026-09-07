---
qid: ing_f0d4369463__aws__local
question: 'Explain: Message — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:39-05:00'
sources: []
---

**Situation & Task**  
At my last role I built a real‑time recommendation engine that needed to ingest millions of user actions per day, transform them into features, and publish predictions back to the UI with < 200 ms latency. The challenge was to design a fault‑tolerant, horizontally scalable Pub/Sub pipeline that could handle spikes during product launches.

**Action (Design)**  
1. **Event Ingestion** – Use *Amazon Kinesis Data Streams* (shard‑count 8) for raw click events; autoscale via CloudWatch alarms.  
2. **Processing** – Lambda + Step Functions orchestrate feature extraction in parallel, writing results to *DynamoDB* (partition key = user_id).  
3. **Pub/Sub Layer** – *Amazon SNS* topics per recommendation type push messages to *SQS* FIFO queues that guarantee order and deduplication.  
4. **Consumer** – Front‑end microservices poll SQS, pull predictions from DynamoDB, and serve them via API Gateway (edge caching).  

**Result**  
- Throughput rose from 1 M events/day to 15 M with zero data loss during a 3× traffic surge.  
- Latency dropped from 650 ms to 180 ms (95th percentile), improving conversion by **12 %**.  
- Cost decreased 18 % by leveraging Lambda’s pay‑per‑invoke and SQS's low per‑message fees.

**Reflection & Learning**  
I took full ownership of the end‑to‑end flow, diving deep into Kinesis shard sizing and SNS retry logic to eliminate back‑pressure. After an initial failure where a burst caused queue overrun, I introduced exponential back‑off in Step Functions—an iterative fix that taught me the value of quick feedback loops.

> **Leadership Principles:** *Customer Obsession* (delivering faster predictions), *Ownership* (owning the pipeline from ingestion to UI), *Dive Deep* (profiling latency sources), and *Bias for Action* (rapidly iterating on design).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
