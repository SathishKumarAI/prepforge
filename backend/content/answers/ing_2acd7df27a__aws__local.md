---
qid: ing_2acd7df27a__aws__local
question: 'Explain: Standard Protocols for Live Streaming — Live Streaming Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 554
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:56-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of our on‑prem live‑streaming platform to a fully managed AWS solution. The goal was to support 10 M concurrent viewers during peak events while keeping latency under 150 ms.

**Task (T)**  
I had to design a system that adhered to industry standards (RTMP, HLS, DASH) and leveraged Amazon’s media services for global delivery, cost efficiency, and high availability.

**Action (A)**  

| Requirement | Design choice | AWS service |
|-------------|---------------|-------------|
| **Ingest** | RTMP ingestion with failover | **Amazon Kinesis Video Streams** + **MediaLive** |
| **Encoding** | Multi‑bitrate H.264/H.265 | **AWS Elemental MediaConvert** (on-demand) & **MediaLive** (real‑time) |
| **Packaging** | Adaptive bitrate HLS/DASH | **AWS Elemental MediaPackage** |
| **CDN** | Low‑latency edge caching | **Amazon CloudFront** with *origin shield* |
| **Monitoring** | End‑to‑end metrics, alerts | **CloudWatch**, **X-Ray** |
| **Cost control** | Spot instances for transcoding + auto‑scaling | **EC2 Auto Scaling** & **Spot Fleet** |

I performed a **dive deep** analysis of our traffic patterns: peak 5 k concurrent streams per hour, average bitrate 6 Mbps. Using CloudWatch I set up an alarm that triggered a Spot Fleet to spin up two MediaConvert workers, cutting transcoding costs by **27%** while keeping SLA >99.9%.

**Result (R)**  
The migration reduced latency from 300 ms to 120 ms and cut infrastructure spend by $350K annually. Customer feedback showed a 4.8/5 satisfaction score on stream quality.

---

### Leadership Principles
- **Customer Obsession:** Delivered sub‑150 ms streams that exceeded user expectations.  
- **Ownership & Dive Deep:** Handled every layer of the stack, from RTMP ingest to CloudFront edge caching, and continuously tuned cost/performance trade‑offs.  

**Bar‑raiser cues I would listen for**: evidence of ownership (owning all failure points), depth in technical decisions (why MediaLive over custom FFmpeg), quantified impact (cost savings & latency numbers), and lessons learned (e.g., spot instance fallback strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
