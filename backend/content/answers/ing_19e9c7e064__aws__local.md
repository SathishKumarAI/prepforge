---
qid: ing_19e9c7e064__aws__local
question: 'Explain: Reference Architecture Examples and Best Practices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 535
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:04-05:00'
sources: []
---

**Situation – Task**

In my last role I was tasked with migrating a legacy recommendation engine from on‑prem Hadoop to an end‑to‑end AWS ML pipeline that could scale to millions of users while keeping latency < 200 ms for real‑time scoring.

**Action – Design & Execution**

1. **Reference Architecture**  
   * **Data ingestion:** Amazon Kinesis Data Streams → Glue catalog → S3 (raw)  
   * **Feature store:** DynamoDB + SageMaker Feature Store, versioned with timestamps  
   * **Model training:** SageMaker Pipelines on spot instances, hyper‑parameter tuning via SageMaker Experiments.  
   * **Serving layer:** SageMaker Neo compiled models deployed to AWS Lambda + API Gateway for edge latency; fallback to SageMaker Endpoint (scalable).  

2. **Best Practices**  
   * **Version control & CI/CD** – use CodeCommit + CodePipeline to trigger training jobs on new data weekly.  
   * **Observability** – CloudWatch metrics, X-Ray tracing, and SageMaker Model Monitor for drift detection.  
   * **Cost‑optimization** – Spot fleets for training, Lambda provisioned concurrency for peak traffic; reserved instances for the baseline endpoint.  

3. **Scalability & Availability** – Multi‑AZ deployment of Kinesis and DynamoDB, auto‑scaling groups for SageMaker endpoints, and global edge caching via CloudFront.

4. **Trade‑offs** – Chose Lambda over EC2 to eliminate server maintenance but accepted a higher cold‑start cost; mitigated with provisioned concurrency during launch windows.

**Result – Impact**

* Real‑time inference latency dropped from 1.3 s to < 200 ms (90% reduction).  
* Daily active users increased by 35%, revenue grew $2M/month.  
* Operational costs fell 40% compared to the previous on‑prem stack.

**Leadership Principles Reflected**

- **Customer Obsession:** Delivered a faster, more reliable recommendation experience.  
- **Ownership & Dive Deep:** Built end‑to‑end pipelines, debugged drift issues, and continuously optimized cost/latency trade‑offs.  

Bar‑raisers look for evidence of taking full ownership, depth in design decisions (why Lambda vs EC2), quantifiable impact (latency, revenue), and lessons learned (e.g., cold start mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
