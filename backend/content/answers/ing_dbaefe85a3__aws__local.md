---
qid: ing_dbaefe85a3__aws__local
question: 'Explain: Architectures and objectives — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 460
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:22-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional squad at a fintech startup, we needed to launch an internal LLM service that could generate compliance‑ready risk reports in real time. The objective was to reduce manual review time by 80 % while ensuring auditability and GDPR compliance.

**Action**  
I owned the end‑to‑end architecture:  
- **Data ingestion & preprocessing** – Kinesis Data Streams → Lambda (tokenization, redaction) → S3 (cold storage).  
- **Model hosting** – SageMaker Endpoint with GPU‑optimized `g4dn.xlarge` instances, auto‑scaling based on CloudWatch metrics.  
- **Inference pipeline** – API Gateway + Lambda authorizer (IAM + Cognito) → SageMaker endpoint → DynamoDB (audit trail).  
- **Monitoring & retraining loop** – CloudWatch Alarms trigger a Step Functions workflow that pulls new labeled data from S3, trains an updated model in SageMaker, and rolls it out via CI/CD.  

I applied **Dive Deep** by profiling latency; discovered Lambda memory was the bottleneck, so I increased it to 2048 MiB, cutting inference time from 1.2 s to 0.35 s (≈70 % improvement).  
To keep costs in check, I used spot instances for training and scheduled batch inference during off‑peak hours, reducing monthly spend by **$4k**.

**Result**  
- Report generation time dropped from 12 min to 45 sec (≈99 % faster).  
- Manual review workload fell by **82 %**, freeing analysts to focus on higher‑value tasks.  
- Model accuracy stayed above 92 % as measured against a quarterly audit dataset.  

**Reflection**  
I learned that *Customer Obsession* drives us to measure the real business impact (time saved for compliance teams) rather than just engineering metrics, and that **Ownership** means iterating quickly—using data‑driven experiments—to balance performance, cost, and regulatory safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
