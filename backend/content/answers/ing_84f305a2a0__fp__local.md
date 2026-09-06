---
qid: ing_84f305a2a0__fp__local
question: What are the differences between HashMap and HashTable in Java?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 395
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:49-05:00'
sources: []
---

**From first‑principles:**

A *hash* data structure stores key/value pairs by mapping keys to integer indices via a hash function. The fundamental trade‑off is **concurrency vs. performance**.

| Aspect | `HashMap` | `Hashtable` |
|--------|-----------|-------------|
| **Thread safety** | None (unsynchronized). Each operation runs in O(1) time on a single thread. | Synchronized on every method; each call acquires the object’s monitor, guaranteeing visibility but serializing all accesses. |
| **Null handling** | Allows one `null` key and any number of `null` values. | Rejects both null keys and null values (`NullPointerException`). |
| **Iteration order** | Unpredictable (depends on hash codes). | Same as `HashMap`. |
| **Legacy status** | Part of the *new* collections framework; implements `Map`. | Legacy API, extends `Dictionary`, not part of generics. |

**Why it matters**

`Hashtable`’s design predates the Java memory model; synchronizing every method forces a *global lock*, which serializes all read/write operations even when they target disjoint buckets—this defeats the very point of hashing. In contrast, `HashMap` expects that callers manage synchronization (e.g., via `ConcurrentHashMap`) and therefore omits locks to keep per‑bucket operations independent.

**Non‑obvious insight**

The *null* constraint in `Hashtable` is not a performance choice but an artifact of its early implementation: the legacy API was intended for network protocols where null keys/values could corrupt protocol state. Modern code should almost always use `HashMap` (or `ConcurrentHashMap`) unless you specifically need the historical guarantees of `Hashtable`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
