---
qid: ing_cc1dd06342__aws__local
question: How availability is measured? — Highavailability
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 421
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:23-05:00'
sources: []
---

**Availability in AI Services – How We Measure It**

*Leadership Principles:* **Customer Obsession** (we can’t serve customers if the model is down) & **Ownership** (I own uptime and latency).  

**Situation / Task**  
At my last role, we launched a real‑time recommendation engine that fed into a retail app. The SLA required 99.999% availability over any 30‑day window.  

**Action**  
1. **Define Availability** – `Availability = (Total Uptime – Downtime) ÷ Total Time`.  
2. **Instrumentation** – Instrumented each inference node with CloudWatch metrics (`Invocations`, `Errors`, `Duration`) and a *heartbeat* lambda that pings an ELB target group every 10 s.  
3. **High‑Availability Design** – Deployed the model in a **Multi‑AZ EKS cluster** behind an ALB, used **SageMaker Endpoints** with auto‑scaling (min = 2, max = 20).  
4. **Health Checks & Auto‑Recovery** – Configured ELB health checks; failed pods are replaced automatically by the Kubernetes controller.  
5. **Cost vs. Resilience Trade‑off** – Running 2 AZs adds ~30% cost but gives >99.999% availability versus a single‑AZ deployment that would hit 99.95%.  

**Result**  
We achieved 99.9998% uptime for 12 months, reducing customer complaints by **42%** and increasing revenue per session by **7%**.  

*Bar‑raiser cues:* ownership of metrics, deep dive into failure modes, quantified business impact, and continuous learning (e.g., after a 3‑minute outage we added a circuit breaker).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
