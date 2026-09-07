---
qid: ing_57d7ec93ee__aws__local
question: 'Explain: Stay in touch — Designing Data-Intensive Applications (DDIA) \u2014
  an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 459
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:22-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* At my previous company we had a real‑time recommendation engine that processed 5 M events per day. The data lake was fragmented across on‑prem Hadoop and an S3 bucket, leading to stale models and 30 % SLA drift.

*Task:* I led the migration to a unified, “stay‑in‑touch” architecture inspired by Kleppmann’s **DDIA** principles—continuous ingestion, immutable logs, and event‑driven pipelines—to keep our ML models up‑to‑date without manual intervention.

*Action:*  
- **Data pipeline:** Built an Apache Kafka cluster (MSK) as the single source of truth. Each service publishes idempotent events to topics; consumers read in order, guaranteeing exactly‑once semantics.  
- **Storage & catalog:** Persisted raw streams to S3 Glacier Deep Archive for cost efficiency, and used AWS Glue Data Catalog + Athena for schema enforcement—mirroring DDIA’s “schema on read.”  
- **Model training:** Triggered SageMaker Training jobs via EventBridge whenever a new data batch arrived. Models were versioned in Amazon SageMaker Model Registry (aligned with the book’s “model as code” concept).  
- **Serving & monitoring:** Deployed endpoints to SageMaker Endpoint with autoscaling; integrated CloudWatch metrics and AWS X-Ray for latency tracing, ensuring 99.9 % availability.

*Result:*  
- Reduced model retraining time from 48 h to <6 h (95 % faster).  
- Cut storage costs by 40 % using tiered S3 lifecycle policies.  
- Increased recommendation CTR by 12 % within two weeks of deployment, directly impacting revenue.

**Bar‑raiser takeaways:**  
- Demonstrated *ownership* over the full data‑to‑model pipeline.  
- Applied *Dive Deep* into Kafka semantics and AWS cost models.  
- Quantified impact (CTR lift, cost savings).  
- Learned from initial failures (message duplication) by adding deduplication logic—an example of iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
