---
qid: ing_6a03a18da6__think__local
question: 'Explain: GPU Serving example — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 506
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:02:04-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
* Ask whether the user needs a conceptual overview or a hands‑on walkthrough (Dockerfile, `docker-compose.yml`, model export).  
* Assume they’re familiar with TensorFlow basics but new to serving and TFX pipelines.

**2️⃣ Adopt a “pipeline‑to‑production” mental model**  
1. *Training* → 2. *Export* → 3. *Serve*.  
TFX fits into the first two steps; TensorFlow Serving (TFS) is the production layer that consumes the exported `SavedModel`. Docker simply packages TFS and its dependencies.

**3️⃣ Step‑by‑step reasoning**  
1. **Train + export**: Use a TFX pipeline (`Trainer`, `Pusher`) to output a `SavedModel` at `/models/<model_name>/1`.  
2. **Docker image**: Start from the official `tensorflow/serving` base, copy the exported model into `/models`.  
3. **Runtime config**: In Docker run or compose, expose port 8500 (gRPC) / 8501 (REST), mount the model directory if needed.  
4. **Serving command**: `tensorflow_model_server --port=8500 --rest_api_port=8501 --model_name=<name> --model_base_path=/models/<name>`.  
5. **Integration with TFX**: The `Pusher` component can push to a Docker registry or directly start the container; the `ModelResolver` fetches the latest version for serving.

**4️⃣ Common pitfalls to avoid**  
* Forgetting the model directory hierarchy (`/model_name/version`).  
* Mixing gRPC and REST ports—both must be exposed.  
* Not handling GPU runtime flags (`--gpu_memory_fraction`, `CUDA_VISIBLE_DEVICES`).  
* Using an outdated TFS image that lacks CUDA support.

**5️⃣ Sanity‑check & verbalize**  
* Verify the container starts: `docker logs`.  
* Send a test request via `curl` to `localhost:8501/v1/models/<name>:predict`.  
* If it works, you’ve successfully linked TFX training → Dockerized TensorFlow Serving.  

Explain these steps verbally in simple terms, then let the user dive into code examples or troubleshoot specific errors they encounter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
