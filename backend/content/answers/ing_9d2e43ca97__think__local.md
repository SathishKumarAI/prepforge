---
qid: ing_9d2e43ca97__think__local
question: 'Q: When would you use hybrid search over pure dense search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 412
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:29:24-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - *What is “hybrid search” vs. “pure dense search”?* (e.g., combining BM25 with vector embeddings).  
   - Assume we’re building a retrieval system where relevance can be judged by keyword overlap and semantic similarity.  
   - Note constraints: latency, index size, query type.

**2. Adopt a decision‑making framework**  
   - *Trade‑off matrix*: precision vs recall, speed vs memory, interpretability vs expressiveness.  
   - Use the “When‑to‑use” lens: list scenarios where each method shines.

**3. Reason step‑by‑step toward the answer**  
   1. Identify use‑cases needing exact keyword hits (e.g., legal or medical queries).  
   2. Identify cases requiring semantic generalization (e.g., casual search, paraphrased intent).  
   3. Evaluate if a single dense vector can capture both signals; often it cannot fully encode term frequency nuances.  
   4. Conclude that hybrid search is advantageous when you need the strengths of both: exact matches + fuzzy semantic recall.

**4. Watch out for common traps**  
   - *Assuming hybrid always beats pure*: sometimes pure dense is faster and simpler if keyword precision isn’t critical.  
   - *Ignoring index cost*: combining models can double storage.  
   - *Over‑optimizing latency*: a hybrid system may add query time that outweighs relevance gains.

**5. Sanity‑check & verbalize**  
   - Rephrase the answer: “Use hybrid when you need both strict term matches and semantic flexibility, such as in domains where terminology is rigid yet users phrase queries differently.”  
   - Verify against edge cases (e.g., very short queries) to ensure the logic still holds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
