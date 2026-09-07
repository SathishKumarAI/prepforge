---
qid: ing_f36f20b527__aws__local
question: 'Explain: Problem — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 676
total_tokens: 905
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:51-05:00'
sources: []
---

**Question:** *Explain the “Database per Service” pattern for machine‑learning workloads.*

---

### Context (S – Situation)

In 2023 I led a cross‑functional team that built an end‑to‑end recommendation engine for a global e‑commerce platform. Each microservice—`UserProfile`, `CatalogSearch`, `Pricing`, `RecommendationEngine`—required its own dataset. A monolithic shared database caused contention, slowed rollouts, and hindered independent scaling.

### Task (T)

Design an architecture that gives each service autonomy while ensuring data consistency for ML pipelines, with minimal latency (< 200 ms) and < $1M/yr cost.

### Action (A)

| Service | Data Store | Rationale |
|---------|------------|-----------|
| **UserProfile** | DynamoDB + S3 (archival) | Low‑latency reads for real‑time personalization; object storage for long‑term analytics. |
| **CatalogSearch** | OpenSearch (managed) | Full‑text search, fast indexing of catalog changes. |
| **Pricing** | Aurora Serverless (PostgreSQL) | ACID guarantees for price updates; auto‑scales with traffic spikes. |
| **RecommendationEngine** | Amazon SageMaker Feature Store + S3 | Centralized feature store for training & inference, decoupled from service code. |

*Data pipelines:*  
- Change Data Capture (CDC) via DynamoDB Streams → Lambda → Kinesis → Glue ETL → update Feature Store.  
- Batch jobs on EMR/Spark write aggregated features to S3, then push to SageMaker.

*Scalability & Availability:* Each store is region‑replicated; failover handled by AWS managed services.  

*Cost:* 2024 cost estimate – $860k/yr (≈ $23k/mo) with a 15% buffer for growth, well below the $1M target.

### Result (R)

- **Latency** dropped from 650 ms to 120 ms in user‑facing flows.  
- **Deployment frequency** increased from once per quarter to daily releases.  
- **Model accuracy** improved by 4% (AUC) due to fresher, isolated feature sets.  
- **Operational cost** fell 30% compared with the monolithic baseline.

---

### What a Bar‑Raiser Listens For

| Signal | Why It Matters |
|--------|----------------|
| Ownership of end‑to‑end data lifecycle | Shows deep understanding beyond code. |
| Quantified impact (latency, cost, accuracy) | Demonstrates measurable business value. |
| Dive‑deep on trade‑offs (e.g., DynamoDB vs Aurora) | Reveals architectural judgment. |
| Learning from failed monolith attempts | Indicates resilience and continuous improvement. |

**Leadership Principles Highlighted:**  
- **Customer Obsession** – Faster, more reliable recommendations directly improve user experience.  
- **Ownership** – I owned the data layer, pipeline, and cost model from conception to production.  

This pattern enabled autonomous scaling, reduced coupling, and gave our ML team the agility needed for rapid innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
