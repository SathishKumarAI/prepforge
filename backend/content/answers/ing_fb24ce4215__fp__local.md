---
qid: ing_fb24ce4215__fp__local
question: 'Q: With every AI lab shipping its own agent SDK (Claude Agent SDK, OpenAI
  Agents SDK, Google ADK), how do you avoid vendor lock-in?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 338
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:44-05:00'
sources: []
---

When a new “agent SDK” arrives at the table it is not merely an API wrapper; it is a **policy‑definition engine** that turns natural‑language prompts into executable actions.  
The core problem these engines solve is *control flow inference*: given a goal, decide which sub‑tasks to delegate to which models or services, and how to stitch their outputs together while respecting safety constraints.  
Because this control logic lives inside the SDK, every invocation of an agent implicitly ties the entire pipeline to that vendor’s runtime, data format, and cost model—precisely the vendor‑lock‑in trap.

The cure is to **externalize the policy layer**.  
1. **Declare a minimal, open standard** (e.g., JSON‑based *Agent Plan* schema) that any SDK can consume or emit.  
2. Build a *policy orchestrator* that reads this plan and dispatches sub‑tasks to whichever provider best satisfies cost, latency, or privacy constraints.  
3. Treat the SDK as a *plug‑in*, not a monolith: expose its capabilities through a thin adapter exposing only the standard interface.

This mirrors the decoupling seen in microservices and compiler frontends: the language (the plan) is separate from the back‑end engines. The non‑obvious insight is that **vendor lock‑in is not a feature of the SDK itself but of the *semantic contract* it imposes**; by standardizing that contract you preserve freedom without sacrificing the convenience of high‑level agent abstractions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
