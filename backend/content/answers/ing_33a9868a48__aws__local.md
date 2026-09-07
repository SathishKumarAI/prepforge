---
qid: ing_33a9868a48__aws__local
question: 'Explain: AI Gateways and Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 617
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:16-05:00'
sources: []
---

**Context – Situation**  
At my last role I led the rollout of an on‑prem & cloud hybrid AI inference layer for a consumer‑finance app that served ~3 M active users daily. The product team needed to route requests to the best performing model (e.g., fraud detection, credit score) while keeping latency under 100 ms and cost below $0.0001 per inference.

**Task – Objective**  
Design an “AI Gateway” that dynamically routes traffic to multiple SageMaker/EC2‑based model endpoints based on real‑time performance metrics, ensuring high availability and minimal operational overhead.

**Action – Design & Implementation**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **API entry point** | Amazon API Gateway + Lambda Authorizer | Low‑latency HTTPS entry with fine‑grained auth |
| **Routing logic** | Step Functions orchestrator + DynamoDB (model health cache) | Serverless state machine that queries metrics, updates routing table |
| **Model endpoints** | SageMaker real‑time endpoints + EC2 spot containers | Cost‑effective compute; SageMaker handles autoscaling |
| **Monitoring & telemetry** | CloudWatch Metrics + X-Ray traces | Collect latency, error rates, cost per inference |
| **Failover** | Route 53 weighted routing + health checks | Automatic traffic shift on degraded models |

The gateway pulls the latest *average latency* and *error‑rate* from CloudWatch every 30 s, updates a DynamoDB “routing table,” and Step Functions pushes updated weights to Route 53. If a model’s latency exceeds 120 ms or error >2%, its weight drops to zero within 45 s.

**Result – Impact**  
- Reduced overall inference latency from **180 ms → 85 ms** (average).  
- Cut cost by **32%** per month ($15k saved) by shifting traffic away from over‑provisioned SageMaker endpoints.  
- Achieved 99.95% uptime across all models during a 6‑month test period.

**Reflection – What the bar‑raiser hears**  

- *Ownership*: I drove end‑to‑end design, deployment, and post‑launch monitoring.  
- *Dive Deep*: Quantified latency/error thresholds, used CloudWatch metrics to drive routing decisions.  
- *Bias for Action*: Deployed a fully serverless architecture within 3 weeks of requirement sign‑off.  
- *Learned from Failure*: Early prototype caused cold starts; resolved by prewarming endpoints and using spot instances, turning a potential outage into a cost‑saving feature.

**Leadership Principles Highlighted** – Ownership & Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
