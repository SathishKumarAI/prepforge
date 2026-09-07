---
qid: ing_c3567a596c__aws__local
question: 'Explain: So here''s another kind of variant of — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 351
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:43-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional squad for the *Seattle Conference on Scalability*, I was tasked to redesign YouTube’s video ingestion pipeline so that it could handle a 4× spike in concurrent uploads during live events without compromising latency or cost.

**Action**  
I **owned** the solution by first performing a deep dive into current metrics: average upload time 12 s, queue depth 1.3k requests/sec, and failure rate 0.8%. I mapped out a new event‑driven architecture using **Amazon Kinesis Data Streams** for real‑time ingestion, **AWS Lambda** (with provisioned concurrency) for transcoding orchestration, and **Amazon S3 Intelligent-Tiering** for storage. To keep costs predictable, I added **AWS Step Functions** to gate retries only on transient errors, cutting unnecessary Lambda invocations by 30%. I also implemented **CloudWatch anomaly detection** to auto‑scale Kinesis shards during peak hours.

**Result**  
Post‑deployment, upload latency dropped from 12 s to 4.5 s (a 63% reduction), queue depth never exceeded 400 requests/sec even at 8× traffic, and the total cost per month fell by $48k compared to the legacy pipeline—an 18% savings while delivering **zero** service disruptions.

**Reflection**  
The bar‑raiser will note my ownership of metrics, deep dive into failure modes, quantified impact, and iterative learning from a small pilot before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
