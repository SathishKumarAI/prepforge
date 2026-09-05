---
qid: ing_e750a38c8b__star__local
question: 'Explain: Q28: Explain the RAGAS evaluation framework'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 395
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:15-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the FAQ chatbot for a telecom client that had been receiving complaints about vague or irrelevant answers from its Retrieval‑Augmented Generation (RAG) system. The existing model scored only 0.42 on BLEU and customers were unhappy.

**Task** – I needed to design an end‑to‑end evaluation pipeline that could quantify both the relevance of retrieved documents and the quality of generated responses, so we could iterate faster and prove ROI to stakeholders.

**Action** – I built a RAGAS (RAG Assessment) framework in Python. First, I used the Haystack retriever with BM25 to fetch top‑k passages, then passed them to a T5‑base generator. For relevance I calculated **Recall@K** and **Precision@K** against manually annotated ground truth. For answer quality I employed **ROUGE‑L**, **BLEURT**, and a new metric called **Answer Generation Accuracy (AGA)** that checks factual consistency via OpenAI’s GPT‑4 “truthfulness” prompt. I wrapped the metrics in a Dockerized microservice, logged results to Grafana dashboards, and added an automated alert if any metric fell below 0.70.

**Result** – After tuning the retriever index size and adding passage ranking with a BERT score, BLEU rose to 0.68, ROUGE‑L to 0.74, and AGA improved from 0.56 to 0.81. Customer satisfaction scores jumped by 18 % in the next quarter. I learned that combining retrieval metrics with generation‑specific measures gives a holistic view of RAG performance and speeds up experimentation cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
