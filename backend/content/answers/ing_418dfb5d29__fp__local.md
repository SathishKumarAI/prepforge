---
qid: ing_418dfb5d29__fp__local
question: Explain min-p sampling and repetition/frequency penalties. When do standard
  sampling settings fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 724
total_tokens: 900
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:24:03-05:00'
sources: []
---

**Min‑\(p\) sampling**  
A language model predicts a distribution \(P(w|h)\). In pure softmax decoding we pick the arg‑max or sample from it directly. This often yields low‑probability “hallucinations” because the tail of the distribution contains many plausible but unlikely tokens.  

Min‑\(p\) addresses this by *truncating* the tail:  
1. Sort logits descending.  
2. Accumulate probabilities until the cumulative sum \(\ge p\).  
3. Renormalise only those tokens, discarding the rest.  

Formally we seek the smallest set \(S=\{w_1,\dots,w_k\}\) such that  
\[
\sum_{i=1}^{k}P(w_i|h)\;\ge\;p.
\]
The probability mass outside \(S\) is redistributed proportionally among \(S\). This guarantees that every token sampled has at least the minimum probability mass \(p/k\), thereby eliminating extremely unlikely choices while preserving diversity.

**Repetition / frequency penalties**  
When a model repeats a phrase, its hidden state often reinforces the same context. To discourage this we modify logits before softmax:

- **Frequency penalty**: subtract \(\lambda_f \cdot c(w)\) where \(c(w)\) is how many times token \(w\) has appeared so far.
- **Repetition (presence) penalty**: subtract \(\lambda_r\) if \(c(w)>0\).

Both can be seen as adding a *negative* bias proportional to the empirical count, which is equivalent to imposing an entropy‑maximising prior that penalises over‑used tokens. In probabilistic terms we are approximating
\[
P_{\text{pen}}(w|h)\propto P(w|h)\cdot \exp(-\lambda_f c(w)-\lambda_r\mathbf{1}_{c(w)>0}).
\]
This is a Gibbs distribution over the token space with an energy term that grows linearly with repetition.

**When standard sampling fails**  
Standard softmax or top‑k/top‑p sampling can break when:

| Scenario | Problem |
|----------|---------|
| **High temperature (\(T>1\))** | Probability mass flattens, low‑probability tokens dominate → nonsensical output. |
| **Very small \(k\) in top‑k** | Over‑constrains the distribution; model may get stuck on a narrow mode and repeat it. |
| **No repetition penalty** | In long passages the model “gets lost” in a local context, producing repetitive loops or self‑references. |

A non‑obvious insight: *the penalties interact with the model’s embedding geometry*. Tokens that are semantically similar share vector directions; penalising one token implicitly nudges the softmax away from its entire neighbourhood. Thus, a high repetition penalty can unintentionally suppress valid synonyms, making the text feel unnatural. Careful calibration (often using validation metrics like perplexity‑plus‑diversity trade‑off) is essential to avoid this side effect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
