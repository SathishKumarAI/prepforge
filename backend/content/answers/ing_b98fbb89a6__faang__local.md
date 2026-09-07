---
qid: ing_b98fbb89a6__faang__local
question: 'Explain: What they emphasise — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 423
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:29-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain *perplexity*—the metric used in language modeling—to demonstrate your grasp of evaluation techniques and their practical implications.

**Approach**  
1. Define perplexity formally.  
2. Intuitively connect it to “average branching factor.”  
3. Show how it’s computed from a test set.  
4. Mention its role in comparing models and guiding training decisions.

**Depth**  
Perplexity is the exponential of the average negative log‑likelihood:  

\[
PP(\mathbf{w}) = \exp\!\Big(-\frac1N \sum_{i=1}^N \log P(w_i|\text{context})\Big)
\]

For a probability distribution over next tokens, it equals the effective number of choices the model faces.  
- **Low perplexity** → predictions are confident (probability mass concentrated).  
- **High perplexity** → uncertainty or poor fit.  

When evaluating a language model on a held‑out corpus, we compute cross‑entropy per token and exponentiate to obtain PP. It’s directly comparable across vocabularies because the exponential normalizes for log‑space scaling.

**Edge Cases**  
- *Very small test sets* inflate variance; use large enough data.  
- *Out‑of‑vocabulary (OOV)* tokens can skew PP; typically replaced by an `<unk>` token with a fixed probability.  
- Models that overfit training data may show low training perplexity but high test perplexity.

**Optimize & Communicate**  
Explain that while perplexity is essential, it doesn’t capture downstream task performance (e.g., translation quality). Pair PP with metrics like BLEU or ROUGE for holistic evaluation. Conclude by noting that monitoring perplexity during training helps detect over‑regularization or under‑fitting early. This showcases structured reasoning and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
