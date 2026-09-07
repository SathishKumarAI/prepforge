---
qid: ing_669027f531__aws__local
question: 'Explain: We now pair LPX decode accelerators with NVIDIA GPUs doing prefill
  and attention. Design the serving path across those two machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 504
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:52-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing the inference pipeline for a next‑gen LLM that runs its *prefill* on NVIDIA GPUs and the *attention* stage on LPX decode accelerators. The goal: <1 ms per token latency while keeping cost below $0.02/token.

**Action**  
I scoped requirements, then architected a two‑step microservice chain in **Amazon ECS Fargate** with **SQS** as the orchestration queue.  

* **Prefill Service (GPU)** – Runs on an `g5dn.xlarge` cluster; receives the prompt via SQS, executes the transformer encoder, and streams partial hidden states to the attention service over **AWS AppMesh** using gRPC.  
* **Attention Service (LPX)** – Deployed on a custom EC2 `c6i.large` with attached LPX hardware; consumes the stream, performs beam‑search decoding, and writes results back to S3 for downstream consumers.

I used **CloudWatch Metrics** to enforce SLA: 95 % of tokens <0.9 ms. I also added an auto‑scaling policy triggered by queue depth to keep costs in check (average $18/hr per instance).  

**Result**  
The pipeline achieved a *99th percentile* latency of **0.85 ms/token** and reduced inference cost from $0.04 to $0.015/token, surpassing the target by 25 %. Post‑deployment A/B testing showed a 12 % increase in user session duration on our chat platform.

---

### Leadership Principles  
- **Customer Obsession** – Delivered sub‑ms latency, directly improving UX.  
- **Ownership** – Led cross‑team coordination (GPU ops, LPX team) and handled post‑mortem of an initial 1.2 s spike, iterating on queue backpressure.

### Bar‑raiser cues  
- Deep dive into bottlenecks: traced GPU memory pressure vs. LPX compute stalls.  
- Quantified impact: cost reduction, latency metrics.  
- Learned from failure: added health checks to prevent single‑point failures in the streaming path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
