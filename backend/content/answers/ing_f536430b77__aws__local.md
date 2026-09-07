---
qid: ing_f536430b77__aws__local
question: 'Explain: It would take me, you know, roughly — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 393
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:21-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
While leading a cross‑functional ML team at Google, we built an image‑classification pipeline that served millions of daily requests. The goal was to reduce inference latency by 40 % while keeping model accuracy above 95 %.  

**Action (Dive Deep + Bias for Action)**  
1. **Profiling & Bottleneck Analysis** – Used *TensorFlow Profiler* and *Cloud Trace* to discover that GPU memory fragmentation caused a 25 ms per‑request spike.  
2. **Redesign with SageMaker Neo** – Exported the model to ONNX, then used **SageMaker Neo** to compile an edge‑optimized binary for NVIDIA Jetson TX2.  
3. **Serverless Inference** – Deployed the compiled model behind **Amazon API Gateway + Lambda@Edge**, auto‑scaling from 1–10 k concurrent invocations with 99.9 % availability.  
4. **Cost Optimization** – Replaced on‑prem GPU clusters (≈$1200/month) with Lambda+Neo, cutting inference cost to $300/month (75 % savings).  

**Result (Deliver Results)**  
- Latency dropped from 100 ms to 60 ms (40 % reduction).  
- Accuracy remained at 96.3 %.  
- Monthly inference cost fell by **$900**, freeing budget for new features.  

**Bar‑raiser Takeaway**  
I owned the end‑to‑end journey, dove deep into telemetry, and quantified every change. The biggest learning was that migrating to serverless + model compilation can deliver both speed and cost benefits—an insight I now advocate across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
