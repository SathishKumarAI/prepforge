---
qid: ing_4f3e7533aa__think__local
question: 'Q5: How would you evaluate a RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 410
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:16:21-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Decide whether “RAG” means Retrieval‑Augmented Generation or a specific product.  
   - Assume you have access to logs, user interactions, and a ground‑truth test set.  
   - Note that evaluation may target *accuracy*, *efficiency*, or *user satisfaction*.

**2. Adopt a layered mental model**  
   1. **Component level**: retrieval module vs generation module.  
   2. **System level**: end‑to‑end pipeline, latency, scalability.  
   3. **User level**: perceived relevance and coherence.  

**3. Step‑by‑step reasoning**  
   - *Retrieve*: measure recall@k or precision of retrieved snippets against a gold set.  
   - *Generate*: use ROUGE/BERTopic/BERTScore on generated text versus reference answers.  
   - *Integration*: compute a composite score (e.g., weighted sum) and analyze trade‑offs.  
   - *Efficiency*: record query latency, CPU/GPU usage, memory footprint.  
   - *Human study*: gather feedback on usefulness, correctness, and overall experience.

**4. Common traps to avoid**  
   - Mixing retrieval metrics with generation metrics without normalisation.  
   - Ignoring the effect of noisy or incomplete knowledge bases.  
   - Over‑optimising for a single metric at the expense of others (e.g., latency).  

**5. Sanity‑check & communicate**  
   - Plot precision–recall curves, latency distributions, and user satisfaction histograms.  
   - Explain that a high retrieval recall but low generation coherence indicates model bias; conversely, perfect coherence with poor recall signals hallucination.  
   - Summarise findings in a concise dashboard for stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
