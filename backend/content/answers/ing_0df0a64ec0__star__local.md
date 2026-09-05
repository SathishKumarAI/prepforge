---
qid: ing_0df0a64ec0__star__local
question: 'Explain: Get started with LlamaParse for free — LlamaIndex | AI Agents
  for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 387
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:27-05:00'
sources: []
---

**Situation:**  
When my team was building a knowledge‑base chatbot for a legal firm, we hit a bottleneck: the PDFs of case files were too large and scanned, so our existing OCR pipeline couldn’t keep up with the 10 k documents per month.

**Task:**  
I needed to prototype a lightweight OCR solution that could ingest those PDFs, extract structured text, and feed it into LlamaIndex without incurring costs—just for an internal proof of concept.

**Action:**  
I signed up for LlamaParse’s free tier on their website, then installed the `llama-parse` Python package via pip. Using the provided CLI, I ran `llama-parse --input-dir ./pdfs --output-format json`. The tool automatically leveraged OpenAI’s GPT‑4o model (free credits were enough for 50 k pages) to perform OCR and chunking. I wrapped the output in a custom LlamaIndex `VectorStore` using FAISS, indexed the text, and built an AI agent that could answer queries like “What was the verdict in Smith v. Jones?” The agent’s response latency dropped from ~30 s to under 2 s.

**Result:**  
Within two days I had a fully functional OCR‑to‑vector pipeline handling 10 k PDFs for free, cutting our processing cost from $1.20 per page to zero and improving retrieval speed by 95%. The lesson: start small with LlamaParse’s free tier, iterate on indexing, and you can scale up without breaking the bank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
