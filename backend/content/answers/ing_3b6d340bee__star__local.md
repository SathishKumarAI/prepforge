---
qid: ing_3b6d340bee__star__local
question: 'Explain: Passing additional arguments — TensorFlow Serving with Docker
  \u00a0|\u00a0 TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 383
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:30-05:00'
sources: []
---

**Situation:**  
In a production ML pipeline for an e‑commerce recommendation system, we had to deploy our latest TensorFlow model using TF‑Serving inside Docker on Kubernetes. The team needed the server to accept a custom header (`X-Request-ID`) so that downstream analytics could correlate predictions with user sessions.

**Task:**  
Configure the serving container to forward this additional HTTP header from the client to the inference endpoint without modifying the model code or redeploying the entire stack.

**Action:**  
I added an environment variable `TF_SERVING_ARGS="--rest_api_port=8501 --grpc_port=8500"` and extended it with `--port 9000` for a secondary port. Then, in the Dockerfile, I exposed both ports and modified the entrypoint script to append `--custom_header X-Request-ID` to the TensorFlow Serving command. In Kubernetes, I updated the deployment YAML to include an annotation that passes the header through Nginx ingress with `nginx.ingress.kubernetes.io/configuration-snippet: proxy_set_header X-Request-ID $http_x_request_id;`. Finally, I wrote a small Go microservice that injects the header into each request.

**Result:**  
The model served predictions on two ports with the custom header propagated correctly. Load‑testing showed <5 ms latency overhead, and analytics dashboards began displaying session‑level prediction data. The solution was fully automated in CI/CD, cutting deployment time from 15 minutes to under 2 minutes. I learned how container arguments can be leveraged for cross‑service communication without touching model code, a pattern that proved reusable across other teams’ services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
