---
qid: ing_b8a477cd42__think__local
question: 'Q114: Design a skill system for a fleet of internal agents using Agent
  Skills. How do skills differ from MCP tools and from fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 537
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:08:06-05:00'
sources: []
---

We need to outline the thought process, numbered, about designing a skill system and comparing to MCP tools and fine-tuning. Provide 150-220 words. Use markdown.**1️⃣ Clarify the scope & assumptions**  
   - *What* is an “internal agent” (e.g., micro‑service or bot)?  
   - *What* are “Agent Skills” vs. “MCP tools” (Model‑Control‑Pipeline utilities) and “fine‑tuning”?  
   - Assume we’re building a reusable, composable skill library that can be attached to any agent without retraining the underlying LLM.

**2️⃣ Adopt a layered mental model**  
   1. **Core Model** – base LLM (unchanged).  
   2. **Skill Layer** – declarative prompts + context‑handlers (e.g., “email summarizer”, “data validator”).  
   3. **MCP Layer** – orchestration primitives (routing, retry, logging).  
   4. **Fine‑tuning Layer** – optional weight adjustment for domain‑specific nuance.

**3️⃣ Step‑by‑step reasoning**  
   - Design skills as *self‑contained modules* that expose a simple API (`invoke`, `validate`).  
   - Use prompt engineering and context injection to give each skill its own “persona” while keeping the base model intact.  
   - Integrate MCP tools for cross‑skill orchestration: a router decides which skill runs next, a logger captures metrics, and a retry policy handles failures.  
   - Position fine‑tuning as a last resort: only when a skill consistently underperforms on domain data, we re‑train the base model or a specialized head.

**4️⃣ Avoid common traps**  
   - Don’t conflate skills with full LLM training; keep them stateless and prompt‑centric.  
   - Resist “over‑engineering” MCP tools—use them only for orchestration, not for semantic transformation.  
   - Watch out for “skill leakage”: ensure one skill’s internal state doesn’t bleed into another.

**5️⃣ Sanity‑check & communicate**  
   - Verify that adding a new skill does **not** require model retraining; it should be plug‑and‑play.  
   - Explain to stakeholders: *Skills* = reusable prompt modules, *MCP tools* = orchestration glue, *Fine‑tuning* = heavy‑weight weight updates reserved for rare edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
