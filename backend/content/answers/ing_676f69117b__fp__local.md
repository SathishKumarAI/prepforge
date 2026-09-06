---
qid: ing_676f69117b__fp__local
question: 'Q: How do temperature and top-p affect generation?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 442
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:54-05:00'
sources: []
---

**Temperature** and **top‑p (nucleus) filtering** are two knobs that shape the probability distribution from which a language model draws its next token.  
At the core, a transformer outputs logits \(z_i\) for each candidate word; softmax turns them into probabilities \(p_i=\frac{e^{z_i}}{\sum_j e^{z_j}}\).  

1. **Temperature (\(T>0\))** rescales these logits: \(p'_i \propto e^{z_i/T}\).  
   *When \(T=1\), the distribution is unchanged.*  
   - As \(T\downarrow 0\), the exponentiation exaggerates differences, collapsing the distribution onto the single highest‑logit token—*deterministic greedy decoding*.  
   - As \(T\uparrow \infty\), logits are flattened, making every word almost equiprobable; sampling becomes a near‑random walk.  
   Mathematically, temperature controls the *entropy* of the output distribution: lower \(T\) reduces entropy, higher \(T\) increases it.

2. **Top‑p (nucleus)** selects the smallest prefix of sorted probabilities whose cumulative mass ≥ \(p\). Tokens outside this nucleus are discarded before sampling.  
   This enforces a *soft* cutoff on tail events: instead of hard‑cutting by rank, it cuts by probability mass, preserving rare but high‑value tokens that might be omitted in top‑k.

**Non‑obvious insight:**  
Temperature and top‑p interact multiplicatively on entropy. A low temperature can make the distribution sharply peaked, rendering nucleus filtering ineffective because almost all mass lies below any reasonable \(p\). Conversely, a high temperature inflates the tail; nucleus filtering then becomes crucial to prevent degenerate “hallucinations”. Thus, optimal generation typically pairs *moderate* temperature with *tight* top‑p, balancing creativity and coherence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
