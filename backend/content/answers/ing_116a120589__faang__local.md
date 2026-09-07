---
qid: ing_116a120589__faang__local
question: 'Explain: Single Provider Dependency — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 428
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:18-05:00'
sources: []
---

**Single Provider Dependency – Anti‑Pattern**

| Step | What I’ll Do |
|------|--------------|
| **Clarify** | *Problem:* An app relies on a single vendor (e.g., Cloud DB, AI API) for a critical feature. <br>*Assumptions to confirm:* 1️⃣ The provider offers no open‑source fallback; 2️⃣ switching cost is high; 3️⃣ uptime guarantees are insufficient. |
| **Approach** | 1️⃣ Identify the *critical dependency* (e.g., embeddings service). 2️⃣ Design a thin abstraction layer that decouples business logic from the vendor SDK. 3️⃣ Add a fallback strategy: local cache, open‑source model, or secondary provider. 4️⃣ Automate failover and monitor latency/latency spikes. |
| **Depth** | • **Abstraction Layer:** Interface `IEmbeddingProvider` with methods like `Generate(text)`. Implement concrete classes (`OpenAIProvider`, `LocalProvider`). <br>• **Fallback Logic:** On exception or SLA breach, switch to `LocalProvider`; optionally queue requests for later retry. <br>• **Complexity:** O(1) per call; overhead from abstraction is negligible (<1 ms). |
| **Edge Cases** | • Provider updates breaking the SDK → version pinning + CI tests.<br>*Cold start* for local model: warm‑up on startup.<br>Large payloads causing rate limits – implement back‑pressure. |
| **Optimize & Communicate** | *Improvements:* Use circuit breaker patterns, dynamic provider ranking based on latency metrics. <br>*Narration:* “By isolating the vendor interface and provisioning a resilient fallback, we eliminate single points of failure while keeping latency minimal—essential for high‑traffic AI services.” |

*Result:* The system remains functional even if one provider goes down or changes pricing, aligning with FAANG’s emphasis on robustness and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
