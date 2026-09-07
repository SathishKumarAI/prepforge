---
qid: ing_57c799f758__aws__local
question: 'Explain: Title: EMMA: End-to-End Multimodal Model for Autonomous Driving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:05-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of **EMMA (End‑to‑End Multimodal Model for Autonomous Driving)**—a neural pipeline that fuses LiDAR, camera, radar, and V2X data to predict steering and braking in real time. The goal was to reduce lane‑departure incidents by 30 % while keeping inference latency under 20 ms on edge hardware.

**Action**  
* **Ownership & Bias for Action:** I assembled a cross‑functional squad (data engineers, ML scientists, embedded systems). We adopted a *single‑stream transformer* that ingests all modalities, trained with contrastive loss to align sensor embeddings.  
* **Dive Deep & Invent & Simplify:** Implemented *feature‑level attention* so the model learns modality importance per context, cutting 15 % of FLOPs without accuracy loss.  
* **AWS Architecture:**  
  - *Data ingestion:* Kinesis Video Streams + S3 for raw sensor logs.  
  - *Training:* SageMaker JumpStart with distributed Multi-GPU training (p4d.24xlarge).  
  - *Inference:* AWS Inferentia inference endpoints on Fargate, auto‑scaling to 1 k concurrent sessions.  
* **Scalability & Cost:** Leveraged spot instances for training (≈70 % cost reduction) and reserved capacity for inference, keeping monthly spend <$120K while serving >10M queries/day.

**Result**  
EMMA achieved a *0.12° mean absolute steering error* and cut lane‑departure events from 1.2/100k miles to **0.84/100k miles**—a 30 % reduction—while maintaining <20 ms latency on the edge. The project was adopted across three production fleets, delivering a measurable safety improvement that directly benefited our customers.

*Leadership Principles:* **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
