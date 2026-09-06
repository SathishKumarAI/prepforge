---
qid: ing_53bb41bae7__fp__local
question: 'Explain: 10.8.2. Exhaustive Search ¶ — 10.8. Beam Search \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 516
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:03:02-05:00'
sources: []
---

**Why exhaustive search fails and why beam search succeeds**

The core problem is *sequence decoding*: given a model that assigns a probability \(p(y_1,\dots ,y_T\mid x)\) to every possible output sequence \(\mathbf y\), we want the most likely one, i.e.  
\[
\hat{\mathbf y}=\arg\max_{\mathbf y} p(\mathbf y\mid x).
\]
A brute‑force (exhaustive) search enumerates *all* \(V^T\) sequences (\(V\)=vocabulary size). It guarantees optimality but is exponential: for a 50‑token sentence and a typical vocabulary of 30 k, the space contains \(30\,000^{50}\) possibilities—astronomically large. Even with dynamic programming (e.g., Viterbi), the combinatorial explosion remains because each step’s state must remember *every* partial history.

Beam search sidesteps this by maintaining only a fixed‑size set of the most promising partial sequences at each time step:
\[
B_t=\{\text{top‑}k \text{ prefixes } y_{1:t}\}.
\]
When extending, we consider all \(V\) continuations for each prefix in \(B_{t-1}\), rank them by cumulative log‑probability (or a length‑normalised score), and keep the top‑\(k\). This is greedy but *lookahead*—each step looks ahead one token yet never revisits discarded prefixes. The algorithm’s time complexity becomes \(O(kTV)\) instead of \(O(V^T)\).

**Non‑obvious insight:** Beam search implicitly performs a *Monte Carlo approximation to the partition function*. By truncating low‑probability paths early, it concentrates computational effort on regions that contribute most to the sum over all sequences. Thus, although not guaranteed optimal, beam search often finds near‑optimal solutions because the probability mass is highly skewed: a handful of prefixes dominate the posterior. This explains why even a tiny beam width (e.g., \(k=5\)) can yield high‑quality translations or recognitions in practice.

In short, exhaustive search is theoretically sound but computationally infeasible; beam search trades exactness for tractable, probabilistically principled approximations that exploit the model’s skewed output distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
