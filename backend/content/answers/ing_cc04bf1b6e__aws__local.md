---
qid: ing_cc04bf1b6e__aws__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — Grpc'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 459
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:14-05:00'
sources: []
---

**Situation & Task (S)**  
While revamping our recommendation service at Acme‑Shop, I discovered that the legacy REST endpoint was throttling under peak traffic. Our goal: reduce latency by 30 % and increase throughput to support a projected 4× user growth in Q3.

**Action (A)**  
I championed migrating from HTTP/1.1 to **gRPC over HTTP/2**. gRPC’s binary framing, multiplexed streams, and header compression cut per‑request overhead by ~50 %. I designed a micro‑service architecture: an API Gateway (Amazon API Gateway v2) fronts gRPC endpoints; traffic is load‑balanced across ECS Fargate tasks using Application Load Balancer (ALB). For state persistence, we leveraged Amazon DynamoDB with fine‑tuned provisioned capacity. We introduced **AWS App Mesh** to handle service‑to‑service retries and circuit breaking without code changes.

**Result (R)**  
Post‑deployment latency dropped from 350 ms to 210 ms (41 % reduction), while throughput rose from 12k RPS to 28k RPS—well above the 30 % target. Cost impact: Fargate usage fell by 18 %, and DynamoDB read/write capacity savings were ~22 %. The change also simplified client SDKs; developers now use a single protobuf definition across iOS, Android, and web.

**Learning & Bar‑raiser Lens**  
- **Ownership**: I took end‑to‑end responsibility for the migration, from design to ops.  
- **Dive Deep**: I benchmarked HTTP/1.1 vs. gRPC under realistic loads, iterating on compression settings until we hit optimal latency.  
- **Quantified Impact**: Metrics above validate business value.  
- **Learning from Failure**: Early tests revealed a subtle race condition in DynamoDB writes; adding idempotent write logic fixed it without downtime.

*Leadership Principles invoked*: Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
