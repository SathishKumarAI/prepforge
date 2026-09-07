---
qid: ing_adc9dee093__aws__local
question: 'Explain: AI and machine learning — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 431
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:26-05:00'
sources: []
---

**Situation** – At my previous firm we were asked to replace a manual compliance‑review workflow that scanned thousands of documents per day for regulatory violations. The existing process was 90 % error‑prone and took ~4 h per batch.

**Task** – Build an end‑to‑end ML pipeline that could flag anomalies in real time, reduce review time by ≥70 %, and keep costs under $0.02 per document.

**Action** –  
1. **Data & Feature Engineering** – Collected 2 M labeled PDFs, extracted text with Amazon Textract, and built embeddings using SageMaker’s pre‑trained *BlazingText*.  
2. **Model Training** – Trained a multi‑label classification model on SageMaker Studio, tuning hyperparameters via SageMaker Hyperparameter Tuning jobs (cost ≈ $0.10/hr).  
3. **Serving & Scaling** – Deployed the model as a SageMaker endpoint behind an Application Load Balancer, autoscaling from 1 to 8 instances based on CPU utilization.  
4. **Observability** – Used CloudWatch metrics and SageMaker Model Monitor to track drift; automated retraining every week (≈$0.05/day).  

**Result** – The solution cut review time from 4 h to 45 min per batch, achieved an F1‑score of 0.92, and reduced operational costs by 75 % compared with the legacy system. Feedback from compliance officers highlighted a 30 % drop in false positives.

> **Leadership Principles:** *Customer Obsession* (delivering faster, more accurate reviews for regulators) & *Ownership* (owning end‑to‑end pipeline, monitoring drift).  
> **Bar‑raiser cues:** clear ownership of metrics, deep dive into model choice and scaling trade‑offs, quantified impact, and lessons learned from initial false‑positive spikes that led to improved feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
