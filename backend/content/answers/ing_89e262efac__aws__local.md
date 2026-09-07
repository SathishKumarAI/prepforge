---
qid: ing_89e262efac__aws__local
question: 'Explain: How to prepare — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 455
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:43-05:00'
sources: []
---

**Answer – “How do you prepare for a Sarvam AI project?”**

**Situation & Task**  
I led a cross‑functional team that built *Sarvam*, an end‑to‑end AI platform for real‑time fraud detection in e‑commerce. My goal was to deliver a solution that could ingest 10 M events/sec, score them with <200 ms latency, and be cost‑effective for a $5 B retailer.

**Action (Technical)**  
1. **Requirements dive deep** – mapped data sources (Kafka streams, S3 logs) and model constraints (precision ≥ 0.95).  
2. **Architecture** –  
   * **Event ingestion:** Amazon Kinesis Data Streams + Lambda for schema validation.  
   * **Feature store:** DynamoDB + DAX for <10 ms reads.  
   * **Model inference:** SageMaker Endpoint behind an Application Load Balancer with autoscaling based on CPU usage.  
   * **Observability:** CloudWatch metrics, XRay traces, and a Grafana dashboard.  
3. **Scalability & Cost** – used Spot Instances for batch training (×4 cost reduction) and reserved instances for inference to keep the monthly bill <$200 k.  
4. **Bias for Action** – built a CI/CD pipeline with CodePipeline and CloudFormation; rolled out A/B tests in 24 h.

**Result**  
- Latency dropped from 1.2 s to 180 ms (6× improvement).  
- Detection accuracy hit 97%, reducing false positives by 35%.  
- Cost per inference fell 28% year‑over‑year.

**Reflection (Ownership & Learning)**  
I took full ownership of the post‑mortem after a production outage; identified a hidden serialization bottleneck and refactored the Lambda layer, saving an extra 12 % in compute time. This demonstrates deep ownership, continuous learning, and delivering measurable results—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
