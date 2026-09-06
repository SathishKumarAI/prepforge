---
qid: ing_fef0ee871d__fp__local
question: 'Explain: Dynamic Example Selection — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 386
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:02:01-05:00'
sources: []
---

**Dynamic Example Selection for Few‑Shot and In‑Context Learning**

The core problem is *how to give a language model enough context to perform a new task while keeping the prompt short*. A vanilla few‑shot prompt supplies a fixed set of demonstrations; but each example carries information that can be quantified: how similar it is to the test input, how much uncertainty it reduces, and how many parameters it “activates” in the transformer.  

From an *information‑theoretic* standpoint we wish to maximize the mutual information \(I(\text{model}; \text{task})\) under a constraint on prompt length. The optimal set of examples is thus the one that yields the greatest expected reduction in entropy of the target distribution given the current model state. This leads to a *greedy selection rule*: at each step choose the example whose conditioned probability \(P(y|x,\text{prompt})\) most increases our certainty about the next token, while penalizing redundancy via pairwise similarity.

Geometrically, each example projects the hidden‑state manifold toward the target subspace. Dynamic selection is akin to *adaptive sampling* in high‑dimensional geometry: we keep adding points that push the current embedding closer to the decision boundary.  

**Non‑obvious insight:**  
Because transformer attention weights are *soft*, an example can influence many tokens simultaneously. Therefore, selecting a single “high‑impact” example—one that shares rare sub‑patterns with the test input—often yields more benefit than multiple generic examples. In practice, this means prioritizing sparsely represented motifs over common ones, which is counterintuitive to human intuition but follows from the attention’s global interaction structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
