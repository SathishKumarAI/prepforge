---
qid: ing_3e22f183ae__faang__local
question: 'Q60: How would you evaluate whether an LLM is hallucinating?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:38-05:00'
sources: []
---

**Clarify**  
> *Problem:* We need a systematic way to detect “hallucinations” in a large language model (LLM) – statements that are false or unsupported by evidence.  
> *Assumptions I’d confirm:*  
> 1. The LLM has access to an external knowledge base or can be queried for citations.  
> 2. We have ground‑truth labels for a test set of prompts.  
> 3. Evaluation is automated, not purely manual.

**Approach**  
1. **Define Hallucination:** Output that contradicts known facts or lacks verifiable evidence.  
2. **Create a benchmark dataset** with labeled hallucinations (e.g., TruthfulQA, MMLU).  
3. **Implement a verification pipeline:**  
   * a) Generate answer and optional citations.  
   * b) Use an external fact‑checking API or a retrieval model to fetch supporting documents.  
4. **Score** each claim by comparing retrieved evidence against the output (e.g., overlap, semantic similarity).  

**Depth**  
*Algorithm:* For every sentence in the answer, query a search engine (BM25+Transformer) with key phrases → retrieve top‑k snippets → compute cosine similarity between snippet embeddings and sentence embedding. If similarity < θ for all snippets, flag as hallucinated. Complexity: O(n · log |D| + n · k) per prompt, where n = #sentences.  
*Trade‑offs:* Retrieval latency vs. accuracy; higher k improves recall but increases cost.

**Edge Cases**  
- Ambiguous or novel facts not in the corpus → false positives.  
- Over‑fitting to the benchmark (model learns to mimic evidence).  
- Non‑verifiable statements (opinions) mistakenly flagged.  
*Tests:* Cross‑validate on unseen datasets, measure precision/recall of hallucination detection.

**Optimize & Communicate**  
1. Cache frequent queries; use approximate nearest neighbor search for speed.  
2. Fine‑tune the similarity threshold θ per domain.  
3. Report metrics (Hallucination Rate, Precision@k) and illustrate with examples in a dashboard so stakeholders see model behavior transparently.  

*Result:* A reproducible, scalable pipeline that quantifies hallucinations, guiding iterative improvements to LLM safety and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
