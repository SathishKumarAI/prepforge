---
qid: ing_9a66677454__think__local
question: 'Explain: Testing Timed Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 477
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:17:31-05:00'
sources: []
---

### 1. Clarify the question  
- **What is “Timed Eviction”?**  
  A cache policy that removes entries after a fixed time interval, regardless of usage.  
- **Why “Testing”?**  
  We need to verify that the eviction happens at the right times and under concurrent access.

### 2. Mental model / framework  
- **Cache API concepts**: `put`, `get`, `evict`, `size`.  
- **Time‑based vs usage‑based evictions**: separate concerns.  
- **Testing strategies**: unit tests (deterministic) + integration tests (real timing).

### 3. Step‑by‑step reasoning  
1. **Identify the library** – Guava’s `CacheBuilder` with `.expireAfterWrite(duration)` or `.expireAfterAccess(duration)`.  
2. **Set up a deterministic clock** – use `FakeTicker` to control time in tests.  
3. **Create cache instance** with the fake ticker and desired expiry.  
4. **Insert entries** and immediately assert they exist (`size() == 1`).  
5. **Advance ticker** just below the threshold → still present.  
6. **Advance beyond threshold** → entry should be evicted; `size()` becomes 0 or `getIfPresent` returns null.  
7. **Concurrent scenario** – spawn threads performing `put/get`, advance ticker, verify eviction still occurs.  

### 4. Common traps to avoid  
- **Relying on real time** → flaky tests due to scheduling delays.  
- **Mixing write‑ and access‑based expiries** – they behave differently.  
- **Assuming size() is always accurate** – expired entries may linger until next access or a maintenance task runs.

### 5. Sanity‑check & communicate  
- **Run the test suite** locally; ensure no false positives/negatives.  
- **Explain to peers**: “We use Guava’s `FakeTicker` so tests are deterministic, and we verify eviction by advancing time past the expiry threshold while checking cache state.”  

This approach guarantees that timed eviction works correctly across single‑threaded and multi‑threaded contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
