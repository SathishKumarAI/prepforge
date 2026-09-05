---
qid: ing_22ff882e22__star__local
question: 'Explain: Multi-Hop Reasoning Loops — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 356
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:08-05:00'
sources: []
---

**Situation:**  
In a client‑facing chatbot project for an insurance broker, the FAQ bot was answering policy queries with high confidence but still returned irrelevant facts for multi‑step questions like “If I file a claim after a hurricane, how long will it take to get reimbursed?” The metric lagged: only 58 % of such complex requests hit the correct answer within the first pass.

**Task:**  
I had to design a system that could chain multiple retrievals and reasoning steps—essentially a multi‑hop loop—to surface the precise policy timeline while keeping latency under 1.5 seconds per user query.

**Action:**  
Implemented an Agentic Retrieval-Augmented Generation (RAG) pipeline using LangChain’s `AgentExecutor`. First, the system parsed the user intent into sub‑questions: (1) “What are hurricane claim policies?” and (2) “What is the reimbursement cycle for those claims?”. For each hop, I used Pinecone embeddings of policy docs to retrieve the top 3 snippets, then passed them to GPT‑4o with a prompt that explicitly instructed it to combine answers. The agent loop ran twice—retrieval → generation → feedback—before finalizing the response. I added a lightweight cache layer (Redis) to store recent query embeddings and trimmed the retrieval window to keep latency low.

**Result:**  
Post‑deployment, the bot’s accuracy on multi‑step queries jumped from 58 % to 92 %, and average turnaround time stayed at 1.2 seconds. The experience taught me that structuring reasoning as explicit hops with controlled prompt engineering dramatically improves reliability without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
