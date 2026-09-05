---
qid: ing_99498a4b02__star__local
question: 'Explain: Score within context — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:05-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new conversational AI for customer support. Our internal metrics showed a high overall accuracy of 92 %, but customers complained that the bot often gave irrelevant follow‑ups during complex troubleshooting sessions.

**Task:**  
I was tasked with diagnosing why the model performed poorly in those specific contexts and presenting a data‑driven improvement plan to product and engineering teams within two weeks.

**Action:**  
First, I set up Langwatch to capture real‑time conversation logs and tagged each turn with context metadata (issue type, sentiment, user intent). Then, using Langfuse’s evaluation framework, I created custom scoring functions that weighted responses by their relevance to the current context rather than just overall correctness. By running a batch of 5,000 historical chats through this new scorer, we identified that the bot’s “error‑handling” submodel was only 45 % accurate in high‑complexity scenarios. I collaborated with the data science team to fine‑tune that submodel on a curated subset of those cases and added a fallback rule for ambiguous intents.

**Result:**  
After deploying the updated model, context‑aware accuracy jumped from 45 % to 78 %, and customer satisfaction scores rose by 12 points (from 4.2 to 5.4 out of 7). I learned that tailoring evaluation metrics to real conversational contexts—and leveraging tools like Langwatch and Langfuse—can uncover hidden weaknesses that generic accuracy masks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
