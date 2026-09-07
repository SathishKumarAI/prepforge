---
qid: ing_103ca19de5__aws__local
question: 'Explain: In Scope — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 417
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:03-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I led a cross‑functional team at an e‑commerce startup to launch a recommendation engine for a social‑network‑style marketplace that mimicked Instagram/Facebook feeds. Our goal was to boost user engagement by 20% within three months while keeping infrastructure costs under $10K/month.

**Action (Dive Deep + Bias for Action)**  
1. **Data pipeline:** Collected click, like, comment, and time‑on‑page logs from the mobile SDK into Kinesis Data Streams → Lambda → S3 (raw) and Redshift Spectrum (processed).  
2. **Model training:** Built a LightGBM model on SageMaker with hyper‑parameter tuning (SM Experiments), achieving 0.78 AUC vs baseline 0.65.  
3. **Serving:** Deployed the model as a SageMaker endpoint behind an Application Load Balancer, auto‑scaling from 2 to 10 containers based on CPU usage.  
4. **Feature store:** Used DynamoDB with TTL for per‑user feature vectors, ensuring <5 ms read latency.  

**Result (Deliver Results)**  
- Lifted daily active users by **23%** and average session time by **18%** in the first month.  
- Reduced infrastructure spend to **$8.7K/month**, 12% below budget, while maintaining 99.9% availability.  
- Model drift monitoring added; auto‑retraining every week kept AUC stable at 0.77.

**Learning & Bar‑raiser focus**  
I documented every hypothesis and failure (e.g., initial XGBoost overfitting), iterated rapidly, and shared learnings in a post‑mortem wiki—demonstrating ownership, depth, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
