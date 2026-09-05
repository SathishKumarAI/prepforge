---
qid: ing_ed1a04e1f9__star__local
question: 'Explain: Types of Memory — LLM Powered Autonomous Agents | Lil''Log'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:53-05:00'
sources: []
---

**Situation** – In my last role as a research engineer at a robotics startup, we were building an autonomous delivery robot that relied on a large language model (LLM) to interpret customer requests and navigate city streets. Our initial prototype struggled with repetitive orders: the LLM kept asking for clarification even when it had already seen similar phrasing earlier in the conversation.

**Task** – I needed to implement a memory architecture that allowed the agent to remember past interactions, context, and learned navigation shortcuts so it could respond more efficiently and reduce latency by at least 30 %.

**Action** – I integrated three types of memory: (1) **Short‑term memory** using an in‑process key–value store for immediate dialogue context; (2) **Long‑term episodic memory** via a vector database (Pinecone) that indexed past order embeddings and route histories; and (3) **Procedural memory** through a reinforcement‑learning policy that updated the LLM’s internal parameters based on success metrics. I wrote adapters to feed these memories into the LLM prompt as dynamic context windows, tuning chunk sizes with LangChain.

**Result** – After deployment, the robot’s request handling time dropped from 4.2 s to 2.8 s, a 33 % improvement. User satisfaction scores rose by 18 %, and we saw a 22 % reduction in repeated clarification prompts. I learned that combining short‑term context with scalable long‑term embeddings is key for practical LLM agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
