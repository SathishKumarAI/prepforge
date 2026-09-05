---
qid: ing_100eda40e8__fp__local
question: 'Explain: Ten Thousand Users — AWS Scale - by Neo Kim - The System Design
  Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 671
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:35-05:00'
sources: []
---

**Why “Ten Thousand Users” is a *design* problem, not a product feature**

When an application first launches, the *unit of work* is a single request. The system’s job is to finish that request in time \(t\). A naive design can keep \(t\) bounded by hard‑coding resources: one EC2 instance, a fixed RDS pool, a single S3 bucket. That works until the number of concurrent requests grows.

In a production environment the *arrival process* is stochastic (often Poisson), so the load seen by any component is a random variable \(L\). The system must satisfy a probability requirement:

\[
P(L > \text{capacity}) < \epsilon
\]

where \(\epsilon\) is an SLA‑acceptable tail probability. This is essentially a *queueing* problem: you want to keep the waiting time distribution below a threshold. For 10 k users, the arrival rate can be tens of requests per second; even if each user issues only one request per minute, burstiness and peak hours mean that \(L\) can spike far beyond the mean.

**Why AWS auto‑scaling solves this tail**

AWS offers *elastic* compute (EC2/ALB), storage (S3), and managed services (RDS with read replicas). The key insight is that *capacity becomes a function of time*, not a static number. Auto‑Scaling Groups (ASG) monitor metrics like CPU, request count, or custom CloudWatch alarms. When the metric crosses a threshold, ASG launches new instances; when it falls below another threshold, it terminates them.

Mathematically, ASG implements a feedback control loop:

\[
C_{t+1} = C_t + \alpha (M_t - M_{\text{target}})
\]

where \(C_t\) is the current capacity, \(M_t\) is the measured metric, and \(\alpha\) controls aggressiveness. The controller stabilizes around a point where the probability of over‑utilization stays below \(\epsilon\). Because AWS scales at the *infrastructure* level, the application code can remain simple: stateless workers behind an ALB, database connections pooled, S3 for immutable assets.

**Non‑obvious insight: the “cold start” paradox**

Many think scaling is only about adding more resources. In practice, the *latency of spinning up* new instances (the cold‑start time) can dominate response times when traffic spikes abruptly. A deep design decision is to keep a *minimum baseline* of warm instances and use *pre‑warming* (e.g., scheduled launches before peak periods). This shifts the distribution of \(L\) from “burst‑only” to “steady‑state + burst”, reducing tail latency without ever exceeding capacity limits.

In short, scaling to ten thousand users on AWS is an application of queueing theory and control systems: you treat load as a random variable, use elastic compute as a feedback controller, and guard against cold starts by maintaining a warm buffer. This guarantees that the system meets SLAs while keeping operational costs near‑optimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
