---
qid: ing_9d5ba31df3__eli5__local
question: 'Explain: Causal Masking — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 187
total_tokens: 344
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:57-05:00'
sources: []
---

Imagine you’re in a library where every book (a word) can only “talk” to the books that came before it, never peeking ahead. That’s **causal masking**—the rule that each token can see only earlier tokens, not future ones, so the model learns how language flows forward.

Now think of the library’s staff as an **attention mechanism**. For any given book, the staff decides which previous books are most relevant and reads them more closely, assigning a weight (how much attention) to each. Causal masking simply tells the staff they’re not allowed to look at books that come after the current one.

So, causal masking + attention lets the model predict the next word by “listening” only to what’s already happened, while still weighing which past words matter most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
