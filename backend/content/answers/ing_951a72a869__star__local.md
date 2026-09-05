---
qid: ing_951a72a869__star__local
question: 'Explain: Parse — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 408
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:01-05:00'
sources: []
---

**Situation** – In my last role I was tasked with automating the processing of over 10,000 legacy insurance policy PDFs each quarter. The documents were scanned, heavily formatted, and contained critical clauses that needed to be extracted for compliance reporting.

**Task** – Build a robust pipeline that could OCR the PDFs, parse them into structured JSON, feed the data into an LLM‑driven QA system, and trigger downstream actions (e.g., flagging policy anomalies) without manual intervention.

**Action** – I first integrated **Tesseract OCR** with a custom pre‑processing step that deskewed pages and applied adaptive thresholding. The extracted text was then fed to **LlamaIndex**, where I created a *DocumentStore* using the `SimpleDirectoryReader`. Using LlamaIndex’s `VectorStoreIndex` with OpenAI embeddings, I built an index of policy sections, enabling semantic search for clause retrieval. For workflow orchestration I leveraged **LangChain**’s agent framework: an `OpenAIAgent` was configured with a prompt that instructed the model to classify each clause as “compliant” or “non‑compliant.” The agent’s outputs were routed via a lightweight **AWS Step Functions** state machine, which triggered email alerts for non‑compliant clauses and updated a DynamoDB table. I added error handling by monitoring OCR confidence scores; documents below 85% were sent to a manual review queue.

**Result** – The pipeline reduced manual processing time from 4 hours per batch to under 30 minutes, achieving an accuracy of 96 % on clause extraction (verified against a gold standard). It also cut compliance reporting latency by 80 %. I learned how to combine OCR, vector indexing, and LLM agents into a cohesive workflow that balances automation with human oversight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
