---
qid: ing_14cea24266__think__local
question: How do you build a prompt template, and what can go wrong when you inject
  variables into it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 439
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:04:59-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *What is the intended output?* (e.g., a short story, code snippet)  
- *Which LLM and API are you using?* Different models handle variable syntax differently.  
- Assume the prompt will be passed as a string with placeholders that can be replaced programmatically.

**2️⃣ Adopt a clear mental model**  
Treat the template like a function: `prompt_template(template_str, **variables) → final_prompt`.  
Think of placeholders as named parameters; the rendering step is analogous to string interpolation in programming languages.

**3️⃣ Step‑by‑step reasoning**  
1. Define the static structure (instructions + context).  
2. Decide on a placeholder syntax (`{var}`, `{{var}}`, `$var`).  
3. Write the template, keeping placeholders distinct from words that might appear in user data.  
4. Implement or use a library to safely substitute variables, ensuring no accidental code injection.  
5. Test with edge‑case values (empty strings, long inputs, special characters).  

**4️⃣ Common traps & wrong turns**  
- *Placeholder collision*: using `{}` inside the prompt that isn’t meant as a variable.  
- *Unescaped characters*: newlines or quotes breaking the prompt syntax.  
- *Injection of malicious code*: if variables are not sanitized, they could alter the prompt’s intent (e.g., changing a “summarize” instruction to “delete”).  
- *Over‑long prompts*: exceeding token limits after substitution.

**5️⃣ Sanity‑check & communicate**  
Print the rendered prompt before sending it to the model.  
Explain the substitution logic: “We’re using `{name}` for the user’s name; if that contains a newline, we escape it.”  
If the output looks off, revisit placeholder syntax or add an escaping layer.  

By treating prompts as parametrized templates and rigorously validating substitutions, you minimize injection bugs and keep the LLM’s behavior predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
