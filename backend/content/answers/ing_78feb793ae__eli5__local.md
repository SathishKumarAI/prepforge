---
qid: ing_78feb793ae__eli5__local
question: How would you detect that a parser silently corrupted documents, at scale,
  without reading every page?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 163
total_tokens: 329
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:28-05:00'
sources: []
---

Imagine your files are like a huge library of books. A silent corruption is when someone sneaks in and changes a few letters, but the book still looks fine at first glance. Instead of opening every page, you use a *checksum*—think of it as a unique fingerprint for each book. Before anyone reads a book, you quickly scan its fingerprint. Later, when you read it again, you re‑scan and compare fingerprints. If they differ, the book has been altered somewhere in between. For millions of books, this is like having a quick barcode scanner that tells you if something went wrong without flipping through every page. That’s how you detect silent corruption at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
