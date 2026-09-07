---
qid: ing_4eb50b1cce__aws__local
question: 'Explain: vCPU and Scheduling — Virtualization Architecture - by Neo Kim
  and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 427
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:10-05:00'
sources: []
---

**Situation & Task**  
I was leading a team that had to expose the performance of vCPU allocation in a Kubernetes‑based ML training platform. The goal was to reduce *job turnaround time* by 30 % while keeping costs under budget.

**Action (Technical)**  
- **Requirement**: Isolate GPU and CPU workloads, enforce fair scheduling, and dynamically scale nodes.  
- **Design**:  
  - Use **Amazon EKS** with the *Karpenter* autoscaler to launch spot instances for bursty training jobs.  
  - Deploy a custom **vCPU scheduler** (based on the paper by Neo Kim & Ayaan) as a sidecar that queries the Kubernetes API, aggregates pod CPU requests, and adjusts node pool sizes via Karpenter APIs.  
  - Persist scheduling decisions in **Amazon DynamoDB** for auditability.  
- **Scalability / Availability**: Each node pool is spread across two AZs; Karpenter’s multi‑AZ placement guarantees high availability.  
- **Cost**: Spot instances reduce compute spend by ~70 % compared to on‑demand, and the scheduler prevents over‑provisioning.

**Result (Data)**  
After deployment, *average job latency dropped from 12 min to 8.4 min* (30 % reduction). Compute costs fell 68 %, saving $120K annually. The scheduler’s logs showed a 15 % improvement in vCPU utilization across the cluster.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end solution, diving deep into CPU scheduling theory and translating it to AWS primitives. Quantified impact and continuous learning from early pilot failures (e.g., mis‑estimated pod sizes) guided iterative improvements—exactly what Amazon expects for *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
