---
qid: ing_49cde78c74__aws__local
question: 'Explain: How to prepare — Microsoft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 457
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:17-05:00'
sources: []
---

**Situation** – I was asked to lead the migration of our on‑prem AI inference pipeline from an internal cluster to Azure so that we could scale to 10 × the request volume while cutting latency by 40 %.  
**Task** – Design a fully managed, cost‑effective architecture that satisfies SLAs (≤30 ms per inference) and enables rapid experimentation.  

**Action** –  
1. **Dive Deep into requirements**: profiled current CPU/GPU usage, measured 95th‑percentile latency, and identified the bottleneck in data pre‑processing.  
2. **Choose services**:  
   * **Azure Container Instances (ACI)** for quick startup of inference pods.  
   * **Azure Kubernetes Service (AKS)** with GPU nodes for production bursts; autoscale based on queue depth.  
   * **Azure Functions + Durable Orchestration** to orchestrate pre/post‑processing, keeping the system serverless where possible.  
   * **Azure Cache for Redis** to cache model embeddings and reduce disk I/O.  
3. **Bias for Action & Ownership**: set up a CI/CD pipeline with GitHub Actions that rebuilds Docker images on each PR merge, runs unit tests, and pushes to ACR.  
4. **Cost & Availability trade‑offs**: used spot GPU nodes for non‑critical workloads (cost ↓ 60 %) and reserved instances for peak traffic (availability ↑ 99.95 %).  

**Result** – Deployed in 3 weeks; latency dropped from 80 ms to 22 ms (−72 %), throughput rose from 1,200 req/s to 12,500 req/s (+950 %), and infrastructure cost fell by 45 %. Learned that early profiling + serverless orchestration can dramatically cut both time‑to‑market and spend.  

**Leadership Principles Highlighted** – *Customer Obsession* (latency & cost), *Ownership* (end‑to‑end pipeline), *Dive Deep* (profiling & trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
