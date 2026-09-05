---
qid: ing_f44b6e9370__star__local
question: 'Explain: Service-Oriented Architecture - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 394
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:37-05:00'
sources: []
---

**Situation:**  
At my previous company we had a data‑science platform where several teams built predictive models for different products—credit risk, churn prediction, and recommendation engines. Each model was packaged as a separate microservice in Docker, but the deployment pipeline kept duplicating code, and our CI/CD tooling struggled to keep track of versioned dependencies.

**Task:**  
I needed to refactor the architecture so that each ML service could be reused across products, reduce duplication, and simplify continuous delivery. The goal was to implement a Service‑Oriented Architecture (SOA) that would expose model inference behind well‑defined APIs while keeping the underlying training pipelines isolated.

**Action:**  
1. I designed an SOA layer using FastAPI, defining a standard JSON schema for input/output across all models.  
2. Implemented a shared “Model Registry” service with MLflow to track experiment artifacts and serve production versions via REST endpoints.  
3. Moved common preprocessing logic into a shared library packaged as a Helm chart, ensuring consistent dependencies (Python 3.11, scikit‑learn, PyTorch).  
4. Set up an API gateway (Kong) for rate limiting, authentication, and routing to the correct model service based on product tags.  
5. Automated deployment with GitHub Actions: every push to a model repo triggers container build, registry upload, and Helm upgrade.

**Result:**  
The new SOA cut deployment time by 60 % (from ~30 min to 12 min) and reduced code duplication by 45 %. Model reuse across products increased from zero to an average of 3 shared services per product. I learned that a disciplined API contract and centralized registry are key to scaling ML at enterprise scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
