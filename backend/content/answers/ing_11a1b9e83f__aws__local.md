---
qid: ing_11a1b9e83f__aws__local
question: 'Explain: Calling service methods — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 486
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:24-05:00'
sources: []
---

**Situation & Task**  
While revamping our recommendation engine, I had to expose a Go‑based ML inference service over gRPC so that mobile and web clients could fetch predictions with low latency. The goal was to reduce round‑trip time by 30 % compared to the legacy REST API.

**Action**  
1. **Define contract** – Drafted a `.proto` file, specifying `Predict(Request) returns (Response)` and added pagination fields for future batch inference.  
2. **Implement service** – Created a Go server using `google.golang.org/grpc`. The handler loads the latest SageMaker model from S3 into memory once at startup (to avoid cold‑start).  
3. **Deploy on ECS Fargate** – Packaged the binary in Docker, used an Application Load Balancer with gRPC target group, and set idle timeout to 60 s for long‑running inference.  
4. **Observability** – Integrated CloudWatch metrics (`grpc_server_latency_seconds`, `grpc_server_error_count`) and X-Ray tracing for end‑to‑end latency.  
5. **Security & Scaling** – Enabled IAM role for the task, used VPC endpoints to keep traffic in AWS, and set auto‑scaling based on CPU > 70 % (target 50 % utilization).

**Result**  
- Latency dropped from 250 ms (REST) to 170 ms (gRPC).  
- Throughput increased by 45 % under peak load.  
- Cost per inference fell by ~12 % due to reduced network egress and fewer Lambda invocations.

---

### Leadership Principles Highlighted
* **Customer Obsession** – Delivered faster, more reliable predictions for end users.  
* **Dive Deep & Ownership** – Handled every layer from protobuf design to production deployment, continuously iterating on metrics.

> *Bar‑raiser cue*: I quantified impact (latency & cost), showed ownership by managing the full stack, and learned that preloading models in memory mitigates cold starts—an insight I later applied to other services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
