---
qid: ing_a592600509__faang__local
question: 'Explain: Pulling a serving image — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 413
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:09:55-05:00'
sources: []
---

**Clarify**  
You want to *deploy* a trained model as a REST/GRPC service using **TensorFlow Serving (TF‑S)** inside Docker and orchestrate it with TFX pipelines.  
Assumptions: the model is a SavedModel, you have Docker/Docker‑Compose available, and you’ll expose an HTTP endpoint for inference.

**Approach**  
1. Build a Docker image that pulls the official `tensorflow/serving` base.  
2. Copy the SavedModel into `/models/<model_name>/1`.  
3. Expose port 8501 (REST) or 8500 (GRPC).  
4. In TFX, add a *Serving* step (`tfx.components.TensorFlowServing`) that pulls this image and registers it with the model registry.

**Depth**  
```dockerfile
# Dockerfile
FROM tensorflow/serving:2.11
COPY my_model /models/my_model/1
ENV MODEL_NAME=my_model
```
Run: `docker build -t tf-serving-my-model .`  
Launch: `docker run --rm -p 8501:8501 tf-serving-my-model`.  
TF‑S automatically watches `/models/<name>/` for new versions. In TFX, the serving step pulls the image via `tf_serving_image` and sets `model_name`.

**Edge Cases**  
- Model version mismatch (serving expects v1 but only v2 present).  
- Network port conflicts in shared hosts.  
- Docker image size blow‑up if unnecessary packages are included.

**Optimize & Communicate**  
Use multi‑stage builds to keep the runtime lean, and pin TensorFlow Serving to a specific minor version for reproducibility. In the interview, I’d emphasize that this pattern decouples model training (TFX) from serving (Docker), enabling CI/CD of models with minimal friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
