---
qid: ing_6a4de7d586__faang__local
question: 'Explain: Read more — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 480
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:18-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how we *measure and interpret latency* in a machine‑learning system—e.g., the time from receiving an input to returning a prediction.  Assumptions:  
- Batch size = 1 (online inference).  
- We care about both *inference* and *pre‑processing* latency.  

**2️⃣ Approach**  
1. Identify all components that add delay (I/O, deserialization, model load, GPU/CPU compute, post‑process).  
2. Instrument each component with high‑resolution timers.  
3. Aggregate per‑request latency histograms; expose metrics to Prometheus or Cloud Monitoring.  

**3️⃣ Depth**  
- **Inference latency** = `t_gpu_compute + t_preproc + t_postproc`.  
- Compute the 95th/99th percentile to catch tail latencies that affect SLAs.  
- Use *cumulative distribution functions (CDFs)*; e.g., 90 % of requests < 120 ms, 99 % < 350 ms.  
- Compare against target SLA (e.g., < 200 ms).  

**4️⃣ Edge Cases**  
- Cold start: model not in memory → huge latency spike.  
- Model version roll‑outs causing divergent latencies.  
- Batch inference mis‑configurations that hide per‑request tail delays.  
- GPU contention on shared nodes.  

**5️⃣ Optimize & Communicate**  
- **Cache model weights** in RAM or SSD; use *model warm‑up* to reduce cold starts.  
- **Quantize / prune** the network to cut compute time without significant accuracy loss.  
- **Pipeline pre/post‑processing** on GPU (CUDA streams) to overlap with inference.  
- Communicate results: “Our current 99th percentile latency is 320 ms; after quantization and warm‑up, it drops to 190 ms, meeting the SLA.”  

This structured answer shows clear problem framing, systematic measurement, technical depth, awareness of edge cases, and a path to optimization—all key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
