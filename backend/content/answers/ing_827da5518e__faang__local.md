---
qid: ing_827da5518e__faang__local
question: 'Explain: Latency Numbers Every Programmer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 726
total_tokens: 959
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:25-05:00'
sources: []
---

**1️⃣ Clarify**

> *Problem:* “Latency numbers every programmer should know” – we’re asked to list key latency benchmarks that matter when designing ML systems (data‑inference pipelines, model serving, batch jobs).  
> *Assumptions:*  
> • You have a typical cloud‑based inference stack (API → load balancer → GPU/CPU pod → storage).  
> • Latency is measured in milliseconds for real‑time requests and seconds/minutes for batch.

**2️⃣ Approach**

1. Enumerate common latency tiers.  
2. Explain each tier’s practical meaning.  
3. Provide typical values per cloud provider or hardware.  
4. Highlight where ML workloads hit these limits.

**3️⃣ Depth (Core Answer)**

| Latency Tier | Typical Value | What it Means for ML | Example Use‑Case |
|--------------|---------------|----------------------|------------------|
| **Sub‑ms**   | < 1 ms        | Network stack, serialization overhead. | High‑frequency trading, low‑latency inference on edge devices. |
| **Low‑Latency** | 1–10 ms     | GPU/CPU inference (single forward pass). | Real‑time recommendation, live video captioning. |
| **Interactive** | 10–100 ms   | End‑to‑end API call with batching & model warm‑up. | Chatbot responses, mobile app predictions. |
| **Responsive** | 100–500 ms  | Model serving + data fetch from DB/Blob. | E‑commerce search ranking, medical image classification on cloud. |
| **Batch**    | > 500 ms (seconds) | Large‑scale training or inference jobs. | Periodic model retraining, nightly analytics. |

- **GPU vs CPU:** A single 3090 can do ~10–20 ms per BERT forward pass; a V100 may push to < 5 ms with batching of 32.
- **Cloud SLA:** AWS Lambda cold start ≈ 200 ms; GCP Cloud Run warm ≈ 50 ms.  
- **Edge devices:** Apple’s Core ML often stays below 10 ms for small models.

**4️⃣ Edge Cases**

| Scenario | Break‑points |
|----------|--------------|
| Cold starts in serverless | > 300 ms → user perceives lag |
| Model size > 100 MB on mobile | Serialization + load time ≈ 1–2 s |
| Distributed inference across regions | Network jitter pushes > 200 ms |

Testing: use *tracing* (OpenTelemetry) to isolate network vs compute; benchmark with *mlperf* suites.

**5️⃣ Optimize & Communicate**

- **Batching & Warm‑up:** Keep a pool of warm GPU contexts → reduce from 20 ms to ~5 ms.  
- **Quantization / pruning:** Cut model size, speeding up inference by 2–3×.  
- **Edge deployment:** Offload critical latencies to on‑device models (e.g., TFLite).  

*When explaining:* start with the business impact (“a 10 ms delay can cost $X per day”), then drill into technical knobs, and finish with a quick sanity check for the target environment. This demonstrates structured reasoning, depth, and clear communication—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
