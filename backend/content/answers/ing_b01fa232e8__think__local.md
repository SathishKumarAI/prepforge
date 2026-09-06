---
qid: ing_b01fa232e8__think__local
question: 'Explain: Taxonomy of Agent Failures — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 489
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:37:56-05:00'
sources: []
---

**Metacognitive Roadmap for Explaining “Taxonomy of Agent Failures – Error Handling and Recovery”**

1. **Clarify Scope & Assumptions**  
   - Confirm the audience’s background (AI researchers vs. practitioners).  
   - Assume we’re dealing with autonomous agents that interact with dynamic environments, not static batch processes.  
   - Define “failure” as any deviation from intended behavior: misperception, planning error, execution fault, or external disturbance.

2. **Select a Mental Model**  
   - Use the *Perception‑Planning‑Execution (PPE)* pipeline as the base.  
   - Overlay a *Failure Taxonomy* tree: perception errors → perception‑level recovery; planning errors → planning‑level recovery; execution errors → action‑level recovery; environment‑induced failures → context‑aware recovery.

3. **Step‑by‑Step Reasoning**  
   - Start with the root cause (sensor noise, model mismatch).  
   - Walk through each branch: e.g., for perception errors, list detection failure, localization drift, then corresponding mitigation like sensor fusion or re‑localization.  
   - For planning errors, cover incomplete models, suboptimal heuristics, and recovery via replanning or hierarchical fallback policies.  
   - Execution failures: mechanical slip, actuator limits—recover by re‑planning at a finer granularity or using safety constraints.  
   - Finally, show cross‑cutting strategies (monitoring, diagnostics, human‑in‑the‑loop).

4. **Avoid Common Traps**  
   - Don’t conflate *failure detection* with *recovery*.  
   - Beware of over‑simplifying by treating all errors as the same type; emphasize context‑specific remedies.  
   - Resist the temptation to list every technical detail—focus on conceptual categories and representative examples.

5. **Sanity‑Check & Communicate**  
   - Verify that each taxonomy level maps cleanly onto PPE stages.  
   - Use a visual diagram in your explanation (tree or flowchart).  
   - End with a concise takeaway: “By categorizing failures along perception, planning, execution, and environment axes, we can systematically design recovery mechanisms tailored to the underlying cause.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
