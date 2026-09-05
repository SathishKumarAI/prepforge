---
qid: ing_dba7915f91__star__local
question: 'Explain: Sources — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 325
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:06-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we needed to build an AI‑powered customer support chatbot that could handle complex loan queries while staying within strict privacy regulations.

**Task:** I had to assemble a high‑quality, compliant knowledge base—our “sources”—to fine‑tune the DeepSeek LLM so it answered accurately without leaking sensitive data.

**Action:** First, I mapped all internal documents (policy PDFs, FAQ sheets, and anonymized chat logs) and external regulatory sites. Using Python’s `requests` and BeautifulSoup, I scraped the latest CFPB guidelines, then stored everything in a secure PostgreSQL cluster with row‑level encryption. Next, I employed DeepSeek’s ingestion API to vectorize each document, tagging them by intent (e.g., “interest rate,” “repayment options”). I set up an incremental pipeline so new documents automatically refreshed the embeddings every week. Finally, I integrated this vector store into our retrieval‑augmented generation flow, ensuring the LLM only consulted relevant sources.

**Result:** The chatbot’s precision jumped from 68 % to 92 % on a benchmark test, and we cut average resolution time by 35 %. I learned that careful source curation—balancing breadth with privacy—is key to trustworthy AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
