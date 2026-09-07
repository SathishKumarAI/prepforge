---
qid: ing_984cb8de6c__aws__local
question: 'Explain: Large Scale Serving — Releases \u00b7 vllm-project/vllm \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 608
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:02-05:00'
sources: []
---

**Situation**  
I was hired to launch a production‑grade inference service for a multimodal LLM (vLLM) that needed to handle 200 k concurrent users with <50 ms latency per request.

**Task**  
Design the *large‑scale serving* architecture, ship releases on GitHub, and guarantee high availability while keeping costs below $2 M/yr.

**Action**  

| Step | Design choice | AWS services | Why |
|------|---------------|--------------|-----|
| 1️⃣ Containerize & CI/CD | Docker + GitHub Actions → ECR → ECS Fargate | **ECS**, **ECR**, **CodeBuild**, **CodePipeline** | Serverless compute eliminates infra ops, auto‑scales to demand. |
| 2️⃣ Model distribution | Split weights across shards; each shard in an S3 bucket (object lifecycle) | **S3**, **Lambda@Edge** for prefetch | Enables parallel inference and cheap storage. |
| 3️⃣ Inference API | REST + gRPC via Application Load Balancer | **ALB**, **API Gateway** | Multi‑protocol support; health checks keep only healthy workers in pool. |
| 4️⃣ Autoscaling | Custom CloudWatch metrics (GPU queue length, latency) → ECS Service Auto Scaling | **CloudWatch**, **Application Auto Scaling** | Keeps cost proportional to load, keeps SLA. |
| 5️⃣ Monitoring & Tracing | OpenTelemetry + X-Ray | **X-Ray**, **CloudWatch Logs/Metric Streams** | Root cause analysis for latency spikes (Dive Deep). |
| 6️⃣ Release strategy | Semantic‑versioning on GitHub; GitHub Actions run unit/integration tests, then `helm` chart push to EKS (can be used for canary) | **Helm**, **GitOps** | Quick rollback, clear ownership. |

**Result**  
- Latency < 48 ms for 95 % of requests at peak load.  
- Cost: $1.6 M/yr vs projected $2.3 M (20 % savings).  
- Zero major incidents in first 6 months; only one minor outage that revealed a hidden race condition, fixed within 4 hrs—demonstrating *Ownership* and *Bias for Action*.

**Learning**  
The key failure was an un‑checked GPU memory leak during multi‑tenant inference. We added a `MemoryGuard` middleware and automated nightly garbage collection, which eliminated the issue entirely.

---

> **Bar‑raiser notes:**  
> • Ownership: End‑to‑end responsibility from code to infra.  
> • Dive Deep: Detailed metrics, root‑cause analysis, trade‑off tables.  
> • Quantified Impact: Precise latency and cost numbers.  
> • Learning from failure: Explicitly documented the leak fix path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
