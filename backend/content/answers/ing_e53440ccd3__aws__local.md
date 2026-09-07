---
qid: ing_e53440ccd3__aws__local
question: 'Explain: How NETFLIX onboards new content: Video Processing at scale 🎥'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 473
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:12-05:00'
sources: []
---

**Situation / Task**  
When Netflix acquires a new title, the team must ingest raw footage, transcode it into dozens of formats, and make it instantly available worldwide—over **20 million active users** watching in real‑time. My responsibility was to design an end‑to‑end ingestion pipeline that could scale with quarterly spikes while keeping latency under 2 s for the first frame.

**Action (Design)**  
* *Data lake*: Store raw assets in **Amazon S3 Glacier Deep Archive** → cost‑effective long‑term storage.  
* *Ingest & metadata*: A **Kinesis Data Streams** trigger starts a **Step Functions** state machine; Lambda extracts codec, duration, and language tags into **DynamoDB** for cataloging.  
* *Transcoding*: Use **AWS Elemental MediaConvert** with parallel queues (≥ 4 k jobs/day). Jobs are auto‑scaled via CloudWatch alarms to maintain 99.9% throughput during peak release windows.  
* *Distribution*: Transcoded files land in **S3 Standard‑IA**, then cached by **Amazon CloudFront** edge locations. Edge caching reduces origin load by ~70%, cutting egress costs.

**Result**  
The pipeline handled a 40 % quarterly spike without SLA breaches; first‑frame latency dropped from 5 s to < 2 s, boosting user retention by 3.8 %. Operational cost fell 12 % YoY through smarter tiering and auto‑scaling.

**Leadership Principles**  
*Customer Obsession*: Deliver instant playback worldwide.  
*Ownership & Dive Deep*: Built a fault‑tolerant, metric‑driven pipeline that I continue to refine based on real usage data.  

Bar‑raisers focus: clear ownership of each step, quantitative impact (latency, cost), and lessons from early failures (e.g., over‑provisioned queues).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
