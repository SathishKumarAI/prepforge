---
qid: ing_116a120589__think__local
question: 'Explain: Single Provider Dependency — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 404
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:51:13-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Decide whether “single provider dependency” refers to infrastructure (e.g., only one cloud vendor), data sources, or third‑party services.  
   * Assume the audience knows basic AI pipeline terminology but may be new to architectural patterns.

**2️⃣ Adopt a mental model: “Risk ↔ Resilience”**  
   * View each dependency as a risk factor; anti‑patterns are high‑risk, low‑resilience configurations.  
   * Map how one provider can become a single point of failure, vendor lock‑in, or performance bottleneck.

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify the provider(s)** in the stack (compute, storage, model hosting, data ingestion).  
   2. **Enumerate potential failure modes**: outage, cost surge, policy change, compliance drift.  
   3. **Assess impact on AI workflow**: training time, inference latency, data integrity.  
   4. **Contrast with best‑practice alternatives** (multi‑cloud, open standards, hybrid storage).  
   5. **Conclude why the original setup is an anti‑pattern** and suggest mitigation.

**4️⃣ Common traps to avoid**  
   * Overlooking hidden dependencies (e.g., a single database vendor used for both training data and model registry).  
   * Assuming “cloud‑agnostic” libraries automatically remove lock‑in.  
   * Neglecting cost implications of migration when proposing alternatives.

**5️⃣ Sanity‑check & communicate**  
   * Verify that every identified risk has an explicit mitigation or justification.  
   * Use a concise, bullet‑point format: state the anti‑pattern, why it’s risky, and a quick remedy.  
   * End with a short recommendation sentence to reinforce the takeaway.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
