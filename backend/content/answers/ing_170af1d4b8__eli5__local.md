---
qid: ing_170af1d4b8__eli5__local
question: 'Explain: Cryptographic Hashes — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 183
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:13-05:00'
sources: []
---

Imagine you’re sending a secret letter to a friend, but you want both of you to know the letter hasn’t been tampered with in transit.  
A **cryptographic hash** is like a tiny, unique fingerprint of that letter: you run the whole message through a special machine (the hash function) and it spits out a short string—say “7f3a9c.” The rules are strict: even one changed word will produce a completely different fingerprint.  

A **checksum** is the same idea but usually used for quick checks, like making sure a downloaded file isn’t corrupted. Both give you a compact summary that lets you verify integrity without reading the whole thing again. In system design, these fingerprints protect data and help detect tampering or errors efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
