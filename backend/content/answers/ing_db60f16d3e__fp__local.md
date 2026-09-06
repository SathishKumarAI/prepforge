---
qid: ing_db60f16d3e__fp__local
question: 'Explain: Sliding Window Attention — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 488
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:45:40-05:00'
sources: []
---

**Sliding‑Window Attention in Kaiju**

The core problem is *scalable autoregression*: a conversational model must attend to thousands of tokens while keeping memory and compute sub‑quadratic. Classic self‑attention is \(O(L^2)\) in sequence length \(L\), which explodes for long dialogues.

Kaiju replaces global attention with **sliding windows**: each token attends only to the \(k\) preceding tokens (causal window). Formally, for position \(i\),

\[
\alpha_{ij} \propto
\begin{cases}
\exp(Q_i K_j^\top / \sqrt{d}) & j \in [\,i-k+1,\; i\,] \\
0 & \text{otherwise}
\end{cases}.
\]

This turns the attention matrix into a banded structure, reducing complexity to \(O(kL)\). The derivation hinges on *locality*—most conversational relevance lies in recent utterances. By truncating the kernel, we approximate the full softmax while preserving causality.

**Why it works**

1. **Information Bottleneck**: In language, distant tokens contribute diminishing mutual information. Sliding windows capture this decay naturally.
2. **Geometric Efficiency**: The banded matrix can be multiplied with linear‑time algorithms (e.g., sliding‑dot‑product), eliminating quadratic bottlenecks.
3. **Probabilistic Interpretation**: It’s equivalent to a Markov assumption of order \(k\); the model learns an implicit *context window* rather than a hard cutoff.

**Non‑obvious Insight**

Overlapping windows are not merely redundant—they act as a *soft global aggregator*. By allowing each token to see a small number of tokens beyond its immediate window via residual connections, Kaiju retains long‑range coherence without sacrificing linearity. Thus sliding‑window attention is not just a pruning trick; it’s an efficient instantiation of a low‑rank, locality‑aware approximation that preserves the essential statistical structure of dialogue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
