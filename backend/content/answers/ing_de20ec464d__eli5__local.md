---
qid: ing_de20ec464d__eli5__local
question: 'Q: How does Flash Attention achieve O(n) memory?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:17-05:00'
sources: []
---

Imagine you’re reading a long book and only want to keep track of the most recent page, not every page you've read. **Flash Attention** works like that: it looks at the current word (or token) and remembers just enough information from the past to decide how important earlier words are, without keeping all previous words in memory.

In typical attention, you’d store a huge table showing every word’s relationship with every other word—this grows with the square of the sentence length. Flash Attention rewrites this process so that each word only needs a small “summary” of what came before. It does this by streaming through the text once and updating a compact representation on the fly, much like passing a baton in a relay race rather than handing out copies of the whole script to every runner.

Because it never builds or keeps the full table, its memory requirement grows linearly (O(n)) with the length of the sequence instead of quadratically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
