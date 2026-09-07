---
qid: ing_c3fc005b02__faang__local
question: 'Explain: Data — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 548
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:52-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of how *data* is used in the “Jobs” feature at **Glean**, a knowledge‑search platform that powers internal search and recommendation across an organization. I’ll assume we want to understand: (1) what data sources feed the Jobs model, (2) how it’s preprocessed, and (3) how it informs job‑matching recommendations.

**Approach**  
1. Identify raw inputs: employee profiles, skill tags, past activity, and HR job postings.  
2. Explain feature engineering: embeddings for skills, tenure, and location.  
3. Outline the model pipeline: embedding fusion → similarity scoring → ranking.  
4. Touch on evaluation & feedback loop.

**Depth**  

| Stage | What happens | Key tech |
|-------|--------------|----------|
| **Data ingestion** | Real‑time sync from HRIS (Workday, BambooHR), internal skill taxonomy, and clickstream logs. | Kafka + Airflow DAGs |
| **Feature extraction** | • Skill vectors via FastText on the company’s custom ontology.<br>• Role embeddings from a pre‑trained transformer on job descriptions.<br>• User embeddings from collaborative filtering of past job views. | PyTorch, Scikit‑Learn |
| **Model** | Multi‑modal neural net: concatenate skill, role, and user embeddings → feed into a Siamese network that learns similarity in a 256‑dim latent space. The network is trained with contrastive loss (positive pairs = employee–job matches; negative pairs = random mismatches). | PyTorch Lightning |
| **Serving** | Approximate nearest neighbor search (FAISS) to retrieve top‑k job candidates per user in <10 ms. | FAISS, Redis cache |
| **Feedback loop** | Clicks & applications update a reward signal; online A/B testing refines the loss weighting. | MLOps pipeline with MLflow |

**Edge cases**  
- New employees lack activity → fallback to demographic‑based similarity.  
- Rare skills not in the ontology → use sub‑word embeddings.  
- Job postings that change frequently → stale indices handled by incremental reindexing.

**Optimize & communicate**  
Future work: incorporate contextual signals (project participation, meeting attendance) and causal inference to mitigate bias. I’d present this as a slide deck with data flow diagrams, runtime stats, and a KPI chart showing improved match rates after the latest iteration. This structure keeps interviewers aligned on assumptions, design choices, and measurable impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
