---
qid: ing_3d702cad37__fp__local
question: 'Explain: Get the example code — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 705
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:02-05:00'
sources: []
---

### Why gRPC is useful for ML pipelines

Machine‑learning workflows often need **low‑latency** communication between services (model servers, feature stores, inference endpoints).  
The core problem: *how to send typed requests and responses efficiently over a network while still being language‑agnostic?*  

gRPC solves it by:

1. **IDL → Code Generation** – A `.proto` file defines the request/response schema once; both client and server compile to native types, guaranteeing type safety.
2. **HTTP/2 Transport** – Enables multiplexed streams and flow control, so a single TCP connection can carry many concurrent inference calls without head‑of‑line blocking—critical for real‑time predictions.
3. **Streaming APIs** – Allows the model to stream partial results (e.g., token probabilities) back to the caller as they are produced.

The deeper principle is *information preservation*: by serializing with Protocol Buffers, gRPC keeps data compact and self‑describing, reducing bandwidth while keeping semantics intact across heterogeneous systems.

---

## Minimal Go example

```proto
// model.proto
syntax = "proto3";

package ml;

service Predictor {
  rpc Predict(PredictRequest) returns (PredictResponse);
}

message PredictRequest {
  string input_text = 1;
}

message PredictResponse {
  repeated float logits = 1;   // e.g., softmax outputs
}
```

```go
// server/main.go
package main

import (
    "context"
    "log"
    "net"

    pb "example.com/ml/model" // generated from model.proto
    "google.golang.org/grpc"
)

type predictorServer struct{ pb.UnimplementedPredictorServer }

func (s *predictorServer) Predict(ctx context.Context, req *pb.PredictRequest) (*pb.PredictResponse, error) {
    // Dummy inference: return fixed logits
    return &pb.PredictResponse{Logits: []float32{0.1, 0.9}}, nil
}

func main() {
    lis, _ := net.Listen("tcp", ":50051")
    srv := grpc.NewServer()
    pb.RegisterPredictorServer(srv, &predictorServer{})
    log.Println("gRPC server listening on :50051")
    srv.Serve(lis)
}
```

```go
// client/main.go
package main

import (
    "context"
    "log"

    pb "example.com/ml/model"
    "google.golang.org/grpc"
)

func main() {
    conn, _ := grpc.Dial("localhost:50051", grpc.WithInsecure())
    defer conn.Close()
    cli := pb.NewPredictorClient(conn)
    resp, err := cli.Predict(context.Background(), &pb.PredictRequest{InputText: "hello"})
    if err != nil { log.Fatal(err) }
    log.Printf("Logits: %v\n", resp.Logits)
}
```

**Non‑obvious insight:**  
Because the `.proto` schema is compiled into Go structs, you can *add new fields* later without breaking existing binaries—forward/backward compatibility is baked in. This makes gRPC an ideal glue for evolving ML services where feature sets change frequently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
