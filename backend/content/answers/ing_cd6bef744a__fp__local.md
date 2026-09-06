---
qid: ing_cd6bef744a__fp__local
question: 'Explain: IndexedDB vs LocalStorage API — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 440
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:20-05:00'
sources: []
---

### Why the browser needs two separate storage APIs

The fundamental problem is **persistent state**: an app must keep data across page reloads without a server round‑trip.  
Two constraints shape the solution:

1. **Simplicity vs capacity** – Browsers expose *LocalStorage* as a key/value store for quick, synchronous access (≈5 MB).  
2. **Complexity vs flexibility** – For larger, relational or binary blobs, they provide *IndexedDB*, an asynchronous, transactional database that supports indexes and structured queries.

Both APIs solve the same persistence problem but differ in *optimization*:

| Feature | LocalStorage | IndexedDB |
|---------|--------------|-----------|
| Access mode | synchronous (blocks UI) | async (promise/transaction) |
| Data model | string key/value | object store with optional indexes |
| Size limit | ~5 MB per origin | 50 % of free disk space (≈2–3 GB on most browsers) |
| Querying | `getItem(key)` only | range queries, compound indexes |
| Transactions | none | ACID‑like transactions |

### A non‑obvious insight

**IndexedDB’s “eventual consistency” is not a bug but a design choice for the web’s asynchronous nature.**  
Because UI and network threads run concurrently, IndexedDB commits are queued in a *transaction log*. This allows the browser to keep the main thread responsive while large writes or queries happen in the background. If you rely on immediate consistency (e.g., `oncomplete` callbacks), you must explicitly listen for the transaction’s `complete` event; otherwise, reads may return stale data. Many developers overlook this subtlety and experience “ghost” values after a write.

In short: use **LocalStorage** when you need tiny, quick, string‑only state; switch to **IndexedDB** for anything that requires structure, large payloads, or transactional guarantees—just remember its asynchronous commit model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
