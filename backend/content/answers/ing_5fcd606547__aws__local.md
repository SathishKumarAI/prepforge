---
qid: ing_5fcd606547__aws__local
question: 'Explain: Topic clustering — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 398
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:39-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at AWS, we launched **LangWatch**, an AI agent that monitors language models for bias and hallucinations. The biggest blocker was *topic clustering*—grouping user queries into semantically coherent clusters so the testing framework could generate targeted test cases. I owned this feature.

**Action**  
1. **Dive Deep** – I dissected the data pipeline: raw query logs → token embeddings (SageMaker‑Inference) → vector store (Pinecone).  
2. Built a *hierarchical agglomerative clustering* model tuned for 10 k queries/day, using cosine similarity and a dynamic distance threshold.  
3. Deployed on **ECS** with spot instances; autoscaling by query volume.  
4. Implemented an **A/B test** in CloudWatch dashboards to compare cluster purity (F1) against the baseline rule‑based splitter.  
5. Iterated rapidly: added a *prototype* of the new algorithm to the CI/CD pipeline, triggering automatic retraining every 12 hrs.

**Result**  
- Cluster purity improved from **0.62 → 0.84** (22 % relative gain).  
- Test coverage for bias scenarios jumped 35 %, leading to a 15 % drop in post‑release incidents.  
- Cost per cluster calculation fell by **$0.03** due to spot‑instance savings, saving ~$12k/month.

**Leadership Principles Highlighted**  
- **Ownership**: Took end‑to‑end responsibility for the clustering pipeline.  
- **Dive Deep & Deliver Results**: Quantified impact and iterated until metrics hit target.

**Bar‑raiser takeaway** – Demonstrating ownership, deep technical insight, data‑driven outcomes, and learning from iterative failures signals readiness to scale AI solutions across AWS services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
