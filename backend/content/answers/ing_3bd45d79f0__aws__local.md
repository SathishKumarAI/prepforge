---
qid: ing_3bd45d79f0__aws__local
question: 'Explain: Finetuning — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 489
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:33-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
I was leading a cross‑functional team that built an internal marketplace for custom AI solutions. Our users wanted to fine‑tune OpenAI models and pay only for the compute they actually used.

**Task**  
Design a transparent, scalable pricing engine that could bill per‑token and per‑epoch while keeping latency <200 ms and cost predictability for customers.

**Action (Dive Deep & Deliver Results)**  

1. **Requirements** – Per‑token cost, batch discounting, real‑time usage dashboards, audit trail.  
2. **Architecture** –  
   * `Lambda` receives fine‑tune job events → stores metadata in **DynamoDB** (`Jobs`, `Usage`).  
   * Jobs trigger **SageMaker Endpoint** that streams token counts back to Lambda via **Kinesis Data Streams**.  
   * Lambda updates DynamoDB with cumulative usage; a scheduled **Step Functions** job aggregates daily totals into an S3 bucket (partitioned by customer).  
   * A **QuickSight** dashboard feeds the front‑end and triggers automatic price adjustments in our billing microservice (written in Go, deployed on ECS Fargate).  
3. **Cost/Scalability** – Lambda scales to 10k concurrent jobs; DynamoDB handles >1 M write ops/sec with <5 ms latency. Kinesis provides at‑least 1 MB/s per shard, ensuring no bottleneck during peak fine‑tune spikes.  
4. **Trade‑offs** – Using serverless reduces operational overhead but introduces cold‑start risk; mitigated by provisioned concurrency for critical functions.

**Result**  
The system reduced billing errors by **98%**, cut manual reconciliation time from 3 days to <30 min, and increased customer satisfaction scores (CSAT) from 4.2 to 4.8/5 within two months. Learned that a real‑time telemetry pipeline is essential for accurate AI pricing; next iteration will add predictive scaling based on token usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
