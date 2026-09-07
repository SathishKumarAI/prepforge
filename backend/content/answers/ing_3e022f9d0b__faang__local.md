---
qid: ing_3e022f9d0b__faang__local
question: 'Explain: 10.8. Beam Search ¶ Colab [pytorch] Open the notebook in Colab
  Colab [mxnet] Open the notebook in Colab Colab [jax] Open the notebook in Colab
  Colab [tensorflow] Open the notebook in Colab SageMaker Studio Lab Open the notebook
  in SageMaker Studio Lab'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 290
output_tokens: 465
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:14-05:00'
sources: []
---

**Beam Search – A Structured Overview**

| Step | What I’ll Cover |
|------|-----------------|
| **Clarify** | Beam search is a heuristic decoding algorithm for sequence‑to‑sequence models (e.g., NMT, text generation). It keeps the top‑*k* partial hypotheses at each time step instead of only the single best. Key assumptions: we’re working with log‑probabilities, the model outputs a distribution over tokens per step, and we care about a trade‑off between speed and optimality. |
| **Approach** | 1. Initialize beam with an empty hypothesis and score = 0. <br>2. For each decoding step: expand every beam element by all possible next tokens (or top‑*v* to limit). <br>3. Compute new scores = old score + log P(token). <br>4. Keep the top‑*k* hypotheses (beam width). <br>5. Stop when EOS token appears for all or max length reached. |
| **Depth** | The algorithm runs in *O(k·V·T)* where *V* is vocabulary size and *T* is sequence length; practical implementations prune to a smaller *v*. Memory scales with *k·T*. Beam search improves over greedy decoding by exploring multiple paths, reducing the risk of early mistakes. |
| **Edge Cases** | • Very small beam → behaves like greedy.<br>• Large beam → high memory and slower but closer to exhaustive search.<br>• Handling repeated tokens (length penalty).<br>• If model is deterministic, beam search offers no gain. |
| **Optimize & Communicate** | • Use top‑*k* sampling or length‑penalty to balance diversity vs quality.<br>• Parallelize expansions on GPU; keep tensors small by pruning early. <br>When explaining, I’d illustrate with a simple NMT example and show how beam width 3 outperforms greedy in BLEU score, then discuss the trade‑offs and practical limits (e.g., 10–20 tokens). |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
