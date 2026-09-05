---
qid: ing_928a5805f6__star__local
question: 'Explain: High-level architecture — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 352
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:07-05:00'
sources: []
---

**Situation:**  
At my previous company we had a customer‑support portal with over 1.2 million knowledge‑base articles and an internal compliance database. The support team was drowning in manual searches, with average resolution time 3 days and SLA breaches rising by 15% each quarter.

**Task:**  
Build an Enterprise RAG Assistant that could ingest the entire knowledge base, answer user queries instantly, and ensure answers were compliant with regulatory guidelines—all while integrating into our existing chat UI and respecting data‑access policies.

**Action:**  
I architected a modular pipeline: (1) used Azure Cognitive Search to index documents and generate embeddings via OpenAI’s `text-embedding-ada-002`; (2) built a vector store in Pinecone for sub‑second similarity search; (3) wrapped the retrieval logic in an Azure Function that feeds top‑10 snippets into GPT‑4 Turbo as context, applying a prompt template that enforces compliance rules; (4) deployed the function behind an Azure API Management gateway with role‑based access control. I added a lightweight React component to the chat UI and set up CI/CD with GitHub Actions for zero‑downtime releases.

**Result:**  
The assistant cut average query resolution time from 3 days to under 2 hours, reduced SLA breaches by 42%, and handled 70% of tickets without human intervention. I learned that coupling a robust vector store with fine‑tuned prompt engineering yields measurable business impact while keeping compliance in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
