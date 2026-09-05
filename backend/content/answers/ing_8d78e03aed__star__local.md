---
qid: ing_8d78e03aed__star__local
question: 'Explain: Confidence scoring - the part that makes it a product'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:34-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the launch of a medical‑imaging AI that flags potential fractures in X‑ray scans for an outpatient clinic network. The initial model scored confidence as raw softmax probabilities, but clinicians complained it over‑trusted borderline cases and under‑replied on clear positives.

**Task** – I needed to turn those opaque scores into a reliable confidence metric so the product could deliver calibrated risk estimates that doctors could act on, improving both safety and adoption.

**Action** – First, I gathered an external calibration dataset from 2,000 annotated scans. Using Platt scaling and isotonic regression, I mapped softmax outputs to well‑behaved probabilities. I then integrated a Bayesian confidence layer: the model’s feature embeddings were fed into a Gaussian Process that produced a predictive variance for each prediction. This variance was combined with the calibrated probability to generate a final “confidence score” (e.g., 0.87 ± 0.04). I exposed this as a JSON field in the API, added visual heat‑maps in the UI, and built an A/B test harness that logged clinician decisions against scores.

**Result** – Post‑deployment, the false‑positive rate dropped from 12% to 5%, while true‑positive detection stayed above 95%. Clinicians reported a 30% faster decision time. I learned that calibration + uncertainty modeling turns raw logits into a product‑ready metric that directly drives trust and usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
