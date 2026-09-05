---
qid: ing_539bcdae35__star__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 340
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:20-05:00'
sources: []
---

**Situation:** In a recent NLP project we were building a sentiment classifier for product reviews. The training data was annotated by three human reviewers, but early in the pipeline the inter‑annotator agreement seemed suspiciously low.

**Task:** I needed to quantify the quality of those labels and decide whether to clean the dataset or retrain annotators before moving forward with model development.

**Action:** I computed Cohen’s kappa for each pair of annotators using `sklearn.metrics.cohen_kappa_score`. The resulting scores were 0.52, 0.58, and 0.55—well below the commonly accepted threshold of 0.6 for “moderate” agreement. To better understand the disagreement I plotted confusion matrices and identified that most conflicts arose around borderline cases (e.g., “mixed sentiment”). I organized a quick calibration session where annotators reviewed these edge cases together, refined the annotation guidelines, and re‑annotated a 10% sample.

**Result:** After recalibration, kappa rose to 0.68 across all pairs, improving label consistency. The cleaned dataset led to a 4% boost in our model’s F1 score (from 0.72 to 0.76). I learned that setting clear thresholds for agreement and actively addressing low kappa early can save time and improve downstream performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
