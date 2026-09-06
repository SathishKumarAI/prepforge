---
qid: ing_b711143686__think__local
question: Why is load balancing LLM inference different from load balancing stateless
  HTTP, and what does a good routing layer do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 489
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:02:41-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “load balancing” in this context?* (distribution of requests across servers)  
   - *Which systems are being compared?* LLM inference vs. stateless HTTP endpoints.  
   - *Assume: LLMs have heavy memory/compute needs, variable latency, and can maintain session‑level state.*

**2. Adopt a mental model**  
   - Think of each request type as a “job” with different resource profiles.  
   - For LLMs, jobs are **long‑running, stateful, and highly sensitive to GPU memory/temperature**; for stateless HTTP, jobs are short, CPU‑bound, and can be queued cheaply.

**3. Step‑by‑step reasoning toward the answer**  
   1. Identify *resource constraints* (GPU memory vs. RAM).  
   2. Recognize *latency variability*: LLMs can stall if a GPU is saturated or overheated.  
   3. Consider *stateful session handling*: LLM inference often requires context reuse; stateless HTTP does not.  
   4. Map these differences to *routing decisions*: weight by current load, temperature, and queued jobs.  
   5. Define what a “good routing layer” must expose: real‑time GPU metrics, batch size limits, session affinity.

**4. Common traps to avoid**  
   - Treating LLM inference as just another HTTP call; ignoring GPU memory fragmentation.  
   - Overlooking the cost of context switching between sessions on the same GPU.  
   - Assuming static weights are enough; dynamic feedback is essential for temperature control.

**5. Sanity‑check & verbalize**  
   - Verify that the routing layer reacts to spikes in GPU temperature or queue depth.  
   - Explain how it balances *throughput* (max requests per second) against *latency* (response time), ensuring no single node becomes a bottleneck.  
   - Highlight that for stateless HTTP, simple round‑robin or least‑connections suffices; for LLMs, the layer must be aware of resource usage and session affinity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
