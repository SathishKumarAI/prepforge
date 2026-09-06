---
qid: ing_f998fc096f__fp__local
question: 'Explain: Auto-grader analysis — Constitutional Classifiers: Defending against
  universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 369
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:50:14-05:00'
sources: []
---

**Auto‑grader analysis – Constitutional Classifiers for defending universal jailbreaks**

The *fundamental problem* is that large language models (LLMs) can be coerced (“jailbroken”) into producing disallowed content no matter how the prompt is phrased. An auto‑grader must therefore evaluate *every possible prompt* and ensure compliance, which is an infinite search.

A Constitutional Classifier reframes this as a **two‑stage optimization**:

1. **Constitution (policy)** – a concise set of constraints expressed in natural language (e.g., “Never provide instructions that facilitate wrongdoing”).  
2. **Classifier (checker)** – a lightweight model trained to decide, given an LLM’s output and the prompt, whether the output satisfies the constitution.

The key insight is that *checking* compliance is far cheaper than *generating* safe text from scratch. By training the classifier on a diverse set of jailbreak attempts and benign prompts, we learn a decision surface that generalizes to unseen attacks. The classifier’s loss is a **hinge‑like margin**: outputs close to violating the constitution incur higher penalties, encouraging the model to stay safely away from the boundary.

This setup connects to *robust optimization*: we optimize for worst‑case compliance over all prompts in a bounded set. The classifier acts as an oracle that guarantees safety with high probability, turning an infinite verification problem into tractable supervised learning.

**Non‑obvious insight:**  
Because the constitution is expressed in natural language, the classifier can *self‑improve* by re‑inheriting new clauses from updated policies without retraining the entire LLM. Thus, defending against universal jailbreaks becomes a maintenance task rather than an end‑to‑end redesign of the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
