---
qid: ing_6cb98b8177__think__local
question: 'Explain: Disadvantage(s): failover — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 548
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:10:59-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- The user references “Disadvantage(s): failover — GitHub - donnemartin/system-design-primer” and wants an explanation about disadvantages of fail‑over in large‑scale ML systems.
- Assume they’re familiar with basic system design but need a concise, machine‑learning‑centric view.
- Assume the answer should link to GitHub repo context (e.g., how the primer discusses fail‑over).

**2️⃣ Choose a mental model**

Use the *CAP + ML pipeline* framework:

1. **CAP trade‑offs** – consistency, availability, partition tolerance.
2. **ML workflow stages** – data ingestion → preprocessing → training → inference.
3. **Fail‑over points** – where redundancy is added (data stores, compute nodes, model serving).

Map disadvantages to each layer.

**3️⃣ Step‑by‑step reasoning**

1. Identify fail‑over mechanisms in the primer (e.g., active‑passive replicas for databases, load balancers for inference).
2. For each mechanism:
   - **Latency overhead**: extra network hops, health checks.
   - **Consistency drift**: stale reads/writes during fail‑over windows.
   - **Resource cost**: duplicated infrastructure, increased operational complexity.
   - **Model versioning issues**: ensuring all replicas run the same model/weights.
3. Highlight ML‑specific pitfalls:
   - *Cold start* in new nodes affecting inference latency.
   - *Data pipeline sync*: delayed ingestion leading to stale training data.
4. Summarize trade‑offs and suggest mitigation (e.g., eventual consistency, versioned model registries).

**4️⃣ Common traps to avoid**

- Mixing generic system design fail‑over with ML‑specific concerns; keep them distinct.
- Over‑emphasizing latency without quantifying the impact on user experience or training throughput.
- Forgetting that some ML workloads (e.g., online learning) are highly sensitive to stale data.

**5️⃣ Sanity check & verbalize**

- Re‑read the GitHub primer’s fail‑over section; confirm each disadvantage mentioned aligns with what’s written.
- Imagine explaining it to a peer: “Fail‑over adds redundancy but introduces latency and consistency issues, especially when you need fresh model weights across replicas.”
- Ensure the answer is concise (≈150 words) and directly references the GitHub context.

Follow this structure next time you’re asked to dissect system design disadvantages—clarify scope → apply framework → reason systematically → watch for common missteps → validate against source material.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
