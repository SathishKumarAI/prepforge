---
qid: ing_23e9b1c1a2__eli5__local
question: What is tool-call hallucination, and how do you defend against it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 250
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:33:08-05:00'
sources: []
---

Think of an AI as a very enthusiastic cook who has read thousands of recipes (the training data).  
A **tool‑call hallucination** happens when the cook guesses that a certain kitchen gadget will help and reaches for it—say, a whisk—only to find out later that the recipe actually needs a blender. The guess was made from memory alone, not because the cook saw evidence that a whisk would solve the problem.

Defending against this is like giving the cook a reliable “ingredient list” before cooking.  
* **Grounding**: Ask the AI to show which parts of its knowledge it used (a short citation or source).  
* **Verification**: Let another model or human check whether the chosen tool actually fits the task.  
* **Re‑prompting**: If the tool is wrong, ask the AI to reconsider and pick a different one.

By insisting on evidence, double‑checking, and allowing corrections, we keep the cook from grabbing the wrong gadget and let it serve up accurate answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
