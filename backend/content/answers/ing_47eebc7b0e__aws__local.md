---
qid: ing_47eebc7b0e__aws__local
question: 'Explain: Moonshot Kimi Family - May 2026 NEW — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 499
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:10-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
When I joined the AI Platform team in early‑2024, customers complained that our generative models were “black boxes” – they couldn’t see why a model was chosen for a given use case. I owned the *Moonshot Kimi Family* initiative to create a **Model Taxonomy** that maps every deployed model (LLM, vision, RL) to its purpose, compliance status, and performance envelope.

**Action (Dive Deep, Invent & Simplify)**  
1. **Requirements:**  
   - One‑click view of model lineage, training data size, bias scores, and cost per inference.  
   - Automatic tagging when new models are registered in SageMaker or Bedrock.  

2. **Design:**  
   - **AWS Glue** crawls SageMaker Model Registry + Bedrock catalogs → generates a canonical metadata table in **Amazon Athena**.  
   - **Lambda** triggers on model register events (SNS) to enrich the table with bias metrics from **SageMaker Ground Truth** and cost data from **Cost Explorer API**.  
   - Front‑end uses **AppSync** + **GraphQL** for real‑time queries, served by a **CDN (CloudFront)**.

3. **Scalability & Cost:**  
   - Glue jobs run on demand; Athena charges only per query (~$5/100 GB).  
   - Lambda < 1 ms per event → <$0.01/month for 10k models.  

4. **Result (Deliver Results):**  
   - Launched in May‑2026 with 3,200 models catalogued.  
   - Reduced customer support tickets by **48%** and cut model selection time from 2 hrs to 15 min.  
   - Earned “AI Transparency” badge in our internal audit.

**Learnings (Bias for Action & Ownership)**  
I iterated the taxonomy schema after a pilot that revealed missing compliance tags; we added a new column, re‑ran Glue, and shipped an update within two sprints. This reinforced that owning data pipelines early prevents costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
