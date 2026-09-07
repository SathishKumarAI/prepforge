---
qid: ing_ae1fc5209e__aws__local
question: 'Explain: good choices we''re going to constrain the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:15-05:00'
sources: []
---

**Situation & Task**  
When designing a recommendation engine for our e‑commerce platform, I was tasked with constraining model complexity so we could serve predictions at <10 ms latency while keeping inference costs below \$0.02 per request.

**Action (Technical)**  
1. **Feature selection** – used SHAP values on a 2M‑record training set to drop 60 % of features that contributed <0.5 % importance, reducing dimensionality from 120 to 48.  
2. **Model choice** – switched from XGBoost (≈200 ms) to LightGBM with histogram binning; inference time dropped to 4 ms on a single EC2 g4dn.xlarge GPU.  
3. **Deployment** – containerized the model in Docker, deployed via SageMaker Endpoint with autoscaling set to 1–10 instances (CPU‑only). Cost ≈ \$0.015 per request; latency <5 ms average.  
4. **Monitoring & rollback** – used CloudWatch Alarms on error rate and response time; if ≥2 % spike, auto‑rollback to previous stable model.

**Result**  
- Latency reduced from 200 ms → 4 ms (95th percentile).  
- Cost per inference fell by 25 %.  
- Click‑through rate increased 3.7 % due to fresher recommendations.

**Leadership Principles**  
- **Customer Obsession** – delivered faster, cheaper predictions directly improving shopper experience.  
- **Ownership & Dive Deep** – took end‑to‑end responsibility, dissected feature importance and model internals to achieve measurable gains.  

**Bar‑raiser takeaways**  
- Quantified impact (latency, cost, CTR).  
- Demonstrated deep technical insight with trade‑off analysis.  
- Showed learning loop: continuous monitoring → data‑driven rollback strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
