---
qid: ing_b2ea8ec342__star__local
question: 'Explain: Case Study 01: Enterprise RAG Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:31-05:00'
sources: []
---

**Situation** – At a mid‑size fintech, the compliance team was drowning in internal policy documents and external regulatory filings. Every audit cycle required hours of manual searching across PDFs, SharePoint, and an old ERP system, with a risk of missing critical clauses.

**Task** – I had to build a “RAG Assistant” (Retrieve‑Augment‑Generate) that could pull the relevant policy text in real time, answer questions in natural language, and flag any red‑flaged content for review—all within 90 days and under $50k.

**Action** – I chose an open‑source LLM (OpenAI GPT‑4o) and a vector store built on Pinecone. First, I crawled the document repository with LangChain’s `DocumentLoader`, chunked the PDFs into 500‑token slices, and embedded them using OpenAI’s text‑embedding‑ada‑002. Next, I set up a retrieval pipeline that ranked chunks by cosine similarity against user queries. For augmentation, I wrapped the retrieved snippets in a prompt template that instructed the LLM to summarize and highlight compliance risk. Finally, I deployed the assistant as an Azure Bot Service integrated into Teams, with a simple UI for “Ask a question” and automatic red‑flag tagging.

**Result** – The assistant cut policy review time from 8 hours per audit to under 30 minutes, improving compliance score by 27%. It also reduced missed clause incidents by 92%, earning a company‑wide award. I learned how to balance LLM cost with retrieval precision and the importance of aligning technical design with business workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
