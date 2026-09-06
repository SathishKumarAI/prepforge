---
qid: ing_7934da3277__think__local
question: 'Explain: Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 457
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:01:38-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify whether the audience is familiar with networking or just ML pipelines.  
   - Decide if you’ll focus on *system‑level* performance (data ingestion, inference serving) or *algorithmic* aspects (model training).  
   - Note that “bandwidth” often refers to network capacity, while latency/throughput apply to both IO and compute.

**2️⃣ Adopt a clear mental model**  
   - Think of a **pipeline**: input → processing (CPU/GPU/TPU) → output.  
   - Map *latency* = time for one request to traverse the pipeline; *throughput* = number of requests processed per unit time; *bandwidth* = maximum data rate the underlying link or bus can support.

**3️⃣ Step‑by‑step reasoning**  
   1. Define each term precisely in the ML context.  
   2. Illustrate with an example (e.g., a real‑time image classifier).  
   3. Show how latency is bounded by slowest stage; throughput by bottleneck capacity and parallelism.  
   4. Explain bandwidth as the limiting factor for data transfer between disks, network, or device memory.  
   5. Discuss trade‑offs: reducing latency often lowers batch size → lower throughput.

**4️⃣ Common traps to avoid**  
   - Mixing *latency* with *response time* (which may include queuing).  
   - Assuming higher bandwidth automatically means lower latency; they’re independent.  
   - Ignoring that throughput can be increased by batching, even if per‑request latency rises.

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify dimensions: milliseconds vs requests/second vs megabits/sec.  
   - Use a concise diagram or table to compare the three metrics.  
   - End with practical takeaways: choose batch size for desired latency, monitor bandwidth on network links, and profile each pipeline stage to find bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
