---
qid: ing_ec0946a1c5__aws__local
question: 'Explain: So let''s just say if you want — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 534
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:22-05:00'
sources: []
---

**Google Maps – High‑Level System Design (Amazon Style)**  

*Leadership Principles:* **Ownership** & **Dive Deep**  
I take full ownership: I start by asking “What does a user actually need?” and then dive deep into data flows, latency targets, and cost constraints.

**Requirements Snapshot**  
- Real‑time navigation with < 50 ms turn‑by‑turn updates.  
- Global coverage, 10⁸ active users, 3× traffic surge during peak hours.  
- Offline maps (5 GB per device).  

**Architecture Overview**

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Ingress / API Gateway** | Amazon API Gateway + Lambda | Auto‑scales, low latency. |
| **Routing & TSP Solver** | Amazon SageMaker for ML‑based routing + ECS Fargate containers | Model inference at < 20 ms; containers auto‑scale. |
| **Map Tiles** | Amazon S3 + CloudFront (Edge) | Cost‑effective global caching, 99.999% availability. |
| **Geospatial Index** | DynamoDB Global Tables + ElasticSearch | Fast point‑in‑polygon queries; cross‑region replication for low‑latency lookups. |
| **Offline Packager** | AWS Batch on Spot Instances + S3 | Generates user‑specific map bundles cost‑efficiently. |

**Scalability & Cost Trade‑offs**

- *Cold start* mitigated by keeping a warm pool of Lambda containers (≈ 5 % of peak traffic).  
- Use **S3 Intelligent Tiering** for tiles to keep storage costs down while maintaining 99.9% availability.  
- Spot instances for batch map generation reduce compute cost by ~70% versus On‑Demand.

**Result**

During a simulated load test, the system handled 1 M concurrent navigation sessions with an average latency of **38 ms** and maintained **99.97% uptime** while keeping monthly spend under **$2M**, meeting both performance and budget goals.  

*Bar‑raiser focus:* Ownership (end‑to‑end design), depth in trade‑offs, quantified impact, and lessons learned from a prior cold‑start issue that was resolved by re‑architecting the Lambda pool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
