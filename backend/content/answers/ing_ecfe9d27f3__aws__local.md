---
qid: ing_ecfe9d27f3__aws__local
question: Serving real-time TTS is a different capacity problem from serving a text
  LLM. Why, and how do you plan capacity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 487
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:16-05:00'
sources: []
---

**Situation / Task**  
When I joined the Alexa team, we were asked to double real‑time TTS throughput while keeping latency under 200 ms and cost per request below $0.0005. The TTS engine was a GPU‑bound inference pipeline that differed fundamentally from a text‑LLM (CPU‑heavy, batchable).  

**Action**  
I mapped the workload: 90 % of traffic hit a single “hot” language model, 10 % were edge requests in diverse locales. I designed a two‑tier architecture:

| Tier | AWS Service | Rationale |
|------|-------------|-----------|
| **Edge cache** | CloudFront + Lambda@Edge | Serve cached phoneme tables, reduce origin calls. |
| **Inference pool** | ECS on Fargate with GPU (g4dn.xlarge) + Elastic Load Balancer | Autoscale by CPU/GPU utilization; spot instances for cost. |
| **Orchestration** | Step Functions + EventBridge | Queue burst traffic, back‑off during spikes. |

I added a monitoring pipeline (CloudWatch metrics → Grafana) to correlate GPU load with latency. For capacity planning I used a 95th percentile SLA and simulated 10× peak load; the model predicted that **4 GPU nodes** plus an auto‑scaling buffer of **2 spot nodes** would keep latency <200 ms at $0.0003 per request.

**Result**  
Post‑deployment, TTS latency dropped from 260 ms to 180 ms (−30 %) and cost fell by 35 % while supporting a 12× traffic increase.  

**Learnings & Bar‑raiser cues**  
- **Ownership:** I owned the end‑to‑end pipeline and drove cross‑team alignment.  
- **Dive Deep:** Built custom GPU utilization metrics; discovered a memory bottleneck that was fixed by adjusting batch size.  
- **Quantified Impact:** Delivered measurable latency and cost reductions, directly improving user experience.  
- **Bias for Action & Invent & Simplify:** Deployed spot autoscaling before the next quarterly traffic spike, preventing over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
