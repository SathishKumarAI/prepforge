---
qid: ing_d170db24f2__fp__local
question: 'Explain: Serving example — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 431
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:25:53-05:00'
sources: []
---

**Why a container‑based serving pipeline is inevitable**

A trained model is just a function *f(x)* that maps inputs to predictions.  
In production we must expose *f* as a **stateless microservice**:  
1. Clients send HTTP/GRPC requests → 2. The service reads the request, runs *f*, returns JSON.  

If the runtime environment (Python, CUDA libs, model graph) differs between training and inference machines, the service will fail or be slow. Docker packages the exact OS + libraries into a reproducible image; TensorFlow Serving is a ready‑made HTTP/GRPC server that can load any `SavedModel`. Thus **Docker + TF Serving = deterministic, isolated, scalable serving**.

**Connecting to TFX**

TFX orchestrates training pipelines (data ingestion → preprocessing → model training).  
During pipeline execution, the trained artifact (`model.tar.gz`) is pushed to a GCS bucket.  
The *serving* component pulls this artifact, builds a Docker image that contains:

```
FROM tensorflow/serving:2.x
COPY /path/to/model /models/my_model/
ENV MODEL_NAME=my_model
```

When the pipeline finishes, TFX triggers a container‑deployment job (e.g., on GKE or Cloud Run).  
Thus **TFX + TF Serving + Docker** forms a fully automated *train‑to‑serve* loop.

**Non‑obvious insight**

Because TensorFlow Serving loads models lazily, you can host **multiple versions** of the same model in one container (by mounting several subdirectories and setting `MODEL_BASE_PATH`). Requests can then be routed to specific versions via HTTP headers (`X-Model-Version`) without redeploying. This version‑skew handling is invisible to developers but essential for A/B testing, gradual rollouts, or shadow traffic experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
