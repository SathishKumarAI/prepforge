---
qid: ing_a4dbc00f84__faang__local
question: 'Explain: Fixed Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 389
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:30-05:00'
sources: []
---

**Fixed‑Window Rate Limiting – Quick Guide**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* Limit API calls per user/IP to X requests every Y seconds (e.g., 100 req/1 min). *Assumptions to confirm:* clock sync, burst tolerance, persistence across restarts, distributed deployment. |
| **Approach** | Use a sliding counter per key: on each request, read the current window’s timestamp bucket and count; if count < X, allow and increment; otherwise reject. Store `(window_start, count)` in a fast store (Redis hash). |
| **Depth** | 1️⃣ Compute `bucket = floor(now / Y)`. 2️⃣ Increment counter atomically (`INCRBY` or Lua script). 3️⃣ If new bucket, reset to 0 before incrementing. 4️⃣ Return HTTP 429 if count > X. Complexity: O(1) per request; memory ~O(number_of_keys). |
| **Edge Cases** | *Clock skew* → use monotonic clock or sync NTP. *Burst at window boundary* → allows up to X at start of each bucket (not truly smooth). *Distributed nodes* → single Redis cluster ensures consistency. |
| **Optimize & Communicate** | • Use `EXPIRE` on keys to auto‑cleanup. <br>• For higher precision, switch to a sliding window or token bucket. <br>Explain trade‑offs: fixed windows are simple but can cause “burst” spikes; token buckets smooth traffic but need more state. |

*Result:* A fast, stateless‑ish rate limiter that’s easy to reason about and scales horizontally with Redis as the single source of truth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
