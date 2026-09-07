---
qid: ing_6a09ab6082__aws__local
question: Design the output representation for a behaviour prediction model. What
  metrics would you gate it on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 500
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:15-05:00'
sources: []
---

**Situation & Task**  
When my team launched a behavior‑prediction model for the new Alexa Shopping skill, we had to decide how to expose its output so that downstream services could act in real time while keeping latency < 10 ms and cost under $0.01 per inference.

**Action**  
I designed a **JSON‑encoded “behavior envelope”**:

```json
{
  "user_id": "...",
  "timestamp": "...",
  "intent_confidence": 0.92,
  "predicted_behavior": "purchase",
  "confidence_interval": [0.85, 0.98],
  "feature_importances": {"price_sensitivity": 0.4, ...}
}
```

*Why this format?*  
- **Deterministic schema** lets Lambda and Step Functions consume it without extra parsing.  
- **Confidence interval** supports Bayesian calibration; downstream can gate actions on a threshold.  
- **Feature importances** enable transparency for compliance audits.

I stored the model in **Amazon SageMaker Model Registry**, served via **SageMaker Endpoints** behind an **API Gateway** with **Lambda@Edge** to guarantee sub‑10 ms latency. For batch re‑training, I used **Glue ETL** on S3 logs and scheduled jobs with **EventBridge**.

**Result**  
After deployment:  

| Metric | Before | After |
|--------|--------|-------|
| Inference latency (99th percentile) | 35 ms | **8 ms** |
| Cost per inference | $0.02 | **$0.008** |
| Prediction accuracy (AUC‑ROC) | 0.82 | **0.87** |

The confidence threshold gating cut false positives by 25%, directly boosting conversion rates.

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into latency profiling to identify the API Gateway’s throttling as the bottleneck—an insight that guided our scaling strategy. I learned that exposing *confidence intervals* not only improves trust but also allows dynamic risk management. This design keeps us aligned with **Customer Obsession** (faster, more reliable predictions) and **Ownership** (full lifecycle responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
