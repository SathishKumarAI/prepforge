---
qid: ing_61875954fb__think__local
question: 'Explain: RAGAS Metrics — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 557
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:28:22-05:00'
sources: []
---

### 1️⃣ Clarify the ask & set assumptions  
- **What is “RAGAS”?**  It’s a metric suite for *Retrieval‑Augmented Generation* (RAG) models, so I’ll assume the user wants an overview of its components and how they evaluate LLMs.  
- **Scope:** Focus on the four core sub‑metrics (Recall, Accuracy, Faithfulness, and Grounding), their definitions, and why they matter for RAG systems.

### 2️⃣ Mental model: “Evaluation as a multi‑dimensional lens”  
Think of each metric as a different axis that captures a distinct aspect of quality:  
- **Coverage (Recall)** – does the retrieved context contain what’s needed?  
- **Correctness (Accuracy)** – is the answer factually right?  
- **Reliability (Faithfulness)** – does the answer stay true to the source?  
- **Relevance (Grounding)** – is every claim tied back to a source snippet?

### 3️⃣ Step‑by‑step reasoning  
1. **Recall**: compute overlap between gold facts and retrieved passages.  
2. **Accuracy**: run an NLI or QA verifier on the generated answer vs. ground truth.  
3. **Faithfulness**: use extractive evidence extraction to check if claims are supported by source text; penalize hallucinations.  
4. **Grounding**: measure how many tokens in the answer can be directly traced to the retrieved passages (e.g., via token‑level alignment).  
5. Combine them into a single RAGAS score (often an average or weighted sum) and explain trade‑offs.

### 4️⃣ Common traps to avoid  
- **Mixing up Recall vs. Coverage**: recall is about *what* was retrieved, not how well it’s used.  
- **Assuming higher accuracy always means better RAG**: a model could be accurate but still hallucinate unsupported details.  
- **Ignoring the retrieval step**: RAGAS presumes you have both retrieved docs and generated output; evaluating only one side gives an incomplete picture.

### 5️⃣ Sanity‑check & verbalize  
- Verify each metric against a simple example (e.g., “What is the capital of France?”) to see if Recall captures “Paris” in the docs, Accuracy says it’s correct, Faithfulness confirms no hallucination, Grounding shows the answer cites the doc.  
- Summarize: RAGAS gives a holistic view by separately scoring coverage, correctness, honesty, and source linkage—critical for trustworthy LLM‑powered retrieval systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
