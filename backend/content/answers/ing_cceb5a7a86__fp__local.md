---
qid: ing_cceb5a7a86__fp__local
question: Why do you version an eval dataset, and what exactly belongs in the version?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 324
total_tokens: 499
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:15:54-05:00'
sources: []
---

When a model is trained it implicitly *learns* a mapping from input space to output space that best satisfies an objective (e.g., minimizing cross‑entropy).  
The evaluation set is the **anchor** that tells us whether that mapping generalises beyond the training data.  
If we change the distribution of the eval set after a model has been released, we are no longer testing *the same* question: “does the model still solve this problem?” Instead we are asking “does it solve a new problem?”  
Therefore every time the evaluation set is altered—whether by adding samples, removing outliers, or correcting labels—we must record that change as a new **version**.  

A version should contain:
1. The exact list of examples (ids, features, gold labels).  
2. Metadata describing any preprocessing steps applied (tokenisation, normalization).  
3. A manifest of the source dataset and its provenance (date, license).  
4. Checksums for each example to guard against accidental corruption.

The deeper principle is **reproducibility**: a version is an immutable snapshot that guarantees two parties can compare results under identical conditions.  
A non‑obvious insight is that *label drift*—the gradual change in the meaning of a class over time—is often the main culprit for evaluation decay, not just data quality issues. By treating each label set as its own version you can detect and correct this drift early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
