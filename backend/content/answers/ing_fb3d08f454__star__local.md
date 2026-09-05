---
qid: ing_fb3d08f454__star__local
question: 'Explain: AI Agentic Design Patterns with AutoGen - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:21-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a virtual customer support chatbot that needed to handle complex, multi-turn conversations while integrating with our inventory and billing APIs. The existing rule‑based system was hitting latency limits and had a 45% churn rate during peak hours.

**Task:**  
I was tasked with redesigning the agent architecture so it could autonomously plan actions (API calls, data retrieval) and adapt its dialogue strategy in real time, all while keeping response times under 1 s.

**Action:**  
I adopted AutoGen’s *Agentic Design Patterns*: created a *Planner* agent that generated short‑term action plans from user intents; a *Worker* agent that executed those plans by invoking REST endpoints and parsing JSON; and an *Evaluator* that scored each plan against SLA metrics. I used the OpenAI LLM with custom prompts to encode domain knowledge, and wrapped calls in a lightweight Go microservice for low overhead. The agents communicated via a message bus (Kafka) so we could add new skills without breaking existing flows.

**Result:**  
The new agentic system cut average response time from 1.8 s to 0.9 s and reduced churn to 12% during peak traffic. We also added two new API integrations in under a week, thanks to the modular design. I learned that structuring LLM interactions into discrete, purpose‑built agents gives you the flexibility of AI while preserving engineering rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
