---
qid: ing_8c0f373857__think__local
question: What's the difference between zero-shot and few-shot prompting, and when
  would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 525
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:19:07-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is “prompting” in this context?* Assume it refers to giving a language model input that includes examples or instructions.  
   - *Define “zero‑shot” vs “few‑shot”*: zero‑shot means no task‑specific examples, few‑shot means a handful (≈2–10) of labeled examples.

**2️⃣ Adopt a mental framework: “Instruction → Model → Output”**  
   - Think of the prompt as the instruction.  
   - The model’s internal knowledge is fixed; what changes is how much guidance the prompt supplies.  
   - Zero‑shot relies solely on the model’s pre‑trained world knowledge.  
   - Few‑shot injects concrete instances to shape the model’s behavior for that specific task.

**3️⃣ Step‑by‑step reasoning**  
   a. *Zero‑shot*: give a clear, unambiguous instruction (“Translate this sentence into Spanish”). The model must generalize from its pre‑training.  
   b. *Few‑shot*: prepend 2–4 example pairs (input → desired output) before the query. This primes the model’s internal “template” for the task.  
   c. Decide based on:  
      - **Task complexity** – simple classification may work zero‑shot; nuanced style transfer often needs few‑shots.  
      - **Data availability** – if you can’t supply examples, go zero‑shot.  
      - **Model size & training** – larger models handle zero‑shot better; smaller ones benefit more from explicit guidance.

**4️⃣ Common traps to avoid**  
   - Assuming “zero‑shot” means *no* context at all; a brief instruction is still part of the prompt.  
   - Overloading few‑shots with irrelevant examples—quality > quantity.  
   - Forgetting that too many examples can bloat token limits and degrade performance.

**5️⃣ Sanity‑check & communicate clearly**  
   - Rephrase the answer back to yourself: “Zero‑shot = rely on pre‑trained knowledge; few‑shot = give a few concrete samples.”  
   - If it sounds circular or vague, add an example or highlight a use case (e.g., FAQ answering vs. creative writing).  

By following these steps you’ll consistently distinguish zero‑shot from few‑shot prompting and know when each is appropriate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
