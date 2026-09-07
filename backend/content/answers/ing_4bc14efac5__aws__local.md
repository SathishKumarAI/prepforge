---
qid: ing_4bc14efac5__aws__local
question: 'Q: How do you choose dimensions for embeddings?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:28-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a recommendation engine for an e‑commerce platform (≈ 5 M active users). The business goal was to reduce the cold‑start problem and increase click‑through rate (CTR) by 15 % in three months.  

**Action – Technical Design**  
1. **Data‑driven dimensionality search** – I scripted a grid of embedding sizes (32, 64, 128, 256). For each candidate I trained a shallow neural net on the same training split and logged validation loss, perplexity, and downstream CTR.  
2. **AWS services** – SageMaker Pipelines orchestrated the experiments; model artifacts were stored in S3; Hyperparameter Tuning jobs used GPU instances (p3.xlarge) to keep cost ≤ $2000/month.  
3. **Scalability & Availability** – The final 128‑dimensional embeddings were served via a Lambda@Edge cache backed by DynamoDB Global Tables, guaranteeing < 50 ms latency worldwide with 99.9 % availability.  
4. **Cost trade‑off** – Higher dimensions (256) improved loss by only 2 % but doubled inference cost; 128 provided the sweet spot.

**Result**  
Deploying the 128‑dimensional model lifted CTR from 3.2 % to 3.7 % (+15 %) and increased revenue by $1.4 M/month, while keeping inference cost down by 35 %.  

**Leadership Principles Reflected**  
- **Customer Obsession & Deliver Results** – Directly improved user engagement and revenue.  
- **Dive Deep & Ownership** – Systematically explored dimensions, quantified impact, and took end‑to‑end ownership of the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
