---
qid: ing_dc04ef0a54__star__local
question: 'Explain: Stack — Hello, World! - Zerodha Tech Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 366
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:58-05:00'
sources: []
---

**Situation**  
At my last role I was tasked to prototype a real‑time fraud detection model for a fintech startup that handled ~3 M transactions per day. The engineering team used a Docker‑based microservice stack: FastAPI, PostgreSQL, Redis, and a GPU‑enabled inference server on Kubernetes.

**Task**  
I needed to get the first “Hello, World!” of the ML pipeline up and running—i.e., a working end‑to‑end demo that could ingest a transaction payload, score it with our model, and return a risk flag within 200 ms.

**Action**  
1. Built a lightweight XGBoost model in Python, serialized to ONNX for fast inference.  
2. Created a FastAPI endpoint (`/predict`) that pulled the latest model from S3, cached it in Redis, and used `onnxruntime` for GPU acceleration.  
3. Wrote CI/CD scripts (GitHub Actions) to build Docker images, push them to ECR, and deploy via Helm charts on AKS.  
4. Added Prometheus metrics (`request_latency_seconds`, `prediction_success_total`) and set up an alerting rule for latency >250 ms.

**Result**  
The demo served 1 k requests per second with an average latency of 145 ms, beating the SLA by 30%. It also reduced model loading time from 2.5 s to <50 ms thanks to Redis caching. I learned how container orchestration and model serialization trade‑offs impact real‑world performance, and how to expose observability metrics that guide scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
