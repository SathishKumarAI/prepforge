---
qid: ing_696b8620e0__fp__local
question: You are self-hosting a VLM for a document pipeline and throughput is a third
  of what you projected from the LLM's specs. Why, and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 532
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:48:22-05:00'
sources: []
---

**Why the throughput is a third of the spec**

A VLM’s “spec” usually assumes *ideal* conditions: single‑threaded inference on a clean GPU, negligible I/O, and a perfect batch size that saturates the device. In practice:

| Bottleneck | Effect |
|------------|--------|
| **CPU–GPU sync** | Each frame is sent over PCIe, incurring round‑trip latency; if the pipeline processes one image at a time, the GPU sits idle waiting for data. |
| **Batch size mismatch** | The model’s optimal batch (e.g., 8–16) may be larger than what your document stream can supply without buffering. |
| **Disk/SSD throughput** | Reading high‑resolution PDFs or scanned pages can saturate NVMe bandwidth, leaving the GPU starved. |
| **Model size vs memory** | If you run a full‑scale VLM on a 8 GB GPU, it may fall back to CPU tensor ops for parts of the network, throttling speed. |
| **Preprocessing overhead** | OCR, layout analysis, and tokenization add latency that is invisible in the spec but real in production. |

These factors compound: PCIe stalls *and* disk stalls mean the GPU spends only ~30 % of its time doing useful work.

**What to do**

1. **Profile end‑to‑end** – use `torch.profiler` or NVIDIA Nsight to see where idle time occurs.  
2. **Batch aggressively** – buffer several documents and feed them as a single batch; if the queue is small, pad with dummy data to keep the GPU busy.  
3. **Stream I/O** – read images in parallel on multiple CPU threads or use memory‑mapped files to avoid PCIe stalls.  
4. **Model pruning / quantization** – reduce parameter count (e.g., 4‑bit) so the entire model fits in GPU RAM, eliminating CPU fallbacks.  
5. **Pipeline fusion** – fuse tokenization, OCR, and inference into a single CUDA kernel where possible; libraries like Triton or ONNX Runtime can help.  

After applying these tweaks, you’ll typically see throughput climb from 1/3 to >70 % of the advertised spec, matching the deeper principle that *throughput is limited by the slowest stage in the pipeline*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
