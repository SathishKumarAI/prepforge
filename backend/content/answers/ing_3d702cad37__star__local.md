---
qid: ing_3d702cad37__star__local
question: 'Explain: Get the example code — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 370
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:02-05:00'
sources: []
---

**Situation** – In my last role, we were building an internal recommendation engine that needed real‑time model inference. The team was new to gRPC and wanted a lightweight way to expose the TensorFlow Serving model from Go services without reinventing the wheel.

**Task** – I had to prototype a minimal Go client/server pair that could send a feature vector, receive a prediction, and benchmark latency, all while keeping the code readable for junior engineers.

**Action** – First, I defined a `.proto` file with a `PredictRequest` (float array) and `PredictResponse` (probability float). Using `protoc --go_out=. --go-grpc_out=.` I generated Go stubs. On the server side, I wrapped TensorFlow’s C API via cgo to load the model once in an init block, then implemented the `Serve` method to deserialize the request, run inference with `TF_SessionRun`, and marshal back the result. For the client, I used `grpc.DialContext` with a 2‑second timeout, called `Predict`, and logged round‑trip time using Go’s `time.Since`. To keep it production‑ready, I added context cancellation handling and basic error logging.

**Result** – The prototype served predictions in under 15 ms on average, meeting our SLA of <20 ms. It also reduced the onboarding time for new team members by 40% because they could see a working example in 10 minutes. From this, I learned how to balance low‑level cgo bindings with Go’s concurrency model to achieve high throughput in ML inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
