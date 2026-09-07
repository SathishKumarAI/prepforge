---
qid: ing_a8069baf8a__aws__local
question: 'Explain: Sources — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 550
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:52-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the data‑engineering team that built a perception pipeline for an autonomous‑vehicle startup. The core challenge was to create high‑fidelity training labels from heterogeneous sources while keeping latency low enough for real‑time inference.

**Task (T)**  
I had to design a scalable “Sources” layer that ingests raw sensor streams, fuses them with map and traffic data, and produces synchronized, versioned datasets for the Waymo‑style AI stack.

**Action (A)**  
1. **Identify sources** – LiDAR point clouds (10 Hz), RGB/thermal cameras (30 fps), GPS/IMU, V2X messages, and high‑definition HD maps from HERE.  
2. **Data lake design** – Used Amazon S3 for immutable raw storage, partitioned by date & vehicle ID; leveraged AWS Glue to catalog metadata and enforce schema evolution.  
3. **Real‑time stitching** – Deployed an Amazon Kinesis Data Streams pipeline that aggregates sensor packets into 100 ms windows, applies timestamp alignment via NTP and GPS corrections, then writes to Amazon DynamoDB for low‑latency access by the inference service.  
4. **Version control & lineage** – Implemented AWS Lake Formation to tag each dataset with a semantic version; used Apache Atlas (via Glue) for full lineage tracking.  
5. **Cost/availability trade‑off** – Staged raw data in S3 Infrequent Access (≈ $0.01/GB/month) and kept only the last 48 h of processed streams in DynamoDB (≈ $0.25/MB/day), achieving 99.9% durability with < $2k/month.

**Result (R)**  
The new Sources layer cut data ingestion latency from 1.8 s to 250 ms, enabling on‑board training cycles that improved object‑detection accuracy by **12 % AP** in a 24‑hour test roll‑out. The cost was reduced by **35 %**, and the end‑to‑end pipeline now satisfies Waymo’s safety certification requirements for data integrity and traceability.

*Leadership Principles:* **Ownership** – I owned the entire end‑to‑end flow, from sensor capture to model training. **Dive Deep** – I architected a solution that surfaced every layer of latency and cost, backed by concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
