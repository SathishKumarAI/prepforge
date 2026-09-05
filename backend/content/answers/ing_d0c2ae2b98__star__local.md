---
qid: ing_d0c2ae2b98__star__local
question: 'Explain: Rate limiting per identity, not per IP — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:51-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a feature rollout for the Mcp Knowledge Agent, an AI‑powered chatbot that pulls real‑time insights from our internal knowledge base. Our API traffic hit a spike during a product launch, and we were seeing a surge of requests from corporate users who shared the same proxy IPs in the EU data center.

**Task** – I had to implement rate limiting that protected the backend without unfairly throttling legitimate users. The goal was to cap each unique identity (user ID) at 200 queries per minute, regardless of how many share an IP address.

**Action** – I built a Redis‑backed token bucket for each user session, keyed by JWT claims rather than client IP. On every request the middleware checked the bucket; if tokens were depleted it returned HTTP 429 with a “Retry‑After” header. To handle bursty traffic from shared proxies, I added an exponential backoff policy and logged all throttled requests to a sidecar service for analytics. The system was integrated into our CI pipeline and tested against synthetic load generators that mimicked shared IP scenarios.

**Result** – After deployment we saw a 95 % drop in backend timeouts during peak periods, while the average response latency improved from 750 ms to 420 ms. User complaints fell by 70 %. I learned how critical it is to base limits on business identity rather than network topology, and how a simple Redis token bucket can scale to thousands of users with minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
