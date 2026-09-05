---
qid: ing_71361cd1bb__star__local
question: 'Explain: System Design: Content Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 388
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:51-05:00'
sources: []
---

**Situation** – In my last role at a video‑streaming startup, our user base grew from 50k to 300k monthly active users in six months, and we were seeing 15 % buffering during peak hours on the East Coast.

**Task** – I was asked to design a lightweight CDN layer that could reduce latency by at least 30 % and handle sudden traffic spikes without hitting our origin servers.

**Action** – First, I mapped user locations with a GeoIP lookup service (MaxMind) and set up edge nodes in three AWS regions (N. Virginia, Ohio, and Atlanta). Using Nginx as a reverse proxy, I configured sticky sessions based on the client’s IP hash so that subsequent requests hit the same node. To keep cache fresh, I implemented an ETag strategy: the origin server would send ETags with 24‑hour TTLs, while edge nodes served stale content for up to 5 minutes during a cache miss before fetching from origin. For failover, I used Route 53 weighted routing to divert traffic to secondary edges if latency exceeded 200 ms. I also added a simple Lua script in Nginx to bypass the CDN for authenticated users needing low‑latency content.

**Result** – After rollout, average page load time dropped from 1.8 s to 1.2 s (33 % improvement) and buffering incidents fell by 70 %. The system also handled a 4× traffic surge during a live event with no origin overload. I learned that balancing cache freshness against latency requires fine‑tuning TTLs and that lightweight edge logic can deliver CDN benefits without the cost of full‑blown CDNs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
