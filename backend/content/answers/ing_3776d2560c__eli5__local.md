---
qid: ing_3776d2560c__eli5__local
question: Your platform must support multiple LLM providers, including deployments
  in restricted environments where only some models are available. How do you architect
  model selection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 193
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:42-05:00'
sources: []
---

Think of your platform as a smart restaurant that can serve dishes from many chefs (LLM providers). In some kitchens, only a few chefs have the ingredients they need. The menu (model selection) is built in two parts:

1. **Inventory list** – every time a new model arrives, the system records its name, size, and which “kitchen” it belongs to.  
2. **Order‑router** – when a user asks for help, the router looks at the request (topic, language, privacy level) and checks the inventory. It picks the best match that is actually available in the current kitchen.

If a model is missing, the router simply offers the next closest one or tells the user “sorry, we don’t have that today.” This keeps the menu flexible while always serving only what’s physically present.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
