---
qid: ing_f134caf5c8__aws__local
question: 'Explain: FAANG System Design Interview Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 489
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:37-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“When I was preparing for a FAANG ML system design interview, I treated it like a real customer problem.”*  

### **Situation / Task**  
I had to design a recommendation engine that could serve 5 M users with <200 ms latency while training models on nightly data. The goal: improve click‑through rate (CTR) by at least 12% over the baseline.

### **Action**  
1. **Requirements & Architecture** – I broke it into *data ingestion*, *feature store*, *model serving*, and *feedback loop*.  
2. **AWS Services** –  
   - **Kinesis Data Streams** → real‑time click events (99.999 % durability).  
   - **Glue + Lake Formation** → nightly ETL to S3, cataloging features.  
   - **SageMaker Feature Store** → low‑latency feature retrieval (<5 ms).  
   - **ECS Fargate + SageMaker Endpoint** for inference (auto‑scaling, spot instances).  
   - **DynamoDB** for user‑specific overrides (high availability, 1 ms read).  
3. **Scalability & Cost** – Spot instances reduce inference cost by ~30%. Auto‑scale to 200 ECS tasks during peak hours; serverless Kinesis shards scale with traffic.  
4. **Bias for Action** – I prototyped the pipeline in two weeks, iterated on feature selection (AUC improved from .62 to .68).  

### **Result**  
- CTR increased by **13%**, exceeding target.  
- Latency <180 ms for 99th percentile requests.  
- Operational cost dropped 25% after moving to spot instances.

### **Reflection**  
I *owned* the end‑to‑end flow, *dove deep* into each service’s SLA, and learned that early prototyping reveals hidden data bottlenecks. The bar‑raiser will note my clear ownership, quantitative impact, and iterative learning from failure—exactly what Amazon values.  

> **Leadership Principles:** Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
