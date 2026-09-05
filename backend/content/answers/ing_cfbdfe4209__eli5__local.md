---
qid: ing_cfbdfe4209__eli5__local
question: 'Explain: Cache Layers — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 253
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:23-05:00'
sources: []
---

**What is caching in machine learning systems?**  
Think of a library that holds every book (the full dataset). Every time someone asks for a page, the librarian must walk all the way to the shelf, open the book, and find the right spot—slow and tiring. A *cache* is like a small, well‑organized desk in front of the librarian where the most requested pages are kept. When a user asks again, the answer comes instantly from this desk instead of retracing the whole journey.

**Why it matters:**  
- **Speed:** Repeated queries hit the cache and return almost instantly.  
- **Load reduction:** The main database (the shelf) is relieved from repeated work.  

**Key terms:**  
- *Cache layer* – a fast, temporary storage placed between users and the heavy backend.  
- *Eviction policy* – rules that decide which cached items to discard when space runs out (e.g., “least recently used”).  

In machine‑learning pipelines, caching keeps the most valuable model predictions or feature calculations near the user, turning a sluggish system into a responsive one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
