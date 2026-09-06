---
qid: ing_5194fddf6b__fp__local
question: 'Explain: Create custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 367
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:58:36-05:00'
sources: []
---

### Building a Custom Evaluator with **Langwatch** and **Langfuse**

The core problem an evaluator solves is *mapping raw model output to a scalar score that reflects task‑specific quality*.  
1. **Define the objective space** – every metric (BLEU, ROUGE, safety) lives in a probability simplex; we must first encode it as a loss \(L(y,\hat y)\).  
2. **Choose an estimator** – Langwatch provides a *parameter‑free* Bayesian bandit that learns the expected reward for each candidate response by aggregating user feedback or oracle scores. It treats evaluation as a multi‑armed bandit: each “arm” is a distinct metric, and the arm’s value is the posterior mean of \(L\).  
3. **Integrate with Langfuse** – Langfuse stores all prompt–response pairs in a graph database; the evaluator queries this store, runs the chosen metrics (e.g., via HuggingFace pipelines), and writes back a composite score. The graph lets you propagate uncertainty: if a response has high variance across similar prompts, its confidence is lowered automatically.

**Non‑obvious insight:**  
Because evaluation is *inference* over an unknown reward function, treating it as a bandit allows you to *trade off exploration vs exploitation*. A single high‑scoring prompt can be misleading; Langwatch’s posterior updates prevent overfitting to such outliers. Thus, the evaluator becomes robust not just to noisy labels but also to evolving task definitions—exactly what continuous AI deployment demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
