---
qid: ing_f00c10bf12__aws__local
question: 'Explain: Keep Receiving Fast — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 495
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:00-05:00'
sources: []
---

**Situation** – At my last role I led a feature that allowed partners to receive real‑time status updates via webhooks for our ML model training pipeline. The existing polling mechanism caused 4 × higher latency (≈30 s) and drove up API calls, hurting partner satisfaction.

**Task** – Design a “keep‑receiving fast” system that guarantees sub‑100 ms delivery, scales to 10k concurrent partners, and stays cost‑effective.

**Action** –  
1. **Event source**: Use Amazon SageMaker’s *Model Monitor* to emit events directly into an *Amazon EventBridge* bus.  
2. **Delivery layer**: Subscribe each partner webhook to a dedicated *AWS Lambda* function that validates the URL, adds authentication headers, and forwards the payload via HTTPS.  
3. **Back‑pressure & retries**: Configure EventBridge’s retry policy (exponential back‑off) and dead‑letter queues in SQS for failed deliveries.  
4. **Observability**: Emit CloudWatch metrics (`WebhookDeliveryLatency`, `FailureRate`) and trace each invocation with X-Ray to surface bottlenecks.  
5. **Cost control**: Lambda’s *Provisioned Concurrency* is auto‑scaled based on the EventBridge traffic, keeping idle capacity at < 2 % of peak.

**Result** – The new design cut average delivery latency from 30 s to **45 ms** (99th percentile), reduced partner support tickets by **73 %**, and lowered operational cost by **$12k/month**.  

---

### Leadership Principles Highlighted
- **Customer Obsession**: Delivered instant feedback, dramatically improving partner experience.  
- **Ownership & Dive Deep**: I architected end‑to‑end flow, tuned retry logic, and analyzed latency traces to pinpoint issues.

### Bar‑raiser Expectations
- **Quantified impact** (latency, cost, ticket reduction).  
- **Depth**: Detailed trade‑offs between Lambda concurrency vs. SQS buffering.  
- **Learning from failure**: Implemented DLQ to capture edge cases and iterated on retry back‑off after initial 30 % failure spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
