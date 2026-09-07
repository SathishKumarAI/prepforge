---
qid: ing_2f840a96ba__faang__local
question: 'Explain: You have retrieved chunks and a question. How do you actually
  build the prompt? Assume some documents are irrelevant and two of them contradict
  each other.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 461
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:15-05:00'
sources: []
---

**Clarify**  
We’re given a set of text chunks (retrieved from a knowledge base) and a user question. Some chunks are irrelevant; two contain conflicting facts. The goal is to craft an LLM prompt that: * (1) focuses the model on relevant evidence, * (2) signals uncertainty where contradictions exist, and * (3) yields a coherent answer.

**Approach**  
1. **Relevance filtering** – rank chunks by similarity to the question; keep top‑k.  
2. **Contradiction detection** – run a lightweight NLI or semantic similarity check among retained chunks; flag pairs with high contradiction scores.  
3. **Prompt structuring** – prepend a system instruction, list evidence in order of relevance, annotate contradictory pieces, and ask the model to weigh them.

**Depth**  
```text
You are an AI assistant. Use only the following evidence to answer the question.  
Evidence (in order of relevance):  
1. [Chunk A]  
2. [Chunk B]  ← *Contradicts Chunk C on fact X*  
3. [Chunk C]  ← *Contradicts Chunk B on fact X*  
4. …  

Question: {user query}

If evidence conflicts, explain the disagreement and provide your best estimate based on context.
```
The model receives explicit cues about which parts to trust and where uncertainty lies. Complexity is dominated by retrieval (O(n log n) ranking) and pairwise contradiction checks (O(k²)), but k is small (≈5–10).

**Edge Cases**  
- *All chunks irrelevant*: prompt with “No relevant evidence found.”  
- *Multiple contradictions on the same fact*: list all, ask model to summarize.  
- *Highly ambiguous question*: include a clarification request.

**Optimize & Communicate**  
To improve speed, cache similarity scores and pre‑compute contradiction flags. In interviews, I’d explain that this design balances precision (by filtering) with transparency (explicit conflict markers), satisfying both correctness and user trust—key metrics for FAANG‑style LLM deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
