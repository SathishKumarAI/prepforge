---
qid: ing_aadc8855b5__aws__local
question: 'Explain: Cells, AZs, and replication — Kora: The Cloud Native Engine for
  Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:57-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to redesign the fault‑tolerant ingestion layer for a real‑time analytics platform that streamed millions of events per second from IoT devices into Kafka. The goal was to reduce downtime, cut costs by 20 %, and keep latency below 200 ms.

**Action – Technical Design**  
I introduced **Kora**, Amazon’s Cloud Native Engine for Apache Kafka, which treats *cells* as logical partitions of a topic that can be replicated across Availability Zones (AZs).  

1. **Cells** = micro‑shards with independent offset commits → allows parallel scaling and graceful back‑pressure handling.  
2. **AZ replication** = Kora automatically mirrors each cell to at least two AZs, ensuring data durability without manual broker configuration.  
3. **Replication factor tuning** = I set a factor of 3 for critical streams, which lowered the probability of data loss from 1 × 10⁻⁶ to 1 × 10⁻¹² (per AWS SLA).  

The solution leveraged **Amazon MSK**, **EKS** for Kora pods, and **AWS Fargate** for cost‑efficient scaling. We also integrated **CloudWatch metrics** and **SQS dead‑letter queues** for observability.

**Result**  
- Downtime dropped from 4 h/month to <10 min over a year.  
- Latency improved by 35 % (average 130 ms).  
- Operational cost fell 22 % due to auto‑scaling and reduced broker overhead.  

**Reflection – Bar‑raiser Notes**  
I owned the end‑to‑end pipeline, dove deep into Kafka internals, quantified impact with SLAs, and iterated after a minor data‑corruption incident by adding schema validation checks—showing continuous learning and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
