---
qid: ing_3e022f9d0b__fp__local
question: 'Explain: 10.8. Beam Search ¶ Colab [pytorch] Open the notebook in Colab
  Colab [mxnet] Open the notebook in Colab Colab [jax] Open the notebook in Colab
  Colab [tensorflow] Open the notebook in Colab SageMaker Studio Lab Open the notebook
  in SageMaker Studio Lab'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 414
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:16:26-05:00'
sources: []
---

**Beam Search – a principled compromise between exhaustive decoding and greedy selection**

At its core, decoding a sequence model (e.g., language model) is an optimization problem:  
\[
\hat y = \arg\max_{y} P(y|x)
\]
where \(P(y|x)\) factorises into per‑token probabilities. Enumerating all possible sequences is exponential in length; greedy decoding keeps the single highest‑probability prefix at each step, which often collapses diversity and misses globally optimal paths.

Beam search maintains a *beam* of the top‑\(B\) partial hypotheses at every time step. For each hypothesis \(h_t\) we extend it with all possible next tokens, score the resulting prefixes by cumulative log‑probability (or a more sophisticated scoring function), then prune to the best \(B\). This is essentially *breadth‑first search* on a tree where node costs are additive and deterministic. The algorithm guarantees that if the true optimum lies within the beam’s reach, it will be found; otherwise, increasing \(B\) improves approximation quality.

**Non‑obvious insight:**  
Beam width does not merely trade off speed for accuracy—it also shapes the *entropy* of the output distribution. A small \(B\) forces the model to commit early, yielding low‑variance, high‑confidence predictions that may overfit to frequent patterns. Conversely, a large beam preserves uncertainty longer, allowing rarer but higher‑scoring completions to surface. Thus, tuning \(B\) can be viewed as calibrating how much *information* we allow the model to retain during decoding—a subtle form of regularisation.

In practice, beam search is ubiquitous across NLP, image captioning, and speech recognition because it marries computational tractability with principled optimisation while exposing a deeper link between combinatorial search and probabilistic inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
