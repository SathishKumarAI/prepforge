---
qid: ing_f692405b5a__star__local
question: 'Explain: 2.5 Biomedical Knowledge Graphs and Language Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:40-05:00'
sources: []
---

**Situation** – While leading a research sprint at MedTech Labs, we were tasked to accelerate drug‑repurposing for rare neurodegenerative diseases. Our existing bioinformatics pipeline could only surface 12% of clinically relevant targets because it relied on flat keyword matching across PubMed abstracts.

**Task** – Build an end‑to‑end system that integrates a biomedical knowledge graph (KG) with transformer‑based language models to retrieve and rank therapeutic candidates within two weeks, while keeping inference latency below 200 ms for our web dashboard.

**Action** – I first curated a KG from the OpenBioLink dataset, mapping entities (genes, proteins, diseases) and edges (interaction, pathway, clinical trial). Using Neo4j’s Graph Data Science library, I encoded graph embeddings with node2vec. Then I fine‑tuned BioBERT on our internal literature corpus to generate contextual relevance scores for candidate genes. In the inference layer, a lightweight TensorFlow Lite model combined KG embedding similarity and BERT score via a weighted ensemble, yielding a single ranking metric. Deployment was containerized in Docker and served through FastAPI with async GPU offloading.

**Result** – The system surfaced 37 new drug‑target pairs, up from 12, with an AUC‑ROC of 0.87 versus the baseline 0.65. Latency stayed under 180 ms, enabling real‑time dashboards for clinicians. I learned how to harmonize heterogeneous graph data with deep NLP models while meeting strict performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
