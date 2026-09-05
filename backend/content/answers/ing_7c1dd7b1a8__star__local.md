---
qid: ing_7c1dd7b1a8__star__local
question: 'Explain: From Zero to 50 Million Uploads per Day: Scaling Media at Canva'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:02-05:00'
sources: []
---

**Situation**  
At Canva I joined the Media Platform team when our daily upload volume had plateaued at around 5 million files; any spike beyond that would trigger latency spikes and degraded user experience across the editor.

**Task**  
I was tasked with redesigning the ingestion pipeline to support a projected 50 million uploads per day, while keeping per‑upload latency under 200 ms and ensuring data integrity for our CDN distribution.

**Action**  
First, I migrated from a monolithic Java service to a microservice architecture using Go and gRPC, enabling horizontal scaling on Kubernetes. I introduced a sharded S3‑compatible object store with a consistent hashing scheme that balanced load across 32 nodes, reducing contention. To avoid bottlenecks, I implemented an async event bus (Kafka) for metadata extraction, allowing the upload service to respond immediately while downstream services processed thumbnails and format conversions in parallel. Finally, I added circuit breakers and exponential back‑off retries, and rewrote critical sections in Rust to shave 15 % off CPU usage.

**Result**  
Within six months we handled 50 million uploads daily with <180 ms average latency and a 99.9 % success rate. The new pipeline cut infrastructure costs by 25 % while improving the editor’s responsiveness, teaching me the power of decoupled services and language‑specific optimizations for high‑volume media workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
