---
qid: ing_9a66677454__star__local
question: 'Explain: Testing Timed Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 347
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:16-05:00'
sources: []
---

**Situation**  
During a quarterly performance review for our recommendation engine, the analytics team noticed that cache hit ratios dropped from 92% to 78% over the last month. Our application used Guava’s `CacheBuilder` with a 5‑minute time‑to‑live (TTL) policy, but we had no automated tests confirming eviction behaved as expected.

**Task**  
I needed to design and implement a reliable unit test that verifies timed eviction works correctly under realistic load, without relying on real wall‑clock delays that would slow down CI.

**Action**  
I leveraged Guava’s `Ticker` abstraction: created a custom `FakeTicker` that I could advance programmatically. Built a cache with `CacheBuilder.newBuilder().expireAfterWrite(5, TimeUnit.MINUTES).ticker(fakeTicker)`. Inserted 10 entries, advanced the ticker by 4 minutes—confirmed all were present; then advanced an additional 2 minutes (total 6), and asserted that all keys had been evicted. I also added a concurrency test using `ExecutorService` to simulate 100 threads performing puts/gets while advancing the ticker in a separate thread, ensuring no race conditions or stale entries persisted.

**Result**  
The tests run under 50 ms in CI, giving us confidence that TTL eviction behaves as documented. Post‑deployment monitoring showed cache hit ratios stabilized at ~90%, reducing database load by ~30%. I learned that injecting `Ticker` for time‑dependent logic dramatically speeds up testing and uncovers subtle concurrency bugs early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
