---
qid: ing_4bbc314335__think__local
question: 'Explain: Q123: DeepSeek just raised V4 prices 3x to 12x and moved to peak
  and off-peak billing, while Claude Sonnet 5 made its introductory price permanent.
  Your cost model assumed cheap inference stays cheap. Rebuild it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 428
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:21:30-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
   - Identify what “DeepSeek V4” and “Claude Sonnet 5” are (new AI models).  
   - Note the price changes: DeepSeek tripled‑to‑twelve‑fold and switched to peak/off‑peak tiers; Claude’s introductory rate became permanent.  
   - Restate the original cost model’s key assumption: *cheap inference remains cheap*.

**2️⃣ Adopt a layered mental model**  
   - **Model tier** (size, latency, GPU type).  
   - **Billing regime** (peak vs. off‑peak multipliers).  
   - **Usage pattern** (daily request count, average prompt length).

**3️⃣ Step‑by‑step rebuild**  
   1. Gather the new per‑token rates for both models across tiers.  
   2. Map each request to its appropriate tier and time bucket.  
   3. Compute token‑level cost: `tokens × rate`.  
   4. Sum over all requests, separately for peak and off‑peak.  
   5. Add any fixed overheads (e.g., API gateway).  

**4️⃣ Avoid common traps**  
   - Don’t assume a flat “cheap” baseline; prices now vary by tier/time.  
   - Beware of double‑counting tokens when prompts & completions differ in length.  
   - Skip ignoring peak/off‑peak multipliers—those can dominate cost.

**5️⃣ Sanity‑check & articulate the result**  
   - Verify that total cost ≈ (peak requests × higher rate) + (off‑peak × lower rate).  
   - Explain how the new model shows a steep rise for DeepSeek and a stable, modest increase for Claude.  
   - Communicate this as: “We now weight each request by its true price tier; the former assumption of uniformly cheap inference is no longer valid.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
