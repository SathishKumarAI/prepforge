---
qid: ing_9479bf4a49__eli5__local
question: 'Explain: Content Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 208
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:33:05-05:00'
sources: []
---

Imagine a library that keeps adding books from every street corner, but some books are exact copies of ones already in the shelves. A **content‑deduplication** system is like a librarian who first checks each new book against the library’s catalog before shelving it.

1. **Crawl** – The crawler fetches pages (books) and stores them temporarily.
2. **Hash** – For every page, the system creates a quick fingerprint (a hash), just as the librarian notes the title and author.
3. **Lookup** – It looks up that fingerprint in a fast index (the catalog). If it’s already there, the new page is marked “duplicate” and discarded; otherwise, it’s added to storage.

The key idea: use tiny fingerprints to avoid storing identical content twice, saving space and time—just as a librarian prevents duplicate books from cluttering the shelves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
