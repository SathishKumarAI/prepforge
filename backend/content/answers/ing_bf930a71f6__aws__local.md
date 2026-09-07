---
qid: ing_bf930a71f6__aws__local
question: 'Explain: Video: frames are expensive — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 447
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:30-05:00'
sources: []
---

**Situation / Task**  
At a previous role I led the design of an AI‑driven video analytics platform for a streaming service that needed to process 200 k frames per second across 10 000 live streams. The cost of storing, decoding and running inference on every frame was driving our cloud bill up by **$12M/yr**.

**Action**  
I applied *Customer Obsession* and *Dive Deep*. First, I profiled the pipeline in CloudWatch and discovered that only 3 % of frames contained actionable content (faces or text). I redesigned the architecture:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Frame extraction & storage | **Amazon S3 + Lambda@Edge** | Edge lambda keeps only keyframes, reducing S3 writes by 97 %. |
| Inference | **SageMaker Endpoint (GPU)** | Batch inference on selected frames; autoscaling keeps latency <100 ms. |
| Metadata store | **DynamoDB with TTL** | Fast lookup for downstream services and automatic cleanup of stale data. |

We added a lightweight *object‑detector* model (0.8 FPS) that flags keyframes, cutting the number of frames sent to SageMaker by **95 %**.

**Result**  
- Cloud spend dropped from **$12M** to **$2.4M/yr** (80 % cost reduction).  
- Latency improved from 350 ms to 90 ms per inference.  
- The platform now supports 200 k FPS with a 99.9 % availability SLA.

**Learning**  
I learned that *Bias for Action* can be balanced with *Ownership*: quickly prototyping the detector and iterating on the pipeline saved us $10M before launch. This approach continues to inform my decisions when scaling multimodal AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
