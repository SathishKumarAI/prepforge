---
qid: ing_beffe2af73__faang__local
question: 'Explain: Runway System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 569
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:26-05:00'
sources: []
---

**Clarify**  
You’re asked to describe how you’d design a “runway” system for an AI company—essentially the end‑to‑end pipeline that moves models from research to production and back to research. I’ll assume:  
1. Multiple model teams (NLP, CV, RL).  
2. Need for reproducibility, scalability, and compliance.  
3. Continuous deployment is a goal.

**Approach**  
1. **Data layer** – ingest → store (S3/Delta Lake) → catalog (Glue/AWS Athena).  
2. **Experimentation layer** – track hyper‑params & metrics (Weights & Biases or MLflow).  
3. **Model registry** – versioned artifacts in a container image repo.  
4. **Serving layer** – stateless containers (ECS/Fargate) behind API Gateway, autoscaling per request latency.  
5. **Monitoring** – drift detection, latency dashboards (Prometheus + Grafana), alerting.  
6. **Feedback loop** – collect inference data → retrain scheduler.

**Depth**  
- Use **MLflow** for experiment tracking; each run logs code hash, env specs, and metrics—ensures reproducibility.  
- Store models as **Docker images** tagged with semantic version (e.g., v1.2‑20240907).  
- Serve via **FastAPI + Uvicorn** in a Kubernetes pod; expose health probes.  
- Auto‑scale using CPU/memory thresholds, or request‑based KEDA triggers.  
- Drift detection: compute KS‑statistic on feature distributions vs training set; if >0.1 trigger retrain queue.  
Complexity: O(1) inference latency per request; storage O(N * size_of_model). Trade‑off between container weight (lightweight) and cold‑start times.

**Edge Cases**  
- **Model failure** → blue/green rollout, rollback on 5xx rate >5%.  
- **Data privacy** → encrypt at rest, restrict IAM roles.  
- **Non‑deterministic outputs** (RL) → log random seeds for debugging.  

**Optimize & Communicate**  
I’d propose a **CI/CD pipeline** with GitHub Actions: commit → lint → unit test → MLflow experiment upload → Docker build → push to ECR → Helm upgrade. For narrative, I’d walk through a concrete example (e.g., an NLP sentiment model) to show each layer in action, emphasizing how observability feeds back into experimentation and compliance. This showcases structured thinking, depth of tooling knowledge, and clear communication—key FAANG interview strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
