---
qid: ing_fdc96e1954__fp__local
question: 'Explain: Non-Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 443
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:59:27-05:00'
sources: []
---

### Why a Distributed Job Scheduler Must Meet Non‑Functional Requirements  

A scheduler’s *functional* goal is obvious: accept jobs, assign workers, and report status.  
The **non‑functional** constraints—latency, throughput, reliability, scalability, security, observability, and cost—are the *physics* that shape its architecture.  
They arise from the same optimization problem that underlies all distributed systems:

> **Maximize user‑perceived performance while minimizing resource consumption, subject to failure probability ≤ ε.**

This is a constrained convex program where each requirement becomes a bound on a system metric. For instance, *latency* ≈ 1/(*rate of worker allocation*) + queueing delay; *throughput* ≈ workers × success rate; *reliability* ≈ (1‑failure probability)^{#replicas}.  

#### Core Principle: **Resource‑Aware Fairness**  
Treat every job as a point in a high‑dimensional feature space (priority, runtime, data locality). The scheduler must project this onto a feasible region defined by the NFRs. A *fairness* metric (e.g., max‑min fairness) guarantees that improving one dimension (latency) does not catastrophically harm another (cost).

#### Non‑Obvious Insight  
Most designs focus on **horizontal scaling** of workers, but **vertical scaling of metadata stores** often becomes the bottleneck. Because job state is queried at every scheduling tick, a single‑master key–value store can become a *soft* point of failure that violates reliability even when worker replicas are plentiful. Decoupling state via an append‑only event log (e.g., Kafka) and materialized views lets you trade consistency for throughput while still satisfying the NFR envelope.

In short, non‑functional constraints are not side‑effects; they are the *constraints* of a mathematical optimization that dictates every layer—from load balancer to persistence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
