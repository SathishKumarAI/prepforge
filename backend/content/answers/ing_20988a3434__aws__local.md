---
qid: ing_20988a3434__aws__local
question: 'Explain: Object-oriented design interview questions with solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 750
total_tokens: 979
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:53-05:00'
sources: []
---

**Situation / Task**

I was asked in a senior ML‑engineer interview to design an object‑oriented framework that could ingest raw sensor data, train multiple models (linear regression, random forest, neural net), and serve predictions at 10 k requests/sec with <50 ms latency.  
*Leadership Principles*: **Ownership** – I took full responsibility for the end‑to‑end pipeline; **Dive Deep** – I dissected every component to expose hidden bottlenecks.

**Action**

1. **Requirements & Constraints**  
   * Batch ingestion: 5 TB/day, real‑time streaming.  
   * Model training: GPU and CPU options, 30 min per job.  
   * Prediction latency <50 ms, SLA 99.9%.  

2. **Design Overview (Python + AWS)**  

| Layer | Class/Interface | Responsibility |
|-------|-----------------|----------------|
| `DataLoader` | abstract base class | Load from S3 or Kinesis; implement concrete `S3Loader`, `KinesisLoader`. |
| `FeatureEngineer` | abstract | Transform raw to features; subclasses for scaling, encoding. |
| `Model` | abstract | Train/score; concrete: `LinearRegressionModel`, `RandomForestModel`, `NeuralNetModel`. |
| `ModelRegistry` | singleton | Persist model metadata in DynamoDB; versioning. |
| `Predictor` | wrapper | Load best model from registry, cache in Redis for <50 ms latency. |

3. **AWS Services & Trade‑offs**  
   * **S3 + Kinesis Data Streams** – durable storage + low‑latency ingestion.  
   * **ECS Fargate** – containerized training jobs; spot instances reduce cost 70 %.  
   * **SageMaker Pipelines** – orchestrate training, validation, model registration.  
   * **ElasticCache (Redis)** – in‑memory cache for inference; cheaper than EBS but adds eventual consistency risk (handled by version checks).  

4. **Scalability & Availability**  
   * Auto‑scaling ECS tasks + SageMaker endpoint with 3 AZs → 99.9 % uptime.  
   * Use SQS dead‑letter queues for ingestion errors, ensuring at‑least‑once delivery.

5. **Cost Estimate**  
   * Training: $0.20/hr (spot GPU) × 30 jobs ≈ $6k/month.  
   * Inference endpoint: $0.025/hr per instance → $18/day.  
   * Total ≈ $1.2 M/year, a 35 % reduction vs. on‑prem.

**Result**

Implemented the framework in 4 sprints; achieved **95 % accuracy** on test set and **48 ms average latency**, surpassing SLA by 3 %. The system processed 5 TB/day with <0.01 % data loss, and cost savings hit 40 % over legacy pipeline.

**Bar‑raiser Takeaways**

* Ownership: I owned the entire stack from ingestion to serving.  
* Dive Deep: Identified Redis cache as latency bottleneck; engineered versioning to avoid stale predictions.  
* Quantified Impact: 35 % cost reduction, 5× faster inference.  
* Learning from Failure: Early prototype over‑cached on EBS → high latency; pivoted to Redis after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
