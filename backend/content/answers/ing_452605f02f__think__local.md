---
qid: ing_452605f02f__think__local
question: 'Explain: Your agent needs to remember things across sessions. Would you
  use a vector store or rolling summarisation? Defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 445
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:07:48-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   • *What is “remembering across sessions”?* Assume we need long‑term context (e.g., user preferences, past interactions).  
   • *Constraints:* limited token budget per turn, storage costs, retrieval latency.  
   • *Goal:* preserve fidelity of key facts while keeping the prompt concise.

**2. Mental model / framework**  
   Use a **trade‑off diagram**:  
   - *Vector store* → high recall accuracy, higher storage/compute overhead, flexible query.  
   - *Rolling summarisation* → low latency and cost, but risk of drift or loss of detail.

**3. Step‑by‑step reasoning**  
   1. Estimate the volume of data to retain (e.g., dozens of user sessions).  
   2. Evaluate token limits: if each session is > few hundred tokens, summarisation cuts prompt size drastically.  
   3. Consider retrieval needs: do we need exact facts or general themes? Vector search gives fine‑grained recall.  
   4. Balance cost: vector indices scale linearly with entries; summarisation is one‑time compute.

**4. Common traps to avoid**  
   - *Assuming “larger” always means better*: a huge vector store can be slow and expensive.  
   - *Ignoring drift*: rolling summaries may overwrite important nuances.  
   - *Overlooking privacy*: vectors expose raw embeddings; summaries can hide sensitive data.

**5. Sanity‑check & communicate**  
   • Re‑state the decision: “Use a hybrid—store key facts in a lightweight vector index for quick recall, and keep a rolling summary of each session to keep prompt size manageable.”  
   • Validate with a simple example (e.g., user’s last purchase history) to ensure both retrieval paths produce consistent answers.  

This structured approach ensures the choice is transparent, justifiable, and adaptable to changing requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
