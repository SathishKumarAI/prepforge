---
qid: ing_77a377943a__faang__local
question: 'Explain: Defining the service — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 555
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:22:01-05:00'
sources: []
---

**Clarify**  
You’re asking how to expose a machine‑learning model (e.g., inference) in Go using gRPC: define the service contract, generate code, implement the server, and consume it from a client.

**Approach**  

1. **Proto design** – sketch `predict.proto` with request/response messages.  
2. **Generate stubs** – run `protoc --go_out=. --go-grpc_out=. predict.proto`.  
3. **Implement server** – load the ML model (e.g., TensorFlow SavedModel) and expose a `Predict(ctx, req)` method.  
4. **Deploy** – start a gRPC listener on a port, register the service, optionally add TLS/metadata interceptors.  
5. **Client** – use generated client to call `Predict`, handle streaming if needed.

**Depth**

```proto
syntax = "proto3";
service Predictor {
  rpc Predict(PredictRequest) returns (PredictResponse);
}
message PredictRequest { repeated float features = 1; }
message PredictResponse { float score = 1; }
```

Go server:

```go
type predictorServer struct{ model *tf.SavedModel }

func (s *predictorServer) Predict(ctx context.Context, req *pb.PredictRequest) (*pb.PredictResponse, error) {
  tensor, _ := tf.NewTensor([]float32(req.Features))
  out, err := s.model.Session.Run(map[tf.Output]*tf.Tensor{inOp: tensor}, []tf.Output{outOp}, nil)
  return &pb.PredictResponse{Score: float32(out[0].Value().(float32))}, err
}
```

Complexity: O(N) per inference; memory cost depends on model size. Trade‑offs: eager vs graph mode, batch streaming for throughput.

**Edge Cases**

- Empty or malformed input → return `InvalidArgument`.  
- Model load failure → server should fail fast.  
- High concurrency → use a pool of sessions or async execution.  
- Versioning → include metadata header with model version.

**Optimize & Communicate**

- Add unary‑interceptor for logging/metrics.  
- Use connection pooling on the client side.  
- Benchmark latency vs batch size; explain why gRPC’s HTTP/2 multiplexing improves throughput.  

By structuring from proto → codegen → server → client and covering edge cases, you demonstrate clear problem solving, depth, and communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
