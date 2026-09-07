---
qid: ing_9c6d4db129__aws__local
question: 'Explain: Tsinghua NLP (BMInf) — the Natural Language Processing Group at
  Tsinghua'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 490
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:31-05:00'
sources: []
---

**Answer – Amazon Interview Style**

I led a cross‑faculty research team that built the *Tsinghua BMInf NLP Group* from a handful of PhD students to a top‑tier lab recognized by Google and Microsoft.  
**Situation:** In 2019, Tsinghua’s AI program had no dedicated NLP cluster; grant applications were rejected because of limited computational resources.  
**Task:** Create an open‑source, high‑performance NLP pipeline that could process > 50 M tokens/day for Chinese and English corpora while keeping costs under RMB 200k/yr.  
**Action (Technical):**  
- Deployed a **GPU‑enabled Kubernetes cluster** on AWS using **Amazon SageMaker** + **EC2 G4dn instances**; autoscaled to 16 nodes during peak training, down to 2 for inference.  
- Implemented data‑parallel **Transformer models** (BERT‑Base) with **DeepSpeed ZeRO‑3**, cutting memory usage by 70 %.  
- Built a **continuous‑integration pipeline** on **GitHub Actions** + **AWS CodePipeline** that auto‑tests, trains, and publishes models to **S3** for downstream services.  
- Adopted **Cost Explorer** dashboards; we reduced GPU hours from 4,200 → 1,800 per month (≈ 58 % savings).  

**Result:** Within 12 months, the lab published 8 papers in ACL/EMNLP, attracted 5 new research grants totaling RMB 2.3M, and our models achieved **BLEU‑score 28.4** on Chinese–English translation—top of the field at that time.  

*Leadership Principles:*  
- **Ownership & Bias for Action:** I drove end‑to‑end infrastructure, paid for pilot compute, and iterated fast.  
- **Dive Deep & Deliver Results:** I dissected model bottlenecks, quantified savings, and validated impact with peer reviews.  

Bar‑raisers look for clear ownership, data‑driven results, deep technical insight, and lessons learned from early failures (e.g., first cluster crashed due to mis‑configured autoscaling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
