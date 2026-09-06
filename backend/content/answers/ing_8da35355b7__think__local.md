---
qid: ing_8da35355b7__think__local
question: 'Explain: Tell me about a performance optimisation you shipped. Give me
  the numbers, and tell me why I should believe them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 428
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:24:58-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**

- Ask what “performance” means (latency, throughput, cost, memory).
- Define the context: product, stack, metrics tracked, baseline.
- Assume the candidate has real data and a reproducible experiment.

**2️⃣ Adopt a structured framework**

- **Goal‑setting**: State the KPI target (e.g., 30 % latency drop).
- **Baseline measurement**: Explain how you captured “before” numbers (load tests, A/B, instrumentation).
- **Hypothesis & change**: Describe the optimisation and why it should help.
- **Post‑change measurement**: Show the new numbers under identical conditions.

**3️⃣ Reason step‑by‑step**

1. *Baseline*: 200 ms average request time, 10 kRPS, cost $0.05/req.
2. *Change*: Refactored DB query + added caching layer.
3. *Test*: Same load test (5 min), same env, same traffic mix.
4. *Result*: 140 ms avg, 12 kRPS, cost $0.04/req → 30 % latency reduction, 20 % throughput increase, 20 % cost saving.

Explain the statistical confidence (e.g., p‑value < 0.01) and that variance was within ±5 %. Mention any rollback or monitoring safeguards.

**4️⃣ Avoid common traps**

- Don’t cherry‑pick “best case” numbers; show median/95th percentile.
- Avoid claiming causation without controlled tests (A/B, canary).
- Don’t gloss over infrastructure changes that could bias results.

**5️⃣ Sanity‑check & communicate**

- Verify that the same test harness was used pre/post.
- Cross‑validate with production telemetry if possible.
- Present a clear narrative: problem → hypothesis → experiment → result → impact.

By following this process, you’ll provide transparent, repeatable evidence of optimisation success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
