---
qid: ing_029224cb37__fp__local
question: Why LLM for Explanation, Not SHAP/LIME? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 403
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:10:35-05:00'
sources: []
---

### Why an LLM‑based explainer beats SHAP/LIME for fraud‑detection

The *fundamental problem* is that a fraud model operates on **high‑dimensional, relational data** (account histories, transaction graphs) and must convince auditors that a flag is legitimate.  
SHAP/LIME produce local linear proxies; they approximate the model’s decision surface by sampling around the instance. In fraud data this surface is highly non‑linear, sparse, and discontinuous—sampling yields many *irrelevant* features (e.g., “merchant category code”) whose SHAP values fluctuate wildly. The proxy therefore misrepresents the true causal factors.

An LLM explainer, conversely, can **translate** the entire decision trace into natural language. It leverages two deeper principles:

1. **Information bottleneck** – the model’s internal activations are compressed representations of the input; an LLM can learn to map these compressed states back to human‑readable causes, preserving *mutual information* with the true explanation.
2. **Probabilistic reasoning over structured text** – the LLM is trained on millions of fraud narratives, learning a distribution \(P(\text{explanation}\mid \text{feature pattern})\). This captures higher‑order interactions (e.g., “simultaneous card usage in two countries”) that linear proxies miss.

Non‑obvious insight: **the quality of explanation correlates more with the *semantic coherence* of the output than with fidelity to a local surrogate**. Auditors value an explanation that references domain knowledge (“suspicious geolocation pattern”) over a faithful but noisy numeric attribution. Thus, LLM explanations deliver higher trust even when they sacrifice strict mathematical fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
