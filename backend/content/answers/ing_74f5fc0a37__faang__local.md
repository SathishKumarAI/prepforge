---
qid: ing_74f5fc0a37__faang__local
question: 'Explain: Creating your own serving image — TensorFlow Serving with Docker
  \u00a0|\u00a0 TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 442
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:38-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a custom Docker image that runs **TensorFlow Serving** for a model trained in TFX. Assume we have a SavedModel directory, want reproducible deployment, and need to expose gRPC/REST endpoints.

**Approach**  
1. Start from an official TensorFlow‑Serving base image (`tensorflow/serving`).  
2. Copy the SavedModel into `/models/<name>`.  
3. Add a `model_config_list.pbtxt` (or use the command‐line flag) to point to that model.  
4. Expose ports 8500 (REST) and 8501 (gRPC).  
5. Build the image, tag it, and push to a registry.

**Depth**  
```dockerfile
# Dockerfile
FROM tensorflow/serving:2.15.0
WORKDIR /models/my_model
COPY my_savedmodel /models/my_model/
ENV MODEL_NAME=my_model
EXPOSE 8500 8501
CMD ["tensorflow_model_server",
     "--port=8500",
     "--rest_api_port=8501",
     "--model_name=${MODEL_NAME}",
     "--model_base_path=/models/${MODEL_NAME}"]
```
*Complexity*: Docker build is O(size of model). Runtime latency is the same as vanilla serving.  
*Trade‑offs*: Using the base image keeps security updates; adding custom pre/post‑processing would require a separate wrapper service.

**Edge Cases**  
- Model path mismatch → server starts but returns 404.  
- Large models may exceed Docker layer limits; use multi‑stage builds or external storage.  
- Versioning: rename `my_model` directories for A/B testing.

**Optimize & Communicate**  
To reduce image size, strip the base image (`--no-cache`, use slim variants). For scaling, expose health probes and integrate with Kubernetes HPA. I’d explain that this approach gives reproducible, versioned deployments while leveraging TFX’s artifact structure, satisfying both ML ops reliability and production‑grade performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
