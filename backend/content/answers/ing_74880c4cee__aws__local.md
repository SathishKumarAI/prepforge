---
qid: ing_74880c4cee__aws__local
question: 'Q: How does GraphRAG solve the "Context Window" limit for aggregate questions?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:18-05:00'
sources: []
---

**Situation:**  
In a recent project we had to support *aggregate* queries (e.g., “What’s the total revenue per region?”) over a massive knowledge graph that exceeded LLM context windows (~8 K tokens). The risk was degraded accuracy and stale answers.

**Task:**  
Design a solution that preserves full graph semantics while keeping inference within the model’s token budget, and does so at scale for thousands of concurrent users.

**Action (Dive Deep + Invent & Simplify):**  

1. **Graph Chunking** – We partitioned the graph into *semantic sub‑graphs* using k‑means on node embeddings (SageMaker Feature Store). Each chunk < 4 K tokens.
2. **RAG Retrieval Layer** – For a user query, we first run an LLM prompt to predict relevant chunk IDs via a lightweight classifier (Amazon SageMaker endpoint).  
3. **Dynamic Prompt Assembly** – The system stitches only the top‑5 chunks into a single prompt (< 8 K tokens) and streams it to Amazon Bedrock’s GPT‑4o.  
4. **Result Aggregation** – Post‑generation, we parse numeric results with regex and sum them in an AWS Lambda function, returning a concise answer.

**Results (Deliver Results):**  
- Accuracy improved from 68 % to **92 %** on our test set of 1,200 aggregate queries.  
- Latency dropped by **35 ms** per request due to pre‑filtering.  
- Cost per inference fell by **$0.03** (≈15 %) thanks to reduced token usage.

**Learnings (Ownership):**  
We discovered that chunk granularity trade‑offs affect recall; iterative tuning of k and chunk size was essential. Future iterations will incorporate a *dynamic chunk sizing* policy driven by query complexity, ensuring we never over‑fetch or under‑fetch data.

> **Bar‑raiser cues:** Demonstrated ownership (full end‑to‑end design), deep dive into graph partitioning, quantified impact on accuracy/latency/cost, and iterative learning from initial mis‑segmentations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
