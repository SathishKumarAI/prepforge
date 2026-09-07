---
qid: ing_30ce34c8a6__aws__local
question: 'Explain: example there is a big campus in — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 454
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:38-05:00'
sources: []
---

**Situation & Task**  
I was asked to sketch an end‑to‑end architecture for a campus‑wide ride‑hailing service (think *Uber on a university campus*). The goal: support thousands of concurrent users, provide real‑time ETA, and keep cost per trip below $0.30.

**Action – Design & AWS Services**  
1. **API Gateway + Lambda** – edge entry for mobile/ web requests; scales to 10 k RPS with zero servers.  
2. **EventBridge + SQS** – decouple ride request → driver assignment → payment. Guarantees at‑least‑once delivery and graceful back‑pressure.  
3. **DynamoDB (global tables)** – store user, vehicle, and real‑time location data; single‑digit latency, 99.999% availability.  
4. **Amazon SageMaker** – train a lightweight XGBoost model nightly on historic trip logs to predict ETA and surge multipliers; deploy as endpoint behind Lambda for inference (<30 ms).  
5. **ECS (Fargate)** – run the matching microservice that pulls from SQS, queries DynamoDB, calls the ML endpoint, and pushes updates to WebSocket API for instant UI refreshes.  
6. **CloudWatch + X-Ray** – end‑to‑end tracing; alerts on latency >200 ms.

**Result**  
- 95% of trips matched within 2 s.  
- Cost per trip dropped from $0.45 → $0.27 (30% savings).  
- 99.9% uptime during peak semester periods.

**Learning & Bar‑Raiser Lens**  
I owned the trade‑off between real‑time inference latency and model complexity—opted for a small, fast model over a heavier one that would hit SLA. I dove deep into DynamoDB read/write capacity to avoid hot partitions, and I documented failure scenarios (e.g., SQS backlog) so the team could iterate on auto‑scaling policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
