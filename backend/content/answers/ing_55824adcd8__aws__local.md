---
qid: ing_55824adcd8__aws__local
question: 'Explain: How Skills Work — Openclaw Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 463
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:22-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with redesigning the *Skills* component of a conversational AI platform (OpenClaw) so that it could scale from 10 k daily users to 1 M while keeping latency under 200 ms. The existing monolith caused slow skill resolution and stale intent models.

**Action**  
I broke the problem into three layers:

| Layer | AWS Service(s) | Design Rationale |
|-------|----------------|------------------|
| **Skill Registry** | DynamoDB + Lambda | Event‑driven CRUD via API Gateway; low latency, auto‑scaling. |
| **Inference Engine** | SageMaker Endpoint + ECS Fargate | Containerized model serving with Spot‑tuned GPU instances for cost efficiency; autoscaling based on CPU & request queue length. |
| **Skill Orchestrator** | Step Functions + EventBridge | Orchestration of multi‑skill flows, fallback handling, and metric collection. |

I added *Feature Flags* in Parameter Store to roll out new skills gradually, and introduced a lightweight *Knowledge Graph* (Neptune) for contextual linking between skills.

**Result**  
- **Latency:** Dropped from 450 ms to 140 ms average.  
- **Throughput:** Handled 5× more concurrent sessions with no SLA breaches.  
- **Cost:** Reduced inference spend by 37% via Spot‑GPU scaling.  
- **Customer Obsession & Ownership**: Conducted A/B tests with real users, iterating on feedback loops.

**Reflection (Bar‑Raiser lens)**  
I owned the full stack, dived deep into DynamoDB read/write patterns, and quantified every trade‑off. The failure point was an over‑provisioned EC2 pool; learning from that, I migrated to Fargate Spot, which is now a best practice in the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
