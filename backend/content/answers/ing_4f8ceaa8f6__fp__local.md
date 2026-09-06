---
qid: ing_4f8ceaa8f6__fp__local
question: What is speculative decoding? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 510
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:54:20-05:00'
sources: []
---

**Speculative decoding** is a technique for speeding up token‑by‑token generation in large language models by *parallelizing* the “think‑and‑verify” loop that underlies autoregressive inference.

---

### The fundamental problem it solves
Autoregressive transformers produce one token at a time. For each step they must:

1. **Compute** a probability distribution over all \(V\) tokens (matrix multiplication of hidden states with the softmax weight matrix).
2. **Sample / pick** the next token.
3. **Update** the internal state to reflect that choice.

The bottleneck is the *sequential* nature: each step depends on the previous token’s hidden state, so GPU cores sit idle while waiting for the new vector to arrive.

---

### Why it must work this way
- The model’s logits are conditioned on all past tokens; you cannot compute a correct next‑token distribution without knowing what came before.
- However, the *shape* of the computation (matrix multiply) is identical regardless of which token is chosen. That observation underpins speculative decoding.

---

### How it works
1. **Speculation phase** – Run a fast, cheap “student” model or a truncated version of the teacher to generate \(k\) candidate tokens in parallel.  
2. **Verification phase** – For each candidate, run the full teacher on that token to get its true probability (or log‑probability).  
3. Pick the first candidate whose verification score exceeds a threshold; otherwise fall back to the teacher’s own next token.

The trick is that if most speculations are correct, you avoid redoing expensive matrix multiplies for those tokens.

---

### Non‑obvious insight
Speculative decoding exploits **distributional sparsity**: in natural language generation, the top few logits dominate. By only verifying a handful of candidates, we reduce the number of expensive teacher calls from \(k\) to just 1–2 on average, yet retain near‑teacher quality. The method’s success hinges on the *high overlap* between student and teacher top‑\(k\) sets—a property that emerges automatically from pretraining rather than being engineered.

---

**Bottom line:** speculative decoding trades a modest amount of extra computation (the cheap speculations) for a large reduction in latency, making transformer inference faster without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
