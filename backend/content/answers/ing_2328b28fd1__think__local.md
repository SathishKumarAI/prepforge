---
qid: ing_2328b28fd1__think__local
question: 'Explain: System Design 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 447
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:59:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Define “System Design” in ML (data ingestion → training pipeline → serving).  
- Assume a generic end‑to‑end workflow, not a specific framework (TensorFlow, PyTorch, etc.).  
- State constraints: latency targets, data volume, model size, cost budget.

**2️⃣ Adopt a layered mental model**  
- **Data layer**: sources, storage, preprocessing.  
- **Training layer**: compute resources, hyper‑parameter tuning, reproducibility.  
- **Deployment layer**: serving infrastructure, scaling, monitoring.  
- **Ops layer**: CI/CD, versioning, governance.

**3️⃣ Step‑by‑step reasoning**  
1. Identify key stakeholders and success metrics (latency, accuracy, throughput).  
2. Map data flow from ingestion to feature store.  
3. Choose compute (on‑prem vs cloud) based on workload patterns.  
4. Design model training pipeline: version control, experiment tracking, automated hyper‑parameter search.  
5. Decide serving architecture: REST/GRPC microservice, batch inference, edge deployment.  
6. Add observability: logging, metrics, alerts for drift or failure.  
7. Plan for scaling (auto‑scaling groups, load balancers) and cost optimisation.

**4️⃣ Avoid common traps**  
- Don’t ignore data quality early; garbage in → garbage out.  
- Over‑engineering the training infra when a simple notebook will do for prototyping.  
- Forgetting to version models and artifacts; leads to “model drift” nightmares.  
- Ignoring security & privacy (data encryption, access controls).  

**5️⃣ Sanity‑check & communicate**  
- Re‑explain each layer in one sentence to a non‑technical stakeholder.  
- Draw a high‑level diagram and walk through data flow from source to user.  
- Verify that latency targets are met at the serving layer; if not, iterate on scaling or model compression.  

Use this structured approach whenever you’re asked to sketch an ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
