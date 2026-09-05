---
qid: ing_235a37aee9__eli5__local
question: 'Explain: Tips for Example Selection — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 312
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:16-05:00'
sources: []
---

Think of a prompt as a recipe you give to a smart kitchen robot (the model). The “examples” are the ingredients that show how the dish should taste. Good examples make the robot learn the flavor you want; bad ones misguide it.

**Tip 1 – Pick clear, simple examples**  
Give one or two short sentences that illustrate exactly what you need. Like showing a photo of a ripe apple instead of a blurry picture, the model sees precisely what “apple” means in your context.

**Tip 2 – Keep the style consistent**  
If all examples are polite questions, ask politely too. Mixing formal and informal tones confuses the robot, just as mixing spices can ruin a dish.

**Tip 3 – Vary the details but keep the core**  
Show the model different ways to ask for a recipe (e.g., “How do I bake a cake?” vs. “What’s the method to make a cake?”). This teaches it that many phrasings map to the same answer, much like showing a chef several ways to whisk eggs.

**Tip 4 – Avoid misleading patterns**  
If an example ends with a wrong answer, the robot may copy that mistake. Always double‑check your examples for accuracy before feeding them in.

By treating each example as a clear, consistent ingredient, you help the model cook up exactly the response you want.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
