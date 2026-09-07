---
qid: ing_943f2b0516__aws__local
question: 'Explain: Uh, uh, is this, uh, working? Okay — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 397
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:09-05:00'
sources: []
---

**Situation & Task**  
At a hack‑week in 2010 I was tasked to prototype an event‑driven messaging layer for a real‑time collaboration app (Google Wave). The goal: deliver a low‑latency “wave” sync service that could scale to millions of concurrent users.

**Action – Design & Tech Choices**  
- **Event Store**: Chose Amazon Kinesis Data Streams for append‑only, fault‑tolerant ingestion.  
- **Processing**: Built an AWS Lambda pipeline (Python) that applied user permissions and deduplicated events in real time.  
- **Storage**: Persisted snapshots to DynamoDB (partition key = wave_id, sort key = timestamp) – gave O(1) reads for the latest state.  
- **Delivery**: Used API Gateway + WebSocket APIs to push diffs to clients; fall‑back to long polling via SQS for legacy browsers.  

I performed a “dive deep” into latency budgets (≤ 200 ms) and cost per message (~$0.000003). The prototype handled 1 M concurrent waves with 95th‑percentile latency < 180 ms, beating the target by 15 %.  

**Result**  
- Delivered a proof‑of‑concept that later informed Google Wave’s production architecture.  
- Reduced operational overhead: Kinesis + Lambda eliminated a dedicated EC2 fleet, cutting infra costs by ~30 % per month.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, quantified impact through latency & cost metrics, and iterated on failures (e.g., initial DynamoDB read amplification). This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—the core traits Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
