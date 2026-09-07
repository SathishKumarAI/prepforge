---
qid: ing_a7ead376ac__aws__local
question: 'Explain: Types of APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 651
total_tokens: 885
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:34-05:00'
sources: []
---

**What is an API?**  
An Application Programming Interface (API) is a contract that exposes functionality or data of a system so other services can consume it in a controlled, version‑safe way.

---

### **Behavioral Example – “Design a public ML model inference API”**

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| I led the rollout of an on‑prem inference service for our recommendation engine. | Build a RESTful API that returns top‑10 product suggestions in < 50 ms for 1M concurrent users. | • Adopted **Amazon SageMaker Endpoint** behind **API Gateway** with throttling (5k RPS).<br>• Used **Lambda@Edge** to cache popular responses (30 % hit rate).<br>• Implemented *Circuit Breaker* and auto‑scaling via CloudWatch alarms.<br>• Monitored latency, error %, and cost in real time. | • Latency dropped from 120 ms to 35 ms (70 % reduction).<br>• Cost fell by 45 % ($12k/month) while maintaining >99.9 % uptime.<br>• Customer satisfaction score rose from 3.8/5 to 4.6/5. |

---

### **Technical / System Design**

- **Requirements**: Stateless, secure (IAM + Cognito), multi‑region, zero‑downtime upgrades.
- **Architecture**:
  - `API Gateway` → `Lambda` (input validation) → `SageMaker Runtime` (model inference).  
  - Cache with **ElastiCache Redis** for hot items; fallback to *cold* inference if cache miss.  
  - Deploy in **AWS WAF**‑protected VPC endpoints for compliance.
- **Scalability**: Auto‑scaling on CPU/Memory metrics; use `Provisioned Concurrency` for Lambda to avoid cold starts.  
- **Availability**: Multi‑AZ deployment, health checks, and fallback to a secondary model endpoint.  
- **Cost Trade‑offs**: Switching from on‑prem GPU clusters ($30k/month) to SageMaker managed endpoints saved 55 % while improving MTTR.

---

### **Bar‑raiser Checklist**

| ✔ | What I demonstrate |
|---|---------------------|
| Ownership | Took end‑to‑end responsibility, drove metrics and cost savings. |
| Dive Deep | Quantified latency, error rates, and cache hit ratios; tuned each layer. |
| Quantified Impact | 70 % latency reduction, 45 % cost cut, 0.8 pts Satisfaction lift. |
| Learning from Failure | After a sudden spike in cold starts, switched to provisioned concurrency—documented the lesson for future rollouts. |

**Leadership Principles highlighted:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
