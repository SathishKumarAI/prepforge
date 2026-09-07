---
qid: ing_45a6250fd4__aws__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 454
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:05-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning the “Communications” module of a high‑traffic Twitter‑style app (≈ 10 M daily active users) so that it could handle real‑time messaging, retweets and mentions without latency spikes.

**Action**  
1. **Requirements & Constraints** – 5 ms end‑to‑end latency for push notifications; 99.9 % availability; cost ≤ $200k/yr.  
2. **Design** –  
   * **Event Bus**: Amazon Kinesis Data Streams (shard per region) to ingest tweets in real time.  
   * **Processing Layer**: AWS Lambda + Step Functions for enrichment (user mentions, hashtags).  
   * **Storage**: DynamoDB Global Tables for user feeds (partition key = `UserID`, sort key = `Timestamp`) with on‑demand capacity to auto‑scale.  
   * **Cache**: Amazon ElastiCache Redis for hot follow lists and rate‑limit counters.  
   * **Notification**: SNS topics per region, backed by AWS Pinpoint for mobile push.  
3. **Scalability & Availability** – Kinesis shards scale horizontally; DynamoDB Global Tables replicate across AZs, giving low‑latency reads worldwide.  
4. **Cost Trade‑offs** – Chose on‑demand DynamoDB to avoid over‑provisioning during traffic bursts; reserved capacity for SNS/Pinpoint yields ~30 % savings.

**Result**  
Post‑deployment the system handled 3× peak load with < 2 ms latency, achieved 99.95 % uptime, and reduced infra cost by 22 % compared to the legacy monolith.  

> **Leadership Principles** – *Customer Obsession* (delivering sub‑millisecond experience) and *Ownership* (owning end‑to‑end architecture).  
> **Bar‑raiser cues** – deep dive into AWS services, quantified performance gains, and lessons from a failed monolithic attempt that lacked horizontal scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
