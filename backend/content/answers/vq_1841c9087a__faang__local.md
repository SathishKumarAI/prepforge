---
qid: vq_1841c9087a__faang__local
question: '50 Question 50: What challenges do LLMs face in deployment?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 562
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:37-05:00'
sources: []
---

**Clarify**  
We’re asked to list the *deployment‑time* hurdles that large language models (LLMs) encounter—things that surface when you move from research prototypes to production services. I’ll assume we’re talking about commercial APIs or on‑prem deployments that must meet latency, reliability, compliance, and cost constraints.

**Approach**  
1. Identify core categories of challenges.  
2. For each, give concrete examples and why they matter.  
3. Summarize trade‑offs (e.g., scaling vs. inference speed).  

**Depth**  
| Category | Challenge | Why it matters |
|----------|-----------|----------------|
| **Latency & Throughput** | Token‑level batching, GPU memory limits | Real‑time apps need < 100 ms per query; large models can’t batch without hurting quality. |
| **Resource Cost** | High FLOPs and memory footprint | Cloud GPUs are expensive; on‑prem hardware may be limited, forcing model pruning or distillation. |
| **Robustness & Reliability** | Distribution shift, adversarial prompts | Production traffic differs from training data; small input changes can trigger hallucinations or policy violations. |
| **Explainability & Auditing** | Black‑box decisions | Regulatory mandates (GDPR, HIPAA) require traceable outputs and bias audits. |
| **Compliance & Data Governance** | Sensitive user content, model weights | Need to enforce no‑data‑leakage policies; some jurisdictions forbid certain model architectures. |
| **Versioning & Rollback** | Frequent updates, A/B testing | Must safely switch between model versions without downtime or drift in service quality. |

**Edge Cases**  
- Sudden traffic spikes causing GPU oversubscription.  
- Edge devices with limited memory forcing sub‑model execution.  
- Legal bans on certain inference techniques (e.g., fine‑tuning on protected data).  

**Optimize & Communicate**  
To mitigate, we can:  
* Use model compression (quantization, knowledge distillation) to reduce latency and cost.  
* Deploy adaptive batching and request throttling for load spikes.  
* Implement a monitoring stack that flags hallucinations or policy violations in real time.  
* Adopt container‑based microservices with blue‑green deployment pipelines for safe rollouts.

**Narrative**  
By framing challenges as *latent bottlenecks*—latency, cost, robustness, compliance—we give interviewers a clear map of what’s required to move an LLM from the lab to production. This structured answer showcases problem‑solving depth and communication skill expected at FAANG companies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
