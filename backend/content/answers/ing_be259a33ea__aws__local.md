---
qid: ing_be259a33ea__aws__local
question: 'Explain: Data flow at training time — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 403
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:25-05:00'
sources: []
---

**Situation & Task**  
I led the design of a multi‑tenant fine‑tuning platform for an AI SaaS that serves 1,200+ customers. The goal was to enable each tenant to train custom models on proprietary data while keeping isolation, speed, and cost under control.

**Action – Data Flow & Architecture**  
1. **Ingest**: Each tenant uploads a CSV/Parquet bundle to a dedicated S3 bucket (partitioned by `tenant_id`).  
2. **Pre‑process**: A Step Functions workflow triggers an EMR Spark job that cleans, tokenizes, and stores the processed dataset in an Athena‑backed Glue catalog.  
3. **Training**: The job spawns a SageMaker Processing job per tenant; the training script pulls data via S3 Select (reduces I/O).  
4. **Model & Metadata**: Trained checkpoints are stored in S3 under `models/{tenant_id}/`, and model metadata is pushed to DynamoDB for quick lookup.  
5. **Deployment**: A Lambda orchestrator registers the new model with SageMaker Endpoint Config, rolling it into a *canary* endpoint (10 % traffic) before full rollout.

**Results**  
- Reduced per‑tenant training time from 12 h to 3 h (+75 %).  
- Cut storage costs by 40 % using S3 Select and lifecycle policies.  
- Maintained 99.9 % SLA on model availability through multi‑AZ endpoints.

**Reflection**  
I practiced *Ownership* by building end‑to‑end pipelines, *Dive Deep* in cost‑per‑tenant profiling, and *Bias for Action* by iterating the workflow weekly based on tenant feedback. The platform now scales to 500 concurrent tenants without a single outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
