---
qid: ing_be3ab71085__eli5__local
question: 'Explain: Character vs Subword vs Word — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 236
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:37-05:00'
sources: []
---

Imagine you’re chopping a giant pizza into pieces to share.

* **Word tokens** are like cutting the whole slice of pepperoni as one piece. Every word is a separate bite, but if a new word appears (say “quark”), it’s an entirely new slice that no one has seen before.

* **Subword tokens** are like slicing the pizza into smaller, reusable chunks—cheese, tomato, pepperoni bits. Common pieces (like “pep‑”) can combine to form many words (“pepper”, “peptide”). If a rare word shows up, you still have familiar pieces to build it from.

* **Character tokens** cut even finer: each letter is its own bite. This gives the most flexibility—any new word can be made by stringing letters together—but the pizza becomes very small and harder to eat quickly.

So, characters give maximum detail but many tiny pieces; words are larger chunks that miss unseen terms; subwords sit in between, using reusable bits to cover almost everything efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
