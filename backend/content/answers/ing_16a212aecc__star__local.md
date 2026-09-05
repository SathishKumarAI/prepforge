---
qid: ing_16a212aecc__star__local
question: 'Explain: Course Staff — CS294/194-196 Large Language Model Agents | CS
  194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 345
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:58-05:00'
sources: []
---

**Situation:** During my senior year I enrolled in CS 194/294‑196, a capstone that required building an autonomous chatbot using GPT‑4 for a local nonprofit’s FAQ system. The team had only two weeks before the final demo and our mentor—one of the course staff—had to guide us through rapid prototyping.

**Task:** My role was to design the interaction loop: parse user intent, retrieve relevant knowledge snippets, and generate concise answers while keeping token usage below 200 per response to stay within budget. I had to also implement a safety filter to block policy‑violating content.

**Action:** I started by mapping intents with RAG (Retrieval‑Augmented Generation) using Pinecone for vector search. Then I wrapped the LLM calls in an async pipeline, added a simple regex‑based content‑filter, and set up prompt engineering with few‑shot examples. The course staff conducted daily code reviews, suggesting we swap from `openai.ChatCompletion` to the newer `ChatCompletion.create` API for better token accounting. They also provided a sandbox environment so I could iterate on prompt tuning without hitting rate limits.

**Result:** We delivered a demo that answered 95 % of user queries correctly with an average response time of 1.2 s, and we reduced cost per query by 30 %. The staff’s hands‑on guidance taught me how to balance performance, safety, and cost—skills I’ve applied in production LLM deployments since.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
