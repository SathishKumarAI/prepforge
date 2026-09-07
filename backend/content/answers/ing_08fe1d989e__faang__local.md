---
qid: ing_08fe1d989e__faang__local
question: 'Explain: 1.4 - Use of Bidirectional Context — A Complete Guide to BERT
  with Code | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 355
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:05:20-05:00'
sources: []
---

**Clarify**  
The question asks for a concise walkthrough of *bidirectional context* in BERT—why it matters, how it’s implemented, and what the code looks like. I’ll assume the audience knows basic transformer notation but not BERT internals.

**Approach**  
1. Define bidirectionality vs unidirectional language models.  
2. Explain BERT’s pre‑training tasks (Masked LM + Next Sentence Prediction).  
3. Show a minimal PyTorch snippet that builds a Transformer encoder, masks tokens, and feeds them to the MLM head.  
4. Highlight key hyper‑parameters (num_layers, hidden_dim, num_heads).

**Depth**  
BERT processes *all* positions simultaneously using self‑attention:  
`h = LayerNorm(x + Attention(x))`.  
Masking is done by replacing 15 % of tokens with `[MASK]`, training the model to predict them.  
The next‑sentence task supplies inter‑sentence context, enabling bidirectional sentence understanding.  
Code (≈20 lines) demonstrates tokenization, masking, forward pass, and loss computation.

**Edge Cases**  
- Token limit (512).  
- Long‑tail vocabulary causing OOVs.  
- Failure to mask too many tokens leading to trivial predictions.

**Optimize & Communicate**  
Mention that pre‑training is expensive; fine‑tuning on downstream tasks reuses the same encoder, saving compute. Conclude by stressing BERT’s ability to capture global context—critical for NLU benchmarks—and how the code skeleton can be extended (e.g., adding a classification head).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
