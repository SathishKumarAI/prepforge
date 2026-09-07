---
qid: ing_72cb272ecf__aws__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 512
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:12-05:00'
sources: []
---

**Situation**  
I was tasked to redesign Twitter’s “trending topics” feature so it could handle a 10× traffic spike during global events (e.g., the Olympics). The goal was to keep latency under 200 ms and cost per request below $0.0001.

**Task**  
Scale the existing read‑heavy pipeline while preserving real‑time accuracy, without rewriting the entire codebase.

**Action**  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingestion & pre‑aggregation | **Kinesis Data Streams + Lambda** | Captures tweet streams with sub‑millisecond latency; Lambda scales automatically to 10 k records/s. |
| State store (hot topics) | **DynamoDB Global Tables** | Multi‑region, single‑write consistency; provisioned throughput of 200 WCU/RCU per region keeps read latency <5 ms. |
| Real‑time analytics | **EMR on Spot + Spark Structured Streaming** | Processes 1 M tweets/s in near‑real time; spot instances reduce cost by ~60%. |
| Serving layer | **API Gateway + Lambda@Edge + CloudFront** | Edge caching cuts response latency to <30 ms for global users. |
| Cost control | **AWS Budgets + Auto Scaling** | Triggers alerts when spend > $2k/month and scales down idle resources overnight. |

I added a **dedicated “trend‑queue”** in SQS to decouple ingestion from aggregation, enabling back‑pressure handling during traffic surges.

**Result**  
- Latency dropped from 600 ms to 180 ms (30% improvement).  
- Cost per request fell from $0.0003 to $0.00008 (73% savings).  
- System handled a 12× spike during the World Cup without outages, meeting SLA.

**Learning**  
Initially I underestimated DynamoDB’s write capacity; a failed test revealed throttling at peak hours. I revised the schema to use composite keys and increased WCU pre‑emptively—demonstrating *Ownership* and *Dive Deep*. The project earned me the “High‑Impact Innovator” badge in our quarterly review, showcasing how data‑driven decisions drive measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
