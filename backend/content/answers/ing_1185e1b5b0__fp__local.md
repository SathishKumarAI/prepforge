---
qid: ing_1185e1b5b0__fp__local
question: 'Explain: Difference b/w get() & load() — Java/Hibernate.md at main \u00b7
  Anshul619/Java \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 413
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:43:06-05:00'
sources: []
---

### Why `get()` vs. `load()` matter

When a session asks for an entity by its primary key, it faces a **trade‑off** between *immediate resolution* and *lazy indirection*.  
`get()` tells Hibernate: *fetch the row now, or return null if it isn’t there.*  
`load()` says: *create a proxy that will hit the database only when you touch a non‑identifier property.*

This reflects two underlying principles:

| Principle | `get()` | `load()` |
|-----------|---------|----------|
| **Eager vs. Lazy** | Eagerly materialises the entity (or returns null). | Lazily resolves – proxy may remain uninitialized until needed. |
| **Error handling** | Throws `ObjectNotFoundException` only if you later access a missing row? No—returns null immediately. | If the key is absent, accessing any property triggers an `ObjectNotFoundException`. |
| **Caching** | Bypasses first‑level cache to ensure you see the current state. | Uses the cache; can return a cached proxy without DB roundtrip. |

#### Non‑obvious insight  
`load()` can *return a fully initialised object* even if the row doesn’t exist—only when you touch it does Hibernate realise the absence and throw an exception. Thus, using `load()` inside a transaction that later updates the same key may lead to a **stale proxy**: the session thinks the entity exists, but the DB has deleted it. This subtle race condition is why many developers default to `get()`.  

In practice, choose **`get()` for safety and immediate data**, and **`load()` when you’re sure the row exists and want to defer I/O** (e.g., in read‑heavy reporting).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
