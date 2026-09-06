---
qid: ing_727558fa99__think__local
question: Your fine-tune gained 8 points on your benchmark. How do you know the gain
  is real and not contamination?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 551
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:35:23-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Confirm that an 8‑point lift on a benchmark truly reflects model improvement, not data leakage or other artifacts.  
- *Assumptions*: You have a clean train/validation/test split; your fine‑tuning procedure is reproducible; you know the baseline metric and its variance.

**2️⃣ Adopt a mental framework**  
Use a *bias–variance* + *data‑quality* lens:  
- **Bias** → systematic errors (e.g., contamination).  
- **Variance** → random noise in evaluation.  
- **Data quality** → distribution shifts, leakage.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| a. Re‑run the baseline & fine‑tuned models on *fresh* data splits (e.g., different random seeds). | Check consistency of the 8‑point lift across runs. | Large variance indicates instability. |
| b. Perform **cross‑validation** or bootstrap resampling on the test set. | Estimate confidence intervals for the metric. | If the interval excludes zero, gain is statistically significant. |
| c. Inspect data provenance: ensure no overlap between training and test sets (e.g., token‑level duplication). | Prevent contamination that could inflate scores. |
| d. Run a *controlled ablation*: remove any potentially leaked features or tokens from the training set and re‑evaluate. | Directly tests whether leakage drives improvement. |
| e. Compare against an **oracle** or human baseline on a subset of test samples. | Gives a sanity check that the score correlates with true performance. |

**4️⃣ Common pitfalls to avoid**

- Assuming “higher is better” without checking for over‑fitting (e.g., training loss vs. validation loss).  
- Ignoring random seed effects; a single run can be misleading.  
- Overlooking subtle leakage (e.g., identical prompts or answers across splits).  
- Relying solely on point estimates—ignore variance and statistical significance.

**5️⃣ Sanity‑check & communicate**

- Compute the *effect size* (Cohen’s d) to gauge practical significance.  
- Present a table: baseline mean ± σ, fine‑tuned mean ± σ, Δ, p‑value, confidence interval.  
- Verbally explain that the 8‑point lift is statistically significant, reproducible across splits, and not attributable to data leakage—therefore, you can trust it as a real improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
