---
qid: ing_ed80fdfe97__think__local
question: 'Explain: Execution Service — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 515
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:42:35-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
- *Scope*: “Execution Service” = orchestrator for ML jobs (ETL, training, inference).  
- *Constraints*: scale (thousands of jobs/day), fault‑tolerance, low latency, multi‑tenant.  
- *Assumptions*: We have a cluster manager (K8s/Dataproc) and a job queue (Kafka/RabbitMQ).  

**2️⃣ Mental Model / Framework**  
Use the **CAP + 3‑Tier Architecture**:  
- **API Layer** – REST/GRPC for submission.  
- **Scheduler Engine** – decoupled, event‑driven component that decides *when* & *where*.  
- **Executor Layer** – workers (containers) that run jobs, report status back to Scheduler.  

Add a **State Store** (e.g., etcd/Consul) for job metadata + a **Metrics/Observability stack**.

**3️⃣ Step‑by‑Step Reasoning**  
1. Client → API: receives job spec (type, resources, dependencies).  
2. API writes immutable Job record to DB & publishes event to Queue.  
3. Scheduler consumes queue events, queries resource pool, applies policies (priority, quotas).  
4. Scheduler assigns a worker node, updates state store, and pushes a “start” message to the Executor.  
5. Executor pulls job spec, launches container/process, streams logs to centralized log store.  
6. On completion/failure, Executor reports back; Scheduler triggers retries or escalations.  

**4️⃣ Common Traps**  
- *Single point of failure*: make Scheduler stateless & replicated.  
- *Resource starvation*: enforce quotas & preemption.  
- *Cold start latency*: keep a pool of warm workers for high‑priority jobs.  
- *Data locality*: schedule on nodes with data cache to avoid shuffling.

**5️⃣ Sanity‑Check & Communicate**  
- Verify **throughput**: simulate 10k jobs/day, measure end‑to‑end latency.  
- Test **failover**: kill a Scheduler instance and watch no job loss.  
- Present the diagram: API → Queue → Scheduler ↔ State Store ↔ Executors, with observability arrows.  

This structured approach ensures you cover requirements, design patterns, and operational concerns in the interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
