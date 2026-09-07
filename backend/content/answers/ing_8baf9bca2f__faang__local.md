---
qid: ing_8baf9bca2f__faang__local
question: 'Explain: Step 5: Message Creation and Formatting — Design Notification
  Service | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 457
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:11-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *message‑creation* phase of a notification service: given an event, produce a formatted payload (text, title, image, etc.) that will be sent to users across channels (push, email, SMS).  
Key assumptions: • Events arrive via a message queue; • We support at least 3 channels; • Users have language/region preferences; • Latency < 200 ms for high‑volume traffic.

**Approach**  
1. **Event ingestion → routing layer** that picks the right formatter.  
2. **Template engine** per channel (Jinja‑style) with placeholders.  
3. **Localization service** to inject translated strings and region‑specific data.  
4. **Image/asset resolver** for dynamic media links.  
5. **Rate‑limit & retry guard** around formatting to avoid backpressure.

**Depth**  
- Store templates in a CDN‑cached key/value store (e.g., DynamoDB + CloudFront) so reads are O(1).  
- Use a stateless formatter service (Python/Go microservice) that pulls the template, applies user prefs from Redis, and returns JSON.  
- Complexity: O(template size + placeholders), memory ~2–3 KB per request.  
- Trade‑off: pre‑compiling templates reduces CPU at cost of cache invalidation latency.

**Edge Cases**  
- Missing user locale → fallback to default English.  
- Unsupported channel → log and skip.  
- Large media URLs → truncate or use placeholder image.  
- Corrupt template syntax → return error to event source for redelivery.

**Optimize & Communicate**  
- Batch formatting requests to amortize cache misses.  
- Instrument latency per component; set SLOs (e.g., 95th percentile < 120 ms).  
- Explain that decoupling formatting from routing allows independent scaling and easier A/B testing of templates.  

This design satisfies low latency, high throughput, and flexibility for multi‑channel notification delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
