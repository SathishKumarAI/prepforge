---
qid: ing_9ce8ccaf9c__think__local
question: 'Explain: Estimate the annual serving cost of adding an LLM summary feature
  for 100 million weekly active users, and how you''d cut it by 10x.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 642
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:26:56-05:00'
sources: []
---

We must outline a numbered thought process that a candidate could internalize. Should cover clarifications, assumptions, mental model (e.g., compute cost per request, multiply). Then stepwise reasoning: estimate tokens, pricing, usage patterns. Common traps: ignoring caching, token length variability, ignoring inference time differences. Sanity-check by comparing to known benchmarks. Provide communication tips. Word count 150-220. Use markdown.**1️⃣ Clarify the scope & assumptions**

* Define “weekly active users” → 100 M users per week ≈ 14.3 M daily.
* Decide on *when* the LLM runs: one summary per user per day? or per interaction?
* Pick a target model size (e.g., GPT‑4‑32k) and an average prompt/response token count (say 1,000 tokens).
* Assume cloud pricing: e.g., $0.03 / K tokens for inference on the chosen provider.

**2️⃣ Mental model: cost = (users × requests/day × avg tokens) × price per token**

Treat it as a simple linear equation; we can adjust each variable to see impact.

**3️⃣ Step‑by‑step reasoning**

1. Compute daily users → 14.3 M.
2. Estimate one summary per user → 14.3 M requests/day.
3. Avg tokens ≈ 1,000 (prompt + completion).
4. Tokens/day = 14.3 M × 1,000 = 1.43 × 10¹⁰.
5. Convert to K‑tokens: 1.43 × 10⁷ K‑tokens.
6. Daily cost = 1.43 × 10⁷ × $0.03 ≈ **$429k**.
7. Annual cost ≈ $429k × 365 ≈ **$157 million**.

**4️⃣ Common traps to avoid**

* Forgetting that prompt length varies wildly; under‑estimating can make the budget look smaller than it is.
* Ignoring batch inference and GPU utilization inefficiencies, which inflate per‑token costs.
* Assuming a static model; newer cheaper models or distillation could change the math dramatically.
* Overlooking cache/memoization opportunities that reduce redundant calls.

**5️⃣ Sanity‑check & verbalizing**

* Compare to known spend: e.g., if we’d pay $0.02 / K tokens for GPT‑3.5, cost drops to ~$105M – plausible.
* Cross‑validate by simulating a small sample (1k users) and scaling up.
* When explaining, start with the high‑level equation, then plug in numbers, and finally show the 10× cut strategy: batch inference + model distillation → reduces tokens per request by ~50% and price per token to $0.003 → total ≈ $15 M annually.

This structured reasoning lets you quickly adjust any parameter and communicate clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
