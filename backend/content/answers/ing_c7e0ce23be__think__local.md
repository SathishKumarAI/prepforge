---
qid: ing_c7e0ce23be__think__local
question: Evals are nondeterministic - temperature, sampling, flaky agents. How do
  you get trustworthy numbers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 453
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:09:35-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   • Goal: obtain reproducible performance estimates for a model under nondeterministic evaluation settings (temperature, sampling, agent noise).  
   • Assume you control the code but cannot eliminate randomness entirely; you want statistical confidence.

**2️⃣ Adopt a statistical framework**  
   • Treat each eval run as a random variable.  
   • Use Monte‑Carlo simulation: repeat the full eval pipeline many times to sample the distribution of scores.

**3️⃣ Reason step‑by‑step**  
   1. **Fix seeds where possible** (e.g., for model weights, tokenizer).  
   2. **Run a large number \(N\) of independent trials** with different random seeds for temperature/sampling and agent noise.  
   3. **Collect the metric of interest** (accuracy, BLEU, etc.) for each trial.  
   4. **Compute mean \(\bar{x}\), standard deviation \(s\), and confidence intervals** (e.g., 95 % CI = \(\bar{x} \pm t_{0.025,N-1}s/\sqrt{N}\)).  
   5. **Report the interval** instead of a single point estimate, indicating uncertainty.

**4️⃣ Avoid common traps**  
   • Don’t cherry‑pick runs that look good; always include all trials.  
   • Don’t rely on a single “best‑of‑k” selection unless justified.  
   • Beware of hidden stateful randomness (e.g., GPU nondeterminism) that can bias results.

**5️⃣ Sanity‑check and communicate**  
   • Verify that increasing \(N\) stabilizes the confidence interval width.  
   • Compare variance across different temperature settings to ensure your method captures expected fluctuations.  
   • Present both raw score distributions (histograms) and aggregated statistics so readers see the underlying variability.

By treating evaluations as random experiments, systematically sampling, and reporting uncertainty intervals, you deliver trustworthy numbers even when the process is inherently nondeterministic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
