---
qid: ing_f2bb9ff26e__think__local
question: Qwen3 unifies a "thinking" mode and a "non-thinking" mode in a single model,
  with a thinking budget the caller can set. How would you train that, and how would
  you serve it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 456
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:01:49-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal*: a single model toggles between “thinking” (high‑cost, higher‑accuracy inference) and “non‑thinking” (low‑cost, fast response).  
   - *Assumptions*: we have labeled data for both modes, a budget parameter at call time, and infrastructure that can switch compute intensity on the fly.

**2. Mental model / framework**  
   - Treat the model as a **mixture of experts**: a lightweight “fast” head and a heavyweight “thinking” backbone.  
   - Use *budget‑aware training* (e.g., reinforcement learning or constrained loss) to learn when each expert is invoked.

**3. Step‑by‑step reasoning toward a solution**  
   1. **Pre‑train** the full backbone on standard corpora.  
   2. **Distill** a small head from the backbone’s intermediate representations.  
   3. Add a *budget gate* (a lightweight classifier) that predicts the expected cost/benefit of invoking the backbone.  
   4. During fine‑tuning, jointly optimize:  
      - Backbone loss on high‑budget samples.  
      - Head loss on low‑budget samples.  
      - Gate loss with a constraint term penalizing exceeding the caller’s budget.  
   5. Deploy as an **API** that receives the budget flag; the runtime queries the gate and routes to the appropriate head.

**4. Common traps to avoid**  
   - *Overfitting the gate*: ensure it generalizes across prompts.  
   - *Ignoring latency*: measure real‑world inference time, not just FLOPs.  
   - *Static thresholds*: adaptively update the budget threshold based on usage patterns.

**5. Sanity‑check & communicate**  
   - Verify that for a zero‑budget request the system always uses the head and never touches the backbone.  
   - Show latency vs accuracy curves to stakeholders, highlighting how the model respects the caller’s budget while maximizing quality when allowed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
