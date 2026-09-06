---
qid: ing_b610f74332__fp__local
question: 'Explain: Summarization: Consistency, relevance, length'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 392
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:12-05:00'
sources: []
---

**Why a good summary must be consistent, relevant and appropriately long**

When we compress a document into a few sentences we solve an *optimization* problem:  
maximize the amount of **information** retained while obeying a hard constraint on the number of tokens.  

1. **Consistency** is required because every token in the summary contributes to the same objective function – the probability that a reader can reconstruct the meaning of the original text from it. A self‑contradictory or disjointed sentence set reduces this probability, so any model that optimizes *information density* will implicitly enforce internal coherence.

2. **Relevance** is enforced by conditioning on the user’s intent (question, topic, or keyword). In probabilistic terms we maximize \(P(\text{summary}\mid \text{text},\text{intent})\). This pushes the model to select fragments that jointly explain the query, thereby aligning with *information relevance* theory from information retrieval.

3. **Length** is a budget constraint in the optimization:  
   \[
   \max_{\text{summary}} I(\text{summary};\text{text}) \quad \text{s.t.}\; |\text{summary}|\le L
   \]
   where \(I\) denotes mutual information. The solution naturally trades off detail for brevity, yielding a summary that is neither too verbose nor too terse.

**Non‑obvious insight:**  
Consistency and length are mathematically coupled through *entropy*. A shorter summary must have lower entropy to remain coherent; thus the model implicitly learns to **compress high‑entropy passages into low‑entropy, self‑consistent units**—a form of lossy source coding tailored for human comprehension.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
