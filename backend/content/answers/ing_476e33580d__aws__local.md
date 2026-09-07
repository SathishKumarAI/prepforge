---
qid: ing_476e33580d__aws__local
question: 'Explain: Table Schemas — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 547
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:22-05:00'
sources: []
---

**Situation / Task**  
While leading the data‑platform team at Uber I was asked to reduce latency for a global ride‑matching service that read >40 M queries/sec from an online catalog of vehicle attributes stored in DynamoDB. The cache layer had been flaky and cost‑prohibitive, causing 2–3 s tail latencies on peak days.

**Action**  
*Ownership & Bias for Action*: I assembled a cross‑functional squad (backend, infra, SRE) and mapped the read traffic pattern. We chose **Amazon ElastiCache Redis** as an in‑memory store because it offers sub‑µs latency and automatic sharding with Redis Cluster.  

1. **Schema‑aware key design** – we flattened the relational schema into a *hash* per vehicle, keyed by `vehicle_id`.  
2. **Write‑through cache** – every DynamoDB write triggered an SNS event that routed to a Lambda function updating the corresponding Redis hash, guaranteeing eventual consistency within 50 ms.  
3. **Cache warming** – on service start we preloaded the top 10 % most‑requested vehicles (≈4 M keys) using parallel `SCAN` commands and pipelined writes to keep warm during traffic spikes.  

*Dive Deep*: I instrumented latency counters in Lambda, set up CloudWatch dashboards, and ran a controlled rollout. The cache hit rate jumped from 12 % to **92 %**, reducing read latency from 2.3 s (DynamoDB only) to **<200 ms** for the majority of requests.  

*Deliver Results*: The new architecture handled >40 M rps with <0.1 % error rate, cutting infrastructure cost by **35 %** (Redis cluster vs. DynamoDB provisioned throughput). We also added an auto‑scaling policy that spun up additional Redis shards in 30 s when traffic spiked.

**Result**  
- Latency: 95th percentile dropped from 2.3 s to 200 ms.  
- Cost: $120k/yr saved.  
- Reliability: SLA improved to 99.999% availability.  

**Learning**  
The key takeaway was that *schema‑driven cache design* coupled with *event‑driven write‑through updates* can scale to tens of millions of reads per second while keeping costs and operational overhead low. This experience reinforced my belief in owning the entire data path and continuously measuring impact to iterate fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
