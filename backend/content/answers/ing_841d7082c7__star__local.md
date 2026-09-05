---
qid: ing_841d7082c7__star__local
question: 'Explain: Memory and context management — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 326
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:32-05:00'
sources: []
---

**Situation:**  
In a client‑facing chatbot project for an e‑commerce platform, the original LLM model kept repeating product suggestions without remembering that the user had already purchased certain items or was actively looking for accessories to a recent purchase.

**Task:**  
I needed to build a memory‑aware agent that could track conversational context and intelligently decide when to invoke external recommendation APIs instead of re‑generating generic responses, all while keeping latency under 800 ms per turn.

**Action:**  
I implemented a short‑term in‑memory buffer using Redis Streams to store the last ten user utterances and extracted entities via spaCy. For long‑term context I used Pinecone embeddings so the agent could retrieve relevant past interactions when the conversation looped back. The agent’s policy network, built with LangChain, evaluated the “need for tool use” score: if confidence that a fresh recommendation was required dropped below 0.3, it bypassed the external API and returned a cached answer. I also introduced a token‑budgeting heuristic to trim generated text when context length exceeded 400 tokens.

**Result:**  
User satisfaction scores rose from 72 % to 88 %, while average response time stayed at 650 ms. The system reduced redundant API calls by 45 %, cutting operational costs, and I learned that blending vector‑based retrieval with dynamic tool‑invocation policies is key for scalable conversational agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
