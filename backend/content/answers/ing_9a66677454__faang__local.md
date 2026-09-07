---
qid: ing_9a66677454__faang__local
question: 'Explain: Testing Timed Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 474
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:33-05:00'
sources: []
---

**Clarify**  
The question asks how Guava’s `CacheBuilder` tests “timed eviction” – i.e., that entries expire after a configured duration. We need to explain the test strategy, not just the API. Clarifying assumptions: we’re testing *expiration* (not size‑based removal), using JUnit + Guava’s `TestTicker`, and focusing on correctness under concurrent access.

**Approach**  
1. **Inject a controllable clock** (`Ticker`) so time can be advanced deterministically.  
2. **Build a cache** with `expireAfterWrite(10, SECONDS)` (or read).  
3. **Populate** the cache, advance the ticker past the threshold, and assert eviction.  
4. **Repeat for read‑based expiry**, mixed write/read patterns, and concurrent threads to surface race conditions.

**Depth**  
```java
Ticker ticker = new FakeTicker();
Cache<String,Integer> c = CacheBuilder.newBuilder()
        .expireAfterWrite(10, TimeUnit.SECONDS)
        .ticker(ticker)
        .build();

c.put("a",1);
assertEquals(1,c.getIfPresent("a"));      // present

((FakeTicker)ticker).advance(11,TimeUnit.SECONDS);
assertNull(c.getIfPresent("a"));          // evicted
```
*Complexity*: O(1) per lookup; eviction runs lazily on access or via background thread.  
*Trade‑offs*: Using a fake ticker gives instant determinism but omits real‑time nuances like clock skew.

**Edge Cases**  
- *Zero or negative durations* → should throw `IllegalArgumentException`.  
- *Very large durations* → test overflow handling.  
- *Concurrent reads/writes during expiry* → ensure no stale values leak.

**Optimize & Communicate**  
Explain that Guava uses a *time‑based priority queue* internally; the test verifies that this queue is updated correctly when the ticker advances. Emphasize that the fake ticker isolates time, giving reproducible failures. Conclude by noting that similar patterns apply to `expireAfterAccess` and that extending the tests to cover mixed policies would provide full coverage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
