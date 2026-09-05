---
qid: ing_8b827d96d9__star__local
question: 'Explain: Generating client and server code — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 344
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:52-05:00'
sources: []
---

**Situation:**  
In my last role, we had to expose a new recommendation engine as a microservice. The team was already using Go for other services and we wanted the same fast, type‑safe interface that gRPC provides. However, the engineers were unfamiliar with the code generation workflow, so our sprint risked delays.

**Task:**  
I needed to onboard the team, set up protobuf definitions, generate both client and server stubs in Go, and ensure the generated code integrated cleanly into our existing CI pipeline.

**Action:**  
First, I drafted a concise `.proto` file defining `RecommendRequest`, `RecommendResponse`, and the `RecommendationService`. Using `protoc --go_out=. --go-grpc_out=. -I . recommendation.proto`, I generated Go structs and interface stubs. I then added a small server implementation that wrapped our existing business logic, exposing it via gRPC on port 50051. For the client side, I wrote a helper that loads the generated `RecommendationServiceClient` and demonstrates a call in a unit test. Finally, I updated our GitHub Actions workflow to run `protoc` before building, ensuring any proto changes trigger regeneration.

**Result:**  
The code generation step was completed within two days, cutting manual interface coding by 80%. The new service achieved <5 ms latency for recommendation queries and passed all integration tests. I learned how to balance protobuf schema design with Go idioms, and how automated stubs dramatically reduce boilerplate in a fast‑moving team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
