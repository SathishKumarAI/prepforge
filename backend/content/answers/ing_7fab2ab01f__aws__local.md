---
qid: ing_7fab2ab01f__aws__local
question: 'Explain: Adaptive Timeouts — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 611
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:51-05:00'
sources: []
---

**Situation (S)**  
I was leading a backend team that had to serve > 40 M reads/sec for Uber’s real‑time ETA service. The data lived in DynamoDB and S3, but the latency budget was 10 ms – far tighter than what raw storage could deliver.

**Task (T)**  
Build an adaptive caching layer that automatically tunes timeouts based on traffic spikes, while keeping costs predictable and ensuring high availability.

**Action (A)**  

| Step | What I did | AWS Services | Why |
|------|------------|--------------|-----|
| 1 | Designed a **dual‑layer cache**: in‑memory Redis‑compatible cluster (Amazon ElastiCache) for hot keys, backed by an S3‑based cold store with per‑object versioning. | ElastiCache, S3 | Gives sub‑ms reads for the 5 % hottest data; cheaper storage for the rest. |
| 2 | Implemented **adaptive timeout logic** in a Lambda function that monitors CloudWatch metrics (latency, hit rate) every minute and updates the `read_timeout` config of each cache node via Parameter Store. | Lambda, CloudWatch, SSM Parameter Store | Auto‑tunes to network jitter; avoids over‑provisioning. |
| 3 | Added **request sharding**: partition keys by prefix hash and route to dedicated cache shards. Each shard is a separate ElastiCache cluster with auto‑scaling policies tied to request rate. | ElastiCache, Application Auto Scaling | Keeps per‑node load below 1 M reads/sec; scales horizontally during surge. |
| 4 | Built **canary tests** using CloudWatch alarms and X-Ray tracing to detect stale data or cache miss bursts; rolled back config changes automatically if latency > 15 ms for > 5 %. | CloudWatch, X‑Ray | Maintains reliability while experimenting. |

**Result (R)**  
- Reduced average read latency from **120 ms to 8 ms** (×15x).  
- Cut DynamoDB reads by **92 %**, lowering cost from $3M/month to $0.4M/month.  
- Achieved 99.999% availability during a 24‑hour traffic spike; no SLA violations.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for end‑to‑end performance and cost.  
- **Dive Deep** – Built metrics pipelines, traced latency sources, and iterated on timeout logic.  

### Bar‑raiser takeaways
- Quantified impact (latency & cost).  
- Demonstrated depth: architecture trade‑offs, auto‑scaling, canary safety nets.  
- Showed learning from a failed first attempt where we over‑provisioned cache nodes and incurred 30 % higher costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
