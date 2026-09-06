---
qid: ing_a633175d83__fp__local
question: 'Explain: Uh oh! — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 520
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:59:14-05:00'
sources: []
---

### Why Guava’s Cache Exists

When an application repeatedly recomputes a value—say a database lookup or a cryptographic hash—it pays the price of CPU time and I/O for each hit.  
A **cache** stores the *result* of that computation keyed by its inputs, so subsequent requests can be answered instantly.  
The fundamental problem Guava solves is: *How do we trade space for time while keeping the cache consistent, thread‑safe, and memory‑efficient?*

### The Design Principles

| Principle | How Guava Implements It |
|-----------|------------------------|
| **Boundedness (Optimization)** | Uses a *maximum size* or *weight* limit; evicts entries via LRU (least‑recently used) when exceeded. |
| **Thread safety (Concurrency)** | All public methods are lock‑free where possible; eviction and access run concurrently without blocking readers. |
| **Memory efficiency (Probabilistic & Geometry)** | Supports **weak** or **soft** references, letting the garbage collector reclaim memory under pressure—effectively a *probabilistic* cache that shrinks in high‑memory demand scenarios. |
| **Ease of use (API design)** | `CacheBuilder` follows a fluent interface; no manual synchronization required. |

### The Core Algorithm

1. **Hash Table + Linked List**: Each bucket holds a linked list of entries; each entry keeps its *access* timestamp.
2. **LRU Eviction**: On insertion, the new node is appended to the head; on access it’s moved to the head. When size exceeds the limit, remove from tail (least recently used).
3. **Reference Handling**: Weak/soft keys or values are stored in `WeakReference`/`SoftReference`; a `ReferenceQueue` notifies eviction when GC frees them.

### Non‑Obvious Insight

Many think caches are *just* “store and retrieve.”  
Guava’s cache is fundamentally a **self‑tuning memory allocator**: by exposing weight functions, it lets you trade off between *size* (bytes) and *cost* (time). For example, caching parsed JSON objects can be weighted by their serialized size; the cache will automatically keep the most space‑efficient set of entries. This turns a simple key/value store into an *adaptive resource manager*, something most developers overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
