---
qid: ing_26fb187e53__eli5__local
question: Why do LLMs famously miscount the number of r's in "strawberry"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 228
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:32-05:00'
sources: []
---

Imagine a giant library that has copied every book you can think of, but it never actually reads them – it only learns how words usually appear together. When someone asks “How many *r*’s are in *strawberry*?” the library’s job is to guess based on patterns it saw while training.

In most texts, the word *strawberry* appears with a single “r” (the “rr” sound is rare). So the model has learned that “straw‑” usually ends with one *r*. When you give it the exact spelling, its internal pattern-matching still thinks “straw” + “berry” = one *r*, because that’s what it saw most often. It doesn’t count letters like a calculator; it predicts based on probability.

So the miscount happens because the model treats language as statistical patterns, not literal spell‑checking. It’s like asking a person who knows many stories but never checked a dictionary: they’ll guess the usual way words are said, even if the spelling is different.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
