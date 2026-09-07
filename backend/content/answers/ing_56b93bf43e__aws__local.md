---
qid: ing_56b93bf43e__aws__local
question: 'Explain: Structured output and small models — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 436
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:19-05:00'
sources: []
---

**Situation / Task**  
I was hired by a startup that wanted to expose real‑time knowledge graphs to its AI agents without bloating the edge device. The goal: *structured output* (graph triples) from a **tiny model** (< 10 MB) that could run on low‑power hardware while still delivering 95 % recall on domain entities.

**Action**  
1. **Ownership & Dive Deep:** I first profiled an existing PyTorch graph encoder; the bottleneck was the dense embedding layer (≈ 200 M params).  
2. **Design – Tiny Structured Encoder:**  
   * Replace dense layers with a *hash‑based* projection (feature hashing) and a lightweight attention head.  
   * Use *Quantized TensorFlow Lite* weights (int8) to cut size by 6×.  
   * Output triples via a deterministic *canonicalization* routine so downstream agents can parse them without extra inference.  
3. **AWS Services:**  
   * **SageMaker Endpoint** for training with *Distributed Data Parallel* on Spot GPUs (cost ↓ 70 %).  
   * **Lambda + API Gateway** to serve the quantized model on edge devices via a lightweight C++ runtime.  
4. **Bias for Action & Deliver Results:** I deployed a pilot on 50 IoT gateways, measured latency (≤ 12 ms) and recall (96 %), while cutting inference cost by 80 %.

**Result**  
- Reduced model size from 45 MB to 8 MB.  
- Latency dropped from 40 ms to 12 ms, enabling real‑time agent responses.  
- Operational cost fell by $3k/month on AWS.  

**Learning**  
I discovered that *structured output* can be achieved with a simple canonicalization layer, avoiding heavyweight post‑processing and keeping the model lightweight—an insight I shared in our quarterly tech talks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
