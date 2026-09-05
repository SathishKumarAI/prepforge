---
qid: ing_347602de66__star__local
question: 'Explain: Creating a stub — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 324
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:12-05:00'
sources: []
---

**Situation** – In my last role I was tasked with adding real‑time analytics to our mobile app. The backend already exposed a gRPC service written in Go, but the Android team needed a quick way to start consuming it while we were still finalizing the API contract.

**Task** – I had to generate a lightweight stub for the client so they could write tests and prototype against a local server without waiting for the full implementation. The stub needed to match the protobuf definition, handle basic authentication, and expose a clear error‑handling interface.

**Action** – I first compiled the `.proto` file with `protoc --go_out=. --go-grpc_out=.`, which produced the Go interfaces and client structs. Then I wrote a minimal server implementation that returned hard‑coded responses for each RPC, using context timeouts to mimic production latency. To keep it realistic, I added a simple in‑memory cache to simulate data persistence and logged each request with `zap`. Finally, I packaged the stub as a separate Go module so the Android team could import it via `go get`.

**Result** – The Android developers were able to start unit testing their UI against the stub within 24 hours. Our integration tests ran 30% faster because they hit the stub instead of the live service, and when we later switched to the real server the transition was seamless. I learned how important it is to expose a faithful yet lightweight contract early in the development cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
