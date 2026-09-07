---
qid: ing_185563d6d4__aws__local
question: 'Explain: provide a bit more Precision into what — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 358
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:35-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> **Situation:** A client’s fraud‑detection model was trained on a static data lake, producing stale predictions that missed 30 % of real‑time anomalies.  
> **Task:** Re‑architect the pipeline to feed *live* events into the model with sub‑second latency while keeping cost < $5k/month.  
> **Action:** I designed an event‑driven architecture using **Amazon Kinesis Data Streams** as the ingestion layer, routing each transaction record through **AWS Lambda** for enrichment (IP geolocation via Amazon DynamoDB). The enriched stream feeds into **Amazon SageMaker Endpoint** (real‑time inference) and simultaneously lands in **S3** for batch re‑training. I added a **Step Functions** state machine to orchestrate retries, dead‑letter queues, and metrics publishing to **CloudWatch**.  
> **Result:** Prediction latency dropped from 2 min to < 200 ms, detection rate improved by 18 % (from 70 % to 88 %), and operational cost stayed below the target due to auto‑scaling Kinesis shards and Lambda concurrency controls.

**Key takeaways for a bar‑raiser:**  
- **Ownership:** I owned the entire data flow from ingestion to model serving.  
- **Dive Deep:** I quantified latency, throughput, and cost trade‑offs.  
- **Learning from failure:** The initial batch‑only approach failed customer expectations; switching to event‑driven solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
