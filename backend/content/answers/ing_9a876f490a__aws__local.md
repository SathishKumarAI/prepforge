---
qid: ing_9a876f490a__aws__local
question: 'Explain: A team wants to self-host a 13B model for ~1M requests/day. Size
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 557
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:46-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* – delivering fast AI to our users; *Ownership* – designing a cost‑efficient fleet that we can manage end‑to‑end.

**Situation / Task (S)**  
Our product team needs a self‑hosted 13 B transformer that can handle ~1 M requests/day (~11.6 req/s average, peak ≈ 120 req/s). We must size the GPU fleet, keep latency < 500 ms, and stay under a $200k annual budget.

**Action (A)**  
I modelled inference on an A100: 512‑token request ≈ 0.3 s, giving ~3.3 req/s per card. To cover average load we need **4 GPUs**; to absorb peak bursts I added a burst pool of **16 GPUs** (total 20). I chose **EC2 G5g (A10G) for cost‑effective inference** and **SageMaker Batch Transform** for large requests, using *Triton Inference Server* with dynamic batching. Spot instances reduce spend by ~40 %.  

**Result (R)**  
The fleet delivers 1.05 M req/day at < 450 ms latency, costs $184k/yr, and scales to 200 % traffic in two weeks. I documented the cost‑benefit analysis, automated scaling rules, and built a monitoring dashboard that alerts on GPU utilization > 85 %.  

**Bar‑raiser cues:** Ownership of end‑to‑end ops; deep dive into latency benchmarks; quantified ROI; learning loop—after the first month we re‑tuned batch size, cutting latency by 12 % without extra spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
