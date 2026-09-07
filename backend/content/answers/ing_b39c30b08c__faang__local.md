---
qid: ing_b39c30b08c__faang__local
question: Looking for a tutorial? — Tutorials | Haystack
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 749
total_tokens: 982
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:36-05:00'
sources: []
---

**Clarify**

You want a concise, beginner‑friendly tutorial on building a machine‑learning pipeline with **Haystack**, an open‑source framework for search & question answering.  
Assumptions:  
- You’re comfortable with Python and pip/conda.  
- Your data is in plain text or PDFs; you’ll eventually index it for retrieval.  
- You’re targeting a simple QA demo (no heavy GPU).

**Approach**

1. **Environment setup** – create a virtual env, install Haystack (`pip install farm-haystack[all]`).  
2. **Document ingestion** – use `PDFToTextConverter` or `SimpleDirectoryReader` to load files into a list of `Document`.  
3. **Vector store** – set up an in‑memory or FAISS index; optionally switch to Elasticsearch for scalability.  
4. **Retriever** – instantiate `EmbeddingRetriever` (use Sentence‑Transformers) and point it at the vector store.  
5. **Reader** – choose a lightweight model (`distilbert-base-uncased-distilled-squad`) via `Pipeline`.  
6. **Pipeline orchestration** – wire retriever → reader; test with sample queries.  
7. **Deployment (optional)** – expose via FastAPI or streamlit.

**Depth**

```python
# 1. Setup
from haystack.document_stores import InMemoryDocumentStore
from haystack.nodes import PDFToTextConverter, EmbeddingRetriever, FARMReader
from haystack.pipelines import Pipeline

# 2. Load docs
converter = PDFToTextConverter(remove_numeric_tables=True)
docs = converter.convert(file_paths=["./data/*.pdf"])

# 3. Store
store = InMemoryDocumentStore()
store.write_documents(docs)

# 4. Retriever
retriever = EmbeddingRetriever(
    document_store=store,
    embedding_model="sentence-transformers/all-MiniLM-L6-v2",
)
store.update_embeddings(retriever)

# 5. Reader
reader = FARMReader(model_name_or_path="distilbert-base-uncased-distilled-squad")

# 6. Pipeline
pipe = Pipeline()
pipe.add_node(component=retriever, name="Retriever", inputs=["Query"])
pipe.add_node(component=reader, name="Reader", inputs=["Retriever"])

# 7. Query
result = pipe.run(query="What is the deadline for submission?", top_k_retriever=10, top_k_reader=5)
print(result["answers"][0].answer)
```

- **Complexity**: O(N) indexing; retrieval/query ~O(log N).  
- **Trade‑offs**: In‑memory fast but memory‑bound; FAISS/Elasticsearch scales at cost of setup.

**Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| No PDFs found | `converter.convert` returns empty list | Pass non‑existent path |
| Very large PDF (>100 MB) | MemoryError | Use chunking (`split_by="page"`) |
| Unsupported encoding | Text garbled | Verify with known PDF |

**Optimize & Communicate**

- Switch to **FAISS** for larger corpora; benchmark recall vs speed.  
- Fine‑tune the reader on domain data to improve answer quality (show loss curves).  
- Document all hyperparameters in a `config.yaml` so stakeholders see reproducibility.

This roadmap gives you a production‑ready, extensible Haystack pipeline with clear next steps for scaling and evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
