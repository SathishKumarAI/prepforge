---
qid: ing_4398fc233d__star__local
question: 'Explain: for actually displaying the pieces i''m not'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:09-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our credit‑risk scoring model was live in production but the UI team couldn’t display the probability of default for each loan applicant because the model output was a raw log‑odds vector from a XGBoost pipeline.

**Task**  
I had to transform those log‑odds into human‑readable probabilities, expose them via an API, and ensure the latency stayed below 50 ms so the checkout flow wouldn’t stall.

**Action**  
First, I wrapped the trained model in a FastAPI service and added a sigmoid layer that converted log‑odds to probabilities. To keep response times low, I serialized the model with ONNX and deployed it on an AWS Lambda function behind API Gateway, using provisioned concurrency. For monitoring, I instrumented Prometheus metrics to track inference latency and error rates. Finally, I wrote unit tests for the probability conversion logic and added a small cache layer (Redis) for repeated applicant IDs.

**Result**  
The new endpoint returned probabilities in under 30 ms on average, cutting checkout friction by 12%. The UI team could now display “Risk Score: 0.73” next to each applicant. I learned the importance of end‑to‑end observability and that a simple mathematical transformation can unlock an otherwise opaque ML model for real users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
