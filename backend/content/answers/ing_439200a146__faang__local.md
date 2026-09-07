---
qid: ing_439200a146__faang__local
question: 'Explain: Sources — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 633
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *perplexity* as a performance metric for language models and the main factors that drive its value. I’ll assume we’re talking about probabilistic language modeling (e.g., N‑gram, neural LMs) and that “sources” refers to the sources of error or uncertainty contributing to high perplexity.

**Approach**  
1. Define perplexity mathematically.  
2. Enumerate key contributors: data sparsity, model capacity, tokenization, domain mismatch, noise, and evaluation protocol.  
3. Discuss how each source inflates perplexity.  
4. Conclude with mitigation ideas.

**Depth**  

| Source | Why it hurts perplexity | Typical impact |
|--------|-------------------------|---------------|
| **Data sparsity / OOV tokens** | Limited training examples for rare n‑grams → high entropy on unseen events | Exponential increase for low‑frequency words |
| **Model capacity (underfitting)** | Architecture too shallow to capture long‑range dependencies | Systematic bias, higher cross‑entropy |
| **Tokenization mismatch** | Wordpiece or byte‑pair splits create artificial boundaries | Inflated uncertainty on sub‑token sequences |
| **Domain shift** | Training corpus differs from test domain → mismatched priors | Sudden jump in perplexity at domain boundary |
| **Noisy labels / corrupted data** | Random token flips raise entropy | Adds irreducible error component |
| **Evaluation protocol** | Incorrect smoothing, ignoring unknowns | Under‑ or over‑estimation of true perplexity |

Perplexity = \(2^{-\frac{1}{N}\sum_{i=1}^{N} \log_2 P(w_i)}\). A lower value means the model assigns higher probability mass to the test distribution; any source that increases entropy directly raises perplexity.

**Edge cases**  
- Extremely short test sets → variance dominates.  
- All‑unknown vocabulary → perplexity collapses to \(V^{1/N}\).  
- Mixed tokenization schemes (e.g., word vs subword) can produce misleadingly low perplexities if smoothing is omitted.

**Optimize & communicate**  
To reduce perplexity, we should: 1) expand training data and apply back‑off or neural smoothing; 2) increase model depth or use transformer architectures for better context capture; 3) standardize tokenization across train/test; 4) perform domain adaptation (fine‑tune on target corpus); 5) clean noisy labels. I would explain each step’s trade‑offs—larger models cost compute, more data increases storage—and emphasize that perplexity is a *proxy* for downstream task performance but not the sole metric. This structured reasoning showcases problem understanding, technical depth, and clear communication—all key to a high SIGNAL score in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
