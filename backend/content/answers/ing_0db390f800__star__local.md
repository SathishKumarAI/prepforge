---
qid: ing_0db390f800__star__local
question: 'When Should You Use REST vs. gRPC? — gRPC vs. REST: Key Similarities and
  Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 352
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:56-05:00'
sources: []
---

**Situation** – In mid‑2023 I led the API redesign for our real‑time analytics platform that fed data into two downstream services: a web dashboard and a mobile app. The existing REST endpoints were fine for the dashboard, but latency on the mobile client was 120 ms per request, hurting user experience.

**Task** – My goal was to reduce round‑trip time for the mobile client while keeping the current REST interface for the dashboard unchanged, all within a single codebase and minimal ops overhead.

**Action** – I evaluated gRPC’s binary protocol, low‑overhead headers, and built‑in streaming. I kept REST for the browser UI (HTTP/1.1, cacheable responses) and added a gRPC service for mobile, using Protobuf to share message definitions. We deployed both on the same Kubernetes ingress with Envoy, enabling mutual TLS and automatic load balancing. I also set up OpenTelemetry to compare metrics across protocols.

**Result** – Mobile latency dropped from 120 ms to 30 ms (75% reduction), while dashboard performance remained unchanged. The dual‑protocol approach allowed us to leverage gRPC’s efficiency where needed without refactoring the entire stack, and we gained a single shared schema that reduced duplication by 40%. This experience taught me that REST is great for public, cacheable APIs, whereas gRPC shines for low‑latency, bi‑directional communication in internal services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
