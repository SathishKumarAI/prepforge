---
qid: ing_4bc14efac5__fp__local
question: 'Q: How do you choose dimensions for embeddings?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 463
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:14-05:00'
sources: []
---

**Choosing embedding dimensionality is a trade‑off governed by the *information bottleneck* of your data and model.**

1. **Fundamental problem**  
   An embedding must encode all *relevant* features of an input while discarding irrelevant noise. In information‑theoretic terms, we want to maximize the mutual information \(I(X;Z)\) between input \(X\) and latent code \(Z\), subject to a cost on dimensionality that controls overfitting and computational load.

2. **Why it must work this way**  
   - *Under‑parameterized* (too few dimensions): \(I(X;Z)\) is capped by \(\log_2(2^d)=d\) bits, so subtle distinctions collapse.  
   - *Over‑parameterized* (many dimensions): the encoder can memorize training samples, yielding a high \(I(X;Z)\) but low generalization—this is the “curse of dimensionality” in latent space.

3. **Connection to geometry**  
   The embedding space must have enough capacity to separate clusters that are *linearly separable* after projection. By the Johnson–Lindenstrauss lemma, preserving pairwise distances within \(\varepsilon\) requires \(d = O(\log N / \varepsilon^2)\). This gives a lower bound based on dataset size \(N\).

4. **Practical rule of thumb**  
   Start with \(d \approx 10\%\)–\(20\%\) of the input feature count (for dense data), or use cross‑validation to locate the elbow in a validation loss vs. \(d\) curve.

5. **Non‑obvious insight**  
   *Dimensionality is often more about *latent variance* than raw size.* If you can pre‑compute principal components and observe that 95 % of variance lies in the first \(k\) PCs, then an embedding with \(d \ge k\) will almost always suffice. Ignoring this compressive statistic leads to unnecessarily large embeddings that waste compute without improving performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
