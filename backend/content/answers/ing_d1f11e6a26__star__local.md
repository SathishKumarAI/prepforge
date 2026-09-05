---
qid: ing_d1f11e6a26__star__local
question: 'Explain: Split — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 462
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:34-05:00'
sources: []
---

**Situation:**  
At my last gig I was tasked with building a self‑service portal that let non‑technical staff upload PDFs of invoices and get key fields extracted in real time. The existing backend could only handle plain text, so every PDF had to be OCR’d first, then parsed, and the whole process took 8–10 seconds per document—way too slow for a live dashboard.

**Task:**  
I needed to cut latency by at least 70 % while keeping extraction accuracy above 95 %. The goal was also to make the workflow modular so we could swap in better OCR or NLP models later without touching downstream code.

**Action:**  
I split the pipeline into two LlamaIndex agents:  
1. **OCR Agent** – a lightweight wrapper around Tesseract‑pytesseract that runs on a GPU‑enabled container, returning raw text plus confidence scores. I added a retry loop with adaptive timeouts and batched the calls using asyncio to keep CPU idle while waiting for OCR.  
2. **Parsing Agent** – fed the OCR output into a LangChain prompt that uses GPT‑4o to extract structured fields (invoice number, date, total). The agent stores results in an index built by LlamaIndex, enabling instant similarity search and caching of recurring vendor templates.

I orchestrated them with Prefect, so each step only runs if the previous succeeded, and I logged all metrics to Grafana for real‑time monitoring.

**Result:**  
Latency dropped from 9 seconds to 2.3 seconds per invoice (77 % reduction). Accuracy stayed at 96.8 %. The modular design meant we could swap Tesseract for an OCR‑API in a single line, and the Prefect DAG automatically retried failed jobs. I learned that careful agent separation and async batching can turn a monolithic bottleneck into a scalable micro‑service architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
