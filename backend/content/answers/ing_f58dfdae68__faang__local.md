---
qid: ing_f58dfdae68__faang__local
question: 'Explain: Pros: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 656
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:10:54-05:00'
sources: []
---

**Clarify**  
We’re asked to explain rate‑limiting algorithms—how they throttle requests and why they matter for AI services (e.g., API calls, model inference). Key assumptions: we have stateless clients, a central server or distributed cache, and we need sub‑second latency.  

**Approach**  
1. List the classic algorithms (Token Bucket, Leaky Bucket, Fixed Window, Sliding Log/Window).  
2. For each, give intuition, pseudocode, and complexity.  
3. Highlight trade‑offs: memory vs accuracy, burst tolerance vs fairness.  
4. Show a small Go/Python snippet that implements Token Bucket with Redis for distributed state.

**Depth**  

| Algorithm | Intuition | Code Sketch | Complexity |
|-----------|-----------|-------------|------------|
| **Token Bucket** | Tokens accumulate at rate `R`; requests consume tokens; bursts up to bucket size `B`. | ```go
// redis key: "bucket:{user}"
func allow(r *http.Request) bool {
  now := time.Now()
  val, _ := rdb.Get(ctx, key).Result() // [tokens,last]
  toks, last := parse(val)
  dt := now.Sub(last).Seconds()
  toks = min(B, toks+dt*R)
  if toks < 1 { return false }
  toks--
  rdb.Set(ctx, key, fmt.Sprintf("%f,%s", toks, now), ttl)
  return true
}
``` | O(1) DB ops; memory per client. |
| **Leaky Bucket** | Fixed output rate; requests queued in a FIFO buffer. | Similar to Token Bucket but `toks` never exceeds 1; excess requests are dropped or delayed. |
| **Fixed Window** | Count requests per fixed interval (e.g., minute). | Simple counter + expiry. | O(1) DB ops, but suffers from burst at window edges. |
| **Sliding Log / Sliding Window Counter** | Store timestamps of each request; count those within `window`. | Keep a sorted list or Redis Sorted Set. | O(k) where *k* = requests in window; higher memory. |

**Edge Cases**  
- Clock skew: use monotonic clock or NTP‑synchronized servers.  
- Distributed systems: ensure atomicity (Lua script in Redis).  
- Sudden traffic spikes: token bucket handles bursts, but fixed windows may throttle unfairly.

**Optimize & Communicate**  
*Improvements*: Use a **sliding window counter with probabilistic counting** (e.g., HyperLogLog) to reduce memory. Explain trade‑offs: faster lookup vs small cardinality errors.  
*Narration*: “We first quantify the rate we can afford per user, then use Redis to atomically decrement tokens. If the token count dips below zero we immediately reject—this keeps latency low and prevents overloading downstream inference workers.”  

This concise, structured explanation demonstrates problem‑solving, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
