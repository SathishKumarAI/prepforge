---
qid: ing_0d26b1f96d__star__local
question: You are fine-tuning on a domain full of jargon and someone suggests adding
  new tokens to the tokenizer. What can go wrong, and how do you handle vocabulary
  changes correctly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 415
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:57-05:00'
sources: []
---

**Situation**  
In a medical research lab I was fine‑tuning GPT‑4 on a corpus of radiology reports. The model’s perplexity stayed stubbornly high around domain terms like “pneumothorax” and “CT‑guided biopsy.” A senior data scientist suggested we expand the tokenizer with new subword tokens for these words.

**Task**  
I needed to decide whether adding tokens would genuinely improve downstream performance without destabilizing the model or inflating inference latency, and if so, implement it cleanly across training and serving pipelines.

**Action**  
First, I benchmarked tokenization error rates: the original tokenizer split “pneumothorax” into five pieces (≈20 % of tokens). After adding a custom token, splits dropped to one, but the overall vocabulary grew from 50k to 55k. I ran a small test with `tokenizer.add_tokens(['pneumothorax'])`, re‑initialized embeddings for the new index, and fine‑tuned for two epochs on a validation set. To avoid out‑of‑vocabulary (OOV) issues during inference, I updated both the training and serving tokenizers in sync, added a fallback to byte‑level subwords for any unseen tokens, and monitored GPU memory usage—seeing only a 3 % increase. I also ran a regression test against the original model on 1k reports; BLEU improved from 0.42 to 0.49 while latency stayed under 120 ms per inference.

**Result**  
The domain‑specific tokenization reduced perplexity by 18 % and boosted report‑generation accuracy by 7 %. I learned that adding tokens is safe only when the vocabulary bump is modest, embeddings are re‑initialized properly, and both training and serving code paths stay in sync. The key trade‑off: a tiny memory hit for a measurable quality gain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
