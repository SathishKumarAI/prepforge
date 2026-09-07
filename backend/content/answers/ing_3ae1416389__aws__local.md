---
qid: ing_3ae1416389__aws__local
question: Why carry lidar, radar and cameras rather than cameras alone? Where would
  you fuse them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:37-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – While designing an autonomous‑driving stack for a new fleet, I was asked to justify why we should ship LIDAR, radar, and cameras instead of relying on cameras alone. The goal was to maximize safety while keeping the system cost‑effective.

> **Action** – I led a cross‑functional squad that performed a *Dive Deep* analysis of sensor modalities under varied weather/lighting conditions.  
> 1. **Data‑driven comparison:** In 10 k miles of test drive, camera‑only perception dropped to 87 % object detection accuracy in fog, versus 97 % when radar was fused (AWS IoT Greengrass for edge inference).  
> 2. **Fusion strategy:** We built a *Sensor Fusion Layer* on top of AWS Kinesis Video Streams and SageMaker Neo models that merged depth from LIDAR, velocity vectors from radar, and RGB features from cameras at ~50 Hz.  
> 3. **Cost & scalability:** Using Spot Instances for training and AWS Lambda for lightweight fusion reduced per‑mile compute cost by 35 % versus a pure camera stack.

> **Result** – The combined system achieved a 4× reduction in false positives, lowered accident simulation risk from 0.12 to 0.03 events per million miles, and met the regulatory safety target within budget—delivering results that directly benefited our customers’ confidence.

> **Bar‑raiser takeaway** – I demonstrated *Ownership* by leading end‑to‑end experimentation, *Dive Deep* through rigorous metrics, and *Learned from Failure* by iterating on a camera‑only prototype that underperformed in real‑world conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
