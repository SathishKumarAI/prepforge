---
qid: ing_de45fa2597__aws__local
question: 'Explain: Latest System Design Questions for 2025-2026'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 1003
total_tokens: 1236
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:18-05:00'
sources: []
---

**Behavioral (STAR – Customer Obsession & Ownership)**  
*Situation*: At my previous company we were asked to build a real‑time recommendation engine for an e‑commerce platform that had just doubled its traffic in 2024.  
*Task*: Deliver a system that could ingest user clickstreams, train models on the fly, and serve predictions with <50 ms latency while keeping monthly costs below $200k.  
*Action*: I led a cross‑functional squad, mapped the end‑to‑end data flow, and defined SLAs for each component. We chose **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda + SageMaker Pipelines** for on‑demand training, and **Amazon API Gateway + DynamoDB Global Tables** for low‑latency inference. I introduced a “model card” registry in S3 to track versioning and drift, and set up CloudWatch dashboards that surfaced latency, error rates, and cost per request.  
*Result*: The system handled 1.2 M requests/sec during peak sales with <30 ms average latency. Model accuracy (AUC‑ROC) improved by 12% over the legacy batch engine, and we cut infrastructure spend by 18% compared to a monolithic EC2 solution.

---

**Technical/System Design – “Latest System Design Questions for 2025–2026”**

1. **Question**: *Design a serverless pipeline that ingests IoT telemetry from millions of devices, trains predictive maintenance models in real time, and triggers alerts when degradation is detected.*  

2. **Requirements Clarification**
   - Throughput: ≥10 M events/day  
   - Latency: <5 s for alert generation  
   - Model update cadence: every 12 h  
   - Cost: ≤$150k/month

3. **Proposed Architecture**

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingestion | **Amazon Kinesis Data Streams** (shards auto‑scaling) | Handles bursty IoT traffic, provides exactly‑once semantics. |
| Pre‑processing | **AWS Lambda + Amazon EventBridge** | Stateless micro‑functions scale to thousands of concurrent invocations; EventBridge routes to downstream services without provisioning servers. |
| Feature Store | **Amazon Timestream** | Time‑series database with auto‑partitioning, low‑latency reads for model inference. |
| Model Training | **SageMaker Processing Jobs + SageMaker Pipelines** | Automated nightly training jobs that pull features from Timestream; pipelines manage dependencies and rollback. |
| Model Hosting | **Amazon SageMaker Endpoint (Multi‑Model)** | Supports on‑demand inference with <1 s latency, auto‑scaling based on CloudWatch metrics. |
| Alerting | **AWS IoT Events + SNS** | Detect threshold breaches in model predictions; publish to MQTT topics and email/SMS notifications. |

4. **Scalability & Availability**
   - Kinesis shards automatically split when throughput >1 MB/s per shard, ensuring no bottlenecks.
   - Lambda concurrency limits are set via provisioned concurrency for latency‑critical transforms.
   - SageMaker endpoints use multi‑model deployment across multiple AZs; health checks trigger failover to standby instances.

5. **Cost & Trade‑offs**
   - Using Timestream eliminates the need for a separate Redis cache, saving ~30% on memory costs.
   - Lambda vs. Fargate: Lambda’s pay‑per‑execution model keeps idle capacity cost low; however, if we foresee >10 k concurrent invocations, we might shift to Fargate for predictable performance.
   - Multi‑model endpoints reduce endpoint count but increase cold‑start times; mitigated by keeping a warm pool of instances.

6. **Learning from Failure**
   - In a pilot phase, we saw model drift after firmware updates on devices. We introduced automated feature drift checks in SageMaker Pipelines and retrained models when drift exceeded 5%. This proactive measure saved us from two costly production incidents last quarter.

---

**Bar‑raiser cues**

- **Ownership**: Took full responsibility for end‑to‑end pipeline, from ingestion to alerting.
- **Dive Deep**: Chose Timestream after benchmarking against DynamoDB and RDS; quantified latency gains (30 ms vs 120 ms).
- **Quantified Impact**: Reduced alert latency by 70%, cut cost by 18%.
- **Learning from Failure**: Implemented drift detection to avoid model degradation.

This design balances the latest AWS services with Amazon’s leadership principles, delivering a highly scalable, cost‑efficient, and customer‑centric solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
