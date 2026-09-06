---
qid: ing_9a41e388d5__think__local
question: 'Explain: Pattern 3 – Custom planner (DIY prompting + parsing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 514
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:17:07-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
   - *What is “Pattern 3” exactly?* It refers to the third major approach in AI‑prompt engineering literature: building a custom planner that stitches together multiple prompts and parses their outputs.  
   - *Assume the audience knows basic prompting concepts but not this pattern’s specifics.*  

**2️⃣ Adopt a mental model**  
   - Think of the workflow as a **pipeline**:  
     1. **Planner** – decides which sub‑tasks to run, in what order, and with what parameters.  
     2. **Prompt generator** – crafts each individual prompt based on planner output.  
     3. **LLM executor** – runs prompts and returns raw text.  
     4. **Parser/validator** – extracts structured data (JSON, tables) from the LLM’s reply.  

**3️⃣ Step‑by‑step reasoning**  
   - *Step 1*: Identify the high‑level goal (e.g., “write a report”).  
   - *Step 2*: Break it into sub‑tasks (outline, research, draft, edit).  
   - *Step 3*: For each sub‑task, formulate a prompt that explicitly requests the desired format.  
   - *Step 4*: After execution, use regex or a language model itself to parse the output into JSON/objects.  
   - *Step 5*: Feed parsed results back into subsequent prompts as context.  

**4️⃣ Common traps & how to avoid them**  
   - **Over‑complex planners** → keep it simple; too many hops introduce error propagation.  
   - **Parsing brittle regexes** → use LLM‑guided parsing or JSON schema validation.  
   - **State leakage** → always reset context between sub‑tasks unless continuity is required.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each prompt’s expected output matches the parser’s expectations.  
   - Explain to a colleague: “We’re building an orchestrator that decides *what* to ask, then formats the answer into machine‑readable chunks so the next step can use it.”  
   - Check for logical consistency: does the planner cover all sub‑tasks? Does parsing handle edge cases?  

By following this structured approach you’ll design a robust custom planner that leverages DIY prompting and systematic parsing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
