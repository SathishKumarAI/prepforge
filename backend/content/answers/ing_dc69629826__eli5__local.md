---
qid: ing_dc69629826__eli5__local
question: 'Explain: Gossip Algorithm — Gossip Protocol\u00a0Explained - High Scalability
  -'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 187
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:10-05:00'
sources: []
---

Imagine a big classroom where every student has a secret note. At the start, only one student knows the whole story. Every minute, each student picks a random classmate and whispers their latest version of the story. The whispered piece may be new or old, but it spreads quickly because each student keeps sharing what they know with others.

In computer networks this is called a **gossip protocol** (or “rumor spreading”). Each node acts like a student: it holds some information, picks another node at random, and sends its data. Over time, the message reaches almost every node, even if the network is huge or constantly changing. The process is simple, requires no central coordinator, and scales well because each node only talks to one neighbor per round—just like a quick whisper in class.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
