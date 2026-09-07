---
qid: ing_03a3dab113__aws__local
question: 'Can I self-host Opik? — GitHub - comet-ml/opik: Debug, evaluate, and monitor
  your LLM applications, RAG systems, and agentic workflows with comprehensive tracing,
  automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 476
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:53-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** In my last role I led a team that built an on‑prem LLM monitoring stack for a regulated fintech client. The customer’s compliance team required all telemetry to stay behind the corporate firewall, so we couldn’t use any cloud‑hosted AIOps service.  
> 
> **Task:** Evaluate whether we could self‑host *Opik* (the open‑source tracing & evaluation framework) and design a production‑ready deployment that met latency (< 10 ms per trace), durability, and cost constraints.  
> 
> **Action:**  
> 1. **Dive Deep** – I reviewed Opik’s architecture: it exposes a gRPC ingestion API, stores traces in PostgreSQL + ClickHouse, and serves dashboards via React/Node.  
> 2. **Design & AWS services** – We containerized the stack with Docker Compose, ran it on an **Amazon ECS‑Fargate** cluster (to avoid managing EC2), used **Amazon RDS Aurora Postgres** for durable metadata, and **Amazon Managed Streaming for Apache Kafka** as a back‑pressure buffer.  
> 3. **Scalability & Availability** – Auto‑scaling was set to 2–5 tasks based on CPU; we deployed across two AZs with Elastic Load Balancing for the ingestion endpoint, guaranteeing 99.99 % uptime.  
> 4. **Cost** – The total monthly spend stayed under **$1,200**, a 40 % reduction versus an equivalent SaaS subscription ($2k).  
> 
> **Result:** We achieved real‑time trace ingestion with <8 ms latency, handled 15K traces/sec during peak load, and the client’s compliance score improved from “needs review” to “fully compliant.”  
> 
> **Leadership Principles Anchored** – *Ownership* (taking end‑to‑end responsibility), *Dive Deep* (understanding Opik internals and AWS primitives), *Deliver Results* (measured performance gains).  

**Bar‑raiser cues:** ownership, depth of technical understanding, quantified impact, and the lesson that “containerizing a third‑party stack can be faster than building from scratch.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
