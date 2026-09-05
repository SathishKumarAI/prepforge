---
qid: ing_11a1b9e83f__star__local
question: 'Explain: Calling service methods — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:56-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with adding a recommendation engine to our mobile app. The backend was written in Go and we decided to expose the model inference via gRPC so that the iOS/Android clients could stay lightweight.

**Task**  
I had to design, implement, and document the service methods for `Predict` and `Explain`, ensuring low latency (<50 ms) while handling high throughput (≈5k requests/s).

**Action**  
First I defined a `.proto` file with two RPCs: `rpc Predict(PredictRequest) returns (PredictResponse)` and `rpc Explain(ExplainRequest) returns (stream ExplainChunk)`. Using the Go plugin (`protoc-gen-go`) I generated strongly typed stubs. On the server side I wrapped our TensorFlow model in a singleton to avoid re‑loading, then implemented the handlers with context timeouts and graceful shutdown hooks. For streaming explanations I used `grpc.ServerStream` to yield chunks as the model traversed decision trees. I also added OpenTelemetry tracing and Prometheus metrics (`grpc_server_handling_seconds`, `grpc_server_sent_messages`) to monitor latency.

**Result**  
The service handled 5,200 QPS with an average round‑trip of 38 ms, beating our SLA by 25%. The streaming explain API reduced client memory usage by 60% compared to a single payload. I learned how gRPC’s code generation and Go’s concurrency model make rapid, type‑safe microservices possible while keeping observability in the loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
