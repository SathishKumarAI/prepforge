---
qid: ing_946ea3e414__eli5__local
question: What is Spotify? — Design Spotify | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 227
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:33:05-05:00'
sources: []
---

**Spotify in a nutshell**

Think of Spotify as a giant library that lets you walk into any “room” (a playlist) and instantly hear the exact song you want, even if it’s on a different shelf in another city. The system keeps two things running smoothly:

* **Catalog service** – the big index that knows every song, its length, where it lives, and who owns it.
* **Streaming engine** – the delivery line that pulls the file from wherever it’s stored, cuts it into small pieces (chunks), and streams those chunks to your phone in real time.

When you press play, a tiny request goes to the catalog; the catalog replies with the location. The streaming engine then grabs the song, slices it into bite‑sized packets, and sends them across the network so they’re ready on your device before you finish the first beat. This separation lets Spotify scale to millions of users while keeping music available instantly anywhere in the world.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
