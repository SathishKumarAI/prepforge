---
qid: ing_b1c5d26c0e__faang__local
question: 'Explain: Repetition Penalties — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 437
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:09-05:00'
sources: []
---

**Clarify**  
We’re asked how “repetition penalties” are applied in an inference pipeline for language models. The key assumptions: we’re dealing with autoregressive decoding (e.g., beam or top‑k sampling), the model outputs a probability distribution over tokens at each step, and we want to discourage repeating the same token or n‑gram too often.

**Approach**  
1. Identify the repeated unit (token, bigram, etc.).  
2. Adjust its logit before the softmax: subtract a penalty proportional to how many times it has appeared so far.  
3. Re‑normalize and sample from the modified distribution.  
4. Repeat until generation ends.

**Depth**  
During decoding we maintain a counter `c(token)` for each token. At step *t*, the adjusted logit is  
`logit_adj = logit_raw – λ · c(token)`, where **λ** (penalty weight) is tuned per model. For n‑gram penalties, we sum over all overlapping n‑grams containing the candidate token. After adjusting logits, we apply temperature scaling and softmax to obtain probabilities. Complexity remains *O(V)* per step (V = vocab size), same as standard decoding; the extra cost is negligible.

**Edge Cases**  
- λ too high → model stalls or generates nonsensical tokens.  
- Repeated phrases that are semantically correct (e.g., “I am I”) may be undesired.  
- Extremely long contexts can cause counters to grow large, so we cap `c(token)` or use decay.

**Optimize & Communicate**  
We can cache the penalty term per token across steps and update only when a new repetition occurs, reducing overhead. In production, expose λ as a hyper‑parameter that can be tuned via A/B testing on user engagement metrics. I’d explain to stakeholders: “By softly lowering probabilities for already‑used tokens we reduce choppiness while preserving fluency; the algorithm is linear in vocabulary and integrates cleanly with existing pipelines.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
