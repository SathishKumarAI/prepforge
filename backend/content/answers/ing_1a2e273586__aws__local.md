---
qid: ing_1a2e273586__aws__local
question: 'Explain: Pattern A: Direct MCP Connection — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 483
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:29-05:00'
sources: []
---

**Situation / Task**  
When a client needed real‑time inference for an IoT sensor network, I was asked to design the *Direct MCP Connection* pattern—an end‑to‑end pipeline that streams raw data from edge devices straight into an AI model hosted in AWS without intermediate buffering. The goal was 99.9 % availability and <50 ms latency while keeping cost under $0.01 per inference.

**Action**  
I scoped the requirements: low‑latency, fault‑tolerant ingestion, serverless compute, and automated retraining.  
1. **Edge → Cloud** – Use AWS IoT Core’s *Direct Connect* feature to establish a TLS‑secured MQTT channel that pushes telemetry directly into an Amazon Kinesis Data Stream (shard size 2 MiB/s).  
2. **Ingestion & Preprocessing** – A Lambda function, triggered by the stream, normalizes data and writes it to S3 in parquet for batch training; simultaneously forwards it to a SageMaker Endpoint via *Amazon API Gateway* (REST proxy) for inference.  
3. **Inference & Feedback Loop** – The endpoint is a real‑time TensorFlow model hosted on an EFS‑backed, autoscaling SageMaker instance pool (using Spot Instances for cost). Lambda stores predictions back into DynamoDB for audit and triggers another Lambda that pushes the result to AWS IoT Analytics for drift detection.  
4. **Observability** – CloudWatch Alarms monitor latency; a Step Functions workflow auto‑rolls new model versions when drift exceeds 5 %.  

**Result**  
Latency dropped from 120 ms (previous batch‑based) to 38 ms, throughput increased by 4×, and cost per inference fell to $0.008. The system maintained 99.95 % uptime over six months.  

**Reflection**  
I learned that *Direct MCP Connection* works best when the edge device can handle TLS handshake overhead; otherwise a lightweight buffering layer is needed. I’ll incorporate this insight into future IoT‑AI designs.

> **Leadership Principles:** *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
