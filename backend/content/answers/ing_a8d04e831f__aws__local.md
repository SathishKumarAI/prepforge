---
qid: ing_a8d04e831f__aws__local
question: Design barge-in for a voice agent. What breaks if you get it wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 535
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:23-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built a *barge‑in* feature for an Alexa‑compatible voice assistant used by 2 M daily active users. The goal was to let customers interrupt background playback (e.g., music) with “Hey Assistant, stop the song.” Failure would mean users losing control over media, leading to churn and brand damage.

**Action & Design**  
1. **Signal Capture** – I architected a low‑latency pipeline using Amazon Lex for intent detection, backed by AWS Lambda that listens on an SQS queue fed by real‑time audio streams from the device.  
2. **Priority Queueing** – Introduced a “priority” tag in the message header; Lambda routes barge‑in intents to a dedicated Kinesis Data Stream (high throughput) so we avoid contention with regular commands.  
3. **State Management** – Used DynamoDB (partition key: `device_id`) to track media state. A TTL of 5 s ensures stale states don’t block legitimate stops.  
4. **Fail‑Safe Fallback** – If intent confidence <0.8, we fall back to a “please repeat” prompt; this keeps the user in control and avoids false positives.  
5. **Observability** – CloudWatch Alarms monitor latency (target <200 ms) and error rate (<1%). Metrics are pushed to Amazon QuickSight dashboards for quarterly reviews.

**Result**  
After launch, barge‑in latency dropped from 650 ms to 180 ms, increasing user satisfaction scores by **12 points** (NPS +42). We reduced media‑interruption complaints by **87%**, directly saving an estimated $4.5 M in potential churn over six months.

**What a Bar‑Raiser Looks For**  
- *Ownership*: I drove the entire end‑to‑end solution, from requirements to post‑production monitoring.  
- *Dive Deep*: I dissected latency bottlenecks and built a custom priority queue to isolate traffic.  
- *Quantified Impact*: 12‑point NPS lift and $4.5 M churn reduction.  
- *Learning from Failure*: Early beta tests revealed false positives; we iterated on confidence thresholds, demonstrating rapid learning and improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
