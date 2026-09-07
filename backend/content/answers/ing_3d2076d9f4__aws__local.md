---
qid: ing_3d2076d9f4__aws__local
question: 'Explain: Footnotes — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 387
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:55-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A client’s fraud‑detection model stalled because new transaction data never reached the inference endpoint in real time.

*Task*: Design an event‑driven pipeline that ingests every transaction, scores it instantly, and triggers alerts if risk exceeds a threshold—all while keeping costs predictable.

*Action*:  
1. **Trigger**: Each transaction record is written to an Amazon Kinesis Data Stream (or EventBridge for lower latency).  
2. **Processing**: A Lambda function consumes the stream, calls SageMaker endpoint `fraud‑predict`, and writes results to DynamoDB.  
3. **Alerting**: If the score > 0.8, another Lambda publishes a message to an SNS topic that notifies fraud analysts via SMS/Email.

AWS services used: Kinesis (scalable ingestion), Lambda (serverless compute, auto‑scale), SageMaker Inference Endpoint (managed ML hosting), DynamoDB (low‑latency storage), SNS (notification).  

*Result*: Latency dropped from 5 s to <200 ms per transaction, throughput increased from 1 kTPS to 10 kTPS. Cost fell by 30% because Lambda scales down during idle periods, and we pay only for the SageMaker inference time.

**Bar‑raiser cues**:  
- Ownership of end‑to‑end flow (data → score → alert).  
- Dive deep into latency bottlenecks and cost curves.  
- Quantified impact (latency & cost metrics).  
- Learning loop: after a 2 % spike in false positives, we retrained the model, reducing alerts by 25% while maintaining detection accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
