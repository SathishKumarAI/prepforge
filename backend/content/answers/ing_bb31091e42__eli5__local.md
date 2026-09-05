---
qid: ing_bb31091e42__eli5__local
question: 'Explain: Core APIs — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 276
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:33:54-05:00'
sources: []
---

Imagine building a giant, bustling town where every citizen (user) can send letters (messages) instantly and keep them safe even if the post office (servers) closes for a night. In this town, **core APIs** are the mail routes that let people write, read, and deliver those letters.

1. **Send Message API** – like filling out a postcard: it takes your text, attaches your name, and hands it to the delivery system.
2. **Receive Message API** – like opening a mailbox: it pulls any new postcards for you, sorted by sender and time.
3. **Read Receipt API** – like marking a letter “opened”: when you open a postcard, the town records that fact so the sender knows.
4. **Group Chat API** – like a group of friends sharing one big envelope: it routes each letter to every member without duplicating effort.

Each API is a small, well‑named function (e.g., `sendMessage(userId, text)`) that hides the heavy lifting—routing, storing, and ensuring privacy. Just as reliable postal routes make a town run smoothly, these APIs keep WhatsApp’s messages fast, secure, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
