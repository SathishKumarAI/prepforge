---
qid: ing_96f8ffed80__faang__local
question: 'Explain: Ultra-low latency Speech to Text for real-time agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 530
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:36:23-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a *speech‑to‑text* pipeline that delivers transcriptions with ultra‑low latency (≤ 50 ms) for real‑time customer‑service agents. I’ll assume: • Input is a continuous audio stream from a microphone; • The system must run on edge devices or low‑latency servers; • Accuracy comparable to commercial ASR (> 90 % WER); • We can use pretrained models but need to optimize inference.

**Approach**  
1. **Front‑end preprocessing** – window the audio into short chunks (e.g., 20–30 ms) with overlap.  
2. **Feature extraction** – compute log‑Mel spectrograms or raw waveform embeddings using a lightweight CNN.  
3. **Model** – use an online, streaming Transformer (e.g., QuartzNet/Conformer with incremental self‑attention). Replace full‑context attention with causal masking and cache key/value tensors to avoid recomputation.  
4. **Decoding** – implement a beam‑search decoder that runs per chunk, feeding partial hypotheses forward; use language‑model rescoring only on final segments.  
5. **Hardware acceleration** – quantize weights (int8), fuse ops, and deploy on GPU/TPU or DSP to keep inference < 10 ms per chunk.

**Depth**  
- Causal attention reduces latency from O(n²) to O(1) per new frame by reusing cached keys/values.  
- Chunk‑wise decoding keeps buffer size minimal; a 20 ms hop + 10 ms processing ≈ 30 ms total.  
- Quantization error < 2 % WER if fine‑tuned on the target domain.  
- Complexity: O(L) per frame where L is model depth; memory ≈ O(L * batch_size).

**Edge Cases**  
- Long pauses or background noise may cause buffer drift → add silence detection and dynamic chunk resizing.  
- Sudden speaker changes require rapid adaptation → maintain multiple hypothesis streams.

**Optimize & Communicate**  
I’d iterate on chunk size (trade‑off latency vs. context), test on real traffic, and profile GPU usage to spot bottlenecks. I would explain that the key is *causal attention + cached tensors*, enabling sub‑50 ms inference while preserving accuracy—exactly what a FAANG interviewer looks for: structured reasoning, deep technical detail, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
