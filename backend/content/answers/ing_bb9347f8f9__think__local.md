---
qid: ing_bb9347f8f9__think__local
question: 'Explain: Infinite TTL — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 465
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:20:48-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**

- *What is “Infinite TTL” referring to?*  
  Assume it means a cache entry that never expires automatically (time‑to‑live = ∞).  
- *Goal of explanation:* show how such a cache behaves in a system‑design context and why it matters.

**2. Mental model / framework**

Use the classic **cache hierarchy + eviction policy** diagram:  
`Cache ←→ Data Store`.  
Add an extra dimension: **TTL (time‑to‑live)**.  
For infinite TTL, the “expiration” edge disappears; we rely solely on other eviction triggers (LRU, size limits, manual invalidation).

**3. Step‑by‑step reasoning**

1. Define a cache entry structure → key, value, metadata.  
2. Explain normal TTL: after X seconds, entry is purged or refreshed.  
3. Replace TTL with ∞ → entry stays until evicted by policy or manually deleted.  
4. Discuss consequences:
   - *Pros:* no stale‑data refresh overhead; simple consistency model.  
   - *Cons:* risk of serving outdated data if source changes; memory bloat.  
5. Show how eviction still works (e.g., LRU, LFU, size quota).  
6. Mention invalidation strategies: publish‑subscribe or version tags to manually expire.

**4. Common traps**

- Assuming infinite TTL means “never evict” – it’s not that; capacity limits still apply.  
- Forgetting manual invalidation can lead to stale reads in read‑through caches.  
- Mixing up *TTL* with *max age* of underlying data source (e.g., DB row timestamp).

**5. Sanity‑check & verbalize**

- Ask: “If the data source updates, will my cache stay fresh?” → No unless I invalidate.  
- Verify that memory usage remains bounded by the chosen eviction policy.  
- Confirm that the design satisfies system requirements: latency < X ms, consistency level Y.

By following these steps you can explain infinite‑TTL caching in a clear, systematic way and highlight its trade‑offs in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
