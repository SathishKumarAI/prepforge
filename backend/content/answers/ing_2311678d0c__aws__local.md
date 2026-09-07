---
qid: ing_2311678d0c__aws__local
question: 'Explain: Problem — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 511
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:52-05:00'
sources: []
---

**Problem – Pattern: Server‑side Service Discovery for ML Inference**

> **Situation:**  
> I led a team that built an on‑prem, high‑throughput inference platform for a financial services client. The platform had dozens of model endpoints (TensorFlow, PyTorch) behind a Kubernetes cluster. When new models were deployed or old ones retired, the request router (NGINX + Envoy) had to know where to forward traffic. Manual updates caused *15 min* downtime and 0.7% SLA degradation.

> **Task:**  
> Automate service discovery so that any model deployment change is reflected in routing rules within seconds, without manual re‑deploys or code changes.

> **Action:**  
> • Adopted the **Service Discovery** pattern: each model pod registers itself with **AWS Cloud Map** (or an internal Consul cluster) on startup and deregisters on shutdown.  
> • Implemented a lightweight **sidecar** that pushes health metrics to Amazon CloudWatch and updates Cloud Map entries using the AWS SDK.  
> • Replaced static Envoy config with **dynamic configuration via xDS**; Envoy queries Cloud Map for service endpoints in real time.  
> • Added a fallback circuit‑breaker layer (AWS App Mesh) to prevent request storms during registration lag.  
> • Built CI/CD pipelines that automatically tag new model images and trigger ECS task definitions, ensuring *zero manual intervention*.  

> **Result:**  
> • Service discovery latency dropped from 15 min to < 5 s per deployment.  
> • SLA improved by 2.3 pp (from 99.4% to 99.7%).  
> • Operational cost saved $12k/month on manual ops and reduced developer cycle time by 60%.

**Leadership Principles Highlighted**

- **Ownership:** Took full responsibility for end‑to‑end reliability of the inference pipeline.  
- **Dive Deep & Deliver Results:** Engineered a production‑grade, scalable solution using AWS services (Cloud Map, CloudWatch, App Mesh) and quantified the impact on uptime and cost.

**Bar‑raiser Takeaway**

The answer demonstrates *ownership* by addressing real business pain points, shows *dive deep* through architectural choices and trade‑offs, quantifies impact with concrete metrics, and reflects learning from past failures (manual updates causing downtime).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
