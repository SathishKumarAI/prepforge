---
qid: ing_436d2bc7d3__aws__local
question: 'Explain: Per-MCP-server scoping — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 480
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:30-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that built *Mcp Knowledge Agent* (MCA), an AI‑powered recommendation engine used by over **1 M daily users** across thousands of micro‑service clusters. The requirement was to scope the MCA’s inference engine *per MCP server* so each cluster could run its own model instance, reducing cross‑cluster data leakage and improving latency.

**Action**  
I introduced a containerized **Inference Service** that runs on an ECS Fargate task per MCP node. Each task pulls its own **model snapshot** from S3 (size 120 MB) via a signed URL and loads it into an **Amazon SageMaker Edge Runtime** container, which exposes a REST endpoint.  
Key design decisions:  

| Decision | AWS Service | Why |
|----------|-------------|-----|
| Fargate + ECS | Serverless scaling | Zero‑ops, auto‑scale per node |
| S3 + CloudFront signed URLs | Secure model delivery | Low latency, CDN caching |
| SageMaker Edge Runtime | Inference acceleration | 10× faster than CPU inference |
| DynamoDB for metadata | High‑throughput read/write | <5 ms lookups for per‑node config |

We added a **Health Check Lambda** that monitors each task’s health and triggers auto‑replacement if latency > 200 ms. The system now serves predictions in **<30 ms** on average, with a 99.9% availability SLA.

**Result**  
Deployment cut prediction latency from 120 ms to 28 ms (77% improvement) and reduced cross‑cluster data transfer by 90%, saving ~$200k annually in S3 egress. Customer satisfaction scores rose from 4.2/5 to 4.7/5.  

**Learning**  
The first prototype used a monolithic model server, causing contention. I learned that *Ownership* and *Dive Deep*—examining per‑node workloads—were critical; the refactor delivered measurable ROI and set a new baseline for AI scalability at AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
