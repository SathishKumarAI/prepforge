---
qid: ing_6e5127227f__aws__local
question: 'Explain: Networking — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 661
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:24-05:00'
sources: []
---

**Situation:**  
While building a real‑time video analytics pipeline for a global CDN, I noticed packet loss spikes that degraded model inference accuracy.  

**Task:**  
I had to design a robust networking layer that validated data integrity with minimal latency and cost while keeping the system horizontally scalable.

**Action:**  
1. **Requirements & Trade‑offs** –  
   * *Low latency* (≤ 5 ms per packet) for real‑time inference.  
   * *High availability* across 10 AZs, no single point of failure.  
   * *Cost efficiency* – avoid expensive dedicated hardware.

2. **Design** –  
   * Use **UDP** with a custom header that includes a **CRC32 checksum** (fast, 4 bytes) and a sequence number for reassembly.  
   * Packets are sent via **Amazon Kinesis Data Streams** to decouple producers from consumers; the stream is sharded per region to ensure linear scalability.  
   * A **Lambda@Edge** function in each edge location validates the checksum, drops corrupted packets, and forwards only clean data to an **SQS FIFO queue** that feeds the inference microservice.  
   * The inference service runs on **ECS Fargate** behind a **Application Load Balancer** with health checks; the load balancer uses TCP keep‑alive to maintain connections.

3. **Scalability & Availability** –  
   * Kinesis scales automatically up to 1 MB/s per shard; we provisioned 200 shards, giving > 200 Mbps throughput globally.  
   * Fargate tasks auto‑scale based on CPU usage (target 70%); each task processes ~50 packets/ms.  
   * Redundancy is achieved by deploying the Lambda@Edge in all edge locations and using SQS across AZs.

4. **Cost** –  
   * Kinesis: $0.015 per shard/hour → ~$21/day for 200 shards.  
   * Lambda@Edge: ~$0.0000167 per 1 ms of execution; negligible due to lightweight checksum logic.  
   * SQS FIFO: $0.40 per million requests; with 10M packets/day ≈ $4/day.  
   * Fargate: ~$0.025/hour per vCPU, totaling ~$36/day for a 2‑vCPU cluster.

5. **Result** –  
   * Packet loss dropped from 3.7 % to < 0.1 %.  
   * Inference accuracy improved by **12 pp (percentage points)**.  
   * Latency remained under the required 5 ms, and the system handled a 4× traffic surge during peak events without any outages.

**Reflection:**  
I owned the end‑to‑end pipeline, diving deep into checksum algorithms and AWS service limits. The data‑driven impact (accuracy & cost) satisfies Amazon’s *Deliver Results* and *Customer Obsession*. I learned that lightweight integrity checks coupled with serverless edge functions can replace costly hardware while scaling elastically – a key lesson for future designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
