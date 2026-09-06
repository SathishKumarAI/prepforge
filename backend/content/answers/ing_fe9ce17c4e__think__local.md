---
qid: ing_fe9ce17c4e__think__local
question: Your product has several distinct corpora - docs, tickets, code, CRM. How
  do you route queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 430
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:49:29-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
- Identify what “routing” means (e.g., which corpus a user query should be sent to).  
- Assume we have pre‑indexed embeddings for each corpus, and a single front‑end that receives raw text.  
- Decide whether routing is deterministic or probabilistic; whether we need confidence scores.

**2. Adopt a mental model: “semantic similarity + policy”**  
- Treat each query as a vector in the same embedding space used for the corpora.  
- Use nearest‑neighbour search to get candidate documents from all corpora.  
- Apply a routing policy (rule‑based, learned classifier, or multi‑label) that weighs relevance scores against business rules.

**3. Step‑by‑step reasoning**  
a. Embed the incoming query.  
b. For each corpus, retrieve top‑k embeddings and compute similarity.  
c. Normalize similarities across corpora (e.g., min‑max or softmax).  
d. If a single corpus dominates by a margin, route there; otherwise consider multi‑label routing (e.g., show results from docs + tickets).  
e. Optionally refine with a lightweight classifier trained on labeled query‑corpus pairs.

**4. Common pitfalls to avoid**  
- Mixing embeddings from heterogeneous domains without domain adaptation → poor similarity scores.  
- Relying solely on keyword matching; it ignores context and can misroute.  
- Ignoring “unknown” cases: always have a fallback (e.g., route to a general FAQ or human agent).  

**5. Sanity‑check & communicate**  
- Test with edge queries (“How do I reset my password?” vs “Bug in API endpoint?”) to ensure correct routing.  
- Explain the logic to stakeholders: “We embed, compare across corpora, normalize scores, and pick the highest‑confidence corpus (or combine if close).”  
- Show a flow diagram or pseudocode to make the process transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
