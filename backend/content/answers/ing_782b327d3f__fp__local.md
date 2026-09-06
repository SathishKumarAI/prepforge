---
qid: ing_782b327d3f__fp__local
question: 'Explain: Um it''s not necessarily the best tool — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 388
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:18-05:00'
sources: []
---

**Why “Machine learning is not always the best tool”**

At its core, a software system must *solve* a problem with *predictable performance*.  
When we hand this job to ML, we trade a **deterministic algorithmic guarantee** for a **probabilistic model** that learns from data. The fundamental question becomes: *does the expected loss of the learned model stay below the cost of an engineered solution?*  

Google’s experience shows that many production services—routing, load‑balancing, authentication—are better served by **explicit rules** or **hand‑tuned heuristics** because:

1. **Explainability & safety** – deterministic code can be formally verified; ML models are opaque and can fail in corner cases that matter most.
2. **Data scarcity & drift** – when training data is noisy, biased, or changes over time, the model’s error grows faster than a simple rule set.
3. **Latency budgets** – inference pipelines add serialization, GPU/CPU contention, and batch‑processing delays; engineered code can be optimised to microseconds.

A non‑obvious insight: *the “best” tool is determined by the **entropy of the input space**.*  
If a problem’s inputs have low entropy (few distinct patterns), a rule‑based system compresses them into a tiny decision tree, whereas an ML model will overfit and waste compute. In high‑entropy domains—image or speech recognition—the statistical advantage of learning outweighs engineering effort.

Thus, Google’s lesson is not that ML is useless; it is that **problem structure dictates the optimal solution**. The art lies in mapping a system’s entropy to either deterministic logic or probabilistic inference, ensuring reliability, speed, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
