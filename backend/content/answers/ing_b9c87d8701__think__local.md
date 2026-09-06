---
qid: ing_b9c87d8701__think__local
question: 'Explain: Context engineering for long-horizon tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 558
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:12:35-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “long‑horizon task”?* Assume a problem where the agent must plan or reason over many steps (e.g., multi‑step planning, dialogue with delayed payoff).  
   - *Which AI modality?* Focus on large language models (LLMs) and prompt‑based agents.  
   - *Goal of context engineering:* shape the input so the model can maintain coherence, track state, and make accurate predictions over many turns.

**2. Adopt a mental framework**  
   - Treat the context as a *dynamic knowledge base* that must satisfy three properties:  
     1. **Completeness** – all relevant facts are present.  
     2. **Conciseness** – only necessary information to stay within token limits.  
     3. **Temporal consistency** – updates reflect the latest state.  
   - Map this onto *prompt engineering* steps: seed, update, and pruning.

**3. Step‑by‑step reasoning**  
   1. **Seed the context** with a concise description of the task and initial state (e.g., “You are planning a trip to Paris over 7 days…”).  
   2. **Structure updates**: after each step, append only new facts or changes (e.g., “Day 3: visited Louvre; booked hotel at 5 pm”).  
   3. **Use concise templates** (key‑value pairs, bullet lists) to save tokens.  
   4. **Prune stale info**: drop items no longer relevant (e.g., past weather).  
   5. **Incorporate checkpoints**: summarize every N steps to keep the model grounded.  

**4. Common traps & how to avoid them**  
   - *Token overflow:* over‑loading context causes truncation; mitigate with summarization or hierarchical prompts.  
   - *State drift:* forgetting earlier decisions; counter by explicit “recap” sections.  
   - *Ambiguous phrasing:* leads to hallucinations; use precise, unambiguous language.  

**5. Sanity‑check & verbalize**  
   - After each update, mentally replay the timeline: “Did I keep track of the hotel booking?”  
   - Verbally confirm: “The model should know that day 3’s activity is already done.”  
   - If inconsistencies appear, revise the template or add a clarification step.

By iterating through these steps, you engineer context that lets an LLM maintain long‑horizon coherence and make reliable decisions across many turns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
