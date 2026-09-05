---
qid: ing_91b8183cc5__eli5__local
question: 'Explain: F8: Adapter signing key rotation breaks legacy clients'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 220
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:28:06-05:00'
sources: []
---

Imagine a library that issues special access cards to its patrons. Each card has a unique magnetic stripe (the “adapter signing key”) that lets the library’s computer system verify who you are when you open a book. The library decides to change the stripe pattern every few months to keep security tight – this is called **key rotation**.

Older patrons still have their old cards, and their computers (legacy clients) only know how to read the old stripe patterns. When the library updates its system to expect the new pattern, those old cards no longer work: the computer can’t verify the card’s identity, so it refuses access. In AI terms, a legacy client that trusts an old signing key can’t validate data signed with the new key, leading to failures or security warnings.

So, rotating the adapter signing key is like changing the magnetic stripe on library cards; if your system isn’t updated, you’ll get locked out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
