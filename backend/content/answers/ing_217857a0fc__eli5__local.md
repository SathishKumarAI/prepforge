---
qid: ing_217857a0fc__eli5__local
question: 'Explain: Cache Key Bugs — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 211
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:44-05:00'
sources: []
---

Think of a CDN like a giant library that holds copies of books (web pages, images).  
When someone asks for a book, the librarian checks the *catalog number*—that’s the **cache key**.  

A **cache key bug** happens when the librarian reads the wrong part of the request to build that catalog number.  
For example, suppose the librarian only looks at the book title but ignores the author. Two different books with the same title but different authors would get the same catalog number, so the library might hand out the wrong copy.  

In CDN terms, if a cache key is built from too few parts of the URL (or headers) it can mix up distinct content, leading to users seeing stale or incorrect pages.  
Fixing the bug means making sure the key includes all necessary pieces—like title **and** author—so each unique request gets its own correct copy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
