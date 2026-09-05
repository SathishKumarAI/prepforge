---
qid: ing_709320f4b0__star__local
question: 'Explain: Functional — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 333
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:23-05:00'
sources: []
---

**Situation** – In Q3 2024, our finance division was drowning in unstructured data: PDFs of quarterly reports, internal memos, and vendor contracts. The analytics team needed quick answers to “What were the total recurring costs last quarter?” but the manual search took hours.

**Task** – I was tasked with building a functional Enterprise RAG (Retrieval-Augmented Generation) assistant that could ingest all documents, index them, and answer queries in under two seconds while guaranteeing compliance with data‑handling policies.

**Action** – First, I used LangChain to build the pipeline: a PDF loader → spaCy for named entity extraction → Pinecone vector store with embeddings from OpenAI’s text‑embedding‑3. I added a fine‑tuned Llama2 model as the generator and wrapped everything in FastAPI behind an Azure AD‑protected endpoint. To enforce compliance, I implemented a policy layer that masked any PII before returning results. I also set up a lightweight UI in Streamlit for end users to test queries.

**Result** – The assistant cut query response time from 15 minutes to <2 seconds and achieved 92 % precision on a held‑out test set of 200 questions. Adoption grew to 1,200 daily active users within the first month, freeing analysts to focus on higher‑value insights. I learned that marrying robust retrieval with a policy‑aware generator is key for enterprise trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
