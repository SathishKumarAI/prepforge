---
qid: ing_e57e983d0f__fp__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 441
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:40-05:00'
sources: []
---

### Step 3: Splitting Data (Train / Dev / Test) – Why It Must Be Done the Way It Is  

**The fundamental problem:**  
An AI model learns a function *f* that maps inputs to outputs. We want to evaluate how well *f* will generalize to **unseen** data, not just how it performs on the data it was trained on. Without an honest test of unseen examples we risk over‑optimistic metrics and models that fail in production.

**Why a 3‑way split?**  
1. **Training set** – the only data the model sees during learning.  
2. **Development (dev) set** – held out while tuning hyper‑parameters, selecting architectures, or early‑stopping. It acts as a *proxy* for unseen data but is still used iteratively; therefore its statistics must mirror the true target distribution.  
3. **Test set** – untouched until final evaluation. Its sole purpose is to provide an unbiased estimate of real‑world performance.  

The split size balances variance and bias: too small a test set inflates estimation error; too large reduces training data, hurting learning. A common heuristic is 60/20/20 or 70/15/15, but the exact numbers depend on dataset size and domain.

**Deep principle – Information‑theoretic generalization:**  
The dev set estimates *mutual information* between model parameters and unseen data; the test set estimates *expected risk*. If the splits are not representative, the mutual information estimate is biased, leading to overfitting.  

**Non‑obvious insight:**  
Even if you only care about a single final metric, you should **re‑sample** your splits multiple times (e.g., 5‑fold cross‑validation) and report *confidence intervals*. This captures the inherent randomness in sampling and gives a more honest uncertainty estimate than a single split. It’s rarely done but essential for trustworthy AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
