---
qid: ing_8324272553__star__local
question: 'Explain: Pattern 3: Server-Side Composition — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 370
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:30-05:00'
sources: []
---

**Situation** – At my last role, our product team wanted a unified AI assistant that could pull data from multiple internal APIs (CRM, billing, support tickets) and present it in a single response for sales reps. The frontend was already built with React, but the backend services were siloed, each using different auth and rate limits.

**Task** – I had to design a server‑side composition layer that would orchestrate calls to all these microservices, cache results where appropriate, and expose a single GraphQL endpoint for the UI. The goal was to keep latency under 300 ms and reduce API churn by 40%.

**Action** – I chose Node.js with Apollo Server and built a “tool agent” registry: each external service became an agent exposing a `run()` method that accepted user intent, performed authentication via OAuth2 or API keys, queried the service, and normalized data into a common schema. I added a lightweight in‑memory cache (using Redis) keyed on intent+params to avoid duplicate calls within 5 minutes. The composition layer dynamically loaded agents based on intent tags, executed them concurrently with Promise.allSettled, merged responses, and handled failures gracefully by returning partial results with error metadata.

**Result** – The new server‑side agent architecture cut the average response time from 650 ms to 220 ms and reduced API calls per user session by 38%. It also simplified onboarding of new services—adding a new tool required only implementing a small `run()` function. I learned how important it is to decouple intent parsing from data fetching, and that caching at the composition layer can dramatically improve both performance and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
