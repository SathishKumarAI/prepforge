---
qid: ing_9cabe1e76f__eli5__local
question: 'Explain: Encoder-Only (BERT-style) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 217
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:46-05:00'
sources: []
---

Think of an encoder‑only model like a **book scanner that reads the whole page at once** and then points out the most important parts to you.  
When you feed text into it, every word is turned into a numeric “token.” The model passes all tokens through a stack of *transformer layers*. Each layer lets words talk to one another, so the representation of each word becomes richer and aware of its neighbors—just as reading a sentence gives context to each word.  
After the final layer, you have a single hidden vector for every token that already knows everything about the text around it. The model can then answer questions or continue writing by looking up these vectors, without ever generating new tokens during the encoding step.  

**Unavoidable term:** *Transformer* – a neural network component that lets each word see and influence all others in the same sentence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
