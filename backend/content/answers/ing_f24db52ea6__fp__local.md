---
qid: ing_f24db52ea6__fp__local
question: 'Explain: 10.8.1. Greedy Search ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 473
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:13-05:00'
sources: []
---

**Greedy vs. Beam Search in Sequence Models**

At its core, decoding a sequence model is an *optimization problem*: we want the most probable output \(Y=(y_1,\dots ,y_T)\) under a learned distribution \(P(Y|X)\). Exact search would enumerate all possible sequences—exponential in length—but that’s infeasible. Greedy and beam search are two heuristics that approximate this optimum.

*Greedy Search* chooses the locally optimal token at each step:
\[
\hat{y}_t = \arg\max_{v} P(y_t=v|X,\hat{y}_{1:t-1}).
\]
It assumes **conditional independence** of future decisions given the past, effectively collapsing the search tree to a single path. This works well when the model’s predictions are sharply peaked and the true sequence aligns with the greedy trajectory—common in high‑confidence language models.

*Beam Search* maintains \(k\) partial hypotheses (the *beam*) at each step:
\[
\mathcal{B}_t = \operatorname{top}_k\!\bigl\{\,P(y_t=v|X,\mathbf{b})\cdot P(\mathbf{b}) : \mathbf{b}\in\mathcal{B}_{t-1}, v\in V\bigr\}.
\]
Here the algorithm trades off **exploration vs. exploitation**: by keeping multiple candidates, it mitigates the myopic nature of greedy decoding and approximates a *dynamic programming* solution to the underlying sequence‑to‑sequence objective.

### Non‑obvious insight
Beam search’s effectiveness hinges on *beam width* interacting with the model’s entropy. A small beam may collapse to greedy behavior if the distribution is peaked; a large beam can waste computation on low‑probability paths that later dominate due to cumulative product effects. Thus, optimal beam size is not simply “larger is better” but depends on the **entropy landscape** of \(P(Y|X)\). Understanding this trade‑off lets practitioners tune beams more intelligently than by brute force.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
