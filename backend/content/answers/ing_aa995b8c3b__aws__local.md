---
qid: ing_aa995b8c3b__aws__local
question: 'Explain: Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 510
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:14-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we had to launch a recommendation engine for a retail client with > 1 M daily users. The challenge was choosing the right ML model that balanced accuracy, latency and cost while staying compliant with GDPR.

**Action**  
I led a cross‑functional squad (data science, infra, security). First, I mapped *business KPIs*—CTR, conversion lift, and response time—to a **Model Selection Matrix**. We benchmarked 4 candidates: Gradient Boosting (XGBoost), LightGBM, a shallow Neural Net, and a simple Logistic Regression.  
For each we ran a 5‑fold cross‑validation on the full training set, recording *AUC*, *mean inference latency* (ms) and *GPU/CPU cost per inference*. I then built an **AWS SageMaker** pipeline: data → feature store (Amazon DynamoDB), training jobs on managed Spot instances, and deployment via SageMaker Endpoint with autoscaling.  
After a 2‑week A/B test, LightGBM achieved the best trade‑off: AUC 0.82 vs 0.79 for XGBoost, latency 12 ms vs 18 ms, and cost per inference $0.00008 (≈ $3k/month). The model increased conversions by **7%** and reduced server costs by **30%**.

**Result**  
The launch met SLA targets (<20 ms), saved the client ~$4k/month, and the model was later adopted for 3 additional product lines—scaling to 5 M users with no loss in accuracy.

**Leadership Principles Anchored**  
- *Customer Obsession*: Built a metric‑driven framework directly tied to conversion lift.  
- *Ownership & Dive Deep*: Owned the end‑to‑end pipeline, from data ingestion to cost analysis, and iterated on trade‑offs until we hit the sweet spot.

**Bar‑raiser takeaways**  
- Clear ownership of metrics and decisions.  
- Quantified impact (conversion +7%, cost –30%).  
- Deep dive into trade‑offs (latency vs accuracy vs cost).  
- Learning loop: post‑A/B analysis fed back to feature store for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
