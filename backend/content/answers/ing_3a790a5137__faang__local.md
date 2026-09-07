---
qid: ing_3a790a5137__faang__local
question: 'Explain: System Design Case Study — System Design Academy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:32-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design *System‑Design Academy*, a platform that lets users build, train, and deploy ML models through a web UI (no code).  
Assumptions:  
- Target audience: data scientists & product managers.  
- Scale: millions of concurrent users, 10k+ model jobs per day.  
- Data sources: public datasets + user‑uploaded CSV/Parquet.  

**2️⃣ Approach**  
1. Front‑end SPA (React) → API Gateway → REST/GraphQL service.  
2. Job orchestration microservice using Celery + RabbitMQ for async training queues.  
3. Model registry (PostgreSQL + S3) to store artifacts and metadata.  
4. Serving layer: model containerization with Docker + Kubernetes + Istio for traffic routing.  
5. Monitoring stack: Prometheus + Grafana; log aggregation via ELK.

**3️⃣ Depth**  
- **Auth & RBAC**: JWT + OAuth2, tenant isolation per org.  
- **Data ingestion**: S3 multipart upload + metadata catalog in Glue/Athena for quick querying.  
- **Training pipeline**: auto‑scaling workers; GPU/CPU pools; checkpointing to S3. Complexity: O(N) training jobs queued; throughput governed by worker pool size.  
- **Deployment**: Serverless inference (AWS Lambda or Knative) for low‑latency, autoscale per request volume.  
- **Security**: IAM roles, VPC endpoints, encryption at rest/traffic.  

**4️⃣ Edge Cases**  
- Huge datasets → streaming training; fallback to batch jobs.  
- Model drift → scheduled re‑train triggers.  
- User quota breaches → throttling and alerting.  
- Data privacy violations → audit logs, data masking.

**5️⃣ Optimize & Communicate**  
- Use spot instances for cost‑effective GPU training.  
- Cache pre‑trained embeddings in Redis to speed up fine‑tuning.  
- Explain trade‑offs: serverless vs. dedicated GPUs, SQL vs. NoSQL for metadata.  

Present the architecture diagram, justify each component, and walk through a typical user flow from dataset upload → model training → inference endpoint. This demonstrates structured problem solving, depth of knowledge, and clear communication—key to a high FAANG score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
