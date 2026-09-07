---
qid: ing_49eb242b76__aws__local
question: 'Explain: Backend Pool — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 455
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:26-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to redesign the *Backend Pool* for our ML inference service that served ~20 M requests/day. The SLA required <5 ms latency and 99.9 % uptime, but our monolithic pool hit CPU spikes during model warm‑ups.

**Action**  
I introduced a **target‑group‑based load balancer** using AWS Application Load Balancer (ALB) + ECS Fargate.  
1. **Service discovery**: Each inference container registers with *ECS Service Auto Scaling* and is tagged by `model-version`.  
2. **Routing**: ALB uses path‑based routing (`/v{n}/predict`) to direct traffic to the appropriate target group.  
3. **Health checks**: Container health endpoints probe GPU utilization; unhealthy tasks are drained automatically.  
4. **Scaling policy**: CloudWatch metrics (CPU, GPU memory) trigger ECS scaling; we set a *cool‑down* of 60 s to avoid flapping during warm‑ups.

I also added an **AWS Lambda edge function** for request throttling and a *Redis cache* (Amazon ElastiCache) for hot embeddings, reducing inference latency by ~30 %.

**Result**  
Post‑deployment we saw:  
- Latency drop from 12 ms to 4.3 ms (average).  
- Uptime rose from 99.7 % to **99.97 %**.  
- Cost savings of 18 % by eliminating over‑provisioned GPU instances.

**Learnings & Bar‑raiser Signals**  
I owned the end‑to‑end flow, dug into metrics (CPU/GPU histograms) to justify scaling thresholds, quantified impact with real numbers, and iterated after a failure when an unexpected spike caused a 15 % latency rise—quickly adding a *pre‑warm* task to smooth the burst. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
