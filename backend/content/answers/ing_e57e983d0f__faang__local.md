---
qid: ing_e57e983d0f__faang__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 522
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:48-05:00'
sources: []
---

**Clarify**  
You’re asking how and why we partition a dataset into *train*, *dev* (validation), and *test* splits when building an AI model—specifically in the context of evaluation frameworks like Langwatch/Langfuse. The key assumptions: data is IID, you have enough samples for each split, and downstream metrics are unbiased if splits are representative.

**Approach**  
1. **Define objectives** – training to fit parameters; dev to tune hyper‑parameters & early stopping; test to estimate real‑world performance.  
2. **Determine split ratios** – common 80/10/10 or 70/15/15, but adjust for dataset size and class imbalance.  
3. **Stratify if necessary** – preserve label distributions across splits.  
4. **Random seed control** – ensures reproducibility across runs.  
5. **Integrate with Langwatch/Langfuse** – use their APIs to tag each split so that evaluation metrics are automatically isolated.

**Depth**  
- *Train*: 70–80 % of data, used for gradient descent; no leakage allowed.  
- *Dev*: 10–15 %, feeds into validation loops (e.g., early stopping based on perplexity or BLEU).  
- *Test*: Remaining 10–15 %, untouched until final release; metrics reported here are the official “model score.”  
Complexity is O(n) for shuffling, negligible overhead. Trade‑offs: larger dev gives better hyper‑parameter tuning but reduces training data; small test sets increase variance of performance estimates.

**Edge Cases**  
- **Time‑series or user‑session data** – must split chronologically to avoid leakage.  
- **Highly imbalanced classes** – need stratified sampling or oversampling in train while keeping dev/test untouched.  
- **Very small datasets** – consider k‑fold cross‑validation instead of a single test set.

**Optimize & Communicate**  
Explain that Langwatch/Langfuse’s split tagging allows automated audit trails: every metric is linked to its data slice, facilitating reproducibility and compliance. Mention that if you notice dev/test drift (e.g., sudden performance drop), you can re‑balance splits or augment data. Conclude by highlighting that a disciplined split strategy prevents overfitting, ensures trustworthy evaluation, and aligns with FAANG standards for production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
