---
qid: ing_c9eb549322__think__local
question: 'Explain: Throughput — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 609
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:15:54-05:00'
sources: []
---

**1. Clarify the scope & assumptions**

- *Audience*: Engineers familiar with distributed systems but new to ML‑specific metrics.  
- *Goal*: Show how “latency”, “throughput”, and “bandwidth” differ, why each matters in a ML inference pipeline, and how they interplay in system design.  
- *Assumptions*: We’re talking about a stateless inference service (e.g., model serving), not training.

**2. Mental model / framework**

Think of the system as a **pipeline** with three stages:

1. **Input acquisition** – data arrives over the network → *bandwidth* is the raw data rate we can pull in.
2. **Processing** – each request triggers a forward pass → *latency* is the time from receiving a request to producing a result for that single instance.
3. **Output delivery** – results are sent back → again bandwidth limits how many results per second we can push out.

Throughput is the **aggregate rate of completed requests** (requests/second) and depends on both latency and parallelism across workers.

**3. Step‑by‑step reasoning**

- Start with *bandwidth*: if you need to stream 1 GB/s, your network must support that; otherwise data will queue up regardless of compute speed.
- Next, examine *latency*: a model that takes 10 ms per inference is fine for interactive apps but unacceptable for bulk‑processing jobs. Latency dictates the maximum achievable throughput on a single worker (≈1/latency).
- Then calculate *throughput*:  
  ```text
  Throughput = (# workers) × (1 / latency) 
  ```
  Adjust number of workers or model size until you hit your target throughput without exceeding bandwidth.
- Consider *batching*: processing multiple requests together can reduce per‑request latency but may increase total processing time; find the sweet spot.

**4. Common traps to avoid**

- Mixing up **latency vs. response time** (latency is per request, response time includes queuing).
- Assuming higher bandwidth automatically yields higher throughput; bottlenecks often lie in CPU/GPU or memory.
- Ignoring *batch size* effects: very large batches can saturate GPU memory and hurt latency.

**5. Sanity‑check & communicate**

- **Check consistency**: If latency = 20 ms, one worker can’t exceed 50 req/s; any design claiming >50 req/s per worker is impossible without parallelism.
- **Explain to stakeholders**: “Bandwidth is the pipe size, latency is how long each request sits in the pipe, and throughput is how many requests we can push through that pipe per second.”  
- Use a simple diagram (pipe with labeled sections) to reinforce the analogy.

By following this structured approach you’ll clearly articulate the distinctions and their impact on ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
