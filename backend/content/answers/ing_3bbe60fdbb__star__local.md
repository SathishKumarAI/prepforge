---
qid: ing_3bbe60fdbb__star__local
question: 'Explain: Company-Specific Focus — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 388
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:06-05:00'
sources: []
---

**Situation**  
At my last role at a fintech startup, we were preparing for the upcoming funding round. The VC partners asked us to demonstrate that our fraud‑detection model was robust enough to handle a 30% spike in transaction volume expected over the next quarter.

**Task**  
I needed to validate the model’s performance under load and ensure it met latency SLAs while keeping false positives below 2%. The catch: we had only two weeks before the pitch, and our training data set was heavily imbalanced (1 % fraud).

**Action**  
First, I applied a *company‑specific focus* approach by tailoring the standard Blind 75 algorithm list to our domain. Instead of generic tree‑based techniques, I prioritized ensemble methods that performed well on highly skewed datasets: XGBoost with class‑weight adjustment and CatBoost’s categorical handling. I also engineered new features from transaction metadata (time‑of‑day, device fingerprint) and used SMOTE for oversampling the minority class. For performance testing, I set up a k8s cluster with autoscaling to simulate peak load, then profiled inference latency using TensorRT.

**Result**  
The refined model achieved an AUC of 0.97 and reduced false positives to 1.6 %, meeting our SLA of <50 ms per prediction. During the pitch we demonstrated live inference at 15k TPS with a 99th‑percentile latency of 48 ms, earning the VC’s confidence and securing $12 M in Series B funding. I learned that adapting “blind” interview concepts to real‑world constraints can deliver measurable business value fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
