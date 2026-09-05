---
qid: ing_725930a823__eli5__local
question: Why are computer-use / browser agents so much harder to make reliable than
  API-based agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 264
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:37:32-05:00'
sources: []
---

Imagine building two kinds of robots that fetch recipes from a kitchen.

**API‑based robot:** It has a clear, written instruction set: “Ask the pantry for ingredient X by calling function getIngredient(X).” Each call is like a typed message on a well‑defined phone line. The kitchen (the API) guarantees a specific reply—“here’s ingredient X” or “sorry, we’re out of it.” Because every step follows an explicit contract, the robot can predict what will happen and backtrack easily if something goes wrong.

**Browser‑agent robot:** It wanders through a crowded market instead. It clicks links, reads text, and tries to guess where the next ingredient is hidden in a maze of ads, pop‑ups, and dynamic content. The “contract” isn’t fixed; the layout can change overnight, or the page might load differently depending on weather (time of day). Small visual shifts mean the robot misclicks or misses the item entirely.

So, browser agents are harder to keep reliable because they must interpret a constantly shifting, unstructured environment—like navigating a living market—whereas API agents operate over stable, well‑documented interfaces that behave predictably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
