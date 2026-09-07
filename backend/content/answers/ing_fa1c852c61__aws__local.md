---
qid: ing_fa1c852c61__aws__local
question: 'Explain: we might need the data in real — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 410
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:36-05:00'
sources: []
---

**Situation & Task**  
While leading a new “real‑time ETA” feature at a ride‑hailing startup, we discovered that our batch‑processed trip logs caused a 30 % lag in driver–passenger matching—customers were booking rides 4–6 seconds later than competitors. I was tasked with redesigning the data pipeline to deliver near‑instantaneous metrics without breaking existing services.

**Action**  
1. **Data ingestion:** Switched from nightly Kinesis Data Firehose to a *stream‑to‑stream* architecture using Amazon Kinesis Data Streams (KDS) for driver GPS updates and passenger requests, guaranteeing <200 ms latency.  
2. **Processing & enrichment:** Deployed AWS Lambda functions to enrich events in real time, pushing results to an Amazon DynamoDB Global Table for low‑latency reads.  
3. **Analytics layer:** Launched a Kinesis Data Analytics (SQL) job that aggregates ETA calculations and writes to an Elasticache Redis cluster, which feeds the matchmaking microservice.  
4. **Observability:** Added CloudWatch metrics and X-Ray tracing; set up automated alerts on 99th‑percentile latency >300 ms.

**Result**  
- Reduced match latency from 5 s to <250 ms (a 95 % improvement).  
- Increased driver–passenger fill rate by **12 %** and trip revenue grew $1.8M in the first quarter post‑launch.  
- Cost dropped 18 % due to serverless compute scaling automatically with traffic.

**Reflection**  
I *owned* the entire end‑to‑end flow, *dived deep* into each service’s trade‑offs, and learned that “infrastructure is a feature”—the right architecture directly drives customer obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
