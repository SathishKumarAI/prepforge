---
qid: ing_cf05bab7d4__star__local
question: 'Explain: How to prepare — Palantir'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 370
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:16-05:00'
sources: []
---

**Situation:**  
During my senior thesis at university I was tasked with building an end‑to‑end AI pipeline that could ingest unstructured text from public health reports and output a risk score for disease outbreaks. The data were noisy, the models needed to run on limited compute, and the deadline was a month before graduation.

**Task:**  
I had to design a reproducible workflow: clean the raw PDFs, train a transformer‑based classifier, evaluate it against industry benchmarks, and package everything into a container that could be deployed on Palantir’s Foundry platform for future clients.

**Action:**  
First, I wrote a Scrapy spider to extract text and used spaCy for NLP preprocessing. For modeling I fine‑tuned a BERT base on my dataset, then distilled it with DistilBERT to reduce inference latency. I leveraged Ray for distributed training across a 4‑GPU cluster, logged metrics in Weights & Biases, and wrote unit tests with PyTest to catch edge cases. Finally, I Dockerized the pipeline, added a FastAPI endpoint, and documented the deployment steps in Markdown so anyone could spin it up on Foundry.

**Result:**  
The distilled model achieved 87 % F1‑score versus the baseline of 78 %, while inference time dropped from 2.3 s to 0.6 s per document. I received an A+ grade and was invited to present at the university’s AI symposium. The exercise taught me how to balance accuracy, speed, and reproducibility—skills directly applicable to Palantir’s data‑centric engineering culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
