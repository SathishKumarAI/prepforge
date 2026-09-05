---
qid: ing_c6152d5da1__eli5__local
question: 'Explain: Critical frontend decision: Streaming — ChatGPT System Design
  - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 236
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:58-05:00'
sources: []
---

Imagine your favorite streaming service (Netflix, Spotify) as a giant library that keeps all movies and songs in one massive room. When you click “Play,” the library doesn’t hand you the whole film; it sends a steady stream of small video chunks so you can watch right away while the rest loads behind the scenes.  

In ChatGPT’s design, *streaming* works the same way: instead of waiting for the entire answer to finish computing, the system pushes each word or sentence as soon as it’s ready. The “frontend” (the part that shows text on your screen) decides whether to wait for a full reply or to display words in real time. This choice is critical because it balances speed and resource use—just like streaming lets you enjoy content instantly while the rest downloads quietly.  

**Key terms:**  
- *Streaming* – sending data piece‑by‑piece so users can start using it immediately.  
- *Frontend* – the part of an app that users interact with (the screen, buttons, etc.).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
