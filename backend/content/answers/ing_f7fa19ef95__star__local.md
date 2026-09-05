---
qid: ing_f7fa19ef95__star__local
question: 'Explain: Leaky Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:46-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we had an API that served real‑time market data to thousands of traders. A recent surge in traffic caused our downstream database to throttle, and the latency spikes began hitting SLAs.

**Task**  
I needed to implement a rate limiter that would smooth out bursts while still honoring the 100 requests/second quota per user, without adding significant overhead or complexity.

**Action**  
I chose the leaky bucket algorithm because it guarantees a steady output rate. I wrote a lightweight Go package that maintained an in‑memory bucket for each API key: a counter and a timestamp of the last leak. On every request I calculated how many “drops” should have leaked since the last call, subtracted that from the counter (clamping at zero), then added the new request. If the counter exceeded the capacity (100 req/sec × 1 s), the request was rejected with a 429 status. The bucket size was set to 200 requests to allow a short burst. I also instrumented Prometheus metrics (`leaky_bucket_drop_rate`, `leaky_bucket_rejections`) and added a fallback that routed overflow traffic to a delayed queue.

**Result**  
After deployment, request latency dropped from an average of 350 ms to 90 ms under peak load, and the 429 error rate fell below 0.1 %. The system now cleanly throttles bursts while keeping the overall throughput within SLA limits, and I gained a deeper understanding of how to balance simplicity with observability in rate limiting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
