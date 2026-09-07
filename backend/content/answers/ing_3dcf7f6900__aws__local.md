---
qid: ing_3dcf7f6900__aws__local
question: 'Explain: Interview Follow-Up Questions — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 417
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:40-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In 2023 I led a cross‑functional team to build an internal “AI Knowledge Hub” for our recommendation engine. The goal was to reduce model retraining time by 30 % and surface the best‑performing prompts to data scientists.

**Action (Dive Deep & Bias for Action)**  
*Requirements:* Versioned prompt libraries, automated similarity search, audit trail, and real‑time feedback loop.  
*Design:*  
- **S3** + **Amazon SageMaker Feature Store** to store prompt embeddings (using Sentence‑Transformers).  
- **AWS Lambda** orchestrated by **Step Functions** for ingestion and validation.  
- **Amazon OpenSearch** for fast cosine‑distance search with a 99.9 % availability SLA.  
- **CloudWatch Alarms** trigger auto‑scaling of OpenSearch nodes when query latency >200 ms.  
*Scalability:* Auto‑scaling pools up to 20 nodes; cost ≈ $0.25/hr per node, saving ~$12k/month vs a static cluster.  
*Trade‑offs:* Chose OpenSearch over DynamoDB for sub‑10 ms retrieval but accepted higher operational overhead.

**Result (Deliver Results)**  
Reduced model retraining cycle from 14 to 9 days (+36 %). Prompt reuse rate rose to 42 % and model accuracy improved by 1.8 % F1 score on the test set.

**Bar‑raiser focus**  
- Demonstrated **ownership** of end‑to‑end pipeline.  
- Showed **depth**: quantified latency, cost, and scalability trade‑offs.  
- Highlighted learning: early iterations over‑provisioned nodes; pivoted to autoscaling after A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
