---
qid: ing_636ef621c1__eli5__local
question: 'Explain: Public APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 292
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:42-05:00'
sources: []
---

**What’s an API, and why do we call it “public”?**

Think of a kitchen that prepares all the food for your whole town. The kitchen has chefs (the software) who can cook any dish you ask. But instead of walking into the kitchen to order, you use a simple menu: you write down what you want—“pizza with extra cheese”—and the kitchen’s front desk reads it and sends it straight to the chef. That menu is an **API** (Application Programming Interface). It’s just a set of written rules that tell the kitchen *what* you can ask for, how to ask, and what you’ll get back.

When we say an API is **public**, we mean anyone in town can use that menu, not just people who work inside the kitchen. The restaurant doesn’t reveal its secret recipes; it only shows the menu (the list of dishes). Developers write code that follows this menu to ask for data or services from a machine‑learning system—like “give me the predicted price for a house” or “classify this image.” The system then follows its own internal algorithms and returns the answer, just as the kitchen sends you your pizza. This separation lets many people build new apps on top of a single powerful ML engine without touching the complex code inside.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
