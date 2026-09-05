---
qid: ing_be3ab71085__star__local
question: 'Explain: Character vs Subword vs Word — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 395
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:30-05:00'
sources: []
---

**Situation:**  
While developing a named‑entity recognition system for a multilingual customer support chatbot, the baseline word‑level tokenizer produced a huge vocabulary (≈120k tokens) and struggled with rare product names, leading to an F1 of 0.72.

**Task:**  
I needed a tokenization strategy that reduced out‑of‑vocabulary rates, kept model size manageable, and improved entity extraction accuracy across English, Spanish, and Arabic.

**Action:**  
I set up three experiments:  
- **Character tokenizer** (token = single Unicode character) to capture morphology but expected high sequence length.  
- **Word tokenizer** using spaCy’s multilingual models for a straightforward baseline.  
- **Subword tokenizer** with SentencePiece BPE, learning 8k merge rules and a shared vocab across languages.

For each, I trained a BiLSTM‑CRF model (same hyperparameters) on the same annotated dataset, logged validation loss, perplexity, and F1 scores. The subword approach reduced the effective vocabulary to ~9k tokens, lowered perplexity by 12%, and increased sequence length only by ~30% compared to characters.

**Result:**  
The subword tokenizer lifted the NER F1 from 0.72 to **0.78**, cut GPU memory usage by 35 %, and improved inference speed by 20%. I learned that subword tokenization balances semantic granularity with computational efficiency, making it ideal for multilingual NLP pipelines where rare words are frequent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
