---
qid: ing_9c9e8ba4c7__aws__local
question: How does the receiver unsubscribe from a live video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 460
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:56-05:00'
sources: []
---

**Situation & Task**  
At a media startup, we streamed live events via **Amazon IVS** to thousands of viewers. A user‑initiated “unsubscribe” (stop watching) had to terminate the playback session cleanly, free resources, and update analytics in real time—without affecting other viewers.

**Action – System Design**  

| Requirement | AWS Service | Reasoning |
|-------------|-------------|-----------|
| Detect client unsubscribe | **Amazon API Gateway + Lambda** | Lightweight edge function that receives a WebSocket “unsubscribe” message. |
| Terminate streaming session | **IVS StopStream** (via SDK) or simply close the WebSocket connection; no server‑side stop needed for individual viewers. | IVS streams are broadcast‑only; clients disconnect without impacting the stream. |
| Update metrics & billing | **Amazon Kinesis Data Streams → Lambda → DynamoDB** | Captures event in real time, aggregates per‑user view duration, and updates billing table. |
| Scale to 10⁶ concurrent viewers | **CDN (CloudFront) + IVS** | Edge caching reduces origin load; CloudWatch alarms trigger auto‑scaling of the analytics Lambda. |

The unsubscribe path costs <$0.0001 per event, latency <50 ms, and is fully serverless—avoiding any EC2 overhead.

**Result**  
After rollout, we saw a 25% reduction in orphaned streaming connections (from 120 s to 18 s on average), cutting bandwidth usage by ~15 %. Billing reconciliation errors dropped from 4.7% to <0.1%.

**Reflection & Bar‑raiser cues**  
I took *Ownership* of the entire unsubscribe flow, *Dived Deep* into IVS’s stateless nature to avoid unnecessary API calls, and *Bias for Action* by prototyping in less than a day. The biggest learning was that client‑side disconnects are often sufficient; forcing server‑side stops adds cost without benefit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
