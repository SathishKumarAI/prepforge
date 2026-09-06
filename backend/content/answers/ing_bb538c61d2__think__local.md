---
qid: ing_bb538c61d2__think__local
question: 'Explain: Skill Resolution Order — Openclaw Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 502
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:18:57-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm that “Skill Resolution Order” refers to the sequence in which a character’s active abilities are processed during combat.  
   - Assume an *OpenClaw*‑style system where each skill has a priority, cooldown, and potential modifiers (e.g., buffs).  
   - Note that the question wants a *deep dive*, so we’ll treat both deterministic and dynamic aspects.

**2. Adopt a mental framework**  
   - View the order as a **two‑stage pipeline**:  
     1. **Static ordering** – fixed priority list (e.g., “Charge” > “Shield”).  
     2. **Dynamic reordering** – runtime factors that can shift priorities (cooldowns, buffs, enemy state).  
   - Use the *Rule‑Based + Event‑Driven* model: base rules set defaults; events trigger recalculations.

**3. Step‑by‑step reasoning**  
   1. Enumerate all active skills and their base priority values.  
   2. Apply global modifiers (e.g., “Priority Boost” from a buff).  
   3. Check cooldowns: if a skill is on CD, drop it or demote its priority.  
   4. Evaluate situational triggers (enemy’s HP below threshold → “Heal” rises).  
   5. Resolve ties by secondary keys (e.g., mana cost, range).  
   6. Output the final resolved list for execution.

**4. Common traps to avoid**  
   - Forgetting that *cooldowns* can permanently block a skill until refreshed.  
   - Mixing up *priority values* with *order indices*—higher value ≠ earlier slot.  
   - Ignoring cascading effects: a buff that boosts one skill may indirectly lower another’s priority.

**5. Sanity‑check & verbalizing**  
   - Re‑run the algorithm on a simple test case (e.g., two skills, one on CD).  
   - Check that the output matches expected behaviour (“Skill A” executes before “Skill B”).  
   - Summarize: “We first lay out the base priorities, then prune and re‑rank based on runtime state, ending with a deterministic execution order.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
