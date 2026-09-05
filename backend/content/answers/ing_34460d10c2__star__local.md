---
qid: ing_34460d10c2__star__local
question: 'Explain: It’s a Marathon, Not a Sprint — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 346
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:58-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were tasked with launching a fraud‑detection model to the production environment within two months. The budget was tight—only enough to cover core infrastructure and a single cloud region.

**Task:**  
I had to design an ML pipeline that would be cost‑effective yet robust enough for continuous deployment, monitoring, and scaling as data volume grew.

**Action:**  
I adopted a “frugal architecture” mindset: first, I built the model locally with open‑source libraries (scikit‑learn + XGBoost) and used Docker to containerize it, keeping external dependencies minimal. For training, I leveraged spot instances on AWS EC2, scaling up only during nightly windows and shutting down after each run—this cut compute costs by ~70%. I implemented a lightweight feature store in PostgreSQL instead of a full‑blown data lake, which reduced storage spend while still enabling versioned feature access. Finally, I set up an automated CI/CD pipeline with GitHub Actions that ran unit tests, model drift checks, and deployed to a single Kubernetes cluster using Helm charts, avoiding the overhead of multi‑region replication.

**Result:**  
The model went live on schedule; prediction latency stayed under 200 ms, and we saved roughly $12k per month in infra costs versus the original estimate. More importantly, I learned that treating ML deployments as a marathon—iterating cost‑efficiently, reusing components, and scaling only when necessary—is far more sustainable than a one‑off sprint build.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
