---
qid: ing_464bdcf2db__think__local
question: 'Explain: Latency — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 456
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:10:08-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What is “latency” in ML systems?* Assume we’re talking about end‑to‑end response time for a model inference request.  
   - *Compare to throughput & bandwidth*: throughput = requests per second, bandwidth = data rate (bytes/sec).  
   - *System design context*: inference servers, networking, GPU pipelines.

**2. Adopt a mental model**  
   - Think of the inference pipeline as a series of stages: client → network → load balancer → server queue → compute → response → client.  
   - Latency = sum of delays in each stage; throughput = how many requests can be processed per unit time; bandwidth = volume of data moving through the system.

**3. Step‑by‑step reasoning**  
   1. **Identify bottlenecks**: Is the network latency dominating, or is GPU compute?  
   2. **Relate to queueing theory**: A single slow stage increases overall latency even if others are fast.  
   3. **Throughput vs Latency trade‑off**: Pushing more requests can saturate a GPU, increasing per‑request latency while total throughput rises.  
   4. **Bandwidth considerations**: Large model weights or input data increase bandwidth needs; if bandwidth is limited, both latency and throughput suffer.

**4. Common traps to avoid**  
   - Mixing *latency* with *response time*: the latter includes client processing after receiving data.  
   - Assuming higher throughput always means lower latency—false when queueing delays grow.  
   - Ignoring the impact of *batch size*: larger batches boost throughput but can raise latency.

**5. Sanity‑check & verbalize**  
   - Verify that computed latencies match observed end‑to‑end times.  
   - Communicate: “Latency is the per‑request delay; throughput measures how many requests we serve per second; bandwidth is the data flow rate.” Use a diagram of the pipeline to illustrate where each metric applies, and explain how they interplay in a production ML inference system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
