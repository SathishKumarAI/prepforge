---
qid: ing_511138f991__star__local
question: 'Explain: When to Enable Thinking / Reasoning — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 311
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:25-05:00'
sources: []
---

**Situation:**  
In my last role I was leading the rollout of a customer‑support chatbot that needed to handle complex troubleshooting scenarios for an IoT platform. Our initial version used purely retrieval‑based responses, but we hit a 35 % escalation rate because users asked multi‑step questions.

**Task:**  
I had to reduce escalations below 15 % by making the bot capable of reasoning over product specs and usage logs while still maintaining quick turn‑around times.

**Action:**  
I introduced a hybrid context‑engineering pipeline. First, I built a knowledge graph from our technical docs and real‑time telemetry, exposing it as a vector store in Pinecone. Then, using LangChain’s “Thinking / Reasoning” prompt template, I enabled the LLM to first outline a plan (“Think”) before generating an answer. To keep latency low, I pre‑computed reasoning steps for common issue categories and cached them with Redis. Finally, I set up a feedback loop where every escalated ticket was logged back into the training set for continuous improvement.

**Result:**  
Within two weeks of deployment, escalation rates dropped to 12 %, response time stayed under 2 seconds, and we saw a 22 % increase in customer satisfaction scores. I learned that judiciously enabling reasoning—only when the context is rich enough—balances accuracy with performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
