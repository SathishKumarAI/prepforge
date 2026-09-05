---
qid: ing_b76fbf7f7e__eli5__local
question: 'Explain: How Pub/Sub Works — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 198
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:07-05:00'
sources: []
---

Imagine a bustling newsroom where reporters (publishers) write breaking‑news stories and hand them to the editor’s desk. The editor (the broker) doesn’t read every story himself; instead, he places each article on a shared bulletin board. Any number of journalists (subscribers) standing nearby can glance at the board whenever they wish and pick up any articles that match their interests—one journalist might only want sports updates, another only tech news.

In Pub/Sub systems, publishers send messages to a central broker without knowing who will read them. Subscribers register their interests (topics) with the broker and receive all future messages for those topics. The broker handles delivery: it stores each message once and forwards copies to every interested subscriber, so publishers and subscribers stay decoupled—just like reporters and journalists separated by the bulletin board.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
