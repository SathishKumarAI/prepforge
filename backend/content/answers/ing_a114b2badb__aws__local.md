---
qid: ing_a114b2badb__aws__local
question: 'Explain: Your model hits 0.87 AUC offline, you launch it, and the business
  metric doesn''t move. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 449
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:13-05:00'
sources: []
---

**Situation** – I built a fraud‑prediction model that scored **0.87 AUC** on our validation set. After deployment to production (using SageMaker Endpoint + Lambda), the click‑through rate for flagged transactions dropped 4 % instead of improving the business KPI.

**Task** – Diagnose why the high offline metric didn’t translate into a better business outcome and turn it around.

**Action**  
1. **Ownership & Dive Deep** – I set up a *model monitoring* pipeline (SageMaker Model Monitor + CloudWatch). The first alert showed a 30 % shift in feature distribution (new customers, time‑of‑day spikes) that our training data didn’t capture.  
2. I re‑trained the model on a *rolling window* of the last 90 days and added **feature drift correction** with *Feature Store* to enforce consistency.  
3. For bias, I ran a *confusion matrix* against the live KPI (fraud loss vs. false positives) and discovered we were over‑penalizing high‑volume merchants. I adjusted the cost function in the training job (SageMaker Training) to weight merchant‑level loss higher.  
4. **Bias for Action** – I rolled out the updated model via a *Canary deployment* on SageMaker, using an AppConfig parameter to toggle between old/new models.  
5. I added an automated *feedback loop* that feeds back actual fraud outcomes into the training pipeline every 12 hrs.

**Result** – Within one month the business metric (fraud loss avoided per $1M revenue) improved by **18 %**, and the AUC in production stabilized at 0.90. Cost remained below $2k/month for monitoring and retraining, a 25 % savings over the previous manual retrain cadence.

**Bar‑raiser takeaways** – I owned the problem from detection to resolution, dove deep into feature drift, quantified impact with clear metrics, and learned that high offline AUC alone is insufficient without alignment to live KPI signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
