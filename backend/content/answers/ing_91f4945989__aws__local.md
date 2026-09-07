---
qid: ing_91f4945989__aws__local
question: 'Explain: Bandwidth — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:15-05:00'
sources: []
---

**Situation / Task (S)**  
While leading a recommendation engine for an e‑commerce platform, I was asked to estimate the bandwidth required for real‑time model inference at peak traffic (~10 k concurrent users).  

**Action (A)**  
1. **Dive Deep** into model size (120 MB) and per‑inference payload (≈2 KB).  
2. Calculated raw throughput: 10 k * 2 KB ≈ **20 GB/s** inbound, plus outbound predictions (~5 KB each) → ~25 GB/s total.  
3. Added a safety margin (×1.5) for spikes → **≈38 GB/s**.  
4. Designed an **AWS architecture**:  
   - *Amazon SageMaker Endpoint* behind **Application Load Balancer** with target groups per region.  
   - *Elastic Network Adapter (ENA)* on EC2 instances to hit 10 Gbps NICs.  
   - *Amazon CloudFront* caches static model artifacts; *S3 Transfer Acceleration* for uploads.  
5. Implemented auto‑scaling based on **CloudWatch** metrics (CPU, memory, network) and used **AWS Cost Explorer** to keep spend < $10k/month.

**Result (R)**  
- Deployed within 48 h, handling 12 k concurrent users with <0.2 s latency.  
- Bandwidth utilization stayed below 90 % of the estimate, confirming accuracy.  
- Achieved a **25 % cost reduction** versus an over‑provisioned 100 Gbps baseline.

**Leadership Principles** – *Customer Obsession* (fast, reliable service), *Ownership* (end‑to‑end design & monitoring).  

Bar‑raiser focus: clear ownership, data‑driven estimate, scalability trade‑offs, and learning from the initial over‑provisioning trial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
