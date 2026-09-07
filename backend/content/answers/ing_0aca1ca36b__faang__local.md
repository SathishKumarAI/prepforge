---
qid: ing_0aca1ca36b__faang__local
question: Your primary model provider goes down. What does your incident response
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 504
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:09:14-05:00'
sources: []
---

**Clarify**  
We’re asked: *“Your primary AI model provider goes down—how do you respond?”*  
Assumptions to confirm:  
1. The outage is external (provider‑side).  
2. We still need to serve user requests with minimal latency and no data loss.  
3. SLA guarantees require a 99.9 % uptime target for the AI service.

**Approach**  
1. **Detect & alert** – automated health checks flag the failure.  
2. **Fail‑over** – switch traffic to an on‑premise or secondary cloud model replica.  
3. **Graceful degradation** – if no replica exists, serve cached responses or a “service unavailable” message with retry hint.  
4. **Communicate** – update status page and in‑app banner; log incident details for post‑mortem.

**Depth**  
- *Health checks*: ping endpoint + sample inference every 10 s.  
- *Routing*: use DNS weighted records or an API gateway that supports health‑based routing (e.g., AWS Route 53, Cloudflare).  
- *Cache layer*: CDN edge caches with a 5‑minute TTL to keep latency low while the provider recovers.  
- *Fallback model*: lightweight local transformer (e.g., DistilBERT) that meets functional requirements but may have slightly lower accuracy.  
Complexity: O(1) routing switch; cache hit ~O(1). Trade‑off: higher compute cost for redundancy vs. risk of stale responses.

**Edge Cases**  
- Provider outage spans hours → secondary replica must be up‑to‑date.  
- Cache staleness > user tolerance → flag “not real‑time” in UI.  
- Simultaneous traffic spike during fail‑over → auto‑scale the fallback cluster.

**Optimize & Communicate**  
Post‑incident, we’ll:  
1. Automate rolling upgrades of fallback models to match primary accuracy.  
2. Introduce a multi‑region deployment for the primary provider to reduce single‑point failure risk.  
3. Document the incident in Confluence and run a blameless post‑mortem.  
Narration: “We detected the outage, rerouted traffic instantly, served cached or fallback responses, and kept customers informed—all within our SLA window.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
