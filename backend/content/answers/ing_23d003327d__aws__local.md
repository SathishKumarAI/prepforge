---
qid: ing_23d003327d__aws__local
question: Walk me through train/validation/test splits. When do you use cross-validation,
  and when is it a bad idea?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 409
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:29-05:00'
sources: []
---

**Situation & Task**  
While leading an ML team at a consumer‑tech startup, we had to launch a recommendation model within 90 days. The data set (≈ 10M user interactions) was highly imbalanced and non‑stationary. I needed to decide how to split the data so that our evaluation would be realistic for production.

**Action**  
I first defined *train* as all interactions up to 30 days before a cut‑off, *validation* as the following week (for hyper‑parameter tuning), and *test* as the final two weeks (held out for final performance). This respects temporal order—critical for customer‑obsession because we want to predict future behavior.

For cross‑validation I used **time‑series split** only on a *small, synthetic subset* (≈ 1M rows) when exploring new features. Full CV was avoided because it would have required re‑training the model 10×, costing ~\$15k in SageMaker training hours and delaying delivery.

I implemented this pipeline in SageMaker Pipelines, storing raw data on S3, orchestrating jobs with Step Functions, and monitoring drift with CloudWatch metrics.

**Result**  
The final model achieved a **12 % lift in click‑through rate** (from 1.8 % to 2.0 %) within the first month, meeting the quarterly target. By limiting full CV we saved ~\$10k and delivered on time, demonstrating ownership, deep dive into data patterns, and bias for action.

---

*Bar‑raiser notes:*  
- Clear ownership of split strategy and cost trade‑offs.  
- Deep dive into temporal dependencies.  
- Quantified impact (12 % lift).  
- Learned to balance rigor with operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
