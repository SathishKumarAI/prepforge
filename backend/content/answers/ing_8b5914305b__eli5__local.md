---
qid: ing_8b5914305b__eli5__local
question: What is weight tying, and why do some models tie the embedding and output
  matrices while others do not?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 210
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:23-05:00'
sources: []
---

Think of a library where each book has a unique call number (the *embedding*). When someone asks for a word, the system first looks up its call number and then finds the right shelf to return it (*output matrix*).  

**Weight tying** is like deciding that the same map will be used both to find a book’s call number and to locate its shelf. Instead of keeping two separate maps (embedding and output), the model uses one shared table for both tasks. This saves memory, keeps the representation consistent, and can improve learning because the system learns from the same information in two ways.

Some models tie these matrices when they are small enough that sharing doesn’t hurt accuracy—common in language models like GPT‑2 or BERT. Others keep them separate (especially large, multilingual or multimodal models) to give each part more flexibility to specialize. The choice balances efficiency against the need for distinct transformations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
