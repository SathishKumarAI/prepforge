---
qid: ing_96e1bee6d8__aws__local
question: 'Explain: What we offer — Careers | Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 509
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:15-05:00'
sources: []
---

**What we offer – Careers | Together AI**

*Leadership Principles:* **Customer Obsession**, **Ownership**  
*STAR (Behavioral):*  

- **Situation:** A client needed a scalable, low‑latency recommendation engine for a multi‑million‑user e‑commerce platform.  
- **Task:** Design an end‑to‑end AI solution that could ingest streaming click data and deliver real‑time personalized offers.  
- **Action:** I led the architecture using Amazon SageMaker for model training (using GPU P4 instances), Amazon Kinesis Data Streams for ingestion, and Amazon Personalize for inference. I implemented CI/CD with CodePipeline, automated hyperparameter tuning, and set up CloudWatch dashboards for latency/accuracy monitoring.  
- **Result:** The system handled 50 M events/day with <20 ms inference latency, boosting conversion rates by 12% (≈$3 M incremental revenue per quarter). Cost dropped 18% YoY through spot‑instance auto‑scaling and SageMaker’s managed spot training.  

*Technical/System:*  
- **Requirements:** Real‑time predictions, high availability (99.99%), multi‑region failover, GDPR compliance.  
- **Design Choices:**  
  - *SageMaker* for training & hosting; *Personalize* for recommendation logic.  
  - *Kinesis Data Firehose → S3 → SageMaker Feature Store* for feature persistence.  
  - *Lambda + API Gateway* for lightweight inference layer, backed by SageMaker endpoints.  
- **Scalability:** Auto‑scaling policies on GPU/CPU based on CloudWatch metrics; spot fleets to reduce cost.  
- **Availability:** Multi‑AZ deployments with cross‑region replication in the Kinesis stream and SageMaker endpoint failover.  
- **Cost & Trade‑offs:** Spot instances saved 30% on training, but required checkpointing for fault tolerance. Using Personalize reduced inference latency vs. custom TensorFlow models but added a vendor lock‑in; we mitigated by exporting trained models to SageMaker later.

*Bar‑raiser Signals:* I took full ownership of the project, dived deep into performance metrics, quantified business impact, and iterated quickly after initial latency spikes—learning that pre‑warming endpoints and tuning batch sizes were critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
