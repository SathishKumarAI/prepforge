---
qid: ing_f307a0ae16__fp__local
question: 'Explain: Build an Extractive QA Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 452
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:35:42-05:00'
sources: []
---

**Why an extractive QA pipeline is needed**

At its core a question‑answering system must transform an arbitrary natural‑language query into a *single span* of text that best satisfies the user’s intent.  
The fundamental bottleneck is *information retrieval*: given millions of documents, how do we locate the few sentences that contain the answer?  
We therefore split the problem into two sub‑tasks that mirror classic information‑retrieval principles:

| Stage | Goal | Core principle |
|-------|------|----------------|
| **Retriever** | Return a short list of candidate passages | *Document relevance* = similarity between query and passage embeddings (cosine, BM25). |
| **Reader** | Extract the exact answer span | *Maximum likelihood estimation* over token positions conditioned on the retrieved context. |

The retriever reduces the search space, so the reader can run a heavy transformer without exploding cost.  
Both stages are trained end‑to‑end: the retriever learns to rank passages that help the reader achieve higher F1; the reader learns to attend only to tokens that the retriever has surfaced.

**A non‑obvious insight**

Most tutorials stop at “load models, call API”. The *real power* lies in **joint fine‑tuning**: by back‑propagating the reader’s loss through the retriever’s embedding layer, we force the retriever to surface passages that are not only relevant but also *reader‑friendly*. This subtle coupling dramatically improves precision, especially on noisy corpora.  

In practice, a Haystack pipeline looks like:

```python
retriever = BM25Retriever(document_store)
reader    = FARMReader(model_name="deepset/roberta-base-squad2")
pipe      = Pipeline()
pipe.add_node(component=retriever, name="BM25", inputs=["Query"])
pipe.add_node(component=reader,   name="Reader",  inputs=["BM25"])
```

Running `pipe.run(query="What is Haystack?")` executes the two‑stage flow efficiently and yields a concise answer span.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
