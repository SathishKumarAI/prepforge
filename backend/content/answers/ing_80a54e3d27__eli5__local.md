---
qid: ing_80a54e3d27__eli5__local
question: 'Explain: Position Encodings — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 238
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:38-05:00'
sources: []
---

Imagine you’re reading a long story where each word’s meaning depends on its position—“first” means the beginning, “last” the end. A language model (LLM) needs a similar sense of *where* each token sits in the sentence, but it can’t just look at the text itself; it has to give every word a numerical clue about its place.

**Position encoding** is that clue: for every token we add a tiny vector that tells the model “you’re at position 3, 7, 12, etc.” Think of it like putting a numbered bookmark on each page of a book so you can always return to the exact spot. The model then mixes this positional signal with the word’s own meaning vector, letting it understand order and distance—just as a reader knows that “the cat” is different from “cat the” because of their positions.

So, position encodings give language models a reliable map of *where* each piece of text sits in the sequence, enabling them to capture grammar, syntax, and context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
