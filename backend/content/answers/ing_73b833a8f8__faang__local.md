---
qid: ing_73b833a8f8__faang__local
question: 'Explain: Uh, we probably should have added them — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 533
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:13:25-05:00'
sources: []
---

**1️⃣ Clarify**

The question asks how to *“add machine‑learning (ML) components into a large software system at Google*” and what lessons we should have learned from doing so.  
Assumptions:  
- The system is already production‑grade, with CI/CD, monitoring, and a distributed architecture.  
- ML models are trained elsewhere and deployed as services or embedded in code.  

**2️⃣ Approach**

1. **Identify the value‑add** (e.g., recommendation, ranking, anomaly detection).  
2. **Choose the deployment model** – microservice vs. library vs. edge inference.  
3. **Design for observability** – metrics, logs, and drift alerts.  
4. **Iterate quickly with A/B tests** to validate business impact.  
5. **Govern data & privacy** – secure pipelines, consent checks.  

**3️⃣ Depth**

- *Model serving* is usually a stateless gRPC/HTTP service behind a load balancer; we use Google Cloud AI‑Platform or internal model‑server (e.g., TF Serving).  
- *Feature store*: centralize feature computation to avoid duplication and drift.  
- *Canary releases*: deploy 1% traffic, monitor latency & accuracy before full roll‑out.  
- *Automated retraining pipeline* with Airflow + Kubeflow; retrain triggers on data drift or performance drop.  

**4️⃣ Edge Cases**

- **Model staleness**: missing retraining leads to degraded predictions.  
- **Cold starts**: spinning up containers can increase latency for first requests.  
- **Security gaps**: exposing model APIs without proper auth can leak private data.  

**5️⃣ Optimize & Communicate**

- *Batch inference* during off‑peak hours reduces compute cost; *online inference* only when needed.  
- Use *model compression* (quantization, pruning) to fit latency SLAs.  
- Document all assumptions and performance budgets in a “Model Ops” playbook.  

**Lessons Learned**  
1. Treat ML as an integral part of the CI/CD pipeline—testing, monitoring, and rollback must be automated.  
2. Separate data engineering from model training; feature pipelines should be versioned.  
3. Start small (micro‑service) and scale with proven metrics rather than “big bang” deployments.  

These practices helped Google keep ML production reliable, scalable, and compliant while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
