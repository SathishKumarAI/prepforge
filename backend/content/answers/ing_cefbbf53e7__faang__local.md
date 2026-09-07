---
qid: ing_cefbbf53e7__faang__local
question: 'Explain: TL;DR — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 502
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:41:48-05:00'
sources: []
---

**TL;DR – Perplexity**

---

### 1️⃣ Clarify  
Perplexity measures how well a language model predicts a sample of text. It’s the exponential of the average negative log‑likelihood per token. Lower perplexity → better predictions. I’d confirm: *Do we treat punctuation as tokens?* *Is it evaluated on held‑out data or cross‑validation?*

### 2️⃣ Approach  
1. Define probability model \(P(w_1^N)\).  
2. Compute log‑likelihood: \(\ell = \sum_{i=1}^{N}\log P(w_i|w_{<i})\).  
3. Average per token: \(\bar{\ell} = \ell / N\).  
4. Perplexity: \(\text{PP} = e^{-\bar{\ell}}\).

### 3️⃣ Depth  
- **Mathematics**: \( \text{PP}(W) = 2^{-\frac{1}{N}\sum_{i=1}^{N}\log_2 P(w_i|w_{<i})}\).  
- **Interpretation**: If a model assigns probability 0.5 to every token, PP = 2; if it’s certain (probability 1), PP = 1.  
- **Implementation**: Use log‑probs from the transformer, sum them, divide by token count, exponentiate with base e or 2 depending on convention.  
- **Complexity**: O(N) time, O(1) extra memory.

### 4️⃣ Edge Cases  
- *Zero probabilities*: add a small ε to avoid log(0).  
- *OOV tokens*: treat as low‑probability events.  
- *Tokenization mismatch*: ensure same tokenizer for training and evaluation.

### 5️⃣ Optimize & Communicate  
- **Batching**: compute perplexity per batch, then average weighted by token counts.  
- **Caching**: reuse cached log‑probs when fine‑tuning.  
- **Narration**: “Perplexity is essentially the geometric mean of inverse probabilities; it tells us how many choices the model thinks it has on average.”  

This structured explanation covers definition, math, implementation, pitfalls, and optimization—ready for a FAANG interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
