---
qid: ing_de6c033f76__eli5__local
question: 'Explain: Explain indirect prompt injection, and what architectural defences
  actually raise the bar beyond guardrail classifiers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 240
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:53-05:00'
sources: []
---

Think of a smart assistant as a kitchen with a list of recipes (its knowledge). A *guardrail classifier* is like a chef’s rule book that says “don’t give me any recipe that contains harmful ingredients.”  
Indirect prompt injection tricks the system by feeding it a harmless-looking request first—like asking for a plain salad—and then, hidden in the background, slipping in a second, dangerous request. The assistant thinks it’s just following the salad order and ends up mixing in the forbidden ingredient without realizing it.

True architectural defenses go beyond the rule book. They are built into the kitchen itself:  
* **Separate memory layers** keep the “ingredients” (the model’s internal state) separate from the “orders” (user prompts), so a hidden second request can’t sneak into the recipe.  
* **Input isolation** checks each order in its own sandbox, preventing one harmless request from leaking information to another.  

These structural safeguards make it far harder for an attacker to bypass the rule book and inject malicious content indirectly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
