---
qid: ing_2a29537a98__star__local
question: 'Explain: Step 2. Start using an LLM — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 335
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:27-05:00'
sources: []
---

**Situation:**  
At my previous company we were tasked with building a conversational agent for the customer support portal. The prototype had a rule‑based engine that could handle only 25% of incoming tickets, and our SLA required resolution within two hours.

**Task:**  
I needed to integrate an LLM into the workflow so the agent could understand intent, retrieve relevant knowledge base articles, and generate responses in natural language while staying under the latency budget.

**Action:**  
First, I selected OpenAI’s GPT‑4o because of its fine‑tuning API and low‑latency inference. I wrapped the model in a microservice that accepted user queries, added a context window with the last three interactions, and used a retrieval‑augmented generation (RAG) pattern: a Pinecone vector index stored embeddings of our KB articles; the LLM was prompted to first retrieve top‑k passages before drafting an answer. I also built a scoring layer that evaluated hallucination risk by cross‑checking factual tokens against the retrieved vectors. Finally, I deployed the service on Kubernetes with autoscaling, keeping average response time under 350 ms.

**Result:**  
After rollout, resolved tickets rose from 25% to 68%, and average resolution time dropped from 3.2 hours to 1.4 hours—meeting our SLA by 40%. I learned that coupling retrieval with a safety layer is essential for reliable LLM agents, and that real‑world latency constraints shape the architecture as much as model choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
