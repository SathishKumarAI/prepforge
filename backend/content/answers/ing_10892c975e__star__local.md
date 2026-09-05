---
qid: ing_10892c975e__star__local
question: 'Explain: Enterprise DNA — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 325
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:18-05:00'
sources: []
---

**Situation**  
When my team at a fintech firm was building an AI‑driven customer support chatbot, we noticed that the model kept pulling irrelevant documents from our knowledge base. The search engine returned thousands of PDFs, but only a handful contained the policy details customers actually needed.

**Task**  
I had to design a system that could semantically rank documents so the bot would surface the most relevant policy excerpts in real time, without adding latency or bloating the model size.

**Action**  
I introduced Enterprise DNA’s Semantic Kernel as the backbone. First, I extracted embeddings from our policy corpus using the OpenAI GPT‑4 embedding API and stored them in a vector index with Pinecone. Then I wrapped the kernel around the LangChain pipeline, creating custom prompts that fed the user query and top‑k vectors into a retrieval‑augmented generation step. I tuned the semantic similarity threshold to balance precision (90 % relevance) against recall (keeping 5 % of docs for fallback). Finally, I integrated the kernel into our FastAPI endpoint, ensuring each request completed within 150 ms.

**Result**  
User satisfaction scores jumped from 72 % to 88 % in three months, and we cut support ticket volume by 35 %. The exercise taught me how to combine vector search with prompt engineering to make AI outputs both precise and performant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
