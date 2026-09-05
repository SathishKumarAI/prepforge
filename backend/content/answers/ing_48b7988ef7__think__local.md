---
qid: ing_48b7988ef7__think__local
question: 'You''re splitting a research agent into an orchestrator and subagents.
  Design the interface: what exactly crosses the boundary in each direction?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 412
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:15:15-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
- Identify which *capabilities* belong to the orchestrator vs. subagents (planning vs. execution).  
- Assume a stateless API for communication and that each boundary crossing must be explicit, serializable, and verifiable.

**2️⃣ Mental model: “Command‑Response” + “Data‑Payload”**  
Treat the interface as two complementary flows:  
1. **Commands** – instructions from orchestrator to subagents.  
2. **Responses/Observations** – feedback from subagents back to orchestrator.  
Both must carry context (task ID, state snapshot) and a schema version.

**3️⃣ Step‑by‑step reasoning**  
- *Orchestrator → Subagent*: send `PlanStep` objects containing action type, parameters, and expected preconditions.  
- *Subagent → Orchestrator*: return `Result` with status (success/failure), actual outputs, and any side‑effects.  
- Include optional “Request” messages if a subagent needs clarification or additional data.  
- Ensure all payloads are JSON‑serializable, signed, and include timestamps for replay safety.

**4️⃣ Common traps to avoid**  
- Embedding private logic in the interface (e.g., hard‑coded heuristics).  
- Relying on implicit state; always carry a versioned snapshot or hash.  
- Over‑loading messages with unrelated metadata that bloats bandwidth.

**5️⃣ Sanity‑check & verbalize**  
Run through an end‑to‑end example: orchestrator sends `PlanStep("summarize", {source})`, subagent replies `Result(success, summary)`. Verify that each side can independently validate the message (schema, signature). Confirm that no sensitive data or internal state leaks across the boundary. This check confirms the interface is minimal yet sufficient for correct coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
