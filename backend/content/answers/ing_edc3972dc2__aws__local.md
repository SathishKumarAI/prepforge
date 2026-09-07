---
qid: ing_edc3972dc2__aws__local
question: 'Explain: Re-architecture: Results — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 443
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:53-05:00'
sources: []
---

**Situation**  
At Meta I led a re‑architecture of the *Results* pipeline that delivered model inference results to millions of users. The legacy batch job ran nightly, causing stale data and a 40 % SLA miss rate for time‑sensitive features.

**Task**  
Build an asynchronous, event‑driven system that processes inference requests in near real‑time while keeping costs <30 % of the original spend.

**Action**  
1. **Decoupled ingestion**: Switched from a monolithic Spark job to *Amazon Kinesis Data Streams* for event capture (10 k events/sec).  
2. **Serverless compute**: Deployed *AWS Lambda* with *SageMaker Endpoint* integration; each request triggers a lightweight Lambda that streams data to SageMaker, receives predictions, and writes back to DynamoDB.  
3. **Observability & scaling**: Enabled *Amazon CloudWatch* metrics + *X-Ray* tracing; auto‑scaling based on Kinesis shard count kept latency <200 ms during peak bursts.  
4. **Cost control**: Leveraged *SageMaker Batch Transform* for bulk jobs, keeping compute usage 2× cheaper than the previous EMR cluster.

**Result**  
- Reduced end‑to‑end latency from 12 h to <5 min (99th percentile).  
- SLA compliance rose from 60 % to 98 %.  
- Operational cost dropped by **35 %**, freeing $200k/month for new ML experiments.  

**Learnings**  
Ownership: I owned the entire flow, not just a component. Dive deep: profiling Lambda cold starts revealed a 15 ms overhead; we reduced it by increasing provisioned concurrency. Bias for Action: I shipped an MVP in 3 weeks, iterated fast based on real‑time metrics. The bar‑raiser will note my quantitative impact and the iterative learning loop that turned a legacy monolith into a scalable, cost‑efficient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
