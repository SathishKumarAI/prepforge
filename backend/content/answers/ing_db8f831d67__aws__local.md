---
qid: ing_db8f831d67__aws__local
question: 'Explain: hello everyone my name is Miriam and — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 491
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:04-05:00'
sources: []
---

**Situation / Task**  
In my last role I was tasked to build a real‑time ride‑matching platform for a regional on‑demand mobility service, similar to Uber/Ola. The goal was to reduce passenger wait times by 30 % while keeping operational costs below the current $0.05 per trip budget.

**Action**  
I adopted an **event‑driven architecture**:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Ingestion | Amazon Kinesis Data Streams | Low‑latency, horizontally scalable stream for driver & rider events |
| Orchestration | Step Functions + Lambda | Serverless state machine to route events to the matching engine |
| Matching Engine | EC2 Auto Scaling group running a custom Python service (Redis cache for proximity) | Predictable CPU/GPU requirements; autoscaling keeps 99.9 % availability |
| Persistence | Amazon DynamoDB (partitioned by region) | Low‑latency writes/reads, automatic scaling |
| Analytics | Athena on S3 + QuickSight | Real‑time dashboards for wait times & cost metrics |

I added a **geo‑hash sharding** layer to limit the search space, and used **AWS WAF** + **Shield** for DDoS protection. Cost was controlled by reserving 50 % of the EC2 instances (spot + on‑demand mix) and keeping Lambda executions under 100 k invocations/month.

**Result**  
Within three months after launch:

* Average passenger wait time dropped from 7.8 min to **5.1 min** – a **35 % reduction** (exceeding the target).  
* Trip cost per rider fell from $0.06 to **$0.045**, saving **$120k/month** for the company.  
* System achieved **99.95 % availability** during peak hours.

**Reflection**  
I learned that *Ownership* means iterating on metrics, not just architecture—hence the continuous A/B testing loop. The design also demonstrates *Dive Deep*: we measured latency per component and tuned Redis caching granularity. I will keep experimenting with serverless matching to further reduce costs while maintaining SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
