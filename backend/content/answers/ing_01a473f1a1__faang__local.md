---
qid: ing_01a473f1a1__faang__local
question: 'Explain: Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 443
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:51-05:00'
sources: []
---

**Clarify**  
Latency in ML refers to the time from receiving an input (e.g., image or text) to producing a prediction. Key assumptions: we’re targeting real‑time inference on edge devices or low‑latency services; throughput isn’t the primary metric; and we care about end‑to‑end latency, not just GPU compute time.

**Approach**  
1. Measure raw inference time per sample.  
2. Identify bottlenecks: data loading, preprocessing, model execution, post‑processing.  
3. Optimize each stage (e.g., async I/O, batching, quantization).  
4. Validate against target SLA (e.g., <10 ms).

**Depth**  
- **Model inference:** Use lightweight architectures (MobileNetV2, EfficientNet‑B0) or prune/quantize to 8‑bit integers; this reduces FLOPs and memory bandwidth.  
- **Frameworks & hardware:** TensorRT / ONNX Runtime with CUDA Graphs can cut kernel launch overhead by ~30 %. On CPUs, use vectorized kernels (AVX2).  
- **Data pipeline:** Stream inputs directly into GPU memory via pinned buffers; avoid CPU‑GPU copies.  
- **Latency metrics:** Report median and 95th percentile to capture tail behavior; worst‑case latency is critical for safety systems.

**Edge Cases**  
- Variability in input size (e.g., dynamic image resolutions) can cause cache misses.  
- Model loading time on cold start; pre‑load weights into memory or use lazy initialization.  
- Network congestion if inference is remote; need local caching.

**Optimize & Communicate**  
Iteratively profile with tools like NVIDIA Nsight, then refactor the slowest kernel. Explain trade‑offs: quantization reduces precision but yields ~2× speedup; larger batch sizes improve throughput but hurt latency due to queueing. Conclude by showing that a well‑engineered pipeline can bring inference from 100 ms down to sub‑10 ms while maintaining accuracy within 1–2 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
