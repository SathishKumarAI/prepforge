---
qid: ing_3e2efeb2c1__fp__local
question: Your VLM extracts invoice fields at ~91% per-field accuracy. The customer
  needs 99% and you cannot fine-tune the model. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 603
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:00-05:00'
sources: []
---

**Why the current 91 % falls short**

The VLM’s per‑field accuracy is a *calibrated* estimate of its error probability \(p_e\).  
To reach 99 %, we need to reduce the expected false‑positive rate by an order of magnitude:
\[
E[\text{error}] = p_e \;\Rightarrow\; 0.09 \xrightarrow{\text{target}} 0.01.
\]
Because we cannot fine‑tune, the only lever left is *post‑processing* that reshapes the distribution of predictions without changing the underlying model.

**Principle: Error‑aware post‑processing as a bias–variance trade‑off**

The VLM’s outputs can be viewed as a noisy observation \( \hat{y} = y + \epsilon\), where \( \epsilon \) has variance \( \sigma^2\).  
We can reduce *bias* (systematic errors like mis‑segmenting “Total”) by injecting deterministic rules, while we control *variance* by rejecting uncertain predictions.  
This is exactly the bias–variance trade‑off: a small increase in bias (rule overrides) yields a large variance reduction.

**Concrete steps**

1. **Uncertainty filtering** – use the model’s confidence scores or entropy to flag low‑confidence fields.  
   Reject or flag only ~20 % of predictions; for the rest, accept as is.
2. **Rule‑based correction engine** – encode domain heuristics (e.g., “Tax field must be numeric and ≤ 10 % of total”).  
   Apply these rules to the accepted set, correcting systematic mislabels.
3. **Hybrid ensemble** – run a lightweight rule‑only extractor on the flagged subset; combine its output with the VLM’s via weighted voting, calibrated by validation error rates.
4. **Human‑in‑the‑loop sampling** – for remaining uncertain cases, request manual review only where the cost of mislabeling is highest (e.g., line‑item totals).  
   This selective auditing keeps overall human effort low.

**Non‑obvious insight**

Instead of treating all errors uniformly, *allocate correction resources proportional to downstream impact*.  
A small number of high‑impact mistakes (like a wrong grand total) dominate the cost; by focusing on those via uncertainty thresholds and rule checks, you achieve an effective 99 % accuracy without retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
