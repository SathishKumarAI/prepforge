---
qid: ing_a47341135f__eli5__local
question: 'Explain: Summary — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 235
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:58-05:00'
sources: []
---

**Caching in a nutshell**

Think of a library that stores books on a high shelf. Every time someone wants the same book, they have to climb up, grab it, and then climb back down. That’s slow. Instead, the library keeps copies of the most‑borrowed books in a cozy reading nook near the entrance. When someone asks for one of those books, the librarian can hand it over instantly—no climbing required.

In computing, *caching* is that cozy nook: a temporary storage (often memory) where the system keeps recently used or frequently requested data so future requests hit fast, instead of recomputing or fetching from a slower source. In machine‑learning systems, a cache might hold pre‑processed feature vectors, model inference results, or training checkpoints, dramatically speeding up serving and training pipelines. The trade‑off is that the cached copy can become stale; therefore caches usually have policies (time‑to‑live, size limits) to refresh or evict old data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
