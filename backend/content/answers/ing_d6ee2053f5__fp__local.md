---
qid: ing_d6ee2053f5__fp__local
question: Walk me from RNNs to LSTMs to transformers. Why did attention win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 611
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:37:07-05:00'
sources: []
---

**From Recurrent Neural Networks (RNNs) to Transformers: A principled view**

1. **RNNs – sequential optimisation**  
   RNNs solve *sequence‑to‑sequence* tasks by unrolling a hidden state \(h_t\) over time:  
   \[
   h_t = f(x_t, h_{t-1}) .
   \]
   Training optimises the likelihood of the target sequence under this Markov chain. The core problem is *gradient vanishing/exploding* because information must propagate through many nonlinear layers; back‑propagation scales as \(O(\prod_t \partial h_t/\partial h_{t-1})\).

2. **LSTMs – gated memory**  
   Long Short‑Term Memory (LSTM) introduces gates that *selectively pass gradients*. The forget gate \(f_t = \sigma(W_f[x_t,h_{t-1}]+b_f)\) acts as a learned step‑size in the recurrence:
   \[
   c_t = f_t\odot c_{t-1}+i_t\odot g_t .
   \]
   This is equivalent to *adaptive truncation of the effective sequence length*, turning the optimisation problem into one where gradients are preserved over a controllable horizon.

3. **Transformers – attention as implicit memory**  
   Attention replaces recurrence with an *all‑to‑all interaction*:
   \[
   \text{Attention}(Q,K,V)=\operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt d}\right)V .
   \]
   Here the “memory” is not a hidden state but a weighted sum over *every position*. This solves the optimisation bottleneck by eliminating the product of Jacobians: gradients flow directly from output to any input token in \(O(1)\) steps. The softmax normalisation enforces a probabilistic weighting that guarantees stability (no exploding sums) while still allowing sparse, long‑range dependencies.

**Why attention “won”**  
From an information‑theoretic angle, attention implements *conditional mutual information* between positions: each output token conditions on the most relevant subset of inputs. Unlike RNNs where every input influences all later outputs via a fixed chain, attention learns which contexts are informative, achieving near‑optimal *information flow* with fewer parameters and better parallelism.

**Non‑obvious insight**  
The softmax temperature \(\sqrt d\) is not just a scaling trick; it regularises the *rank* of the interaction matrix \(QK^\top\). By keeping this rank low, attention implicitly enforces a low‑dimensional manifold on the sequence representation—essentially performing dimensionality reduction *in situ*, which explains why Transformers generalise so well even with modest data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
