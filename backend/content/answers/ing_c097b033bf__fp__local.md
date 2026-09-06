---
qid: ing_c097b033bf__fp__local
question: 'Explain: Removal Listeners — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 456
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:19-05:00'
sources: []
---

**Why a cache needs to know when it removes an entry**

A cache is essentially a *temporary* map that trades space for speed.  
When an item disappears—because it expired, was evicted by size limits, or was
explicitly invalidated—the cache must decide what to do with the value: should
it be written back somewhere, logged, or simply discarded?  
This decision is a **control‑flow** problem that can’t be handled inside the
cache’s eviction algorithm; otherwise the algorithm would have to know *all*
possible user‑defined side effects.  The clean solution is to decouple the
eviction logic from the action taken after removal.

**Enter RemovalListeners**

A `RemovalListener` is a callback that receives a `RemovalNotification`
containing the key, value, and *cause* of removal (`EXPIRED`, `EVICTED`,
`EXPLICIT`).  The cache merely invokes the listener *after* it has performed
the eviction.  This guarantees:

1. **Consistency** – the cache’s internal state is already updated,
   so the listener sees a stable view.
2. **Separation of concerns** – eviction policy stays pure, while business
   logic (e.g., persisting to disk or updating statistics) lives in the
   listener.

The deeper principle is *observer pattern + causal transparency*.  By exposing
the cause explicitly, Guava turns an opaque “removal” event into a
deterministic signal that can be reasoned about algorithmically.  

**Non‑obvious insight**

Most people treat listeners as optional logging hooks.  In fact, the *cause*
field lets you implement **adaptive eviction policies**: a listener can
record the frequency of `EXPIRED` vs `EVICTED` events and, on the next cache
build, choose a different maximum size or expiration policy based on that
history.  Thus, removal listeners are not just side‑effect hooks—they’re a
data source for *meta‑optimization* of the cache itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
