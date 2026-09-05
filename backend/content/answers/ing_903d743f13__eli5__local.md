---
qid: ing_903d743f13__eli5__local
question: 'Explain: Example: URL Deduplication — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 231
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:25:26-05:00'
sources: []
---

Imagine you’re at a huge library that keeps adding new books every day. Every time someone wants to borrow a book, the librarian needs to know quickly whether it’s already in the collection or not. Checking every shelf would take forever, so she uses a clever trick: a “fingerprint” for each title.

A **Bloom filter** is like a set of tiny magnetic strips that can remember many fingerprints at once but never say “no” when something *is* present (it may give a false positive). When you add a book’s title, the librarian writes its fingerprint on several strips. Later, to check if a URL has already been seen, she reads those same strips; if all are marked, the URL is probably duplicate—if even one strip is clear, it’s definitely new.

This fast, memory‑light method lets systems sift through millions of URLs in seconds, trading a tiny chance of false alarms for huge speed and space savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
