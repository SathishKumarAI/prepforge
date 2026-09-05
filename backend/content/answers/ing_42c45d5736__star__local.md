---
qid: ing_42c45d5736__star__local
question: 'Explain: Extract — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:11-05:00'
sources: []
---

**Situation:**  
At my last company, we were building an automated knowledge‑base system for a legal firm that had over 15 000 PDFs of case files. The client needed to search these documents by natural language queries within 24 hours after ingestion.

**Task:**  
I was tasked with designing a pipeline that could (1) extract text from scanned PDFs, (2) index the content efficiently, and (3) allow an AI agent to answer user questions in real time without retraining on every new file.

**Action:**  
I chose LlamaIndex as the vector‑store framework because of its plug‑in support for OCR. I integrated Tesseract with a pre‑processing step that split each PDF into pages, ran OCR, and cleaned noise using regexes. The extracted text was chunked (512 tokens) and fed to LlamaIndex’s `GPTVectorStoreIndex`. For the agent layer, I built a retrieval‑augmented generation loop: an OpenAI GPT‑4 agent queried the index with a custom prompt that included the user question and the top 5 relevant chunks. The agent then generated concise answers, which were cached for 12 hours to reduce API calls.

**Result:**  
The end‑to‑end latency dropped from 3 minutes to under 30 seconds per query. Accuracy (measured by manual QA on 200 random queries) improved from 68% to 92%. I learned how to balance OCR accuracy, chunk size, and retrieval speed, and that a lightweight agent can drastically cut inference costs while keeping answers fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
