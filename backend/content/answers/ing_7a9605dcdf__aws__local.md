---
qid: ing_7a9605dcdf__aws__local
question: 'Explain: Zoom System Design | WhatsApp / FB Video Calling System Design
  | System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:41-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined the Video‑Team at a fast‑growing startup, we were asked to replace a flaky peer‑to‑peer solution with a scalable “Zoom‑style” system that could support 10 M concurrent users worldwide.

**Action (A)** – *Customer Obsession + Ownership*  
I led a cross‑functional squad and drafted the architecture:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Ingress | **API Gateway + CloudFront** | Low‑latency edge routing, TLS termination. |
| Media Capture | **MediaLive / Kinesis Video Streams** | Real‑time ingestion with automatic scaling. |
| Signalling | **Amazon Chime SDK (or WebRTC via EC2)** | Handles NAT traversal, low jitter. |
| Streaming | **AWS Elemental MediaConvert + CloudFront** | Adaptive bitrate for mobile/desktop clients. |
| Storage | **S3 + Glacier** | On‑demand archival of recordings. |
| Monitoring | **CloudWatch + X-Ray** | End‑to‑end latency telemetry. |

We also added a **dedicated “Session Orchestrator”** on ECS that used DynamoDB for state persistence, ensuring at most 5 % packet loss and <200 ms end‑to‑end latency.

**Result (R)** – *Deliver Results*  
Within three months we hit **95 % uptime** and cut operational costs by 30 % compared to the legacy P2P stack. User satisfaction scores rose from 3.4/5 to 4.7/5, directly impacting retention (+12 %).  

**Learning & Bar‑raiser Insight**  
The bar‑raiser looked for ownership (I owned the full lifecycle), depth (dive deep into latency budgets and trade‑offs), quantified impact (metrics above), and a lesson from an early failure when we over‑provisioned MediaLive; we corrected by auto‑scaling rules, saving $200k annually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
