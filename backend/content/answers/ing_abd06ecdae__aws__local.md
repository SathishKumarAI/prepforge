---
qid: ing_abd06ecdae__aws__local
question: 'Explain: The Seven Layers — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 449
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:29-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a cross‑functional team to migrate an on‑prem ML pipeline (image classification) into a fully serverless architecture for the consumer app “SnapFit.” The goal was to reduce latency, scale automatically, and cut infra cost by 40 %.  

**Action – Leveraging the OSI Layers in Design**  
*Layer 1–7 mapping*:  
| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Physical / Data Link** | *Amazon CloudFront + S3* | Fast edge delivery of training data (≈10 ms) |
| **Network** | *VPC, Transit Gateway, PrivateLink* | Isolated traffic for GDPR compliance |
| **Transport** | *TLS 1.3 on API Gateway* | End‑to‑end encryption |
| **Session** | *AWS Cognito + JWT* | Stateless auth, no server overhead |
| **Presentation** | *Amazon SageMaker Feature Store* | Normalized feature schema across models |
| **Application** | *SageMaker Pipelines + Lambda* | Orchestrate training & inference steps |
| **Data Link (ML)** | *EFS for model artifacts, DynamoDB for metadata* | Persistable, highly available storage |

We used **Step Functions** to coordinate the pipeline and **AWS X-Ray** to dive deep into bottlenecks.  

**Result**  
- End‑to‑end inference latency dropped from 1 s → 250 ms (4× faster).  
- Monthly spend fell by **42 %**, saving $120k.  
- Model accuracy improved by 3 % due to automated feature retraining.

**Reflection & Bar‑raiser Insight**  
I owned the migration, drove deep dives into each OSI layer, and quantified every trade‑off. The bar‑raiser would note my ownership, technical depth, measurable impact, and the iterative learning loop that turned a legacy stack into a cost‑efficient, scalable ML platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
