---
qid: ing_7ed1900ccd__faang__local
question: 'Explain: Contains Keywords — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:39:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how “Contains Keywords” is used when evaluating a large language model (LLM).  
Assumptions: we’re judging factual correctness or relevance; the metric compares the generated answer against a set of ground‑truth keywords extracted from reference responses.

**Approach**  
1. Define the metric mathematically.  
2. Explain how it’s computed during inference.  
3. Discuss its strengths, weaknesses, and typical use cases.

**Depth**  
- **Definition:**  
  \[
  \text{ContainsKeywords} = \frac{|K_{\text{gen}}\cap K_{\text{ref}}|}{|K_{\text{ref}}|}
  \]
  where \(K_{\text{gen}}\) are the keywords present in the model’s output and \(K_{\text{ref}}\) are the reference set.  
- **Computation:** Tokenize both outputs, run a keyword extractor (TF‑IDF, YAKE, or a rule‑based list), then perform set intersection.  
- **Use cases:** Quick sanity checks for fact recall, measuring domain coverage, and as a component in composite metrics like BLEU+ContainsKeywords.

**Edge Cases**  
- Synonyms or paraphrases may be missed → false negatives.  
- Over‑generation can inflate the metric if spurious keywords appear.  
- Domain‑specific jargon absent from the extractor leads to under‑reporting.

**Optimize & Communicate**  
To mitigate pitfalls, combine with semantic similarity (e.g., cosine of sentence embeddings) or use a synonym expansion step. I’d present this as: “We first extract high‑confidence keywords from references, then check overlap; if overlap is low we flag the answer for further semantic review.” This shows clear reasoning, acknowledges trade‑offs, and aligns with FAANG’s emphasis on structured problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
