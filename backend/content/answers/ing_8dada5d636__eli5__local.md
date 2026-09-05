---
qid: ing_8dada5d636__eli5__local
question: 'Explain: Stale Content — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 215
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:07-05:00'
sources: []
---

Imagine you’re at a library that has a copy of every book on the shelves, but there’s also a tiny “mobile shelf” that travels to nearby cafés so people can grab a book without waiting for the main building to open. The mobile shelf holds copies of books that were last checked out a while ago—so they might be a few pages behind the newest edition. If someone asks for the very latest chapter, the café shelf will still show an older version; only when the librarian updates it does everyone get the fresh copy.

In CDN terms, “stale content” is like that mobile shelf holding an old copy of a web page or image. The CDN keeps copies (caches) near users to speed up delivery, but if the original file changes on the origin server, the cached copy can lag behind until it’s refreshed. This delay means visitors might see outdated information—hence “stale content.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
