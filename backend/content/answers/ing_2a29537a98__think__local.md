---
qid: ing_2a29537a98__think__local
question: 'Explain: Step 2. Start using an LLM — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 489
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:28:37-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal:* Distill the key ideas behind “Step 2: Start using an LLM – How Do AI Agents Work” from Neo Kim & Fran Soto’s article.  
- *Assumptions:* The audience knows what an LLM is but not how it powers agents; they’re comfortable with basic ML jargon (tokens, embeddings).

**2️⃣ Adopt a mental model**  
Use the **“Pipeline‑to‑Agent” framework**:  
1. Input → Tokenization → Embedding → Model inference → Output.  
Then overlay *agent layers* (memory, planning, execution) on top of this pipeline.

**3️⃣ Reason step‑by‑step**  
- **Step 2 in the article:** “Start using an LLM.”  
  - Explain that you first pick a pre‑trained model (e.g., GPT‑4).  
  - Show how to feed it prompts that encode *instructions* + *context*.  
  - Emphasize that the LLM produces text that can be interpreted as actions.  
- **How agents use this output:**  
  - *Perception:* Convert raw environment data into a prompt.  
  - *Decision:* The LLM’s reply becomes an action plan.  
  - *Execution:* Map text to API calls or control signals.  
- Highlight the iterative loop: perception → LLM inference → execution → new state → repeat.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate “using an LLM” with “building one.”  
- Don’t overstate deterministic behavior; remind readers it’s probabilistic.  
- Beware of hidden assumptions about token limits and latency—they matter in real agents.

**5️⃣ Sanity‑check & communicate clearly**  
- Re‑explain the loop in plain language: *The agent asks an LLM what to do next, receives a text plan, then carries it out.*  
- Use a simple diagram or flowchart if possible.  
- End with a quick example (e.g., “Agent reads weather data → prompts LLM → gets ‘Set thermostat to 22°C’”).
This structure keeps the explanation focused, grounded in the article’s narrative, and easy for readers to internalize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
