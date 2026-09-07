---
qid: ing_7195b6ba8e__faang__local
question: 'Explain: Design the serving system for a multimodal assistant (text + image
  input, streaming text out) at hundreds of millions of users.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 579
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:53-05:00'
sources: []
---

**Clarify**  
We need a real‑time multimodal assistant that ingests **text + image** and streams back **text** for ~200 M daily active users (DAU). Key assumptions: 1) latency < 300 ms per request, 2) image size ≤ 5 MB, 3) streaming text up to 50 kB, 4) 99.9% uptime, 5) GDPR/PII compliance.

**Approach**  
1. **Edge Ingestion** – CDN edge proxies receive HTTP/HTTPS requests; perform token‑rate limiting and basic auth.  
2. **Front‑end Gateway** – Stateless microservice that decodes image, stores it in object storage (S3‑compatible) with a short TTL, and queues a task in Kafka.  
3. **Orchestrator Service** – A lightweight “task manager” pulls from Kafka, assigns to the appropriate model worker pool based on modality (text‑only or multimodal).  
4. **Model Workers** – GPU/CPU pods behind an autoscaling group; each runs the inference container exposing a gRPC streaming endpoint. For multimodal, workers first run a vision encoder → tokenizer → language decoder that streams tokens back to the orchestrator.  
5. **Streaming Layer** – Orchestrator pushes partial responses via WebSocket or Server‑Sent Events (SSE) to the client; buffers are used to smooth jitter.  
6. **Observability & Replay** – All requests/latencies logged; a replay queue allows reprocessing failed streams.

**Depth**  
- **Latency**: Edge → gateway < 50 ms; gateway → Kafka ≤ 10 ms; worker inference 200–400 ms (GPU); streaming back in 100 ms chunks.  
- **Throughput**: Autoscaling with spot instances ensures ≥ 1 M requests/sec peak.  
- **Fault tolerance**: Circuit breakers per model type, exponential back‑off retries, and fallback to a cached “safe” response.  
- **Security**: End‑to‑end TLS, image sandboxing, and per‑user encryption keys.

**Edge Cases**  
- Large images → fallback to async processing with notification.  
- Malformed text → quick validation error before GPU dispatch.  
- Network partitions → local caching of recent responses.

**Optimize & Communicate**  
Future improvements: model distillation for CPU workers, use of vector databases for retrieval‑augmented generation, and adaptive bitrate streaming for text. I would explain each layer’s role, trade‑offs (GPU cost vs latency), and how observability drives continuous optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
