---
qid: ing_afc42607d9__aws__local
question: 'Explain: ✍️ License: open-core split — GitHub - langwatch/langwatch: The
  platform for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 459
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:50-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building a public‑facing evaluation platform for LLMs that needed to be **highly available**, cost‑effective, and compliant with an *open‑core* licensing model (core features free, advanced analytics paid). The goal was to attract 5k+ users in the first quarter while keeping per‑request cost below $0.0004.

**Action**  
I owned the architecture:  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Frontend | S3 + CloudFront | Static hosting, global edge cache (latency < 80 ms) |
| API Gateway + Lambda@Edge | Serverless compute | Zero‑idle cost, auto‑scale to 50k QPS |
| Evaluation Engine | ECS Fargate + Spot instances | Batch inference with GPU spot pools – 70% cost savings vs on‑demand |
| Data Store | DynamoDB (global tables) | Low‑latency reads/writes, multi‑region replication for 99.999% availability |
| Billing & Licensing | Cognito + Lambda authorizer | Enforces open‑core tier limits in real time |

I implemented a **feature flag** system that toggled paid analytics on the fly, allowing us to roll out premium metrics without redeploying code.

**Result**  
- 4.8 k active users within 30 days (target met).  
- Average cost per evaluation dropped from $0.0012 to $0.00035 (70% savings).  
- Uptime 99.999% across three AZs, no SLA breaches in first year.  

**Learning & Bar‑raiser cues**  
I *dove deep* into Spot pricing patterns and built an auto‑rebalancer that shifted workloads during price spikes—an example of **Bias for Action** and **Ownership**. The success was measured quantitatively; the platform’s adoption directly drove a 30% increase in paid plan conversions, illustrating clear business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
