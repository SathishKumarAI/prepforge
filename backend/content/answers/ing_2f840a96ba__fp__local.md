---
qid: ing_2f840a96ba__fp__local
question: 'Explain: You have retrieved chunks and a question. How do you actually
  build the prompt? Assume some documents are irrelevant and two of them contradict
  each other.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 635
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:46:19-05:00'
sources: []
---

**From Retrieval to Prompt: A principled construction**

1. **Problem statement**  
   The system must answer a user query *q* given a set of retrieved passages \(R=\{r_1,\dots ,r_n\}\).  
   Some \(r_i\) are irrelevant, and at least two may be mutually contradictory.  
   We want the language model (LM) to output a coherent, accurate answer that respects the evidence while remaining faithful to *q*.

2. **Why a “structured prompt” is necessary**  
   - **Information bottleneck**: The LM’s input length limits how much raw text can be fed.  
   - **Attention bias**: Without explicit cues, the LM may over‑weight irrelevant or contradictory snippets.  
   - **Inference cost**: The LM must decide which evidence to trust; a prompt that encodes this decision problem reduces the search space.

3. **Deriving the construction**

| Step | Rationale (principle) | Prompt fragment |
|------|-----------------------|-----------------|
| **(a)** Identify *relevant* chunks | **Optimal transport**: we want to map each chunk’s relevance score \(w_i\) onto a probability mass that the LM will attend. | `Relevant passages:` |
| **(b)** Highlight contradictions | **Probabilistic consistency**: contradictory evidence should be treated as mutually exclusive hypotheses. Introduce an “uncertainty” token or explicit contradiction flag. | `Note: Chunks X and Y conflict on ...` |
| **(c)** Order by confidence | **Decision theory**: present higher‑confidence snippets first to bias the LM’s attention toward them. | `1) [high‑conf] … 2) [medium‑conf] …` |
| **(d)** Ask a *direct* question | **Information extraction objective**: the LM should map from evidence to answer; phrasing the query as “What is …?” forces this mapping. | `Question: What is the correct answer to *q*?` |

4. **Putting it together**

```text
Relevant passages (sorted by confidence):
1) [high] The policy states that ...
2) [medium] According to Section 3, ...
Note: Chunks 2 and 5 conflict on the definition of X.
Question: What is the correct answer to “<user query>” based on these documents?
```

5. **Non‑obvious insight**  
   *Explicitly encoding contradiction* (step b) turns the LM from a blind text generator into an implicit probabilistic reasoner. By presenting contradictory snippets as competing hypotheses, we coax the model to perform a lightweight Bayesian update—something it normally does not do when given raw concatenated text.

This prompt design follows from information‑theoretic constraints (bandwidth), geometric attention bias, and probabilistic consistency, ensuring the LM focuses on trustworthy evidence while gracefully handling conflicts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
