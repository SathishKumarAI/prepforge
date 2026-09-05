---
qid: vq_29d870519a__star__local
question: What are the many kinds of statistical selection bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 360
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:51-05:00'
sources: []
---

**Situation** – At my last job I was leading a study to evaluate an AI‑driven recommendation engine for an e‑commerce platform. The marketing team wanted a quick win and pushed us to use only the top 10% of users who had already made purchases in the past month.

**Task** – My goal was to build a model that accurately predicted click‑through rates across the entire user base, not just high‑value customers, while ensuring the evaluation data reflected real traffic.

**Action** – I mapped out the selection biases that could creep in:  
1. *Sample Selection Bias* – the original sample was skewed toward active shoppers.  
2. *Survivorship Bias* – ignoring users who never purchased or churned before the study period.  
3. *Censoring Bias* – only capturing interactions during a short campaign window, missing seasonal patterns.  
4. *Measurement Bias* – using page view counts that under‑record mobile app traffic.  

I corrected each by: sampling 5 % of all registered users (stratified by cohort), imputing missing purchase data with last observation carried forward, extending the study window to three months, and merging web logs with app analytics. I also applied a propensity score weighting scheme in the training pipeline.

**Result** – The final model’s lift on click‑through increased from 12 % (biased sample) to 28 %, and when rolled out it boosted overall revenue by $1.2 M over three months. I learned that proactively identifying and correcting multiple forms of selection bias is essential for trustworthy AI outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
