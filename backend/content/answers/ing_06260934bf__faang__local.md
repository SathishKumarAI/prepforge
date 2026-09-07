---
qid: ing_06260934bf__faang__local
question: Compare Kaplan and Chinchilla scaling laws. What did Chinchilla change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 487
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:44-05:00'
sources: []
---

**Clarify**  
You’re asking how the *Chinchilla* scaling law differs from the earlier *Kaplan* rule for large language models (LLMs). I’ll assume you want a concise comparison of the formulas, what Chinchilla introduced, and why it matters for training efficiency.  

**Approach**  
1. State Kaplan’s empirical relation between compute, dataset size, and model performance.  
2. Present Chinchilla’s reformulation that balances data and parameters per FLOP.  
3. Highlight the key change: optimal data‑to‑parameter ratio instead of fixed parameter count.  

**Depth**  
- **Kaplan (2020)** found that *accuracy ≈ f(C / N)* where *C* is total compute (FLOPs) and *N* the number of training tokens, suggesting diminishing returns beyond a point.  
- **Chinchilla (2022)** showed that for a given compute budget *C*, the optimal model size *P\** satisfies:  

  \[
  P^* = \frac{C}{k}\;\sqrt{\frac{N_{\text{tokens}}}{P^*}}
  \]

  which simplifies to an **optimal data‑to‑parameter ratio** of ~1 000 tokens per parameter.  
- In practice, Chinchilla trained a 70B‑parameter model on only ~300B tokens (≈4 500 tok/param) rather than the 10‑trillion‑token regime used by GPT‑3, achieving comparable or better perplexity with ~4× less compute.

**Edge Cases**  
- Extremely small models (<1M params) may still benefit from more data per parameter.  
- Very large compute budgets could shift the optimal ratio slightly due to memory/parallelism constraints.  

**Optimize & Communicate**  
Explain that Chinchilla’s insight lets us *save* billions of FLOPs by scaling datasets proportionally, not just parameters—critical for cost‑effective model training at FAANG scale. This change is why newer models (e.g., Gopher‑2) adopt a higher data‑to‑parameter ratio and achieve state‑of‑the‑art performance without exploding compute budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
