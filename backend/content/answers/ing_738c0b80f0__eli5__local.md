---
qid: ing_738c0b80f0__eli5__local
question: What is Instagram? — Design Instagram | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 221
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:39:39-05:00'
sources: []
---

**Instagram as a “Photo‑Sharing Library”**

Imagine you’re in a town where everyone owns a personal photo album that anyone can visit, like, and comment on. Each album (user) stores pictures (posts), captions, and tags. When someone takes a new picture, the system saves it to a fast, scalable storage (like a digital shelf). A feed is built by pulling recent photos from friends, sorting them by time or popularity, and showing them in a scrolling list. Likes and comments are tiny notes attached to each photo, stored in a quick‑access database so anyone can see the newest reactions instantly.

In a design interview you’d map this town: **users** (accounts), **posts** (images + metadata), **feed** (algorithmic ranking), **likes/comments** (relationships), and the underlying **storage**, **caching**, and **scaling** layers that keep everything smooth as millions of people visit daily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
