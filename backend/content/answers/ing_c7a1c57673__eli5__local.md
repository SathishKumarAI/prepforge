---
qid: ing_c7a1c57673__eli5__local
question: 'Explain: Solving the “thundering herd” problem — Under the hood: Broadcasting
  live video to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 195
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:52:00-05:00'
sources: []
---

Imagine a giant, crowded town square where everyone wants to watch a live concert. If each person tries to grab the music from their own tiny speaker, the air buzzes and nobody hears clearly—this is the “thundering herd” problem. Meta’s engineers solved it by setting up one loudspeaker (a powerful server) that broadcasts the video signal once, then every nearby earphone (client device) simply listens in. They use a special “multicast” trick: instead of sending millions of separate copies, the server sends one stream to a group and the network splits it only where needed. Think of it like a single giant megaphone that reaches everyone without overloading the airwaves. The result is smooth video for millions, just as a well‑planned concert keeps the crowd calm and the music clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
