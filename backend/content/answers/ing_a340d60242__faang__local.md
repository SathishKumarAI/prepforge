---
qid: ing_a340d60242__faang__local
question: 'Explain: Polling — Polling vs Webhooks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 404
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:01-05:00'
sources: []
---

**Polling vs Webhooks – A FAANG‑style explanation**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how a client keeps up to date with server data: either by repeatedly asking (polling) or by the server pushing updates (webhooks).” |
| **Approach** | 1. Define each pattern.<br>2. Contrast trade‑offs (latency, load, reliability).<br>3. Mention use cases and tech stack notes. |
| **Depth** | *Polling* – client sends periodic HTTP requests at a fixed interval or adaptive schedule; simple to implement but wastes bandwidth, introduces artificial latency, and scales poorly under many clients.<br>*Webhooks* – server registers a callback URL; when an event occurs it POSTs payload. This gives near‑real‑time updates, reduces unnecessary traffic, and offloads work from the client, but requires inbound connectivity, idempotent handling, and can suffer from delivery failures (need retries, signatures). |
| **Edge Cases** | • High‑frequency events: polling may miss rapid changes; webhooks can hit rate limits.<br>• Firewalls/NAT blocking inbound traffic → polling works while webhooks fail.<br>• Server outages: polling still functions locally but shows stale data; webhook delivery may drop. |
| **Optimize & Communicate** | • Use exponential backoff for failed webhook retries, and a queue (e.g., SQS) to buffer events.<br>• Combine both: short‑interval polling as fallback when webhook fails, ensuring eventual consistency.<br>Explain that the choice depends on data criticality, network constraints, and cost model. |

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
