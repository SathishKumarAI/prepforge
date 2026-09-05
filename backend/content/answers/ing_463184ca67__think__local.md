---
qid: ing_463184ca67__think__local
question: How do you evaluate the generation side of RAG - faithfulness, relevance,
  and citation quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 814
total_tokens: 1012
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:10:01-05:00'
sources: []
---

**1. Clarify the scope & assumptions**

- *What is “generation side”*?  I’ll assume it means the language‑model component that produces the answer after retrieving passages.  
- *Evaluation goals*:  We care about (a) **faithfulness** – does the text reflect the retrieved content? (b) **relevance** – is it on topic and useful? (c) **citation quality** – are sources properly referenced?  
- *Assume we have access to:*
  - The original query, retrieved passages, generated answer, and a mechanism for generating citations.  

---

**2. Mental model / framework**

Use the classic **information‑retrieval + natural‑language‑generation** pipeline:

1. **Retrieval** → set of passages \(P\).  
2. **Generation** → answer \(A\) with citations \(C\).

Evaluation decomposes into three orthogonal sub‑tasks:  
- Faithfulness: overlap between \(A\) and \(P\).  
- Relevance: alignment of \(A\) to the query.  
- Citation quality: correctness & completeness of \(C\).  

---

**3. Step‑by‑step reasoning**

| Aspect | Concrete metrics | Practical steps |
|--------|------------------|-----------------|
| **Faithfulness** | *Overlap* (BLEU, ROUGE), *Semantic similarity* (BERTScore), *Fact‑check* (OpenAI’s truth‑fulfillment score). | 1. Tokenize \(A\) and each passage in \(P\). 2. Compute overlap scores. 3. For semantic checks, embed both and compute cosine similarity. 4. Optionally run a fact‑checking model on extracted facts from \(A\) vs. facts in \(P\). |
| **Relevance** | *Query‑answer similarity* (embedding dot product), *Topic coverage* (ROUGE against a gold summary of the query). | 1. Embed query and \(A\). 2. Compute similarity. 3. If available, compare \(A\) to an oracle answer or use human relevance judgments as a sanity check. |
| **Citation quality** | *Coverage*: fraction of cited facts that appear in \(P\).  *Precision*: fraction of citations that correctly point to the source paragraph. | 1. For each citation token, map back to its passage ID. 2. Verify that the cited sentence exists in that passage. 3. Compute precision/recall of citations relative to a gold citation set (if available). |

---

**4. Common traps & how to avoid them**

- **Assuming lexical overlap ≈ faithfulness** – use semantic metrics too.  
- **Blindly trusting automatic fact‑checkers** – they can hallucinate; cross‑validate with retrieval evidence.  
- **Over‑penalizing citations that are correct but phrased differently** – normalize citation spans before comparison.  
- **Ignoring query context in relevance scoring** – always embed the original question, not just the answer.

---

**5. Sanity checks & communication**

1. **Visual inspection**: sample a few Q–P–A triples and manually verify faithfulness/relevance/citations.  
2. **Thresholds**: set realistic score ranges (e.g., ROUGE‑L > 0.4 for relevance).  
3. **Explain results**: “The model’s answer shares 70 % of key terms with the retrieved passage, but only 50 % of the cited facts are verifiable in the source; overall faithfulness is moderate.”  

By following this structured approach—clarifying assumptions, applying a retrieval‑generation framework, computing targeted metrics, avoiding common pitfalls, and validating with human checks—you can robustly evaluate RAG’s generation side on faithfulness, relevance, and citation quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
