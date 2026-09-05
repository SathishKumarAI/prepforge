---
qid: ing_bfb9015923__eli5__local
question: 'Explain: 3.2.4 Evaluation Metrics — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 212
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:46-05:00'
sources: []
---

**Imagine you’re building a smart librarian that reads medical papers and then writes short summaries.**  
When the librarian finishes a chunk of text, it must decide whether to keep looking for more information or stop and answer the user’s question. **Graph‑aware late chunking** is like giving the librarian a map of all the paper’s concepts (the graph) and telling it: “Only ask for new chunks if you’re missing a piece that connects to what you already know.”  
The evaluation metric measures how well this decision rule works: do we get accurate, complete answers without pulling in useless extra text? It looks at two things—**precision** (how many of the librarian’s added pieces were truly helpful) and **recall** (how many needed pieces did it actually find). By testing on biomedical literature, we see if the map‑guided stopping rule lets the system stay focused while still covering all key facts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
