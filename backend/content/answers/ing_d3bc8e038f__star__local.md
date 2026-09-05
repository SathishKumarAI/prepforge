---
qid: ing_d3bc8e038f__star__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — gRPC vs. REST: Key Similarities
  and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 382
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:03-05:00'
sources: []
---

**Situation** – In late 2023 I led the migration of our recommendation engine from a legacy REST API (HTTP 1.1) to a new micro‑service architecture using gRPC on HTTP/2. The existing endpoint had ~200 ms latency for a batch request, and we were hitting 10k concurrent users during peak campaigns.

**Task** – My goal was to cut response time by at least 40 % while keeping the same JSON payload format for downstream consumers, and to enable bidirectional streaming for real‑time personalization without breaking existing clients.

**Action** – I first profiled the REST layer with Wireshark and discovered head‑of‑line blocking on a single HTTP/1.1 connection. I then defined Protocol Buffers schemas identical to our JSON models and used gRPC’s codegen to generate stubs for Java, Python, and Go. Leveraging HTTP/2 multiplexing, I implemented server‑push for static assets and set up flow control windows to match our 512 KB request size. To preserve compatibility, I exposed a dual‑gateway: an Envoy sidecar translating REST calls to gRPC internally.

**Result** – Latency dropped from 200 ms to 120 ms (−40 %), throughput increased by 1.8×, and we eliminated the 30 % CPU spike seen with HTTP/1.1’s keep‑alive. I learned that careful schema design and flow‑control tuning are critical when moving to HTTP/2, and that a graceful dual‑gateway approach mitigates risk for downstream teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
