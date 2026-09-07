---
qid: ing_bd786d9756__aws__local
question: 'Explain: Streaming and latency — Understanding latency | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 414
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:47-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of our real‑time voice‑to‑text pipeline from a batch model to an event‑driven architecture so we could meet the 200 ms latency SLA required by our Voice‑Assistants product.  

**Action**  
I scoped the problem with *Customer Obsession* and *Dive Deep*.  
1. **Data ingestion** – I chose Amazon Kinesis Data Streams (shard size 5 MiB/s) to capture every user utterance as a JSON record, guaranteeing <10 ms network delay.  
2. **Processing** – I wired the stream to an AWS Lambda function that invoked our SageMaker real‑time endpoint. The function had a *Provisioned Concurrency* of 100 instances, ensuring predictable cold‑start latency (<50 ms).  
3. **Back‑pressure & retry** – A dead‑letter queue on SQS handled transient failures; CloudWatch metrics triggered auto‑scaling for the Lambda concurrency pool based on the 95th percentile latency.  
4. **Observability** – I added X-Ray traces and custom CloudWatch dashboards to correlate input size, inference time, and error rates.

**Result**  
Latency dropped from an average of 1.2 s (batch) to 180 ms (real‑time), exceeding the SLA by 20 %. Throughput scaled linearly to 10× user traffic without cost overruns—$0.06 per inference versus $0.12 previously.

**Reflection**  
I learned that *Bias for Action* is balanced with rigorous monitoring; early alerts prevented a cascade of failures when traffic spiked. This architecture now serves 30 M daily requests, and I documented the trade‑offs so the team could iterate on model size vs latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
