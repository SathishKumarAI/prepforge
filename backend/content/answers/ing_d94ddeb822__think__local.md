---
qid: ing_d94ddeb822__think__local
question: 'Explain: Canary rollout and shadow traffic — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 445
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:18:23-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify each term: *canary rollout*, *shadow traffic*, *Customer‑Distillation Pipeline*.  
   - Assume we’re talking about a machine‑learning service that serves predictions to customers, with a new model version under test.  
   - Goal: explain how these concepts interrelate in practice.

**2. Adopt a mental model**  
   - Think of the pipeline as a *traffic router* for user requests and data.  
   - Map stages: request → routing (canary/shadow) → model inference → response & feedback collection.  
   - Visualize two parallel flows: one to the new model (canary), one to the old or production model (shadow).

**3. Reason step‑by‑step**  
   1. **Canary rollout**: a small percentage of live traffic is sent to the new model; majority stays on legacy.  
   2. **Shadow traffic**: identical requests are duplicated to the new model but its outputs are discarded; they’re logged for analysis.  
   3. **Customer‑Distillation Pipeline**: uses shadowed predictions and real user feedback (e.g., click‑through, satisfaction) to *distill* a compact, accurate student model that can run faster or with less resources.  
   4. Combine metrics from both flows to decide promotion.

**4. Common traps to avoid**  
   - Mixing up “shadow” vs. “canary”: shadow doesn’t affect real responses.  
   - Forgetting that distillation requires *aligned* input‑output pairs; ensure timestamps or IDs match.  
   - Assuming all traffic can be safely sent to the new model—only a controlled fraction should go live.

**5. Sanity‑check & verbalize**  
   - Verify that each concept is distinct yet connected: routing → evaluation → distillation.  
   - Explain with an example (e.g., recommending videos).  
   - Conclude by summarizing how the pipeline balances risk, learning, and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
