---
qid: ing_eed8404e1a__faang__local
question: 'Explain: Setup — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 499
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:55:23-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick‑start guide on building an ML model in Go, exposing it via gRPC. I’ll assume: *a small inference service (e.g., image classifier), pre‑trained weights shipped with the binary, no heavy GPU work on the server, and a simple client to test.*  

**Approach**  
1. **Model & data** – pick an ONNX or TensorFlow Lite model that Go can load.  
2. **Go inference wrapper** – use `onnxruntime-go` or `tflite-go`. Expose a function `Predict(input []byte) (string, error)` that does preprocessing, runs the session, and post‑processes.  
3. **Define gRPC proto** – one RPC: `Predict(PredictRequest) returns (PredictResponse);` with image bytes and label string.  
4. **Server implementation** – instantiate the model once at startup, serve requests concurrently. Use context for timeouts.  
5. **Client stub** – simple Go client that reads an image file, calls `Predict`, prints result.  

**Depth**  
- *Inference*: load session (`session, _ := onnxruntime.NewSession("model.onnx")`).  
- *Preprocess*: resize to model’s input shape, normalize.  
- *Run*: `output, err := session.Run(map[string]onnx.Value{ "input": tensor })`.  
- *gRPC*: generate Go code with `protoc --go_out=. --go-grpc_out=.`; use `grpc.NewServer()`, register service, listen on port 50051.  
- Complexity: O(1) per request for inference (model size dominates memory).  

**Edge Cases**  
- Malformed image → return error code `INVALID_ARGUMENT`.  
- Model load failure → fatal at startup.  
- High concurrency → ensure session is thread‑safe or use a pool.  

**Optimize & Communicate**  
- Cache preprocessed tensors if same image repeats.  
- Batch requests to amortize session overhead (gRPC streaming).  
- Explain trade‑offs: Go offers low latency and easy deployment, but lacks mature ML libraries; using ONNX bridges that gap. Keep the explanation concise yet complete for a FAANG interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
