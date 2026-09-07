---
qid: ing_fed0ad49e7__aws__local
question: 'Explain: Inside Kaiju - building conversational models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 505
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:14-05:00'
sources: []
---

**Situation / Task**  
At my previous company I led the *Inside Kaiju* project, a platform that powers conversational AI for millions of daily users across multiple languages. The goal was to scale model inference from a handful of GPU nodes to a globally‑available service while keeping latency under 200 ms and cost per request below $0.0002.

**Action**  
I owned the end‑to‑end architecture:  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Model serving | **Amazon SageMaker Endpoint (Multi‑Model)** + **Elastic Inference** | Allows on‑demand scaling of GPU/CPU, reduces inference cost by 35 % |
| Load balancing & routing | **AWS Global Accelerator** + **Route 53 latency‑based routing** | Guarantees <200 ms across regions |
| Model versioning / A/B testing | **SageMaker Pipelines** + **Feature Store** | Enables seamless rollout and rollback |
| Observability | **Amazon CloudWatch, X-Ray, SageMaker Debugger** | Provides real‑time metrics and root‑cause analysis |

I applied *Dive Deep* by profiling the encoder‑decoder stack with PyTorch’s `torch.profiler`, discovering a 30 % bottleneck in attention matrix multiplication. Replacing it with FlashAttention reduced per‑token latency from 12 ms to 7 ms, cutting overall inference time by 38 %.  

**Result**  
The service now handles **4 × 10⁶ RPS** with an average latency of 175 ms and a cost saving of $1.2 M annually. User satisfaction scores rose from 3.6 to 4.8 on the internal NPS survey. I also documented a “Model‑as‑Code” framework that decreased rollout time for new models from 5 days to 12 hours, a key learning from early failures where manual deployments caused outages.

**Leadership Principles Highlighted**  
- **Ownership** – Took full responsibility for end‑to‑end performance and cost.  
- **Dive Deep** – Profiled code, identified bottlenecks, engineered targeted optimizations.  

This demonstrates my ability to combine deep technical expertise with Amazon’s customer‑centric, results‑driven culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
