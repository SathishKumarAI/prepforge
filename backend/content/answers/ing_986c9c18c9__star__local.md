---
qid: ing_986c9c18c9__star__local
question: 'Explain: So we tried moving to the multi-process — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 332
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:30-05:00'
sources: []
---

**Situation:**  
At a mid‑size video platform, our recommendation engine was hitting CPU saturation during peak traffic at the Seattle Conference on Scalability. The single‑process model we had used in production struggled with concurrent inference requests, causing latency to climb from 120 ms to over 600 ms and increasing error rates by 3%.

**Task:**  
I needed to redesign the serving pipeline so that it could handle a 4× traffic surge while keeping inference latency under 200 ms and maintaining model accuracy.

**Action:**  
I introduced a multi‑process architecture using Python’s `multiprocessing` pool combined with ZeroMQ for inter‑process communication. Each worker process loaded its own instance of the TensorFlow model to avoid GIL contention, and I added a lightweight request queue that balanced load across workers. To reduce memory overhead, I leveraged shared GPU memory via NVIDIA’s CUDA Unified Memory, allowing all processes to access the same inference buffers without duplication. I also implemented health‑check probes and graceful scaling hooks in Kubernetes so new worker pods could be spun up or down automatically based on CPU usage.

**Result:**  
After deployment, average latency dropped to 160 ms under peak load, and throughput increased from 1,200 requests/second to 5,800. Error rates fell below 0.2%. I learned that careful process isolation combined with shared GPU memory can dramatically improve scalability without sacrificing accuracy, and that automated health checks are essential for maintaining reliability in a dynamic environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
