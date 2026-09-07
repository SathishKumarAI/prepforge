---
qid: ing_3d702cad37__faang__local
question: 'Explain: Get the example code — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 591
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise **Go + gRPC** example that demonstrates the end‑to‑end flow: defining a protobuf service, generating Go stubs, implementing a server, and writing a client that calls it. Assume we’re using `protoc`, `grpc-go` and a simple “Greeter” RPC.

**Approach**  
1. Create `hello.proto`.  
2. Run `protoc --go_out=. --go-grpc_out=. hello.proto`.  
3. Implement the server (`server.go`).  
4. Write a client (`client.go`).  
5. Run both and observe the RPC.

**Depth**  

```proto
// hello.proto
syntax = "proto3";
package greet;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}
message HelloRequest { string name = 1; }
message HelloReply { string message = 1; }
```

```go
// server.go
package main

import (
	"context"
	"fmt"
	"net"

	pb "example.com/greet" // generated package
	"google.golang.org/grpc"
)

type greeterServer struct{ pb.UnimplementedGreeterServer }

func (s *greeterServer) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "Hello, " + in.Name}, nil
}

func main() {
	lis, _ := net.Listen("tcp", ":50051")
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &greeterServer{})
	fmt.Println("server listening on 50051")
	s.Serve(lis)
}
```

```go
// client.go
package main

import (
	"context"
	"fmt"
	"time"

	pb "example.com/greet"
	"google.golang.org/grpc"
)

func main() {
	conn, _ := grpc.Dial("localhost:50051", grpc.WithInsecure())
	defer conn.Close()
	c := pb.NewGreeterClient(conn)

	resp, _ := c.SayHello(context.Background(), &pb.HelloRequest{Name: "FAANG"})
	fmt.Println(resp.Message) // → Hello, FAANG
}
```

**Edge Cases**  
- Network errors (retry logic).  
- TLS/credentials for production.  
- Service discovery instead of hard‑coded address.

**Optimize & Communicate**  
Explain that in a real system we’d add context timeouts, structured logging, and use `WithTransportCredentials` for security. The example keeps it minimal to illustrate the core gRPC workflow while highlighting where scalability concerns arise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
