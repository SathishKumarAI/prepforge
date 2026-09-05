---
qid: ing_351038c3ed__eli5__local
question: What is a token budget and how do you enforce it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 193
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:59:47-05:00'
sources: []
---

Imagine your AI chat like a grocery shopping trip with a set amount of money in your wallet—this is the **token budget**.  
A *token* is just a piece of text the model reads or writes, roughly a word or part of a word (for example, “un” and “breakable” are two tokens). Every time you send a question or receive an answer, the model spends tokens from your wallet.  

The budget limits how many tokens can be used in one interaction so that the service stays fair and affordable. To enforce it, the system counts the tokens as they flow: if a response would push the total over the allowed amount, the AI stops early or truncates the reply. This way you never exceed your pre‑set “budget” and keep the conversation within the agreed limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
