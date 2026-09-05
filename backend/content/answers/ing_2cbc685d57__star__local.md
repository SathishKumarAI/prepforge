---
qid: ing_2cbc685d57__star__local
question: 'Explain: Vocabulary Size — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 350
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:28-05:00'
sources: []
---

**Situation** – At my last job I was tasked with fine‑tuning a transformer for a multilingual chatbot that had to handle over 15 languages, but our existing tokenizer only supported English and produced a vocabulary of ~30k tokens. The model’s perplexity on non‑English test sets was 3× higher than on English.

**Task** – Reduce the out‑of‑vocabulary (OOV) rate below 2% while keeping tokenization speed under 5 ms per sentence, so we could deploy the model on a mobile edge device.

**Action** – I switched to SentencePiece’s BPE with a target vocab size of 50k. First, I merged all language corpora and ran unsupervised training with `--model_type=bpe` and `--vocab_size=50000`. To control OOV, I added a fallback sub‑word “▁” marker for unseen characters and fine‑tuned the model on 200k domain‑specific phrases. Then, I benchmarked tokenization latency using PyTorch’s JIT and optimized the tokenizer graph with TorchScript, achieving 4.2 ms per sentence.

**Result** – OOV dropped from 12% to 1.5%, perplexity fell by 28% across all languages, and we shipped the chatbot to production with a 40% reduction in inference memory usage. I learned that careful vocab sizing balances expressiveness against latency, especially when targeting constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
