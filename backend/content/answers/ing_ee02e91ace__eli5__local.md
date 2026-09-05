---
qid: ing_ee02e91ace__eli5__local
question: 'Explain: Cuckoo Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 283
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:04-05:00'
sources: []
---

Think of a library that keeps track of books it has in its collection, but the shelves are tiny and only hold labels, not full titles.

**Bloom Filter** is like a dusty index card: you write down a few scribbles (hashes) for each book on the card. When someone asks if a book exists, you look at those scribbles. If all match, you say “yes”; if any don’t, you’re sure it’s not there. It can never say “no” incorrectly, but sometimes it says “yes” when the book isn’t actually in the library (a false positive).

**Cuckoo Filter** is a smarter card that uses *small lockers* (buckets) to store fingerprints of books. Each fingerprint fits in one locker or another (like two possible spots). When you add a new book, if both lockers are full, you “kick out” an existing fingerprint and move it to its alternate spot—just like a cuckoo bird ejects other eggs from a nest. This keeps the card lean and lets you also remove books later.

So, the Bloom Filter is quick but can mislead; the Cuckoo Filter trades a tiny bit of extra work for fewer false positives and the ability to delete entries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
