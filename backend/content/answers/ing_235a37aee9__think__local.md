---
qid: ing_235a37aee9__think__local
question: 'Explain: Tips for Example Selection — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 401
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:59:53-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
*Ask:* What does “tips for example selection” mean in this context? Are we selecting training data, crafting prompts, or choosing counter‑examples for fine‑tuning? Assume the user wants practical advice on how to pick or generate illustrative examples that help a language model (LLM) learn or perform a task.  

**2️⃣ Adopt a mental model**  
Use the *Prompt Engineering* framework:  
- **Goal definition** → what behavior we want from the LLM.  
- **Prompt structure** → intro, instruction, example(s), question.  
- **Example role** → demonstration of expected output format and nuance.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify the target task (e.g., sentiment classification).  
2. Decide what aspects are critical (vocabulary, syntax, edge cases).  
3. For each aspect, craft a minimal example that isolates it.  
4. Balance variety and clarity: too many examples overload; too few leave gaps.  
5. Test the prompt with a small batch to see if the LLM follows the pattern.  

**4️⃣ Common traps**  
- *Over‑fitting*: giving too many specific examples locks the model into narrow patterns.  
- *Ambiguity*: vague or incomplete examples cause misinterpretation.  
- *Bias introduction*: unrepresentative examples can bias outputs.  
Avoid by iterating, validating on diverse test cases, and keeping examples concise yet informative.

**5️⃣ Sanity‑check & verbalize**  
Ask yourself: “Does this example clearly show the rule I want?” Rephrase it in plain language to confirm clarity. When explaining to others, start with the goal, show one concrete example, then generalize how that pattern extends to unseen inputs. This keeps the reasoning transparent and reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
