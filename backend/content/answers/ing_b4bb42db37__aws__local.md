---
qid: ing_b4bb42db37__aws__local
question: 'Explain: Ramp — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 395
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role at a FAANG‑scale cloud platform, I led the **“Ramp” feature**—a real‑time recommendation engine that surfaced trending content to users within 2 seconds of a new upload.  

- **Situation:** The existing batch pipeline took ~30 minutes, so users missed early engagement opportunities.  
- **Task:** Build an online inference service that could serve millions of requests per day with <100 ms latency while keeping cost below $0.02 per request.  
- **Action (Design):**  
  - Decomposed the problem into *feature extraction* and *model scoring*.  
  - Used **Amazon SageMaker Neo** to compile a PyTorch model for CPU/Edge inference, reducing runtime by 60 %.  
  - Implemented an **AWS Lambda** layer that cached embeddings in **ElastiCache‑Redis**, achieving sub‑10 ms lookups.  
  - Leveraged **Amazon API Gateway + ALB** with *autoscaling* based on CloudWatch metrics to maintain 99.9 % availability.  
  - Employed **Cost Explorer** dashboards to keep spend under $0.018 per request, a 25 % savings over the legacy batch approach.  
- **Result:** Real‑time recommendations increased user engagement by **32 %** (lift in session length) and reduced server costs by **$1.2M annually**.  

*Leadership Principles:* **Customer Obsession** – delivering instant relevance; **Ownership** – owning end‑to‑end latency and cost.  
*Bar‑raiser cues:* deep dive into AWS services, quantified ROI, and post‑deployment monitoring to learn from any latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
