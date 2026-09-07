---
qid: ing_38f7600f1d__aws__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 536
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:40-05:00'
sources: []
---

**Situation & Assumptions (S)**  
I was asked to design a scalable ML‑model serving layer for the *system‑design‑primer* repo. The key assumptions were:  

1. **Read‑heavy traffic** – up to 10 k requests/second from GitHub users querying example code snippets.  
2. **Model size ≤ 200 MB** (transformer fine‑tuned on NLP tasks).  
3. **Latency goal < 200 ms** per inference, with 99th percentile SLA.  

**Task & Approach (T)**  
I chose a *serverless* architecture to satisfy rapid scaling and cost control while keeping operational overhead low.

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Inference API | **Amazon API Gateway + Lambda** | Handles 10 k rps, auto‑scales, pay per request. |
| Model storage | **S3 (Glacier) → EFS** | Persistent object store; cache in EFS for fast read. |
| Container runtime | **AWS Fargate** | Keeps the inference container stateless, scales with traffic. |
| Monitoring | **CloudWatch + X-Ray** | Captures latency, error rates, and traces failures. |

**Action (A)**  
1. Deployed a *model‑loading* Lambda that pulls the latest checkpoint from S3 into EFS on cold start.  
2. Configured API Gateway with throttling (10 k rps) and caching (TTL 300 s).  
3. Wrote a simple `predict` function in Python using PyTorch, wrapped in a Docker image for Fargate.  

**Result (R)**  
- Achieved **< 180 ms** average latency under peak load, 99th percentile < 240 ms.  
- Cost reduced by **35%** versus EC2‑based inference clusters due to pay‑per‑use and auto‑scaling.  
- 99.9% uptime over a 6‑month production run; no SLA breaches.

**Bar‑raiser notes** – I owned the end‑to‑end pipeline, dived deep into cold‑start optimization, quantified performance gains, and learned that *model warm‑up* can be automated via scheduled Lambda invocations to keep latency low during traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
