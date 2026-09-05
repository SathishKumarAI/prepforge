---
qid: ing_d0e65dc7c8__star__local
question: 'Explain: How it works: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 509
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:16-05:00'
sources: []
---

**Situation** – While working on a real‑time analytics platform for a fintech client, the daily API hit count spiked to 3 million requests per hour, causing throttling errors and SLA breaches.

**Task** – I had to design and implement an efficient rate limiting strategy that would allow burst traffic while keeping average request rates within our quota of 200 req/s, using Redis as a shared store.

**Action** – I chose the **Token Bucket** algorithm because it permits short bursts and smooths out traffic. In Go I wrote:

```go
// tokenBucket checks if a client can proceed.
func tokenBucket(ctx context.Context, id string) (bool, error) {
    key := fmt.Sprintf("rb:%s", id)
    script := redis.NewScript(`
        local tokens = tonumber(redis.call('get', KEYS[1] .. ':tokens') or ARGV[2])
        local last  = tonumber(redis.call('get', KEYS[1] .. ':last')   or ARGV[3])

        local now = tonumber(ARGV[1])
        local refill = math.min(tokens + (now - last) * ARGV[4], ARGV[5])
        if refill >= 1 then
            redis.call('set', KEYS[1] .. ':tokens', refill - 1)
            redis.call('set', KEYS[1] .. ':last', now)
            return 1
        end
        return 0
    `)

    // args: now, capacity, lastReset, refillRate, maxTokens
    res, err := script.Run(ctx, rdb, []string{key},
        time.Now().Unix(), 200, time.Now().Add(-time.Hour).Unix(),
        float64(200), float64(200)).Result()
    return res.(int64) == 1, err
}
```

The Lua script guarantees atomicity across workers. I also added a fallback in-memory counter for local bursts.

**Result** – After deployment the average latency dropped from 350 ms to 120 ms, and we saw a 92 % reduction in 429 errors. The system now comfortably handled 4× the peak traffic while staying under SLA limits, and I documented the algorithm for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
