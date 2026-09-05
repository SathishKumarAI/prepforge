---
qid: ing_da8cea3167__star__local
question: 'Explain: estimate_success_rate(test_labels, test_preds, unlabeled_preds,
  bootstrap_iterations=20000, confidence_level=0.95)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 370
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:10-05:00'
sources: []
---

**Situation** – In my last role as a data scientist for an e‑commerce recommendation engine, we had a newly trained model that produced predictions for both labeled test items and a large pool of unlabeled user interactions. The product team needed a reliable estimate of the model’s success rate before rolling it out to production, but they only had a handful of ground‑truth labels.

**Task** – I was asked to build a function `estimate_success_rate(test_labels, test_preds, unlabeled_preds, bootstrap_iterations=20000, confidence_level=0.95)` that would give us the mean success rate and a 95 % confidence interval using bootstrapping, while also incorporating uncertainty from the unlabeled data.

**Action** – I first computed accuracy on the labeled set as `np.mean(test_labels == test_preds)`. To account for the unlabeled predictions, I treated them as pseudo‑labels weighted by their predicted probability and added them to the bootstrap resamples. Using NumPy’s random choice with replacement, I drew 20 000 samples of combined labels/predictions, recomputed accuracy each time, and stored the results. Finally, I calculated the mean and the 2.5th/97.5th percentiles to form the confidence interval.

**Result** – The bootstrapped estimate returned a success rate of 0.82 with a 95 % CI of [0.78, 0.86]. Deploying the model increased conversion by 3 % in A/B tests, validating our statistical approach. I learned that careful weighting of unlabeled data and large‑scale bootstrapping can bridge gaps when ground truth is scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
