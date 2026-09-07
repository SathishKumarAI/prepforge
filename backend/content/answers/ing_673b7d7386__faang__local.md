---
qid: ing_673b7d7386__faang__local
question: 'Explain: Evaluation — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 470
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:44:18-05:00'
sources: []
---

**Clarify**  
The question asks how the *Haystack* framework evaluates machine‑learning models, specifically its “Evaluation – Tutorials” module. I’ll assume we’re talking about the open‑source NLP pipeline for question answering and retrieval‑augmented generation, where evaluation means measuring model performance on standard benchmarks (e.g., SQuAD, TriviaQA) using metrics like Exact Match (EM), F1, or ROUGE.

**Approach**  
1. Identify the dataset loader used in the tutorial.  
2. Load the pretrained model and tokenizer from Haystack’s `ModelStore`.  
3. Run inference on the test split.  
4. Compute evaluation metrics via Haystack’s built‑in `Evaluator` utilities.  
5. Log results to a CSV or dashboard.

**Depth**  
- **Data Pipeline**: The tutorial uses `ReadPipeline` → `TransformersDocumentStore` → `Retriever`.  
- **Inference**: `Pipeline.run()` returns answers with confidence scores; Haystack’s `MetricCalculator` extracts ground‑truth vs. predicted spans.  
- **Metrics**: EM = exact string match; F1 = token‑level overlap; for generation tasks, ROUGE‑L is calculated via the `rouge_score` package.  
- **Complexity**: Runtime O(N * L) where N = number of queries and L = average answer length; memory dominated by tokenizer vocab (~200 k tokens).  

**Edge Cases**  
- Empty answers or missing ground truth → handled with NaN checks.  
- Tokenization mismatch (sub‑word split) can skew EM; the tutorial normalizes whitespace.  
- Large documents may exceed GPU memory—use batch inference.

**Optimize & Communicate**  
- Parallelize batches on multi‑GPU setups to reduce latency.  
- Cache preprocessed embeddings in `DocumentStore` for repeated runs.  
- Present results as a waterfall chart to show metric evolution during fine‑tuning.  

By following this structured flow, we not only reproduce the tutorial’s evaluation but also understand how Haystack orchestrates data, inference, and metrics—key skills for any ML engineering role at a FAANG company.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
