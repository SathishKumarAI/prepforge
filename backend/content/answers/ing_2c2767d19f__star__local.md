---
qid: ing_2c2767d19f__star__local
question: 'Explain: Take-home case study — OpenAI Forward Deployed Engineer (FDE)
  Interview Guide | Sample Questions (2026) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 314
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:28-05:00'
sources: []
---

**Situation:**  
At my last role, I was tasked with building a lightweight inference pipeline for an on‑device chatbot that had to stay under 50 ms latency while handling 10k concurrent requests during peak hours.

**Task:**  
I needed to design, prototype, and validate a model deployment strategy that balanced performance, memory footprint, and scalability, all within a two‑week sprint.

**Action:**  
I started by profiling the existing TensorFlow model on a Raspberry Pi cluster. Using ONNX Runtime with GPU acceleration, I pruned 30 % of the weights via magnitude pruning and quantized to int8, reducing size from 200 MB to 60 MB. I then wrapped the inference engine in a FastAPI microservice, added async request handling, and deployed it behind an Envoy edge proxy that cached frequent queries. For scaling, I implemented Kubernetes HPA with custom metrics from Prometheus to spin up replicas only when latency exceeded 40 ms.

**Result:**  
The final deployment met the 50 ms target under peak load, cutting memory usage by 70 % and cost per inference by 45 %. The exercise reinforced that profiling early, aggressive pruning, and thoughtful microservice architecture are key to meeting stringent real‑time AI constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
