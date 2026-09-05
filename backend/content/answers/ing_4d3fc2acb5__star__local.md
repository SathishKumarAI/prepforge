---
qid: ing_4d3fc2acb5__star__local
question: 'Explain: SSL everywhere - all the time — Best Practices for Designing a
  Pragmatic RESTful API | Vinay Sahni'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 335
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:02:49-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new customer‑portal microservice that handled sensitive user data. The compliance audit flagged that our internal REST endpoints were still reachable over plain HTTP, which violated the new security policy requiring TLS 1.2+ on all traffic.

**Task:**  
I had to redesign the API gateway and service stack so that every request—internal, external, or cross‑service—went through SSL without breaking existing consumers or degrading performance.

**Action:**  
First, I migrated our NGINX reverse proxy to terminate TLS at the edge and enforce HTTP/2. Then I updated the service discovery logic to add an “https://” scheme for all internal URLs. To avoid double encryption, I introduced a sidecar Envoy that handled mutual TLS between services, generating short‑lived client certificates via Vault. I also refactored our SDKs to automatically fallback to HTTPS if the endpoint was detected as HTTP, and added a health‑check endpoint that returned the TLS handshake status. Finally, I set up automated scans with OpenSSL s_client in CI to catch any accidental plain‑text exposure.

**Result:**  
All traffic is now encrypted end‑to‑end, compliance scores jumped from 55% to 100%, and we saw a 5% latency increase—well within our SLA of <200 ms. I learned that coupling TLS at the gateway with mutual TLS in microservices balances security with performance, and that automated tooling can catch regressions before they reach production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
