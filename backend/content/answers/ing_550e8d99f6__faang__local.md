---
qid: ing_550e8d99f6__faang__local
question: 'Explain: Running a serving image — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 488
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:01-05:00'
sources: []
---

**Clarify**  
You want to expose a trained TF model as an HTTP/GRPC endpoint using **TensorFlow Serving** packaged in Docker, and you’re curious how this fits into the broader TFX pipeline. I’ll assume: (1) the model is already exported via `SavedModel` or Keras H5; (2) you have a Docker host; (3) you want minimal downtime and version‑aware serving.

**Approach**  
1. Export the model to `/models/<name>/1`.  
2. Write a `Dockerfile` that pulls `tensorflow/serving`, copies the exported model, and exposes port 8500 (REST) / 8501 (gRPC).  
3. Run `docker run -p 8500:8500 -p 8501:8501 --name tf_serving <image>`.  
4. In TFX, add a **Serving** step that pulls this image and registers the model with a model registry (e.g., Vertex AI or MLflow).  

**Depth**  
- `SavedModel` folder must contain `variables/`, `assets/`, and `saved_model.pb`.  
- Dockerfile example:  
  ```dockerfile
  FROM tensorflow/serving:latest
  COPY /models/my_model/1 /models/my_model/
  CMD ["tensorflow_model_server", "--rest_api_port=8500",
       "--model_name=my_model","--model_base_path=/models/my_model"]
  ```  
- Complexity is O(1) per request; model loading cost is paid once.  
- TFX `Serving` step can use `tfx.components.Pusher`, which pushes the artifact to a serving cluster.

**Edge Cases**  
- Model version mismatch → returns 404.  
- Large model > Docker image size → use external volume or GCS mount.  
- Schema drift → add validation before pushing.

**Optimize & Communicate**  
Use multi‑stage builds to keep images lean, enable health checks (`--rest_api_port=8500` with `/v1/models/my_model/metadata`), and expose a version endpoint for blue‑green deployments. Explain that this pattern decouples training from serving, allowing TFX pipelines to push new versions without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
