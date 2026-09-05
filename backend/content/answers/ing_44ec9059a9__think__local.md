---
qid: ing_44ec9059a9__think__local
question: What Limits Throughput? — Latency vs Throughput vs Bandwidth | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 454
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:07:25-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
- *What* is meant by “limits throughput” in a ML system?  
  - Is it inference latency, training batch size, data‑movement bandwidth, or compute constraints?  
- Assume we’re talking about end‑to‑end inference pipelines on modern GPUs/TPUs.  
- Define key terms: *latency* (time per request), *throughput* (requests/sec), *bandwidth* (data transfer rate).  

**2. Adopt a mental model**  
- Treat the pipeline as a series of stages: data ingestion → preprocessing → compute kernel → post‑processing → output.  
- Each stage has its own speed and resource constraints; overall throughput is bounded by the slowest (bottleneck) stage, similar to the “critical path” in queuing theory.  

**3. Step‑by‑step reasoning**  
1. Identify all stages that consume resources.  
2. Measure or estimate their *service time* per request.  
3. For each resource (CPU, GPU, memory bus), compute its *maximum utilization*.  
4. The stage with the longest service time (or lowest bandwidth) dictates max throughput.  
5. Use Little’s Law (L = λW) to relate latency (W), arrival rate (λ), and queue length (L).  

**4. Common traps**  
- Confusing *latency* with *throughput*: low latency does not guarantee high throughput if the pipeline is serial.  
- Ignoring batch‑size effects: larger batches can increase GPU utilization but also raise latency.  
- Overlooking memory bandwidth: even a fast GPU cannot sustain throughput if data transfer stalls.  

**5. Sanity‑check & communicate**  
- Verify that reducing the bottleneck stage’s service time (e.g., by model pruning or faster IO) actually raises overall throughput.  
- Present results with a simple diagram: pipeline stages → bottleneck highlighted, equations showing λ = 1 / max(service time).  

By following this structured approach, you can systematically identify and quantify what limits throughput in any ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
