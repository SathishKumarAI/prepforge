---
qid: ing_e2fcd4c9a4__fp__local
question: 'Explain: Basic Usage — GitHub - mem0ai/mem0: Universal memory layer for
  AI Agents \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 659
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:27-05:00'
sources: []
---

**Why a “universal memory layer” is needed**

An autonomous agent receives data streams, processes them, and must act on past events without recomputing everything.  
If the agent stores every datum in an opaque log, later reasoning becomes *O(n)* over all history—impossible for real‑time systems.  
A memory layer that **indexes** observations by semantic tags turns the agent into a search engine: query → relevant snippets → inference.  
Thus we need a structure that

1. **Persistently stores arbitrary JSON blobs** (raw sensor data, dialogue turns).  
2. **Embeds them in vector space** so similarity queries are cheap (≈ log n).  
3. **Associates metadata** (timestamps, sources) for temporal reasoning.

The mem0 design satisfies all three by coupling a PostgreSQL backend with an embedding index and an API that hides the plumbing.

---

### How to use it

| Step | What you do | Why it matters |
|------|-------------|----------------|
| **1. Install** `pip install git+https://github.com/mem0ai/mem0.git` | Pulls the library into your environment. | Keeps the package up‑to‑date with the repo’s latest optimisations. |
| **2. Initialise a client**  

```python
from mem0 import Mem0Client
client = Mem0Client("postgres://user:pw@localhost/mem0")
```

| Creates a connection to the backing store and loads configuration (vector index, embedding model). | Guarantees that all subsequent calls hit the same persistent state. |
| **3. Write data**  

```python
doc_id = client.write(
    content={"question":"What is mem0?","answer":"A memory layer."},
    tags=["faq", "intro"],
    metadata={"source":"docs"}
)
```

| Stores the JSON payload, generates an embedding (default OpenAI/FAISS), and indexes it. | Enables fast semantic lookup later. |
| **4. Query**  

```python
results = client.query(
    query="Explain mem0",
    top_k=3,
    filter={"tags": ["faq"]}  # optional
)
```

| The API encodes the query, retrieves the nearest vectors, and returns the full documents with scores. | Gives you the most relevant snippets without manual search logic. |
| **5. Delete or update**  

```python
client.delete(doc_id)
# or
client.update(doc_id, content={"answer":"A universal memory layer."})
```

| Keeps the store lean and accurate. | Prevents stale data from polluting future reasoning. |

---

### One non‑obvious insight

Most people think a memory layer is just “store and fetch”.  
**mem0’s power comes from treating every datum as a *point in a learned semantic space***, so that *similarity* becomes the primary query axis. This turns a linear log into an associative memory, letting agents retrieve context by meaning rather than exact keys—essential for open‑ended dialogue or multi‑modal reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
