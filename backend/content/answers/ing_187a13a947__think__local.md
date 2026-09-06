---
qid: ing_187a13a947__think__local
question: How should tool results be formatted before they go back into the model's
  context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 446
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:20:35-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - *Goal*: Ensure that any data a tool outputs can be seamlessly read and used by the language model (LLM) in subsequent turns.  
   - *Assumptions*: The LLM is stateless across calls, receives a single prompt string, and parses everything from plain text or simple markup.

**2. Adopt a mental‑model of “structured prompt hygiene”**  
   - Treat the tool output as an intermediary that must be *self‑describing*, *parsable*, and *context‑rich*.  
   - Think of it like embedding a mini‑JSON inside a natural‑language conversation: the LLM can then extract fields without extra inference.

**3. Step‑by‑step formatting process**  
   1. **Identify content type** (e.g., list, table, key/value pairs).  
   2. **Wrap in a consistent delimiter** (e.g., triple backticks or `<<<`/`>>>`).  
   3. **Add a short header** describing the data (“Tool Output – Weather Forecast”).  
   4. **Use plain keys and values**; avoid nested complex structures unless the LLM is known to handle them.  
   5. **Encode special characters safely** (escape quotes, use code fences).  
   6. **End with a clear cue for the LLM** (“Please interpret the above data.”).

**4. Avoid common pitfalls**  
   - *Unescaped delimiters* that break parsing.  
   - Mixing natural language and structured data without clear separation.  
   - Over‑complicating the structure (e.g., deep JSON) when a simple list suffices.

**5. Sanity‑check & verbalize**  
   - Run a quick test: paste the formatted output into the LLM prompt and see if it can extract the needed field.  
   - Verbally explain to yourself what each section means; if you can’t articulate it, reformat for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
