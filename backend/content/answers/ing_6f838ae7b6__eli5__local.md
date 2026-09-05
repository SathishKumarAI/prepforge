---
qid: ing_6f838ae7b6__eli5__local
question: LLMs are non-deterministic, but a refund over $200 must never be auto-approved.
  Where's the line between prompting and code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 293
total_tokens: 470
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:32:57-05:00'
sources: []
---

Imagine you’re cooking a soup in a kitchen that has two chefs: **Chef Prompt** and **Chef Code**.  
- **Chef Prompt** is like a cook who follows your spoken instructions (“add salt, stir slowly”). The recipe can change each time because the chef interprets the words differently; this is the *non‑deterministic* part of an LLM—small variations in wording or timing can lead to slightly different dishes.  
- **Chef Code** is a robot that follows exact written instructions (“add 5 g salt, stir for 30 s”). Once you give it the recipe, it will always produce the same soup.

Now think about a refund policy: if a customer wants more than $200 back, the system must *never* automatically approve it. That’s a rule that lives in **Chef Code**—a hard‑coded guard that no matter how the conversation (Chef Prompt) goes, the final decision is made by the code. The line between prompting and code is where you shift from asking questions (“Should I refund?”) to executing a policy that can’t be overridden by language alone.

So:  
- **Prompting** = flexible, human‑like dialogue that can vary each time.  
- **Code** = fixed rules (like the $200 limit) that enforce consistent outcomes no matter how you talk to it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
