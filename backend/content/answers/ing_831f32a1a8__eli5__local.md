---
qid: ing_831f32a1a8__eli5__local
question: 'Explain: Choose the Right Granularity — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 206
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:33-05:00'
sources: []
---

Imagine you’re building a giant Lego city. Each block is a tiny piece of data, and the whole city is your database. When you want to know if the city has changed, you could look at every single block (very detailed), or just check the overall shape of the skyline (very coarse). “Granularity” is how big each block you inspect is.

A checksum is like a quick fingerprint for a set of blocks. If you take a small group of Lego pieces and compute their fingerprint, you can later compare fingerprints to see if that group changed—without re‑examining every piece inside it. Choosing the right granularity means deciding whether your fingerprint should cover a single block, a row of blocks, or an entire district. Too fine and you’re doing too much work; too coarse and you might miss subtle changes. Pick the size that balances speed with accuracy for your system’s needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
