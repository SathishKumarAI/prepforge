---
qid: ing_40f6c3438f__fp__local
question: 'Explain: Padding side — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 354
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:42-05:00'
sources: []
---

In a transformer‑based language model, each token is mapped to an embedding vector and processed in parallel across the whole sequence.  
When we generate text, the decoder receives a *past* context (the tokens already produced) plus a *future* placeholder that will be filled step by step. The future side must be padded because, during training, the model learns to predict the next token given all previous ones; at inference time we only know the past.

**Why “right” padding?**  
The decoder’s self‑attention mask is causal: a position can attend only to earlier positions. If we pad on the *left*, the padded tokens would appear before real tokens, breaking causality and allowing the model to look ahead into the future. Padding on the right keeps all padded positions after the real sequence; they are masked out by the causal mask so that every token still attends only to genuine past context.

**Deep principle – conditional probability factorisation**  
The objective is to maximise \(P(x_1,\dots,x_T)=\prod_{t=1}^T P(x_t|x_<t)\). Padding on the right preserves this factorisation because each step’s input contains exactly the tokens it conditions on. Any other padding scheme would corrupt the conditioning set.

**Non‑obvious insight**  
When batching multiple sequences of different lengths, we often pad *all* sequences to the same length. The decoder can still process them in a single forward pass because the attention mask automatically ignores padded positions. Thus, right padding is not just a convention—it enables efficient parallel inference while respecting the probabilistic model’s structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
