---
qid: vq_d481720098__fp__local
question: What are different integration runtimes ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 419
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:09-05:00'
sources: []
---

**Integration runtimes (IRs)** are the *execution engines* that move, transform, and orchestrate data across heterogeneous environments.  
From first principles they must satisfy three orthogonal requirements:

1. **Connectivity** – reach the source and sink whether on‑premises, in a VNet, or publicly exposed.  
2. **Compute isolation** – run user code (ETL, Spark, etc.) without contaminating shared infrastructure.  
3. **Cost & latency control** – scale up/down on demand while keeping data residency compliant.

These constraints give rise to three canonical IR types:

| Type | Core idea | Typical use‑case |
|------|-----------|------------------|
| **Azure‑based (managed)** | Cloud‑hosted, fully managed, auto‑scales. | Public‑cloud pipelines, Spark jobs, large data volumes. |
| **Self‑Hosted** | Runs on user’s own VM or container; bridges private network to Azure services. | On‑premises databases, secure data centers, GDPR‑bound datasets. |
| **SSIS Integration Runtime** | Specialized runtime that executes SQL Server Integration Services packages in the cloud. | Legacy SSIS workloads lifted to Azure without rewriting code. |

*Non‑obvious insight:*  
The *choice of IR determines not only latency but also the **data residency footprint**. A self‑hosted IR can keep all intermediate data within a VNet, reducing egress costs and satisfying compliance, while an Azure IR may introduce cross‑region hops that inflate both cost and round‑trip time—an effect invisible until you profile pipeline execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
