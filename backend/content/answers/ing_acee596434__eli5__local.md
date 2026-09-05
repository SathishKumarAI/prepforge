---
qid: ing_acee596434__eli5__local
question: 'Q: Why does GPT-4 struggle with simple character counting?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 317
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:33-05:00'
sources: []
---

**Why GPT‑4 sometimes miscounts characters**

Imagine GPT‑4 as a very fast reader who loves stories but isn’t a calculator.  
When you ask it to count letters, it first “parses” the text like a human would: it looks for words, punctuation, spaces, and even invisible formatting (tabs, newlines). It then builds an internal representation of that whole sentence in its mind, not as a simple list of symbols but as a web of meaning.  
Because GPT was trained on predicting the *next word* in a sentence, not on keeping a running tally, it has no built‑in “counter” memory. The model’s attention mechanism can focus on parts of the input, but each time it processes a chunk it discards the exact count it had before. So when you ask for an exact number of characters, GPT must reconstruct the whole text again and is prone to small off‑by‑one errors—just like a human who counts words in a paragraph twice and still gets slightly wrong.

**Key terms**

- **Attention mechanism**: how GPT decides which parts of the input are most relevant when forming an answer.  
- **Token**: the smallest unit GPT sees (often a word or part of a word).  

In short, GPT excels at understanding language flow, not at keeping precise tallies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
