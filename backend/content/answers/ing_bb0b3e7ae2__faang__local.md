---
qid: ing_bb0b3e7ae2__faang__local
question: 'Explain: Latency Comparison Numbers — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 492
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:42-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain what “Latency‑Comparison Numbers” (LCNs) are in the context of ML inference pipelines. Confirm that we’re talking about *per‑sample* latency metrics used for model serving benchmarks and that the numbers should be comparable across models, hardware, and frameworks.

---

**Approach**  
1. Define LCNs as a normalized latency metric (ms per inference).  
2. Explain how they are derived: raw wall‑clock time → remove warm‑up & batch effects → average over many runs.  
3. Show why they matter for ML ops: SLA, cost, and user experience.

---

**Depth**  

| Component | What it measures | Typical value range |
|-----------|------------------|---------------------|
| **Cold start latency** | Time to load model into memory | 100 ms–2 s |
| **Warm inference latency** | Single‑sample inference after warm‑up | < 10 ms (GPU) / 50 ms (CPU) |
| **Batch latency** | Latency per sample when processing a batch of *B* | ~O(1/B) improvement |

LCNs are calculated as:  

\[
\text{LCN} = \frac{\sum_{i=1}^{N} t_i}{N}
\]

where \(t_i\) is the inference time for sample *i*.  
They’re platform‑agnostic because they abstract away hardware clock differences and focus on the *effective* user‑perceived delay.

---

**Edge Cases**  

* **Non‑deterministic kernels** → use many repeats.  
* **Background load** → run in isolation or record CPU/GPU utilization.  
* **Batch size variability** → report a curve, not a single point.

---

**Optimize & Communicate**  

Highlight that LCNs enable quick “what‑if” analysis: swapping a model for a smaller one reduces cold start by 30 % but increases warm latency by 5 %. Present the trade‑off in a table and recommend profiling tools (e.g., NVIDIA Nsight, TensorRT profiler). Conclude by stressing that LCNs guide capacity planning, autoscaling policies, and SLA guarantees—critical for production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
