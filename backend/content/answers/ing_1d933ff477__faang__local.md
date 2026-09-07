---
qid: ing_1d933ff477__faang__local
question: 'Explain: What is gRPC? When should we use — What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 561
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise explanation of **gRPC**, its relation to **RPC (Remote Procedure Call)**, and when it’s appropriate to use it in ML systems.

**Approach**  
1. Define RPC generically.  
2. Introduce gRPC as a modern implementation built on HTTP/2 + protobuf.  
3. Highlight key ML‑specific benefits: low latency, streaming, schema evolution.  
4. Give concrete scenarios (model inference pipelines, feature store services).  
5. Summarize trade‑offs and when to choose alternatives.

**Depth**  

- **RPC** is a client–server paradigm where a caller invokes a procedure on a remote machine as if it were local; the call abstracts network transport.  
- **gRPC** (Google Remote Procedure Call) is Google’s high‑performance open‑source framework that implements RPC over HTTP/2, using Protocol Buffers for serialization.  
  - *Benefits*: binary payloads → ~10× smaller than JSON; bi‑directional streaming; flow control and multiplexing via HTTP/2; built‑in authentication, load balancing, retries.  
  - *ML use‑cases*:  
    - **Inference microservices**: a lightweight client sends an image tensor to a TensorFlow Serving gRPC endpoint.  
    - **Feature store pipelines**: streaming feature ingestion from Kafka to a gRPC‑based storage layer with back‑pressure support.  
    - **Model training orchestration**: worker nodes communicate status and gradients over gRPC streams.

- **When to use?**  
  - Low‑latency, high‑throughput ML workloads on a single data center or cloud VPC.  
  - Need for streaming (e.g., real‑time predictions).  
  - Strongly typed contracts are valuable (auto‑generated stubs).

- **Alternatives**: REST/JSON for simple CRUD APIs; Thrift for legacy codebases; custom sockets if extreme latency is critical.

**Edge Cases**  
- gRPC over HTTP/2 may fail on older proxies that don’t support it.  
- Binary protobufs make debugging harder; need proper logging.  
- Stateful streaming requires careful timeout handling to avoid resource leaks.

**Optimize & Communicate**  
Emphasize the trade‑off: gRPC gives speed and type safety at the cost of a steeper learning curve. In a production ML stack, I’d prototype with gRPC for inference services, monitor latency (e.g., 1 ms vs 10 ms), and iterate on schema changes via protobuf evolution rules. This structured reasoning aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
