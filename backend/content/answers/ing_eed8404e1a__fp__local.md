---
qid: ing_eed8404e1a__fp__local
question: 'Explain: Setup — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 507
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:50-05:00'
sources: []
---

**Why go + gRPC for ML?**  
Machine‑learning inference is a *stateless* request–response problem: a client sends a feature vector, the server returns predictions. The cost of each call is dominated by network latency and serialization overhead. gRPC solves this by combining **protocol buffers** (compact binary format) with HTTP/2 multiplexing, giving minimal round‑trip time and back‑pressure control—exactly what inference pipelines need.

### Setup from first principles

1. **Define the contract** – Write a `.proto` file that describes your model’s input (`FeatureSet`) and output (`Prediction`).  
   ```protobuf
   syntax = "proto3";
   package ml;
   message FeatureSet { repeated float features = 1; }
   message Prediction { repeated float probs = 1; }
   service Inference {
     rpc Predict(FeatureSet) returns (Prediction);
   }
   ```
2. **Generate Go stubs** – `protoc --go_out=. --go-grpc_out=. model.proto`.  
   The compiler guarantees type safety and zero‑copy marshaling, so you never hand‑write serialization logic.

3. **Implement the server** – Wrap your trained model (e.g., TensorFlow SavedModel or ONNX) inside a Go function that satisfies `InferenceServer`.  
   ```go
   func (s *server) Predict(ctx context.Context, req *ml.FeatureSet) (*ml.Prediction, error) {
       probs := s.model.Predict(req.Features)
       return &ml.Prediction{Probs: probs}, nil
   }
   ```
4. **Run the gRPC listener** – `grpc.NewServer()` + `RegisterInferenceServer`.  
5. **Consume from any language** – The same `.proto` yields clients in Python, Java, etc., enabling heterogeneous deployment.

### Non‑obvious insight

Because HTTP/2 streams are *flow‑controlled*, a single gRPC server can serve thousands of concurrent inference requests without thread‑spawning overhead. Go’s goroutine model maps each stream to a lightweight task, letting the runtime schedule efficiently across CPU cores—this is why Go scales so well for high‑throughput ML serving compared to naïve HTTP/1.x servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
