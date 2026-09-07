---
qid: ing_0b1e760c6f__aws__local
question: 'Explain: My favorite algorithm (and data structure): HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 470
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:06-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that needed to give real‑time insights into unique user counts across 50+ microservices without storing millions of IDs. The requirement was sub‑10 ms latency, <1 % error, and cost below $0.02 per million queries.

**Action (Design & Implementation)**  
I chose **HyperLogLog (HLL)** for cardinality estimation because it offers a fixed 12 kB memory footprint with 0.81 % standard error—perfect for the scale. I built a stateless HLL aggregator in Go, deployed as an AWS Lambda behind API Gateway, and stored intermediate sketches in Amazon DynamoDB (partition key = service‑id). Each request hashes the incoming user ID to one of 2⁴⁰ registers, updates the sketch, and writes back atomically.

Key AWS services:  
- **Lambda** – burstable compute, pay per invocation.  
- **DynamoDB** – low‑latency storage with auto‑scaling; we used on‑demand mode to avoid over‑provisioning.  
- **S3 + Athena** – nightly batch merge of HLL sketches for historical reporting.

I added a *merge* API that lets downstream services aggregate sketches across regions, leveraging DynamoDB Streams and Kinesis Data Firehose to keep the global sketch fresh.

**Result**  
Within two weeks we reduced cardinality query latency from 200 ms (Redis set) to <10 ms. The system handled 1M requests/day with a total cost of $15/month—50% cheaper than the previous solution. Accuracy remained within ±0.9 %.  

**Leadership Principles Reflected**  
- **Customer Obsession** – delivered low‑latency, highly available insights for product analytics teams.  
- **Ownership & Dive Deep** – architected end‑to‑end data flow, tuned HLL parameters, and iterated on cost/throughput trade‑offs.

**Learning from Failure**  
Early tests overestimated the error margin because of skewed hash functions; switching to a 64‑bit MurmurHash corrected this, illustrating the importance of validating assumptions against real traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
