---
qid: ing_d71be77238__aws__local
question: 'Q: How would you design infrastructure for 1M LLM queries per day?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 571
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:45-05:00'
sources: []
---

**Situation & Task (Ownership)**  
At my last role I was tasked to support a conversational AI product that would grow from 100k to **1 M LLM queries per day** within six months, while keeping latency <200 ms and cost under $0.02/query.

**Action (Dive Deep + Bias for Action)**  

| Requirement | Design & AWS Services | Scalability / Availability | Cost/Trade‑offs |
|-------------|-----------------------|---------------------------|-----------------|
| **Stateless inference** | `ECS Fargate` containers with GPU‑enabled AMIs, autoscaled by CloudWatch CPU & request metrics. | 100–200 nodes auto‑scales; regional multi‑AZ for high availability. | Higher per‑node cost but eliminates server management overhead. |
| **Cold start mitigation** | Pre‑warm “warm pool” of 10% spare containers + Lambda edge to proxy small queries. | Keeps warm pool active; reduces cold‑start latency by >30 %. | Extra compute cost during low traffic. |
| **Model storage & versioning** | `S3` + `SageMaker Model Registry`. Pull new weights at deployment time via ECS task definition update. | Immutable S3 objects guarantee consistency across regions. | Storage cost negligible vs compute. |
| **Request routing & caching** | API Gateway → CloudFront → Lambda@Edge → ECS cluster. Cache frequent prompts (TTL 5 min) in CloudFront. | Handles burst traffic; edge caching reduces backend load by ~40%. | Edge cache storage adds minimal cost. |
| **Observability** | CloudWatch Logs + X-Ray traces per request; automated alerts on latency >200 ms. | Enables root‑cause analysis and auto‑scale triggers. | Adds 5–10% of total monitoring spend. |

**Result (Deliver Results)**  
After launch, we processed **1.2 M queries/day** with <190 ms average latency and cost $0.018/query— a 15 % reduction vs baseline. Auto‑scaling reduced idle compute by 30 %, saving ~$25k/month.

**Bar‑raiser takeaway**  
- Demonstrated *ownership* by leading cross‑team ops, *dive deep* into trade‑offs (warm pool vs cost), quantified impact, and iterated after a cold‑start failure that taught us to pre‑warm containers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
