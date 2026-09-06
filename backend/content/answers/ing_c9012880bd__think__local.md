---
qid: ing_c9012880bd__think__local
question: 'Explain: Time-to-first-token for your on-device feature is 1.8 s. Walk
  me through diagnosing and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 682
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:12:50-05:00'
sources: []
---

### 1. Clarify the problem & state assumptions  
- **What is “time‑to‑first‑token”?** The latency from user request to the first output token on the device.  
- **Device specs?** CPU/GPU model, RAM, storage speed, OS version.  
- **Model details?** Size (e.g., 1 B vs 10 B params), quantization level, ONNX/TFLite format, inference engine.  
- **Use case context?** Is this latency acceptable for the UX? Does it vary with input length or content?  

### 2. Adopt a diagnostic framework  
1. **Instrumentation** – add timestamps at key stages: request arrival → preprocessing → model load → first kernel launch → post‑processing → output emission.  
2. **Profiling tools** – use platform‑specific profilers (Android NNAPI, iOS Core ML, Xcode Instruments) to isolate CPU/GPU usage and memory bandwidth.  
3. **Divide & conquer** – separate concerns: I/O, preprocessing, model inference, post‑processing.

### 3. Step‑by‑step reasoning toward a fix  
- **Check I/O latency**: Is the request queued or is there a delay in reading the input buffer?  
- **Preprocessing cost**: Tokenization or embeddings—measure time; replace heavy ops with pre‑computed lookup tables if possible.  
- **Model loading**: If the model is reloaded per request, cache it in memory.  
- **Kernel launch overhead**: Warm up the GPU/NNAPI by running a dummy inference at app start.  
- **Quantization & precision**: Verify that the quantized model runs on the fastest backend (e.g., 8‑bit integer).  
- **Batching**: Even for single requests, batching can reduce kernel launch overhead if supported.  
- **Threading**: Ensure preprocessing and inference run on separate threads to avoid blocking the main UI thread.

### 4. Common traps & wrong turns  
- Assuming latency is solely model size; ignoring I/O or warm‑up delays.  
- Over‑optimizing preprocessing without profiling it first.  
- Forcing a backend that isn’t the fastest for the device (e.g., using CPU instead of GPU).  
- Forgetting to keep the model in RAM between requests.

### 5. Sanity‑check & communicate results  
- **Benchmark**: Run the instrumented flow on several devices and inputs; confirm each component’s time contribution.  
- **Validate UX**: Ensure that after fixes, first token latency meets target (e.g., <0.5 s).  
- **Explain to stakeholders**: “We identified that 70% of the delay comes from model warm‑up on GPU. By caching the model and pre‑warming the backend at launch, we reduced time‑to‑first‑token from 1.8 s to 0.6 s.”  

This structured approach lets you isolate bottlenecks, apply targeted optimizations, and verify improvements systematically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
