---
qid: ing_08e65fcc2e__aws__local
question: How much data should you look at? — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 448
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:13-05:00'
sources: []
---

**Situation / Task**  
I was tasked with launching a recommendation engine for an e‑commerce marketplace that had 15 M active users and ~200 k product pages. The business asked: *“How much training data do we need to hit a 5 % lift in conversion?”*  

**Action**  
1. **Ownership + Dive Deep** – I set up an experiment matrix, pulling historical click‑through logs (≈30 B events) and product metadata. Using Amazon SageMaker Feature Store, I engineered 120 features per user‑product pair.  
2. **Bias for Action** – I trained a baseline XGBoost model on 10 M samples, evaluated with AUC‑ROC = 0.72. Then I incrementally increased the training set (20 M, 40 M, 80 M) and logged validation loss.  
3. **AWS services** – Data in S3 → Athena for sampling; SageMaker Training jobs on EC2 spot fleets; Model Registry for versioning.  
4. **Scalability / Cost** – Spot fleet reduced training cost from $1,200 to $420 per 10 M‑sample run. I used SageMaker Automatic Model Tuning (SMAT) to keep GPU utilization >85 %.  

**Result**  
At ~50 M samples the AUC jumped to 0.79 and a production A/B test showed a 6.3 % lift in conversion, exceeding the target by 1.3 pp. The cost per inference dropped from $0.0008 to $0.0005 after model compression (model size 18 MB → 4 MB).  

**Learning / Bar‑raiser check**  
I documented that diminishing returns kicked in after ~60 M samples, saving future engineering effort. I also created a “Data‑Budget” dashboard so stakeholders could see the ROI of additional data ingestion. This demonstrates ownership, deep dive into metrics, and a clear learning loop—key qualities Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
