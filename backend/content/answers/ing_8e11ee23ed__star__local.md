---
qid: ing_8e11ee23ed__star__local
question: You need an eval set for a new contract-review capability. There is no labelled
  ground truth and the only people who can judge quality bill at partner rates. How
  do you build it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 391
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:00-05:00'
sources: []
---

**Situation** – I was leading a startup’s contract‑review engine for a major legal tech client. The model needed an evaluation set to tune thresholds before launch, but there were no pre‑labelled contracts and the only reliable judges were senior attorneys who bill at $500/hr.

**Task** – Build a high‑quality eval set that could be updated over time while keeping costs under 20 % of the overall project budget.

**Action** – I started by generating a synthetic pool: we scraped public procurement PDFs, ran an OCR pipeline, and applied rule‑based extraction to produce draft annotations. Then I implemented an active learning loop in Python (scikit‑learn + Ray) that ranked samples by model uncertainty. A small team of 3 junior lawyers reviewed only the top 5 % of uncertain cases, costing roughly $1,500 for a month. We combined their feedback with semi‑supervised pseudo‑labels from the rest of the pool and used a weighted loss to fine‑tune the transformer. Finally, we deployed an online A/B test that let us continuously collect human scores on live predictions.

**Result** – The curated set grew to 1,200 contracts, yielding a precision/recall of 0.87/0.82—better than our baseline by 8 % absolute. We reduced expert billing from $120k to $18k and learned that uncertainty sampling can replace most manual labeling without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
