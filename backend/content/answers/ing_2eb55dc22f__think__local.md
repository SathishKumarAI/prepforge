---
qid: ing_2eb55dc22f__think__local
question: 'Explain: Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 513
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:44:58-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- The user wants a concise explanation of *eviction* as it applies to caching, with references to the Google Guava library’s `Cache` implementation and the general Wikipedia entry on caches.
- Assume the reader knows basic cache terminology but not the specifics of Guava’s eviction policy.

**2️⃣ Mental model / framework**

1. **Cache fundamentals** – key/value store, limited size, fast access.
2. **Eviction necessity** – capacity limits → need to drop entries when full or stale.
3. **Guava’s design** – flexible, pluggable `RemovalListener`, multiple eviction strategies.
4. **Wikipedia context** – historical background and common algorithms (LRU, LFU, FIFO).

**3️⃣ Step‑by‑step reasoning**

- Start with why eviction is needed: finite memory → must keep the “most useful” items.
- Explain typical policies: size‑based vs time‑based.
- Detail Guava’s approach:
  - `CacheBuilder` lets you set maximum weight (`maximumSize`, `maximumWeight`) and expire after write/access.
  - Eviction is triggered automatically on put or get when limits are breached; Guava picks the least‑used entries (LRU‑like) by default, but you can supply a custom `Weigher`.
- Mention that eviction fires `RemovalNotification` events so applications can react (logging, cleanup).
- Contrast with Wikipedia’s overview: it covers LRU, LFU, FIFO, and discusses trade‑offs (overhead vs accuracy).

**4️⃣ Common traps to avoid**

- Confusing *eviction* (removal due to constraints) with *expiration* (time‑based removal).  
- Assuming Guava uses strict LRU; it actually approximates LRU for performance.  
- Overlooking that `maximumWeight` requires a custom weigher.

**5️⃣ Sanity‑check & verbalize**

- Re‑read the explanation: does each sentence logically flow?  
- Verify that terms like “least‑used” match Guava’s implementation details.  
- Summarize in one sentence: *Eviction is the automatic removal of cache entries when capacity limits are hit, and Guava implements this via configurable size or time bounds with an LRU‑style algorithm, while Wikipedia provides a broader historical and algorithmic context.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
