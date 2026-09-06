---
qid: ing_c6dcbf74da__fp__local
question: Design the memory and personalisation layer for an assistant serving millions
  of users. What do you store, when do you summarise versus retrieve, and how do you
  evaluate memory quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 624
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:04:23-05:00'
sources: []
---

**Why a layered memory is required**

An assistant that interacts with millions of users must balance *recall speed* against *storage cost*.  
The fundamental problem is the **information bottleneck**: we can only keep in fast memory a compressed representation of past dialogue that still preserves the predictive power for future turns.  This is exactly what an encoder‑decoder with a learned summary achieves.

---

### 1. What to store

| Layer | Content | Justification |
|-------|---------|---------------|
| **Event log** (raw) | Every utterance, timestamp, user ID, context vector | Guarantees lossless reconstruction; needed for audits and cold‑start re‑learning. |
| **Short‑term buffer** (few minutes) | Recent turns + attention‑weighted embeddings | Enables instant retrieval; size limited by GPU memory. |
| **Long‑term summary** | Learned vector per user, updated via *incremental variational autoencoder* | Compresses the event log into a low‑dimensional latent that maximises mutual information with future responses. |

---

### 2. When to summarise vs retrieve

1. **Retrieval**:  
   - If the query is within the short‑term window or the user explicitly requests “repeat”.  
   - Cost: negligible latency; accuracy ≈ 100 % because we have the exact record.

2. **Summarisation**:  
   - When the request exceeds the buffer (e.g., *“What did I say about project X last week?”*).  
   - The system first queries the short‑term buffer; if miss, it pulls the user’s latent summary, decodes a *topic‑conditioned* snippet via a retrieval‑augmented decoder.  
   - This two‑step process keeps latency low while leveraging compressed knowledge.

---

### 3. Evaluating memory quality

| Metric | Computation | Why it matters |
|--------|-------------|----------------|
| **Predictive KL** | `KL(P_future || Q_future)` where `Q` is generated from the latent | Measures how much future distribution collapses when we rely on the summary. Lower is better. |
| **Reconstruction Error** | Mean‑squared error between decoded and true past utterances | Ensures that the latent can recover essential details. |
| **Personalisation Gain** | Improvement in task success rate vs. non‑personalised baseline | Direct business metric; must be > 5 % to justify storage cost. |

---

### Non‑obvious insight

*The latent’s dimensionality should grow logarithmically with user activity, not linearly.*  
Because each new interaction adds *differential entropy* that can be encoded by only a few extra bits thanks to redundancy in language, we can cap the vector size at `O(log N_user)`.  This keeps long‑term storage feasible while preserving expressive power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
