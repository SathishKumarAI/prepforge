---
qid: ing_f0b916a8a8__aws__local
question: 'Explain: Advanced Questions - March 2026 — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 513
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:16-05:00'
sources: []
---

**Question:** *“How would you design a real‑time fraud detection system for an e‑commerce platform that processes 10 M orders per day?”*  

**Answer (STAR)**  

**Situation & Task** – In my previous role I led the migration of our legacy rule engine to a fully automated, machine‑learning–driven fraud detector. The goal was to reduce false positives by 30 % while keeping latency < 200 ms.  

**Action** –  
1. **Data ingestion:** Used Kinesis Data Streams (partitioned by region) → Lambda for real‑time enrichment (customer profile, device fingerprint).  
2. **Feature store:** Created a DynamoDB‑backed feature store with TTL to keep only the last 24 h of interactions; this reduced compute cost by 40 %.  
3. **Model training:** Trained a LightGBM model on SageMaker nightly, auto‑scaling based on data volume (up to 2 TB/day).  
4. **Inference:** Deployed as an endpoint in SageMaker Neo for edge inference on Spot Instances; latency averaged 120 ms.  
5. **Feedback loop:** Lambda re‑labels misclassifications and pushes them back into the training pipeline, achieving a 28 % drop in false positives after 3 months.  

**Result** – The new system cut fraud losses by $1.2 M annually (a 15 % revenue lift) while reducing manual review tickets by 70 %. Costs dropped from $0.50/transaction to $0.18 due to spot‑instance usage and feature store caching.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Minimized friction for legitimate buyers, improving satisfaction scores (CSAT +12).  
- **Ownership & Dive Deep** – Built the end‑to‑end pipeline, continuously iterated on model performance, and owned post‑deployment monitoring.  

### What a Bar‑raiser Listens For  
1. **Quantified impact** (revenue lift, cost savings, latency metrics).  
2. **Depth of design** (service choices, scaling strategy, trade‑offs between latency vs. accuracy).  
3. **Learning from failure** – Feedback loop that adapts to new fraud patterns and reduces drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
