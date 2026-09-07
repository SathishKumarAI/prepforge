---
qid: ing_7779dc1b45__aws__local
question: 'Explain: Components for Search — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 620
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:23-05:00'
sources: []
---

**Situation (S)**  
I was tasked with redesigning Spotify’s search stack so that a user could discover songs, playlists, and podcasts in < 200 ms while the catalog grew from 35 M to 80 M items over two years.

**Task (T)**  
Build an end‑to‑end system that ingests millions of new tracks daily, indexes them for fast autocomplete and semantic search, and serves results with high availability and low cost.

**Action (A)**  

| Component | AWS Services | Why |
|-----------|--------------|-----|
| **Data ingestion & feature extraction** | Kinesis Data Streams → Lambda → SageMaker Endpoint → DynamoDB | Real‑time ETL; serverless for bursty uploads; GPU instances for model inference. |
| **Vector store (semantic embeddings)** | Amazon OpenSearch Service with Vector plugin | Built‑in scaling, shard replication, and fast kNN queries. |
| **Autocomplete & typo tolerance** | CloudFront + Edge Lambda@Edge → DynamoDB Global Secondary Index | Low‑latency cache at edge; GSI keeps prefixes up to 3 chars for instant suggestions. |
| **Personalized ranking model** | SageMaker Pipelines → ECR → ECS Fargate | Continuous training on user interaction logs; containerized inference for cost isolation. |
| **API gateway & rate limiting** | Amazon API Gateway + WAF | Protects downstream services, enforces per‑user quota. |
| **Observability** | CloudWatch Metrics/Logs → OpenTelemetry → Grafana dashboards | Detect latency spikes and model drift in real time. |

*Scalability*: Each service auto‑scales (Kinesis shards, OpenSearch shards). *Availability*: Multi‑AZ deployments with read replicas; failover to backup indices. *Cost*: Spot instances for training, on‑demand only during inference peaks.

**Result (R)**  
After launch, query latency dropped from 450 ms to **120 ms** (3× faster), search traffic grew 40% year‑on‑year, and user engagement with discovered content rose by **18 %**, driving a $12 M lift in annual revenue. The system’s cost per query fell by 27% thanks to spot‑based training and efficient caching.

---

### Leadership Principles Highlighted  
- **Ownership** – I led cross‑team coordination (data, infra, ML) and took full responsibility for the launch timeline.  
- **Dive Deep** – Conducted detailed latency profiling, identified bottlenecks in the vector store, and iterated on shard sizing.  

### What a Bar‑Raiser Looks For  
- Quantified impact (latency & revenue).  
- Depth of technical decisions (service choice, trade‑offs).  
- Demonstrated learning: after an initial failure to index new formats, I added schema validation in Lambda and automated rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
