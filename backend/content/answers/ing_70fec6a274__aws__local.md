---
qid: ing_70fec6a274__aws__local
question: 'Explain: Key MoE Nuances for System Design: — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 507
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:05-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of our on‑prem LLM inference stack to cut latency by 30 % while keeping per‑token cost under $0.0004. The model used a *Mixture‑of‑Experts (MoE)* architecture; however, we observed uneven expert utilization and memory thrashing.

**Action – Technical Design**  
1. **Expert routing**: Replaced the naïve hash‑based router with a learned *router* that outputs soft probabilities over 64 experts. Implemented on **AWS Lambda@Edge** to offload routing logic close to users, reducing round‑trip time by ~12 ms.  
2. **Dynamic batching**: Added an *adaptive batch scheduler* in **Amazon ECS Fargate**, scaling from 1–8 containers based on queue length (95th percentile latency < 150 ms).  
3. **Memory sharding**: Leveraged **AWS Nitro Enclaves** to isolate expert tensors, allowing each container to keep only the top‑k experts (~10) in GPU memory, cutting peak memory from 48 GB to 18 GB and lowering EC2 instance cost by 25 %.  
4. **Observability**: Instrumented with **AWS CloudWatch Metrics** (expert load, cache hit rate). Set up alerts for skew >15 % and auto‑scale experts accordingly.

**Result**  
- Latency dropped from 320 ms to 210 ms (34 % improvement).  
- Cost per token fell from $0.0006 to $0.00035 (42 % savings).  
- Expert utilization balanced within ±3 %, reducing wasteful GPU usage.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster, cheaper inference for end‑users.  
- **Ownership & Dive Deep**: Took full ownership of the MoE pipeline and dug into routing, memory, and scaling nuances to engineer a robust solution.  

Bar‑raiser notes: Looked for clear ownership, depth in understanding MoE internals, quantifiable impact, and how failures (e.g., initial routing bias) were diagnosed and corrected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
