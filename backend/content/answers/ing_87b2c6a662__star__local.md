---
qid: ing_87b2c6a662__star__local
question: 'Explain: Generative AI with Large Language Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:01-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new internal knowledge‑base chatbot for the sales team. The existing FAQ bot only answered scripted questions and our sales reps complained it was too slow to find relevant product specs, hurting their close rates.

**Task:**  
I needed to build an AI assistant that could generate accurate, context‑aware responses on demand, reduce lookup time by 70%, and integrate seamlessly with our CRM and Slack channels within a two‑month sprint.

**Action:**  
I chose OpenAI’s GPT‑4 fine‑tuned on our product documentation, then wrapped it in a custom Flask service. I added a retrieval‑augmented generation (RAG) layer: the bot first fetched top‑k relevant PDF sections from an ElasticSearch index, fed them as context into the model, and post‑processed outputs with regex to format price tables. To keep latency low, I deployed the model on a GPU‑enabled Kubernetes pod, autoscaled based on Slack message traffic. I also built a lightweight UI in our internal portal and set up A/B testing against the legacy bot.

**Result:**  
Within two weeks of launch, response accuracy rose from 65% to 92%, average lookup time dropped from 45 s to 12 s, and sales reps reported a 35% increase in daily customer interactions. The project also saved $18k/month on cloud compute by optimizing batch inference. I learned how RAG can dramatically improve LLM reliability while keeping costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
