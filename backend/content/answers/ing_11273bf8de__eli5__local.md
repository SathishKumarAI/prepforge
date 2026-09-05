---
qid: ing_11273bf8de__eli5__local
question: Explain self-attention. What's its computational complexity, and what are
  your options when contexts get long?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 267
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:58-05:00'
sources: []
---

Imagine you’re at a party where everyone talks to each other, but the chatter is very short‑lived: every voice is heard only for a moment before the next person speaks. In a transformer model, **self‑attention** is that instant, all‑at‑once conversation. Each word (or token) in a sentence looks at every other word and decides how much “talk” to give it, producing a weighted blend of their meanings. The cost of this dance grows with the square of the number of words—if you have *n* tokens, you do roughly *n²* pairwise comparisons.

When parties get huge (long contexts), we can:  
1. **Sparse or local attention** – only let each word talk to its neighbors or a few distant anchors, cutting the work down.  
2. **Chunking** – split the text into manageable pieces and stitch results together.  
3. **Memory‑efficient tricks** – compress or reuse past states so we don’t recompute everything from scratch.

These techniques keep the party lively without drowning in conversation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
