---
qid: ing_6546db1f85__eli5__local
question: Your ads CTR model shows a 2% offline AUC gain, but the online A/B shows
  revenue-neutral results with worse calibration. What's going on and what do you
  do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 327
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:34-05:00'
sources: []
---

Imagine your click‑through‑rate (CTR) model is a chef who can taste the broth of an offline test kitchen (the AUC gain). The broth tastes great, but when you serve it on a real table (online A/B), customers find it too salty or bland – they’re not buying more.  

Two things are happening:

1. **Offline vs. online worlds differ** – The data used for the AUC test is static and clean; online traffic is noisy, with new users, time‑of‑day effects, and changing ad inventory.  
2. **Calibration drifts** – Your model predicts “probability of click” well in a statistical sense (AUC), but those probabilities don’t match real click rates. When the predicted probability is higher than reality, you’ll over‑bid on low‑value clicks, hurting revenue.

What to do:

- Re‑train the model on recent online logs and include features that capture time, device, and ad placement.  
- Add a calibration step (e.g., Platt scaling or isotonic regression) so predicted probabilities line up with observed click rates.  
- Run a small pilot A/B: compare revenue per impression, not just clicks.  
- If the pilot still shows neutral revenue, consider adding an explicit revenue‑prediction layer or adjusting bid‑price thresholds.

In short, make your offline “broth” taste like the real‑world meal by training on fresh data and aligning predicted probabilities with actual outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
