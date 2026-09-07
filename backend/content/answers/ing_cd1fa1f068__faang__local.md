---
qid: ing_cd1fa1f068__faang__local
question: 'Explain: What They''re Actually Evaluating — Perplexity AI Interview Prep
  2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 476
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:37:06-05:00'
sources: []
---

**Clarify**  
The interview probes *how* a model measures uncertainty and quality of its predictions—specifically perplexity. I’d confirm whether the focus is on language modeling, evaluation metrics, or practical deployment concerns (e.g., data‑driven tuning).

**Approach**  
1. Define perplexity mathematically as the exponential of cross‑entropy.  
2. Explain its role: a lower value → better predictive fit; it’s a proxy for model “surprise.”  
3. Discuss how perplexity is computed on held‑out data and why it matters for hyper‑parameter search, architecture comparison, or fine‑tuning.  
4. Highlight pitfalls: dataset bias, tokenization effects, and the difference between *perplexity* and real‑world performance.

**Depth**  
- **Formula:** \(PP(W) = 2^{-\frac{1}{N}\sum_{i=1}^N \log_2 P(w_i|w_{<i})}\).  
- **Interpretation:** If a model assigns probability \(p\) to the next token, perplexity is \(1/p\); it measures expected branching factor.  
- **Evaluation pipeline:** split data → compute cross‑entropy per batch → aggregate → exponentiate.  
- **Complexity:** O(N) time, constant memory beyond vocab; scalable with GPU parallelism.  
- **Trade‑offs:** Perplexity is dataset‑specific; a model can have low perplexity yet fail on downstream tasks.

**Edge Cases**  
- Rare tokens inflate perplexity—use smoothing or subword units.  
- Tokenization mismatches between training and evaluation data break the metric.  
- Overfitting: perplexity on training set vs. validation set diverges; indicates memorization rather than generalization.

**Optimize & Communicate**  
I’d suggest monitoring *validation perplexity* alongside *task‑specific metrics* (BLEU, ROUGE). If perplexity stalls but downstream scores improve, it signals that the model learns better representations despite higher “surprise.” I’d explain this nuance to interviewers, demonstrating not just knowledge of the metric but its practical implications in a production AI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
