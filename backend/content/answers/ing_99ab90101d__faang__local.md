---
qid: ing_99ab90101d__faang__local
question: 'Q: How would you estimate GPU requirements for serving a model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 674
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:42:08-05:00'
sources: []
---

**Clarify**  
We’re asked how to *estimate* the GPU resources needed to serve an inference‑only ML model (e.g., a transformer or CNN).  
Key assumptions to confirm:  

1. **Model size & architecture** – number of layers, hidden dims, token length.  
2. **Throughput target** – requests per second (RPS) or latency SLA.  
3. **Batching strategy** – can we batch multiple inferences?  
4. **Hardware baseline** – GPU model, memory bandwidth, driver version.  
5. **Deployment stack** – framework (PyTorch/TensorRT), containerization, network overhead.

---

**Approach**  

1. **Profile a single inference** on the target GPU: measure peak GPU memory usage and latency.  
2. **Determine batch‑size scaling**: run with increasing batch sizes until latency per request stops decreasing or memory saturates.  
3. **Compute resource envelope**:  
   - *Memory*: `max_batch_size × (model + input + output buffers)`.  
   - *Compute*: `latency_per_request / target_latency` → required concurrency, then `RPS × avg_latency / 1000ms`.  
4. **Select GPU count**: divide total compute requirement by per‑GPU throughput from step 1; add a safety factor (~20–30 %) for traffic spikes and driver overhead.  

---

**Depth (core details)**  

- Use *CUDA profiling tools* (`nvprof`, `nsight`) to capture memory peaks.  
- For transformer models, memory ≈ `model_params + 2×input_seq_len × hidden_dim`.  
- Latency is dominated by kernel launch time; batching reduces per‑token latency but increases queueing delay.  
- Compute requirement formula:  

\[
N_{\text{GPUs}} = \left\lceil \frac{\text{RPS} \times \text{latency}_{\text{single}}}{1000\,\text{ms} \times \text{throughput per GPU}} \right\rceil
\]

- Include *GPU‑to‑CPU* copy time if inference occurs in a containerized environment.

---

**Edge Cases**

- **Model checkpoint size > GPU memory** → requires model sharding or CPU offloading.  
- **Variable input lengths** → worst‑case length must be used for safety.  
- **Sudden traffic spikes** → auto‑scaling logic may need to provision spare GPUs.  
- **Mixed precision**: switching from FP32 to BF16 can halve memory but may change latency.

---

**Optimize & Communicate**

- If profiling shows high idle GPU time, consider *model pruning* or *quantization*.  
- For low RPS scenarios, a single high‑memory GPU (e.g., A100) may suffice; for high RPS, multiple GPUs with load balancing.  
- I’d present the estimates in a table: per‑GPU memory, throughput, required count, cost, and safety margin.  
- Explain that this is an iterative process: start with conservative numbers, then adjust after real traffic monitoring.

*Word count: ~230 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
