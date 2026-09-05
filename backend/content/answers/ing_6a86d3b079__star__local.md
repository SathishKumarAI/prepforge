---
qid: ing_6a86d3b079__star__local
question: When do you fine-tune versus prompt-engineer versus use RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 314
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:34-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a customer‑support chatbot that could answer technical queries about our IoT platform. The existing FAQ corpus had ~3,000 documents, but the bot’s accuracy on new product releases was only 55 %.  

**Task** – Improve the model’s precision to at least 80 % while keeping inference latency under 200 ms and avoiding a costly retraining pipeline for every release.  

**Action** – I first evaluated fine‑tuning: we trained a RoBERTa base on our labeled FAQ set, which raised accuracy to 72 % but increased GPU usage by 3× and required nightly jobs. Next I tried prompt engineering with few‑shot examples; this pushed accuracy to 78 % without extra compute, but performance dropped when the user phrasing varied. Finally I implemented a Retrieval‑Augmented Generation (RAG) pipeline: a BM25 index fetched top‑5 docs from the corpus, and a distilled GPT‑3 model generated answers conditioned on those snippets. This achieved 83 % accuracy, maintained low latency (<180 ms), and allowed us to update the knowledge base by simply adding new PDFs—no retraining needed.  

**Result** – We surpassed the target metric, reduced GPU hours by 40 %, and learned that RAG offers a flexible middle ground when you need rapid updates without full model fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
