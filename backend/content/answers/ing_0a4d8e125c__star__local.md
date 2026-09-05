---
qid: ing_0a4d8e125c__star__local
question: 'Explain: Retrieval-Based Tool Selection — The Complete Guide to Tool Selection
  in AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 368
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:20-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a virtual customer‑support agent for a telecom provider that had to handle over 50 k tickets per day. The existing chatbot answered only scripted FAQs, leading to a 35 % abandonment rate on the first contact.

**Task:**  
I was tasked with designing a retrieval‑based tool‑selection module so the agent could pick the most relevant internal knowledge base or third‑party API (billing, network status, device troubleshooting) for each incoming query, thereby reducing resolution time and improving customer satisfaction.

**Action:**  
First I mapped every user intent to a set of candidate tools using an ontology and trained a lightweight BERT classifier on labeled support logs. Next, I implemented a semantic similarity engine with FAISS that scores each tool’s knowledge‑graph embeddings against the query embedding in real time. To balance precision and latency, I introduced a fallback rule: if no tool scored above 0.78, the agent escalated to a human. I also added an online learning loop where every successful resolution updated the relevance matrix via reinforcement signals (time to solve, CSAT). The whole stack ran on Dockerized microservices with gRPC for sub‑100 ms latency.

**Result:**  
After two months of A/B testing, abandonment dropped from 35 % to 18 %, and first‑contact resolution rose from 52 % to 73 %. We also cut average ticket handling time by 28 %. I learned that combining semantic retrieval with a lightweight intent classifier and continuous reinforcement can turn a rule‑based bot into a dynamic, tool‑aware agent without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
