---
qid: ing_fb4add79dc__eli5__local
question: 'Explain: Q107: You''re an AI Product Manager. Write the structure of a
  PRD for a generative AI feature that includes hallucination policy, fallback behavior,
  and an eval methodology section.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 234
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:03-05:00'
sources: []
---

Think of a PRD (Product Requirements Document) as a recipe book for a new dish—here, a generative‑AI feature. The **recipe** starts with the *Goal* and *Audience*, then lists the *Ingredients* (data sources, model version).  

The **Hallucination Policy** is like a “taste‑check” step: it tells us when the AI might invent facts (“hallucinate”) and how we flag or correct those parts—think of a safety net that catches any wrong flavor before serving.  

The **Fallback Behavior** is the backup recipe: if the main model can’t answer, the system pulls in a simpler, verified source (e.g., a knowledge base) so the user still gets useful info instead of an empty plate.  

Finally, the **Eval Methodology** is the tasting panel—metrics, test cases, and user studies that judge how often hallucinations occur, how well fallbacks work, and overall taste quality. This structured “recipe” keeps the feature tasty, safe, and measurable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
