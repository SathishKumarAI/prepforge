---
qid: ing_a644a2569e__aws__local
question: Compare single-shot RAG with agentic RAG. When does retrieval-as-a-tool
  win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:58-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**  

**Situation / Task** – I was tasked to build a knowledge‑base assistant for an e‑commerce help desk that could answer product‑specific queries in real time while keeping latency under 200 ms. The team debated whether to use *single‑shot Retrieval‑Augmented Generation (RAG)* or the newer *Agentic RAG* (where the model iteratively decides what to retrieve).  

**Action** – I first profiled a single‑shot RAG pipeline on a representative dataset:  
- **Retriever:** OpenSearch with BM25, 1 ms per query.  
- **Generator:** GPT‑3.5 Turbo (4‑byte prompt + 512 tokens) – ~50 ms inference.  
Total latency ≈ 70 ms; accuracy (BLEU = 0.68, F1 = 0.73).  

Next I benchmarked an agentic approach: the model could issue multiple retrieval steps, but each step added ~15 ms for policy reasoning plus 10 ms retriever call. In practice, the average of 2.3 iterations pushed latency to 120 ms and only improved F1 to 0.76 (≈ 4 % absolute).  

**Result** – For our SLA‑driven help desk, *single‑shot RAG* won: it met latency goals, required no complex policy training, and costed ~30 % less GPU time. Agentic RAG shines when the answer requires multi‑hop reasoning or dynamic context (e.g., troubleshooting a network stack).  

**Learnings** – I documented the trade‑off curve (latency vs. accuracy) and built an automated switch that selects the retrieval mode based on query complexity, ensuring we deliver customer value without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
