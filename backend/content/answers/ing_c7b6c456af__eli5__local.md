---
qid: ing_c7b6c456af__eli5__local
question: Compare encoder-only, decoder-only, and encoder-decoder architectures. What
  is each used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 252
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:52:06-05:00'
sources: []
---

Think of an AI model as a kitchen that can cook dishes from recipes.

**Encoder‑only** = the prep station. It reads a recipe (input text) and turns it into a short “cheat sheet” (a compressed representation). The cheat sheet is then handed to another system or saved for later. This style powers *BERT*‑style tasks like answering questions about a paragraph or classifying sentiment—just need the summary, not new cooking.

**Decoder‑only** = the cook that keeps adding ingredients one by one. It starts with nothing (or a prompt) and generates a dish step‑by‑step, each new word depending on what it already made. This is how *GPT* works: generating fluent text or completing prompts.

**Encoder‑decoder** = both prep station and cook working together. The encoder reads the recipe, the decoder follows it to produce a finished meal—like translating a sentence from one language to another (*T5*, *BART*).  
In short: encoder‑only for understanding, decoder‑only for generating, encoder‑decoder for converting or producing output conditioned on input.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
