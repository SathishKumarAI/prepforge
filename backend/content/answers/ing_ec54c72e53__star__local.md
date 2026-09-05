---
qid: ing_ec54c72e53__star__local
question: 'Explain: A customer''s LLM endpoint p99 latency jumped from 2s to 20s this
  week. No code changes on their side. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 348
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:30-05:00'
sources: []
---

**Situation:**  
Last Friday, a key client reported that the P99 latency for their LLM endpoint had spiked from about 2 seconds to roughly 20 seconds. Their application code and deployment pipeline were unchanged; the problem appeared only after we rolled out a new inference‑server version on our Kubernetes cluster.

**Task:**  
I needed to isolate the cause of the latency surge, confirm it was not a client or model issue, and bring the P99 back under 3 seconds within two business days so their real‑time chat service wouldn't break.

**Action:**  
1. Collected metrics from Prometheus: CPU, memory, queue depth, and request distribution across pods.  
2. Compared the new server image’s startup logs with the previous one; noted an increased warm‑up time for the tokeniser library.  
3. Enabled OpenTelemetry tracing on a sample of 10 % requests to see where the delay occurred; traced that most of the extra latency came from GPU context switching in the inference container.  
4. Rolled back the image to the previous stable version and reran the same load test: P99 returned to 2 s.  
5. Discussed with the infra team to patch the new image’s CUDA driver binding, then redeployed a corrected build.  

**Result:**  
Latency dropped from 20 s to 2.3 s in under 24 hours, restoring SLA compliance for all customers. I learned that even minor changes in container base images can dramatically affect GPU scheduling; continuous profiling and a quick rollback strategy are essential when deploying ML inference services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
