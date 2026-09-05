---
qid: ing_c1aa5dee03__eli5__local
question: 'Explain: What to Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 249
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:09-05:00'
sources: []
---

**What to cache – why it matters**

Think of a library that’s always busy. Every time someone asks for a book, the librarian has to walk all the way to the back shelf, pull it out, and bring it back—slow and tiring. Caching is like having a small desk near the entrance where the most‑requested books are kept. When someone comes in, the librarian can hand them the book right away instead of fetching it from deep inside.

In computing, *caching* means storing recently used data or results in a fast, nearby memory (like RAM) so that future requests for the same item are answered instantly. In machine‑learning systems you often cache:

- **Model weights** after training so they’re ready to serve predictions.
- **Pre‑computed feature vectors** for users or items so each request doesn’t recompute them.
- **Inference results** for common inputs, especially when the model is heavy.

By keeping these “hot” pieces close at hand, you reduce latency, cut down on expensive calculations, and free up resources for new work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
