---
qid: ing_8f0e0a5266__fp__local
question: 'Explain: Multiple Dimensions of Quality — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 434
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:09:33-05:00'
sources: []
---

**Why we need *multiple* quality axes for an LLM**

A language model is a stochastic mapping  
\(p_\theta(y|x)\) that turns an input \(x\) into an output sequence \(y\).  
The goal of evaluation is to quantify how well the induced distribution
matches the “ground‑truth” human intent.  This requires measuring *different* aspects because each captures a distinct source of error:

| Axis | What it tests | Why it matters |
|------|---------------|----------------|
| **Accuracy** | Does \(y\) convey the correct facts or answer? | Information fidelity (mutual information between \(x\) and \(y\)). |
| **Fluency** | Is \(y\) linguistically natural? | Perplexity → entropy minimization. |
| **Robustness** | Does performance degrade under noise or adversarial input? | Generalisation in a high‑dimensional feature space. |
| **Fairness/Alignment** | Are biases reduced, values respected? | Ethical constraints as regularisers on the loss landscape. |
| **Efficiency** | How many tokens or compute steps are needed? | Trade‑off surface between accuracy and cost (Pareto frontier). |

An LLM’s objective is a weighted sum of these losses; each axis corresponds to a different term in that sum.  Optimising one without considering the others can lead to *spurious* improvements—e.g., a model that scores high on accuracy but produces nonsensical text, or vice versa.

**Non‑obvious insight:**  
The *interaction* between axes often yields emergent behaviours. For instance, improving robustness (by augmenting training data) can inadvertently lower fluency because the model learns to hedge and produce more generic sentences—an effect analogous to regularisation bias in statistical learning. Recognising these cross‑talks is essential for designing fair, efficient, and reliable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
