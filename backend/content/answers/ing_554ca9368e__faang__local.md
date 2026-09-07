---
qid: ing_554ca9368e__faang__local
question: 'Explain: Data & context strategy — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 512
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:26-05:00'
sources: []
---

**Clarify**  
We’re asked to describe a *Data & Context Strategy* for an **Enterprise Retrieval‑Augmented Generation (RAG) Assistant**—a system that pulls from corporate data stores and external knowledge sources to answer employee queries in real time.  
Assumptions:  
- Enterprise has structured (DBs, ERPs), semi‑structured (docs, emails), and unstructured (PDFs, presentations).  
- Real‑time latency < 2 s for most requests.  
- Compliance & audit trails are mandatory.

**Approach**  
1. **Data Ingestion & Normalization** – use an ETL pipeline that tags metadata (owner, sensitivity, last‑modified) and converts to a searchable vector format.  
2. **Context Layer** – build a hierarchical context cache: ① user profile + intent, ② document relevance ranking, ③ policy filters.  
3. **Retrieval Engine** – hybrid of semantic vectors (FAISS/Elastic) + keyword exact match for precision.  
4. **Generation & Post‑processing** – prompt the LLM with retrieved snippets and a compliance “check‑list” to enforce policies.  
5. **Audit & Feedback Loop** – log query, context, answer, and user feedback; feed back into retraining.

**Depth**  
- Vector DB: 128‑dim embeddings via Sentence‑Transformers; index updates every 10 min for near real‑time freshness.  
- Retrieval latency: < 200 ms (vector search) + < 300 ms (LLM inference).  
- Policy enforcement: rule engine on top of prompt to block disallowed content; fallback to human review if confidence < 0.6.

**Edge Cases**  
- Data drift → stale embeddings → degrade answer quality.  
- Conflicting policies across departments.  
- Zero‑shot queries with no matching context → graceful degradation (“I’m not sure, let me find someone”).

**Optimize & Communicate**  
Iterate on vector dimensionality (trade‑off recall vs speed), cache frequently used contexts to GPU memory, and employ model distillation for lower latency. Explain trade‑offs clearly: higher recall → more compute; stricter policy → less hallucination but higher false negatives. This narrative demonstrates structured problem solving, technical depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
