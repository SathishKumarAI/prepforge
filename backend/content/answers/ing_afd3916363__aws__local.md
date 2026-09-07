---
qid: ing_afd3916363__aws__local
question: How much data do you need to fine-tune a model? Quality vs. quantity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 490
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:06-05:00'
sources: []
---

**Situation & Task**  
I was tasked at my previous company to launch an internal chatbot that could answer technical support tickets with high accuracy. The business required a fine‑tuned transformer model that understood domain jargon and complied with data‑privacy rules.

**Action (Design)**  
1. **Data Strategy** – I built a pipeline in *AWS Glue* to ingest 12 TB of anonymized ticket logs, then used *Amazon SageMaker Ground Truth* for active‑learning labeling.  
2. **Quality vs Quantity** – We performed an A/B study:  
   * 50 K high‑confidence labeled examples → BLEU score = 0.62, F1 = 0.71  
   * 200 K mixed‑quality examples → BLEU = 0.58, F1 = 0.68  
   The marginal gain from quantity plateaued after ~70 k well‑curated samples, so we capped training data at 80 k to save compute.  
3. **Fine‑tuning** – Using *SageMaker Training* on a `ml.p3dn.24xlarge` cluster (8 V100 GPUs) for 12 h, cost ≈ $1,200. The resulting model achieved an accuracy of **88 %** on the validation set and reduced average resolution time by **30 %**.

**Result**  
Deploying to *Amazon SageMaker Endpoint* with auto‑scaling kept latency <200 ms at 10k concurrent users (99th percentile). We cut infrastructure cost by 40 % compared to a pure cloud inference approach, and the chatbot handled 60 % of tickets without human intervention.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Directly reduced customer wait times.  
- **Ownership & Dive Deep** – I owned data quality decisions, performed rigorous A/B testing, and iterated until diminishing returns were clear.  

*Bar‑raiser note*: Demonstrates ownership (full pipeline), depth (A/B study on data quality vs. quantity), quantified impact (88 % accuracy, 30 % time reduction), and learning from the failed assumption that more data always helps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
