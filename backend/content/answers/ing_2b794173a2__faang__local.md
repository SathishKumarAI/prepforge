---
qid: ing_2b794173a2__faang__local
question: 'Explain: Perplexity AI Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:57-05:00'
sources: []
---

**Perplexity‑based interview questions in AI companies**

| **Stage** | **What you do** |
|-----------|-----------------|
| **Clarify** | “You’re asking about *perplexity* – the metric used to gauge language‑model quality, right? Do we need a formal definition or just an intuition? Are we focusing on how perplexity is computed, its limitations, or how it shapes interview problems?” |
| **Approach** | 1. Define perplexity mathematically. <br>2. Explain why lower perplexity = better predictions. <br>3. Show a coding example: compute cross‑entropy loss over a small corpus and exponentiate to get perplexity. <br>4. Discuss pitfalls (e.g., smoothing, dataset bias). |
| **Depth** | - Perplexity \(PP(W) = 2^{-\frac{1}{N}\sum_{i=1}^{N} \log_2 P(w_i)}\). <br>- Equivalent to exponentiating average cross‑entropy. <br>- In practice we use *validation perplexity* to compare models; it’s sensitive to rare tokens, so smoothing (Laplace, Kneser–Ney) is often required. <br>- Complexity: \(O(N)\) for a forward pass; space \(O(V)\) for vocab stats. |
| **Edge Cases** | - Empty sequence → undefined perplexity. <br>- OOV words → set probability to a small epsilon, inflating perplexity. <br>- Very short test sets produce high variance; need larger corpora or confidence intervals. |
| **Optimize & Communicate** | Highlight that while perplexity is a good proxy for fluency, it doesn’t capture downstream task performance (e.g., translation BLEU). In interviews, frame the problem: “Given two models, which has lower perplexity on a held‑out set?” and explain how you’d validate robustness. Conclude by noting that interviewers look for clear math, code clarity, and awareness of limitations—exactly what we’ve covered. |

*Word count:* 207 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
