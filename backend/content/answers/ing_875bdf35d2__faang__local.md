---
qid: ing_875bdf35d2__faang__local
question: 'Explain: 3-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 474
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:58:45-05:00'
sources: []
---

## Clarify  
You’re asking for a **three‑tier (client–server) architecture** used in ML systems:  
1. **Client tier** – UI or API consumers (web/mobile).  
2. **Application tier** – orchestration, inference & training services.  
3. **Data tier** – storage of raw data, feature stores and model artifacts.  

Assumptions to confirm:  
- Scale? (Millions of requests/day)  
- Latency requirement for inference (< 200 ms).  
- Offline vs online training cadence.

## Approach  
1. **Client** → HTTP/REST or gRPC → load balancer.  
2. **App tier** – microservices: *feature service*, *model‑serve* (e.g., TensorFlow Serving), *training orchestrator*.  
3. **Data tier** – object store for raw data, relational DB for metadata, feature store (e.g., Feast) and model registry.

## Depth  
- **Inference path:** Client → LB → API gateway → Model service → Feature service → DB → Response.  
  - *Complexity:* O(1) per request; latency dominated by network + GPU inference (~10 ms).  
- **Training pipeline:** Data ingestion → ETL → feature store → training job (Spark/PyTorch on Kubernetes) → model registry → promotion to serving tier.  
  - *Trade‑offs:* Batch vs online learning; consistency of features.

## Edge Cases  
- **Cold start** for GPU containers → pre‑warm strategy.  
- **Feature drift** → monitor and retrain trigger.  
- **Data skew** → shard feature store, use partitioned tables.

## Optimize & Communicate  
- Use CDN + edge caching for static assets to offload load tier.  
- Adopt serverless inference (e.g., AWS Lambda + SageMaker) for bursty traffic.  
- Instrument end‑to‑end latency; set SLAs per tier and alert on SLA violations.  

Narration: “By isolating concerns—presentation, business logic, and persistence—we achieve independent scaling, easier observability, and a clear path for continuous ML deployment.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
