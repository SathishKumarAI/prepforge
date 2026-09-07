---
qid: ing_0ee2fddd85__aws__local
question: 'Explain: Distributed Systems Resilience — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 474
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:17-05:00'
sources: []
---

**Situation & Task**  
I was hired as a Senior Solutions Architect at Amazon to redesign the inference pipeline for our recommendation engine, which had a 4 % outage rate during peak traffic (up to 200k requests/sec). The goal: achieve <0.1 % SLA violation and double throughput without breaking the data‑privacy compliance.

**Action & Design**  
*Customer Obsession + Ownership* – I scoped a “zero‑downtime” rollout, owned every component, and documented rollback plans.  
1. **Stateless microservices** on ECS Fargate, auto‑scaling with CloudWatch metrics (CPU > 70 % → scale).  
2. **Event‑driven inference queue** via SQS FIFO to guarantee order; dead‑letter queues capture failures for later replay.  
3. **Model versioning** in SageMaker Model Registry; the service pulls the latest model from ECR, caching locally with a TTL of 5 min.  
4. **Health checks + Circuit Breaker** using API Gateway + Lambda to short‑circuit failing nodes and redirect traffic to healthy replicas.  
5. **Observability**: CloudWatch Alarms, X-Ray tracing, and Grafana dashboards; automated alerts trigger SNS → Step Functions that spin up a backup cluster.

*Dive Deep & Bias for Action* – I ran chaos engineering tests (simulating pod failures, network latency) and observed a 99.92 % request success rate. Cost was kept below 10 % of the previous monolithic deployment by leveraging Fargate Spot capacity.

**Result**  
Post‑deployment: outage dropped from **4 % → <0.01 %**, throughput increased **1.8×** (350k req/s), and cost savings hit **12 %** annually. The system now self‑heals, scales elastically, and delivers consistent customer experience—exactly what the “Deliver Results” principle demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
