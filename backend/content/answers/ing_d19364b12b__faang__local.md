---
qid: ing_d19364b12b__faang__local
question: 'Explain: What you’re actually trying to do — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 410
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:45-05:00'
sources: []
---

**Clarify**  
You’re being asked to describe the *goal* of a mobile‑system design interview for ML – i.e., what you, as an engineer, aim to build and why. I’ll assume we’re targeting a production‑grade on‑device inference service that is low‑latency, energy‑efficient, and scalable across thousands of devices.

**Approach**  
1. **Define the use case** (e.g., real‑time image classification).  
2. **Set objectives**: latency < 100 ms, battery impact < 5 %/day, model size < 50 MB.  
3. **Identify constraints**: device heterogeneity, limited memory, intermittent connectivity.

**Depth**  
- *Model selection*: TinyML‑friendly architectures (e.g., MobileNetV2, quantized models).  
- *Inference engine*: TensorFlow Lite or ONNX Runtime with GPU/NNAPI acceleration.  
- *Data pipeline*: On‑device preprocessing, optional edge‑cloud sync for updates.  
- *Lifecycle*: OTA model updates, versioning, fallback mechanisms.  
- Complexity: inference O(N) in input size; memory footprint dominated by weights (~O(M)). Trade‑offs between accuracy and resource usage are tuned via quantization or pruning.

**Edge Cases**  
- Sudden device reboot → cache invalidation.  
- Network outage during OTA → resume logic.  
- Model drift → local re‑training triggers.

**Optimize & Communicate**  
Explain that we’ll monitor key metrics (latency, energy) post‑deployment and iterate using A/B tests. Highlight that a modular design (model loader, inference core, data handler) makes it easier to swap components or scale to new hardware. Conclude by stressing the balance between performance, user experience, and maintainability—core to any FAANG mobile ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
