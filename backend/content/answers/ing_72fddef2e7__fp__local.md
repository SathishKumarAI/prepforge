---
qid: ing_72fddef2e7__fp__local
question: What causes high latency in conversational AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 410
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:09:14-05:00'
sources: []
---

**High‑latency in conversational AI stems from the mismatch between *real‑time inference* and the *sequential, combinatorial nature of language*.**

1. **Fundamental problem:**  
   The system must map an input utterance \(x\) to a distribution over possible next tokens \(p(y|x)\). This requires evaluating a deep neural network whose complexity grows with sequence length, model size, and the number of candidate beams.

2. **Why latency arises:**  
   *Sequential decoding* forces token‑by‑token evaluation; each step depends on all previous outputs, so parallelism is limited.  
   *Beam search* multiplies this cost by a factor equal to beam width, trading accuracy for speed.  
   *Hardware constraints* (CPU vs GPU, memory bandwidth) further bottleneck the computation of large transformer layers.

3. **Deeper principle:**  
   The problem reduces to *efficient inference in high‑dimensional discrete spaces*. Approximation algorithms that preserve probability mass while cutting computation are essential; this is an instance of the classic “search vs. sampling” trade‑off in probabilistic modeling.

4. **Non‑obvious insight:**  
   **Cache‑aware re‑use of hidden states across turns** can cut latency by >30 % even for large models. Most systems recompute from scratch each turn, ignoring that conversational context is largely unchanged; storing and reusing the last layer’s activations (and only updating the minimal incremental part) exploits temporal locality far better than naive batching.

5. **Practical take‑away:**  
   Combine *streaming decoding*, *beam width reduction*, and *cached hidden states* to hit sub‑200 ms latency without sacrificing fluency—an engineering strategy grounded in information‑theoretic efficiency rather than ad‑hoc heuristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
