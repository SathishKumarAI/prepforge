---
qid: ing_f2b98faa16__faang__local
question: 'Explain: Use cases — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 554
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:39-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *how* serverless computing (specifically AWS Lambda, API Gateway, Step Functions, etc.) can be leveraged in machine‑learning workflows. Key assumptions: we’re talking about training/serving models at scale, cost‑efficiency, and rapid iteration.

**Approach**  
1. Identify common ML stages that fit a stateless, event‑driven model.  
2. Map each stage to an AWS serverless service.  
3. Highlight benefits (auto‑scaling, pay‑per‑execution) and caveats (cold starts, limited runtimes).

**Depth**  

| Stage | Serverless Service | Use Case |
|-------|-------------------|----------|
| **Data ingestion & preprocessing** | Lambda + S3 event triggers | Convert raw logs to parquet, run feature extraction on upload. |
| **Model training** | SageMaker Processing jobs *or* Lambda orchestrated via Step Functions | Run short, hyper‑parameter sweep jobs; each job is a Lambda that spawns a SageMaker notebook container. |
| **Model inference** | API Gateway + Lambda (or SageMaker Endpoint with Lambda edge) | Serve predictions to web/mobile clients; auto‑scale to traffic spikes. |
| **Batch scoring / ETL** | EventBridge + Lambda + Glue jobs | Periodic re‑scoring of user data without provisioning servers. |

*Benefits*:  
- **Cost:** pay only for compute time (no idle EC2).  
- **Scalability:** instant scaling across thousands of concurrent requests.  
- **DevOps:** minimal operational overhead, CI/CD integration via SAM/Serverless Framework.

*Caveats*:  
- Cold‑start latency (~500 ms) can hurt real‑time inference; mitigated with provisioned concurrency or Lambda Edge.  
- Runtime limits (15 min, 10 GB memory) may require splitting heavy jobs into smaller steps or using SageMaker instead.

**Edge Cases**  
- Long‑running training pipelines → switch to SageMaker Processing.  
- Models requiring GPU acceleration → not supported by Lambda; use ECS/Fargate or SageMaker.  

**Optimize & Communicate**  
Iteratively profile cold starts, monitor invocation metrics in CloudWatch, and adjust concurrency settings. I’d also suggest leveraging *Lambda Layers* for shared ML libraries to reduce deployment size. Conclude with a quick demo script: `lambda_handler(event)` → parse S3 key → invoke SageMaker endpoint → return JSON prediction.

---  

**Word count:** ~215 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
