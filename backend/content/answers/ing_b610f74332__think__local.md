---
qid: ing_b610f74332__think__local
question: 'Explain: Summarization: Consistency, relevance, length'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 440
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:58:31-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify that “summarization” refers to automatic text summarization, not human editing.  
   - Assume we’re discussing *extractive* vs *abstractive* methods and standard evaluation metrics.

**2. Adopt a mental model: the three pillars of good summaries**  
   - **Consistency** – internal coherence and logical flow.  
   - **Relevance** – coverage of key points, omission of noise.  
   - **Length** – balance between brevity and informativeness (compression ratio).

**3. Step‑by‑step reasoning**  
   1. Define each pillar formally.  
   2. Explain why consistency matters: a summary that jumps topics feels incoherent; metrics like ROUGE or BERTScore indirectly capture it.  
   3. Detail relevance: importance of salient facts, mention coverage and factual accuracy; connect to ROUGE‑L recall.  
   4. Discuss length constraints: how compression ratio is tuned (e.g., 30 % of source), trade‑offs between too short (lossy) vs too long (redundant).  
   5. Illustrate with a concise example sentence or pseudo‑code snippet showing how an algorithm balances these.

**4. Common traps to avoid**  
   - Mixing up *brevity* with *incompleteness*.  
   - Assuming higher ROUGE always equals better relevance; it can over‑reward keyword overlap but miss nuance.  
   - Forgetting that “relevance” also includes *factual correctness*, not just topical alignment.

**5. Sanity‑check & verbalize**  
   - Re‑read the explanation to ensure each pillar is addressed with examples.  
   - Ask yourself: if I were a student, would they understand why consistency matters *and* how it’s evaluated?  
   - Finally, summarize the answer in one sentence to confirm clarity before delivering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
