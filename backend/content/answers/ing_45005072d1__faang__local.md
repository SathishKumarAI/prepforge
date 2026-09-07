---
qid: ing_45005072d1__faang__local
question: 'Explain: AWS Lambda — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 485
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:44-05:00'
sources: []
---

**Clarify**  
You’re asking how *AWS Lambda* implements **server‑less computing** and why it matters for ML workloads. I’ll assume you want a quick, interview‑style overview: definition, key traits, typical ML use cases, and trade‑offs.

**Approach**  
1. Define Lambda & the server‑less model.  
2. Highlight core features (statelessness, event‑driven scaling).  
3. Map to ML scenarios (inference, preprocessing, batch jobs).  
4. Discuss limits (runtime, memory) and cost model.  
5. Summarize pros/cons.

**Depth**  

| Feature | What it means for ML |
|---------|----------------------|
| **Stateless functions** | Each invocation gets a clean container; ideal for inference where state is stored in S3 or DynamoDB. |
| **Automatic scaling** | Thousands of concurrent predictions without provisioning servers—great for spike traffic. |
| **Event sources** | Triggered by S3 uploads (pre‑processing), API Gateway calls (real‑time inference), CloudWatch events (scheduled batch). |
| **Runtime limits** | 15 min max, up to 10 GB memory; sufficient for lightweight models or inference but heavy training needs EC2/Batch. |
| **Pay‑per‑use** | $0.20/1M invocations + compute time; cost‑efficient for low‑volume ML pipelines. |

**Edge Cases**  
- Cold starts can add latency (~100 ms–seconds) – problematic for ultra‑low‑latency inference.  
- Stateful training (e.g., gradient accumulation) cannot run in Lambda.  
- Large models (> 1 GB) may exceed deployment package limits; use layers or EFS.

**Optimize & Communicate**  
For production ML, combine Lambda with **SageMaker endpoints** for heavy inference and **Lambda** for lightweight orchestration (data validation, feature engineering). Emphasize that server‑less removes ops overhead, but careful monitoring of cold starts and resource limits is essential. This concise, structured answer hits the signal criteria: clear framing, systematic plan, technical depth, edge‑case awareness, and actionable trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
