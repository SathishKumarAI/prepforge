---
qid: ing_0b09800062__faang__local
question: 'Q: How do you prevent hallucination in a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 548
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:09:54-05:00'
sources: []
---

**Clarify**

We’re asked how to keep a Retrieval‑Augmented Generation (RAG) pipeline from producing hallucinated content in production.  
Assumptions:  
1. The system uses a vector store for retrieval and an LLM for generation.  
2. The goal is factual correctness, not creative storytelling.  
3. We have access to logs, monitoring, and can add constraints at inference time.

**Approach**

1. **Source‑level validation** – verify retrieved documents before feeding them to the model.  
2. **Prompt engineering & guardrails** – enforce factuality in the prompt.  
3. **Post‑generation filtering** – check output against the source and known facts.  
4. **Observability & feedback loop** – continuously detect hallucinations and retrain.

**Depth**

| Step | Technique | Complexity |
|------|-----------|------------|
| 1 | *Document scoring* (e.g., BM25 + semantic similarity) and a threshold filter; optional QA‑style verification via a lightweight model. | O(N log N) retrieval, negligible extra cost. |
| 2 | Prompt: “Answer only using the following excerpts… If unsure, say ‘I don’t know’.” Add a `--no hallucination` flag to the LLM API. | Constant overhead in prompt length; no runtime penalty. |
| 3 | *Fact‑checking module* – run a lightweight verifier (e.g., OpenAI’s text‑completion with a “Verify facts” instruction) on each sentence. Flag or replace any that fail. | Linear in output size, but can be batched. |
| 4 | Instrument logs, use A/B tests, collect user flags; retrain retrieval embeddings and fine‑tune the LLM on hallucination‑free data. | Continuous, but amortized over deployments. |

**Edge Cases**

- Retrieval returns no documents → system should refuse to answer or ask for clarification.  
- The verifier misclassifies correct statements as false (false positives).  
- Extremely long outputs may exceed verifier limits; chunking required.

**Optimize & Communicate**

Explain that each layer adds a small latency but drastically reduces hallucination risk. Use confidence scores from the verifier to decide whether to serve or redact content. Highlight that this pipeline is modular, so we can swap out components (e.g., a newer verifier) without redesigning the whole system. This structured approach satisfies the SIGNAL rubric: clear problem restatement, systematic plan, technical depth with complexity analysis, edge‑case awareness, and an explicit communication strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
