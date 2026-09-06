---
qid: ing_4f8ec99187__fp__local
question: 'Explain: GPT-4 and Claude — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 504
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:54:27-05:00'
sources: []
---

### Why we need *metrics* for large‑language models

When a model is trained to predict the next token, its **objective** is simply a probability distribution over vocabulary items.  
But that objective alone does not tell us whether the model will be useful in practice: a perfect next‑token predictor might still generate incoherent paragraphs or hallucinate facts.  We therefore need *evaluation metrics*—functions that map a model’s output to a single score reflecting real‑world performance.

### From probability to usefulness

1. **Perplexity** measures how “surprised” the model is by a held‑out text:  
   \[
   PP = 2^{-\frac{1}{N}\sum_{i=1}^{N}\log_2 P(w_i|w_{<i})}
   \]
   Lower perplexity ⇒ better next‑token modeling.  
   *Insight*: Perplexity is essentially the cross‑entropy between true and predicted distributions; it guarantees that a model with perfect probabilities will achieve 1 bit per token.

2. **Task‑specific scores** (BLEU, ROUGE, F1) translate probability outputs into *task relevance*. For GPT‑4 or Claude, we feed prompts and compare their completions to human references.  
   *Insight*: These metrics embed *human judgment* into a numeric form; they are not purely statistical but encode linguistic structure via n‑gram overlap.

3. **Human evaluation** remains the gold standard: annotators rate coherence, factuality, safety. This is an implicit metric grounded in **information theory**—the model’s ability to reduce human uncertainty about the content.

### A non‑obvious point

Most people treat perplexity as a proxy for overall quality, but **highly fluent but hallucinating outputs can still have low perplexity** because they are internally consistent. Therefore, any robust assessment of GPT‑4 or Claude must combine *probabilistic* metrics with *semantic* and *human‑centric* ones; otherwise we risk optimizing the wrong objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
