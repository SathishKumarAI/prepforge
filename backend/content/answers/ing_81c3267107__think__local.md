---
qid: ing_81c3267107__think__local
question: 'Explain: Summary — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 522
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:33:41-05:00'
sources: []
---

**1. Clarify the scope & assumptions**

- *What is being compared?*  
  - **Latency:** time from request start to first response byte.  
  - **Throughput:** amount of data processed per unit time (e.g., requests/sec).  
  - **Bandwidth:** raw network capacity (bits/s).  
- Assume a typical ML inference pipeline: client → edge / cloud → model server → output.

**2. Adopt a mental framework**

Treat the system as a *pipeline* with stages:
1. Data transfer (network)  
2. Pre‑processing & batching  
3. Model execution  
4. Post‑processing & response

Each stage has its own latency, throughput, and bandwidth characteristics.

**3. Reason step by step**

- **Latency** is dominated by the slowest single‑stage delay; focus on reducing per‑request processing time (e.g., smaller batches, faster hardware).  
- **Throughput** grows with parallelism and batching: more requests processed simultaneously → higher requests/sec, but may increase latency.  
- **Bandwidth** limits how fast data can move in/out of the model server; high bandwidth enables larger batches or richer inputs without becoming a bottleneck.

Map trade‑offs:
- Increasing batch size ↑ throughput ↓ per‑request latency (due to queueing).  
- Using faster interconnects ↑ bandwidth → lower transfer latency, but may still be limited by compute.  

**4. Common traps**

- Confusing *bandwidth* with *throughput*: high bandwidth doesn’t guarantee high throughput if CPU is the bottleneck.  
- Ignoring queuing delays when batching: large batches can inflate latency even if compute time per batch shrinks.  
- Over‑optimizing one metric while neglecting others (e.g., squeezing latency at the cost of throughput).

**5. Sanity‑check & communicate**

- Sketch a simple diagram labeling each stage’s delay, bandwidth, and capacity.  
- Run a quick calculation: e.g., 1 Gbps link → ~125 MB/s; if input size is 10 MB, transfer takes 0.08 s.  
- Explain that in ML inference, *latency* matters for real‑time apps, *throughput* for batch jobs, and *bandwidth* is the underlying resource that enables both.

This structured approach keeps the explanation clear and reusable for any system design discussion involving latency, throughput, and bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
