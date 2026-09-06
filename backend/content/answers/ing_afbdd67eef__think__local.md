---
qid: ing_afbdd67eef__think__local
question: 'Explain: Q: Compare MHA, GQA, and MQA. — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 626
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:36:45-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify that *MHA*, *GQA*, and *MQA* are all variants of attention mechanisms used in transformer‑style models.  
- Assume the reader knows basic self‑attention, but not the specific differences or typical use‑cases.  

**2️⃣ Adopt a comparison framework**  
- **Definition & notation** – write the core equations (query/key/value).  
- **Computational pattern** – how queries are formed and applied to keys/values.  
- **Structural variation** – whether attention is *multi‑head*, *global‑query‑attention* or *multi‑query‑attention*.  
- **Practical impact** – parameters, parallelism, and memory footprint.

**3️⃣ Step‑by‑step reasoning**  

| Mechanism | Core idea | Query formation | Key/Value usage | Parameters & cost |
|-----------|-----------|-----------------|-----------------|-------------------|
| **MHA (Multi‑Head Attention)** | Split each vector into *h* sub‑spaces; compute *h* independent self‑attentions and concatenate. | Separate linear projections for Q, K, V per head. | Each head attends over all keys/values independently. | \(O(hd^2)\) params; allows richer representation but heavier compute. |
| **GQA (Global‑Query Attention)** | Use a *single* query vector that attends to *all* keys/values (global context). | One global Q per layer or token. | All keys/values pooled via weighted sum; often used in encoder‑decoder with cross‑attention. | Fewer queries → lower memory, but may lose fine‑grained interactions. |
| **MQA (Multi‑Query Attention)** | Share key/value projections across heads; only query projections differ per head. | Multiple Qs but shared K,V matrices. | All heads use same keys/values, reducing redundancy. | Parameter savings (\(O(d^2)\) instead of \(O(hd^2)\)); faster inference while keeping multi‑head benefits. |

**4️⃣ Common pitfalls to avoid**  
- Confusing *global* with *cross* attention; GQA is about a single query vector, not necessarily encoder‑decoder.  
- Assuming MQA has the same number of parameters as MHA; it actually shares K/V weights.  
- Overlooking that MQA still retains head diversity through queries only.

**5️⃣ Sanity checks & verbalization**  
- Verify that for \(h=1\) all three reduce to standard single‑head attention (except GQA’s global query).  
- Explain in plain terms: “MHA gives each token its own viewpoint; GQA asks one overarching question; MQA keeps many questions but uses the same evidence.”  
- Conclude with typical use‑cases: MHA for general NLP, GQA for lightweight encoder‑decoder, MQA for efficient large‑scale models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
