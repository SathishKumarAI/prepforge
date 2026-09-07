---
qid: ing_261145a420__aws__local
question: 'Explain: The Math — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 430
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:23-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
When I joined the AI Lab as a full‑time engineer, we were asked to reduce inference latency of our LLM from 1.8 s per token to under 0.5 s for production workloads while keeping accuracy within 1 % of the baseline.  

**Action (Dive Deep, Bias for Action)**  
I first profiled the transformer stack on a single EC2 g4dn.xlarge GPU using *nvprof* and discovered that attention matrix construction consumed ~35 % of runtime due to redundant tensor copies. I redesigned the kernel to use **FlashAttention‑2** from NVIDIA, eliminating the copy step and enabling fused softmax & scaling in one pass. I also switched the model deployment from a monolithic Docker image to a microservice architecture on **Amazon SageMaker** with *Inference Scheduler* for autoscaling. For persistence of weights, I stored them in **S3 Glacier Deep Archive** (cost‑effective) and streamed shards into **EFS** at request time, keeping the container footprint <200 MB.  

**Result (Deliver Results)**  
Latency dropped to 0.42 s per token—a 76 % improvement—while CPU usage fell from 70 % to 30 %. The cost of inference decreased by 35 % due to reduced GPU hours, and we achieved a 99.2 % accuracy retention.  

**Bar‑raiser takeaways**  
- Demonstrated *ownership* by re‑architecting the entire inference pipeline.  
- Showed *deep dive* with profiling data and kernel optimizations.  
- Quantified impact with clear latency, cost, and accuracy metrics.  
- Learned from a failed attempt to use a custom CUDA kernel that lacked proper memory pooling; I pivoted quickly to FlashAttention, illustrating agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
