---
qid: ing_54b440e706__faang__local
question: 'Explain: Perplexity AI ML/AI Questions — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 596
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:00-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking what *perplexity* means in the context of NLP models and why it’s a common interview question for AI companies. I’ll assume you want: (a) a definition, (b) how it’s computed, (c) its relevance to model evaluation, and (d) typical follow‑up questions an interviewer might ask.

**2️⃣ Approach**  
- Define perplexity formally.  
- Show the math/algorithm for computing it from log‑likelihoods.  
- Explain why lower perplexity signals a better language model.  
- Discuss limitations (dataset bias, tokenization, etc.).  
- End with interview follow‑ups that probe deeper understanding.

**3️⃣ Depth**  

> **Perplexity** measures how well a probability model predicts a sample. For a test set \(W = w_1…w_N\) and model \(P\),  
> \[
> PP(W)=2^{-\frac{1}{N}\sum_{i=1}^{N}\log_2 P(w_i|h_i)} 
> \]  
> where \(h_i\) is the context. Equivalently, \(PP = e^{-L/N}\) with natural logs.  
> *Interpretation:* If a model’s predictions are “un‑surprised” by the data, perplexity ≈ 1; higher values mean the model assigns low probability to the observed tokens.  
> **Why it matters:** It’s an unbiased estimate of the expected branching factor—how many choices the model thinks are plausible at each step. Lower perplexity correlates with better fluency and downstream task performance (e.g., translation, summarization).  

**4️⃣ Edge Cases**  
- *Tokenization:* sub‑word units change N, affecting PP; ensure consistent tokenization across training/validation.  
- *Unseen tokens:* models may assign zero probability → infinite perplexity; smoothing or backoff is required.  
- *Dataset shift:* a model trained on news can have high PP on poetry but still be “good” for its domain.

**5️⃣ Optimize & Communicate**  
I’d highlight that while perplexity is useful, it’s not the sole metric—BLEU, ROUGE, or human evaluation often complement it. In an interview I’d say: “Perplexity gives a quick sanity check on probability estimates, but we must pair it with task‑specific metrics and qualitative analysis to avoid overfitting.”  

**Follow‑up Questions You Might Hear:**  
- How does perplexity change when moving from word‑level to byte‑pair encoding?  
- Can you explain why a lower perplexity doesn’t always translate to better human judgment?  
- What are alternative metrics for evaluating language models?

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
