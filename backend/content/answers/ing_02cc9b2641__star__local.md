---
qid: ing_02cc9b2641__star__local
question: 'Q: Why is the "Extraction" phase the bottleneck for GraphRAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 368
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:52-05:00'
sources: []
---

**Situation:**  
I was leading a project to deploy GraphRAG for a legal firm that needed instant answers from thousands of case files. During early trials the system took over an hour per query because the Extraction phase—building the knowledge graph from PDFs—was eating up 80% of total latency.

**Task:**  
My goal was to cut the extraction time by at least 70% while keeping the graph’s fidelity intact, so that downstream Retrieval and Generation could run in real‑time.

**Action:**  
I first profiled the pipeline and found that the OCR + NLP stack ran sequentially on a single CPU. I rewrote it using Apache Spark to distribute the workload across 8 nodes, added GPU‑accelerated Tesseract for OCR, and switched from spaCy NER to a lightweight transformer model (DistilBERT) fine‑tuned on legal entities. To avoid re‑processing unchanged documents, I introduced a content hash cache in Redis that skipped extraction when file hashes matched. Finally, I persisted the intermediate graph as Parquet files indexed by document ID, enabling fast incremental updates.

**Result:**  
Extraction time dropped from 48 minutes to 6 minutes per batch—an 87% reduction. The overall query latency fell below 3 seconds, meeting the firm’s SLA. I learned that bottlenecks often lie in data ingestion and that thoughtful parallelism plus smart caching can unlock massive performance gains without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
