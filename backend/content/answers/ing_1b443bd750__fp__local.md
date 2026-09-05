---
qid: ing_1b443bd750__fp__local
question: 'Explain: Zero-Shot vs. Few-Shot Efficiency — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 417
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:08-05:00'
sources: []
---

**Zero‑Shot vs. Few‑Shot Efficiency in Prompt Engineering**

The core task is *inference under distribution shift*: a language model (LM) has been trained on massive corpora but must solve a new, narrowly defined problem with no or few examples. In a zero‑shot setting the prompt supplies only a description of the target task; the LM must map that description to an answer using its internal knowledge graph. The cost is proportional to *semantic distance* between the prompt and the LM’s training distribution: the more the prompt deviates, the higher the entropy of the conditional distribution \(P(y|x)\), leading to poorer performance.

Few‑shot prompting reduces this entropy by injecting a small sample set \(\{(x_i,y_i)\}\). Each example acts as a *local context vector* that biases the LM toward the desired answer space. Formally, we approximate
\[
P_{\text{few}}(y|x,\mathcal{S}) \approx \frac{1}{Z}\exp\!\left(\sum_{i} w_i\,\phi(x_i,y_i)\right),
\]
where \(\phi\) measures similarity in the LM’s embedding space. The weights \(w_i\) encode how strongly each example should influence the prediction, naturally decaying with distance.

**Non‑obvious insight:**  
Few‑shot efficiency is not just “more data” but *information‑theoretic compression*. Each added example reduces uncertainty by a fixed amount; beyond a threshold, marginal gains vanish because the LM’s capacity saturates. Therefore, optimal few‑shot prompting balances *informativeness* (diverse, high‑confidence examples) against *overfitting* to idiosyncratic wording. This principle explains why carefully chosen “anchor” examples outperform simply cramming more demonstrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
