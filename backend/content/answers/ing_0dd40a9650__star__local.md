---
qid: ing_0dd40a9650__star__local
question: 'Explain: Bandwidth — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 427
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:05-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the deployment of a real‑time image‑classification microservice on AWS Lambda and S3 for an e‑commerce client. The product catalog grew to 2 million images, and we had to keep inference latency under 200 ms while handling 10k requests per second.

**Task** – I needed to design the data path so that the service could fetch model weights and image tiles from S3, process them in Lambda, and return predictions without exceeding budget or breaking SLAs. The key was balancing bandwidth, latency, and throughput across the network stack.

**Action** – First, I measured actual request patterns with CloudWatch Logs and identified that most requests hit a narrow “hot” region of S3. I set up an S3 Transfer Acceleration endpoint to reduce round‑trip time (latency) for global traffic while keeping transfer speed high. Next, I introduced edge caching via CloudFront so that 80 % of the model artifacts were served from local cache, effectively increasing throughput and decreasing bandwidth usage on the origin bucket. Finally, I tuned Lambda’s concurrency and used async invocation to decouple request handling from heavy compute, ensuring that latency spikes didn’t propagate back to clients.

**Result** – The combined approach cut average inference latency from 350 ms to 140 ms (a 60 % improvement) and increased overall throughput from 6k to 12k requests per second. Bandwidth costs dropped by 35 %, and we stayed well within the client’s $5K/month budget. I learned that in ML systems, latency is often a function of data locality, throughput is about how many operations you can run concurrently, and bandwidth is the raw transfer capacity; optimizing all three together yields the best end‑to‑end performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
