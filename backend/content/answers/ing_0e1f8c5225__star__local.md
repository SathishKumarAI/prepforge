---
qid: ing_0e1f8c5225__star__local
question: How do you keep an eval set fresh over time, and how do you avoid overfitting
  to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 300
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:49-05:00'
sources: []
---

**Situation:** In my last role I led the evaluation pipeline for a recommendation model that served a global e‑commerce platform. The production traffic grew by 40% monthly, and we noticed our test A/B uplift started to plateau after only three months of training on the same curated eval set.

**Task:** My goal was to keep the evaluation data representative of real user behavior while preventing the model from overfitting to a stale or overly narrow benchmark.

**Action:** I introduced a rolling window strategy: every week we harvested the latest 48 hours of clickstream, applied stratified sampling by device and region, and injected this into a “fresh” shard that replaced 30% of the static eval set. To guard against overfitting, I added an adversarial validation step—training a lightweight classifier to distinguish between training and fresh shards; if accuracy rose above 55%, we’d shuffle features or increase regularization. We also maintained a hold‑out “shadow” set that mirrored production traffic but was never used for model selection.

**Result:** The updated pipeline reduced the gap between offline lift (from 12% to 18%) and online A/B uplift by 4 pp, and the adversarial score stayed below 52%, indicating healthy generalization. I learned that continuous data drift monitoring combined with controlled refresh rates is key to sustaining model performance without chasing a moving target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
