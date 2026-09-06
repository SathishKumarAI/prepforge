---
qid: ing_8f3578a73e__fp__local
question: 'Explain: We''re switching embedding models. There are 200M vectors in the
  index. Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 653
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:09:56-05:00'
sources: []
---

**Why we’re moving embeddings**

The index holds ≈ 200 million high‑dimensional vectors that encode semantic content for retrieval.  
When a new model is introduced, each vector must be regenerated so that similarity queries are computed in the same latent space.  If we leave old and new vectors mixed, cosine distances become meaningless; the system will return “good” hits from one model and “bad” hits from another, breaking downstream metrics.

---

### Step‑by‑step migration

| Phase | What happens | Why it matters |
|-------|--------------|----------------|
| **1. Freeze ingestion** | Pause all writes that generate new vectors (e.g., document uploads). | Prevents a mixture of old/new embeddings in the same batch, which would corrupt similarity calculations. |
| **2. Snapshot & shard‑copy** | Take a point‑in‑time snapshot of each shard; copy it to a staging cluster. | Allows parallel re‑embedding without touching production traffic and gives us a rollback target if something goes wrong. |
| **3. Re‑embed in the staging cluster** | Run the new model over the raw payload (text, images, etc.) to produce fresh vectors. | The core transformation: raw data → embedding space. |
| **4. Validate similarity consistency** | Compute pairwise distances for a random sample of 10k vectors against the old embeddings. Check that ranking order is preserved within an acceptable margin. | Guarantees that semantic relationships are largely maintained; if not, we may need to tune the new model or adjust the index parameters. |
| **5. Replace production shards** | Atomically swap each shard’s vector file with its re‑embedded counterpart (using versioned file names and a lightweight lock). | Zero‑downtime replacement: queries continue to hit the old vectors until the swap is committed, then immediately use the new ones. |
| **6. Re‑build auxiliary structures** | Re‑compute IVF centroids, HNSW graph nodes, or any index metadata that depends on vector norms. | The search algorithm assumes consistent statistics; stale centroids would degrade recall. |
| **7. Rollout monitoring** | Track query latency, recall@k, and error rates for a 24 h window. If anomalies appear, trigger an automatic rollback to the snapshot. | Early detection of subtle issues that surface only under load. |

---

### Non‑obvious insight

Most people focus on *computing* new vectors, but the **geometry of the index itself changes** with each embedding distribution shift. Even if the raw cosine similarity is preserved, the *density* and *cluster structure* in high dimensions can differ enough that the pre‑computed partitioning (IVF centers, HNSW neighborhoods) becomes suboptimal. Re‑building those structures after re‑embedding is therefore essential; otherwise you’ll see a sudden drop in recall or an increase in latency despite identical vectors.

In short: migrate *the data*, then *re‑tune the index geometry*—that’s what guarantees a smooth transition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
