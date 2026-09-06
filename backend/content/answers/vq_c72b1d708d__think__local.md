---
qid: vq_c72b1d708d__think__local
question: Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 424
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:20:54-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What does “prompt engineering” mean to the user?* Is it a beginner’s overview, advanced techniques, or specific use‑cases (chatbots, data retrieval)?  
   - Assume they’re familiar with AI basics but new to crafting prompts; keep jargon minimal.  

**2️⃣ Adopt a mental model: “Prompt = Instruction + Context + Desired Output”**  
   - Break the prompt into three layers: *goal*, *background information*, and *format/constraints*.  
   - Think of it like writing a recipe: clear ingredients (input), steps (instructions), and plating (output style).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Define the objective** – What answer or action do we want?  
   2. **Provide context** – Give enough background so the model can ground its response.  
   3. **Set constraints** – Length, tone, style, or any rules.  
   4. **Iterate & refine** – Test, observe mis‑interpretations, adjust wording.  

**4️⃣ Common traps to avoid**  
   - *Over‑loading*: Too much context can confuse the model.  
   - *Ambiguity*: Vague verbs (“explain”) yield generic answers.  
   - *Assuming knowledge*: Don’t presume the model knows domain specifics unless you supply them.  

**5️⃣ Sanity‑check & verbalize**  
   - Pretend to read the prompt as a human: Does it make sense?  
   - Verify each component (goal, context, constraints) is present and clear.  
   - When explaining, use analogies (recipe, instruction manual) to make the process relatable.  

By following this scaffold you can generate precise, effective prompts and explain why each part matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
