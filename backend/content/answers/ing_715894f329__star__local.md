---
qid: ing_715894f329__star__local
question: 'Explain: Things like these are very hard to — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 328
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:05-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time recommendation engine that served product suggestions to millions of users each day. The traffic spike during holiday sales caused our latency to jump from an acceptable 120 ms to over 600 ms, and the click‑through rate dropped by 15 %.  

**Task:**  
I was tasked with redesigning the system so it could handle peak loads while keeping inference latency under 200 ms and improving recommendation relevance.  

**Action:**  
First, I profiled the pipeline and discovered that our monolithic TensorFlow model was too heavy for edge inference. I split the model into a lightweight feature extractor (using ONNX runtime) and a boosted tree ranker (XGBoost), both cached in Redis. Next, I introduced a sharded Kafka consumer pool to parallelize data ingestion, and used a GPU‑enabled Kubernetes cluster with autoscaling based on queue depth. To reduce model size, I applied quantization-aware training, cutting the inference footprint by 40 %. Finally, I set up A/B testing with an online learning loop that fed real user interactions back into nightly retraining jobs.  

**Result:**  
Latency dropped to 140 ms under peak load, and click‑through rate increased by 22 % within two weeks of deployment. The exercise taught me the importance of modularizing models for scalability and the power of continuous feedback loops in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
