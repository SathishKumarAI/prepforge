---
qid: ing_fe70b6d4b6__aws__local
question: 'Explain: Packet Size and MTU — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 454
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:23-05:00'
sources: []
---

**Situation – Task:**  
At my previous role I led a team that built a real‑time telemetry pipeline for IoT devices. The pipeline had to ingest ~10 M packets/sec from edge sensors and stream them downstream to analytics services with <50 ms latency.

**Action – Design & Technical Choices:**  
I first *dive deep* into the network layer: **MTU (Maximum Transmission Unit)** limits the payload size of each IP packet; exceeding it triggers fragmentation, which hurts performance. For UDP I set a conservative MTU of 1472 bytes (1500 B Ethernet – 20 B IP – 8 B UDP) to avoid fragmentation on the widest link path. For TCP I let the OS negotiate MSS (Maximum Segment Size) via SYN‑ACK; we capped it at 1460 bytes and used **TCP Fast Open** for low‑latency handshakes.

I built a stateless load‑balancer using **AWS Lambda@Edge + CloudFront** to route packets to regional **Amazon Kinesis Data Streams** (shard count tuned to 200 kpps). The ingestion layer is *serverless*; each Lambda parses the UDP/TCP payload, validates checksum, and pushes JSON events to Kinesis. Downstream we use **AWS Glue** for schema evolution and **Redshift Spectrum** for analytics.

**Result – Impact:**  
After deployment, end‑to‑end latency dropped from 120 ms to **45 ms**, throughput increased by **3×**, and fragmentation incidents fell below 0.01%. Costs stayed under $5k/month vs the previous $12k/month due to serverless scaling.

**Learnings & Ownership:**  
I documented a “MTU‑best‑practice” guide that became the foundation for all new edge projects, reducing onboarding time by **30 %**. I also set up automated MTU checks in CI/CD to catch misconfigurations early—an example of *Bias for Action* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
