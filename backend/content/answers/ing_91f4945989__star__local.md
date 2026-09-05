---
qid: ing_91f4945989__star__local
question: 'Explain: Bandwidth — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 308
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:56-05:00'
sources: []
---

**Situation:**  
At my last role, we were launching a real‑time recommendation engine for a streaming service with an expected 10 M active users and a goal of sub‑5 ms latency per request.

**Task:**  
I had to estimate the network bandwidth required to support peak traffic during the launch window, so we could size our CDN and data plane correctly.

**Action:**  
I used a back‑of‑the‑envelope approach:  
1. Calculated average payload per recommendation (≈ 200 bytes).  
2. Multiplied by request rate: 10 M users × 0.5 requests/sec = 5 M req/s → 1 GB/s raw traffic.  
3. Added overhead for headers, TLS, and retries (~30 %) → ~1.3 GB/s ≈ 10 Gbps.  
4. Factored in a 2× safety margin for bursty peaks → targeted 20 Gbps capacity across edge nodes.  
I validated this with a small traffic simulation using Locust and adjusted the CDN placement accordingly.

**Result:**  
The launch ran smoothly; peak bandwidth stayed below 18 Gbps, keeping latency under 4 ms. The exercise taught me how to quickly translate user metrics into concrete network sizing, balancing accuracy with speed in production planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
