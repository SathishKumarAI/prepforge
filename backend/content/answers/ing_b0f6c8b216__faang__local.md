---
qid: ing_b0f6c8b216__faang__local
question: 'Explain: Components of Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 822
total_tokens: 1063
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:44-05:00'
sources: []
---

## Clarify  
We’re asked to describe the *components* that affect **latency** in a ML system, and contrast them with **throughput** and **bandwidth**. I’ll assume we’re talking about end‑to‑end inference latency (data → prediction), not training.

## Approach  
1. List each metric and its definition.  
2. Break down the *pipeline* of an inference request into stages.  
3. Map each stage to the metric that dominates it.  
4. Highlight interactions, trade‑offs, and typical bottlenecks in ML workloads.

## Depth  

| Metric | Definition | Dominant Pipeline Stage(s) |
|--------|------------|---------------------------|
| **Latency** | Time from request arrival to response delivery (ms). | 1️⃣ *Data ingestion* → 2️⃣ *Pre‑processing* → 3️⃣ *Model inference* → 4️⃣ *Post‑processing* → 5️⃣ *Network send*. |
| **Throughput** | Number of requests processed per second. | Parallelism across 1–5; limited by *CPU/GPU* capacity, *batching*, and *queue depth*. |
| **Bandwidth** | Amount of data transmitted per unit time (MB/s). | Primarily the network link between client and inference server; also internal memory bus during feature transfer. |

**Latency Components in Detail**

1. **Input I/O Latency** – disk or sensor read, serialization/deserialization.  
2. **Feature Engineering Latency** – CPU‑bound transforms, embeddings.  
3. **Model Execution Latency** – GPU/TPU inference time; depends on model size, precision (FP32 vs FP16), and batch size.  
4. **Output I/O Latency** – serialization of predictions, network stack overhead.  
5. **Queuing / Scheduling Delay** – if the system throttles or batches requests.

Typical bottlenecks:  
- *Model execution* for large transformers on single‑GPU setups.  
- *I/O* when reading high‑resolution images from slow storage.  
- *Network* when latency is dominated by round‑trip time (e.g., edge deployments).

**Throughput vs Latency Trade‑off**

- Increasing **batch size** boosts throughput but adds latency because the request waits for a full batch.  
- Parallel inference servers raise throughput linearly until I/O or network becomes saturated.

**Bandwidth Relevance**

High bandwidth is essential when:
- Models are streamed (e.g., model zoo), or
- Large feature tensors must be transferred across nodes (distributed inference).

## Edge Cases  

| Scenario | What breaks? | Test |
|----------|--------------|------|
| Ultra‑low latency requirement (<1 ms) | Even CPU pre‑processing dominates; network RTT > 0.5 ms | Measure per‑stage latency with a profiler, simulate 1 ms round‑trip |
| Extremely high throughput (10k req/s) | Queue backlog grows; GPU memory spills | Stress test with varying batch sizes and monitor GPU utilisation |
| Variable input size | Serialization overhead spikes | Benchmark small vs large payloads |

## Optimize & Communicate  

- **Profile** each stage to identify the *critical path*.  
- For latency‑critical paths, consider **model pruning**, **quantization**, or **serving on FPGAs/ASICs**.  
- Use **async I/O** and **zero‑copy buffers** to shave off I/O overhead.  
- Implement **dynamic batching**: keep a small buffer that flushes when either size or timeout is reached, balancing latency vs throughput.

When explaining to interviewers, I’d narrate the pipeline first, then overlay the three metrics, emphasising how they map to concrete stages and trade‑offs. This shows structured thinking, depth of understanding, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
