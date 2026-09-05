---
qid: ing_152df56a85__fp__local
question: 'Explain: Footnotes — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 506
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:50:04-05:00'
sources: []
---

**Footnotes – Constitutional Classifiers**  
*Defending against universal jailbreaks* (Anthropic)

---

### 1. The fundamental problem

A large language model (LLM) is trained to predict the next token given a context. When prompted with a “jailbreak” instruction, it can produce disallowed content if the prompt’s reward signal aligns with that instruction. A *universal jailbreak* means an adversary crafts a prompt that systematically coerces any LLM into violating policy regardless of its internal state.

### 2. Why a classifier alone is insufficient

A naive approach: prepend a “policy” token and train a binary classifier to detect violations. This suffers from **distribution shift**—the attacker can subtly re‑phrase the jailbreak so the classifier’s features no longer fire, yet the model still follows the instruction. The classifier must therefore understand *why* an utterance is disallowed, not just *what* it looks like.

### 3. Constitutional Classifiers: a principled solution

1. **Define a “constitution”** – a formal set of rules (e.g., *“Never provide instructions that facilitate wrongdoing.”*) expressed as logical constraints on the model’s output distribution.  
2. **Grounding via reinforcement learning from human feedback (RLHF)** – instead of training a separate classifier, we impose the constitution directly in the reward function:  
   \[
   R_{\text{total}} = R_{\text{task}} - \lambda\,\mathbb{I}\{\text{output violates constitution}\}
   \]
3. **Policy projection** – after each gradient step, project the policy back onto the feasible set defined by the constitution using *mirror descent*. This guarantees that no matter how the adversary crafts a prompt, the model’s posterior remains within the legal region.

### 4. Deep insight

The key non‑obvious trick is **projecting in log‑probability space** rather than raw logits. Because the policy lives on the simplex, projecting after exponentiation distorts distances; doing it in log space preserves relative likelihoods and avoids “policy collapse” (where all probabilities become uniform). This subtle geometric choice ensures that the model retains expressivity while strictly obeying the constitution.

---

In short, Constitutional Classifiers replace brittle heuristic detectors with a mathematically grounded policy‑projection mechanism, guaranteeing compliance even under adversarial prompt engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
