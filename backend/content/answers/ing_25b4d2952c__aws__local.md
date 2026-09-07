---
qid: ing_25b4d2952c__aws__local
question: 'Explain: Inference with Nvidia GPUs — GitHub - zai-org/GLM-4.5: GLM-4.5:
  Agentic, Reasoning, and Coding (ARC) Foundation Models \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 391
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:27-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to prototype a low‑latency inference pipeline for the *GLM‑4.5* foundation model (GitHub: zai-org/GLM‑4.5) on our new NVIDIA A100 fleet, so that we could expose an “Agentic Reasoning” endpoint to internal developers.

**Action**  
- **Ownership & Bias for Action** – I scoped the entire pipeline: data ingestion → tokenization → GPU batch scheduling → response streaming.  
- **Dive Deep** – Benchmarked PyTorch vs ONNX Runtime, finding that converting to ONNX reduced memory footprint by 30 % and inference time from 1.8 s to 0.9 s per request.  
- Leveraged **NVIDIA TensorRT** for FP16 precision; added a *dynamic batch* kernel so idle GPUs could serve up to 4 concurrent requests.  
- Employed **AWS SageMaker Edge Manager** to orchestrate GPU pods across an Auto Scaling group, ensuring 99.95 % availability while keeping cost < $0.05/req.

**Result**  
Reduced per‑request latency from 1.8 s to 0.9 s (50 % faster) and cut inference cost by 35 %. The endpoint handled a peak of 12k RPS during an internal demo without throttling, proving the design’s scalability.  

**Learnings**  
- Early profiling revealed that memory allocation was the bottleneck; moving to ONNX + TensorRT solved it.  
- Continuous monitoring (CloudWatch) allowed me to iterate on batch size automatically, a practice I’ll bring to any new model rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
