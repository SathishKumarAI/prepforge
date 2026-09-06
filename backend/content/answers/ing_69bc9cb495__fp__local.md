---
qid: ing_69bc9cb495__fp__local
question: 'Explain: Deployment options ⚓️ — GitHub - langwatch/langwatch: The platform
  for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 415
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:49:17-05:00'
sources: []
---

**Why “langwatch” needs multiple deployment paths**

The core problem *langwatch* solves is **continuous, reproducible evaluation of LLMs in the wild**: a model runs, an agent interacts with a prompt‑rich environment, and metrics are logged for comparison. To be useful across research labs, product teams, and hobbyists, the system must expose two orthogonal axes:

1. **Scale & isolation** – a single Docker container suffices for a small test set; Kubernetes or cloud‑managed services (e.g., GKE, EKS) provide elastic scaling and multi‑tenant isolation for heavy workloads.
2. **Latency vs. cost trade‑off** – serverless functions (AWS Lambda/Google Cloud Functions) are ideal for infrequent, low‑volume runs; a dedicated VM or bare‑metal instance is preferable when latency must be <10 ms.

These axes stem from *resource optimization*: the cost function \(C = \alpha\,\text{time} + \beta\,\text{compute}\). By exposing both container and serverless routes, users can choose the point on this Pareto frontier that matches their constraints.

**Non‑obvious insight**

Most deployments ignore **cold‑start overheads** in serverless environments. For LLM inference, a cold start can add 1–2 s of latency—critical for real‑time agents. *langwatch* mitigates this by pre‑warming the model weights via an “always‑on” lightweight container that feeds a dummy request to keep the runtime hot, thereby preserving the serverless cost advantage while keeping latency low.

In short, offering Docker, Kubernetes, and serverless deployments lets *langwatch* balance isolation, scalability, and cost—rooted in the same optimization principle that governs every production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
