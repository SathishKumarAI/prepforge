---
qid: ing_b7453da811__eli5__local
question: 'Explain: Constructor Summary — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 274
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:26:51-05:00'
sources: []
---

**Imagine a recipe book that turns any paragraph into a list of ingredients you can cook with.**  
In Lucene, the *Tokenizer* is that recipe book for text. Its **constructor** (the “make‑it‑ready” method) tells it how to read the raw string and break it apart.

- **TokenStream** – the stream of words (“tokens”) produced.
- **Reader** – the source of characters you want to split (e.g., a file, web page).
- **AttributeFactory** – a tiny helper that creates the “attributes” each token carries (like its text, position, or length).

When you create a Tokenizer, you give it a Reader and optionally an AttributeFactory. The constructor stores these so that later, when you call `incrementToken()`, it can read characters, apply rules (like removing punctuation), and hand back clean tokens to Lucene’s indexing engine.

Think of the constructor as setting up your kitchen: you bring in the ingredients (Reader), decide what extra tools you’ll use (AttributeFactory), and then the Tokenizer will start chopping them into bite‑size pieces for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
