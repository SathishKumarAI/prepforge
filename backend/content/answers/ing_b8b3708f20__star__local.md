---
qid: ing_b8b3708f20__star__local
question: 'Explain: Classification Signals — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 354
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:43-05:00'
sources: []
---

**Situation:**  
At my last company we launched an AI‑driven customer support bot that needed to classify incoming tickets into “billing”, “technical”, or “policy” categories before routing them. The bot was already generating responses, but the classification module lagged behind as ticket volume spiked during a new product launch.

**Task:**  
I had to design and deploy a scalable Classification Signals system that could process thousands of tickets per minute, reduce mis‑routing by at least 30%, and integrate seamlessly with our existing RAG pipeline so that the bot could pull relevant knowledge snippets for each category.

**Action:**  
I built a lightweight feature extractor using Spark Structured Streaming to ingest ticket text in real time. The features (TF‑IDF vectors + keyword embeddings) fed into a pre‑trained LightGBM model hosted on Kubernetes with horizontal pod autoscaling. I wrapped the model in an HTTP/2 microservice, added caching for repeated queries, and set up Prometheus alerts for latency spikes. Finally, I integrated the classification scores back into the RAG orchestrator so that the retrieval engine only fetched documents relevant to the predicted category.

**Result:**  
Within two weeks we saw a 45 % drop in mis‑routed tickets, response time fell from 1.8 s to 0.9 s per ticket, and the bot’s overall accuracy rose to 92 %. I learned how to balance model complexity with latency constraints and the importance of observability in production AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
