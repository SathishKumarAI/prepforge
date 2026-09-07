---
qid: ing_474a2d7188__aws__local
question: 'Explain: Data Link Layer — Top Network Security Cheatsheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 521
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to harden the **Data‑Link Layer (IEEE 802.11/Ethernet)** of our on‑prem and hybrid cloud edge routers. The goal was to detect and block MAC‑spoofing, VLAN hopping, and bad ARP traffic before it reached the IP stack—critical for protecting 1,200+ IoT devices in a multi‑tenant data center.

**Action – Design & AWS Services**  
I built a **real‑time ML pipeline** that ingests packet metadata (src/dst MAC, VLAN tag, frame type) from *AWS Kinesis Data Streams* and feeds it into *Amazon SageMaker Edge Manager*. The model is a lightweight Random Forest trained on 3 M labeled frames; inference runs in the router’s embedded CPU with <10 ms latency.  
The control plane uses **AWS IoT Greengrass** to push policy updates (e.g., new MAC‑whitelists) to edge devices over TLS‑encrypted MQTT. For audit, I stored alerts in *Amazon DynamoDB* and visualized trends in *QuickSight*.  

**Result**  
After deployment, we saw a **92 % drop in successful spoofing attempts** within 48 h and reduced incident response time from 45 min to 8 min. Cost was < $0.02 per device‑hour versus the $0.10 previously spent on manual monitoring.

**Reflection (Bar‑Raiser Lens)**  
I owned the full stack—from data ingestion to model retraining—ensuring **availability** via Kinesis shards and **scalability** by auto‑scaling Greengrass cores. I dove deep into feature importance, learning that VLAN tag entropy was the strongest predictor, which guided future feature engineering. The failure mode (model drift) was mitigated by scheduled re‑training every 30 days.

> *Leadership Principles:* **Customer Obsession** (protecting tenants), **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
