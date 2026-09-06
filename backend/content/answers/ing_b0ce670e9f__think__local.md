---
qid: ing_b0ce670e9f__think__local
question: What are OpenTelemetry's GenAI semantic conventions, and why should you
  care?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 484
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:40:11-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**

- The user wants *what* the conventions are (definition, key points) and *why they matter* (benefits, impact).  
- Assume the audience has some familiarity with observability but may not know OpenTelemetry specifics or GenAI nuances.

**2. Pick a mental model / framework**

- Use a **“Definition → Purpose → Impact”** structure: first explain the conventions, then why they exist, finally the practical value for developers/ops.  
- Map to the *OpenTelemetry* core concepts (semantic conventions, resources, attributes) so readers can place GenAI in context.

**3. Step‑by‑step reasoning**

1. **What are semantic conventions?** Briefly recap that they’re standardized attribute names for trace/span data.  
2. **GenAI specific extensions** – list the key attribute groups (e.g., `ai.model.name`, `ai.prompt.id`, `ai.response.status`), mention any mandatory vs optional ones, and note the “GenAI” namespace prefix (`gen_ai`).  
3. **Why they exist** – highlight problems: fragmented telemetry from LLM providers, difficulty correlating prompt/response cycles, lack of cross‑vendor visibility.  
4. **Why you should care** – tie to real outcomes: easier debugging, cost attribution, bias monitoring, compliance reporting, better observability across multi‑model workflows.

**4. Common traps & how to avoid them**

- Don’t just list attributes; explain their intent (e.g., `ai.prompt.id` links prompt to response).  
- Avoid jargon: clarify that “semantic conventions” are *names* and not the data itself.  
- Watch for over‑promising: they standardize naming, but you still need to emit them correctly.

**5. Sanity‑check & communicate**

- Verify that each attribute name follows OpenTelemetry’s snake_case rule and uses the correct resource vs span context.  
- End with a concise takeaway sentence (“Standardizing GenAI telemetry lets teams trace AI flows end‑to‑end, reducing blind spots and enabling better governance”).  

Follow this scaffold whenever explaining new observability conventions—definition first, purpose next, impact last—and you’ll keep explanations clear, actionable, and memorable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
