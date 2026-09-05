---
qid: ing_56e5b79cca__eli5__local
question: 'Explain: Contrastive Learning — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 220
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:54:24-05:00'
sources: []
---

Imagine a huge library where every book is turned into a tiny “fingerprint” that tells you what it’s about. In contrastive learning we teach the computer how to create those fingerprints—called **embeddings**—so that similar books end up close together and dissimilar ones far apart.

The process works like this: pick two related books (positive pair) and one unrelated book (negative). The computer tries to pull the fingerprints of the related pair closer in a virtual space, while pushing the unrelated one away. Think of it as arranging friends at a party: you want people who chat together to sit near each other, and those who don’t get pushed apart.

The resulting “vector space” is just a map where every book’s fingerprint is a point. Distance on this map reflects similarity—so when you ask for books like a mystery novel, the system can quickly pull all close points from the map.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
