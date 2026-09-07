---
qid: ing_5a22e2fdb3__faang__local
question: 'Explain: Q4: Explain chunking strategies and when to use each'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 506
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:09-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *chunking* in NLP/AI—breaking long texts into manageable pieces—and the trade‑offs of different strategies (fixed‑size windows, semantic boundaries, overlap). I’ll assume we’re dealing with transformer models whose context window is limited (e.g., 512–4096 tokens) and that downstream tasks need coherent representations.

**Approach**  
1. List the common chunking schemes.  
2. For each, explain its intuition, when it preserves semantics or efficiency.  
3. Mention how to stitch outputs back together (concatenation, attention pooling).

**Depth**  

| Strategy | How it works | When to use |
|----------|--------------|-------------|
| **Fixed‑size sliding window** | Split text into equal token blocks, optionally with stride >0 for overlap. | Fastest; when latency matters and slight context loss is acceptable (e.g., summarization of long logs). |
| **Semantic boundary chunking** | Detect sentence or paragraph ends, then group until size ≈ max tokens. | When preserving discourse units improves downstream predictions (sentiment, QA). |
| **Dynamic padding / hierarchical models** | Encode each chunk independently, then feed a second‑level transformer over chunk embeddings. | For truly long documents where global coherence is needed without sacrificing local detail. |
| **Overlap + attention masking** | Overlap windows and mask out duplicate tokens during aggregation to avoid double counting. | When exact token‑wise predictions (e.g., NER) are required across boundaries. |

*Complexity*: Fixed windows are O(n), semantic chunking adds a linear scan for boundaries, hierarchical models add an extra O(k log k) pass over chunk vectors.

**Edge Cases**  
- Extremely short documents: avoid unnecessary padding.  
- Sentences longer than max window → need recursive splitting or truncation.  
- Overlap may introduce duplicate predictions; test with a “no‑duplicate” flag.

**Optimize & Communicate**  
Start with the simplest fixed window for speed, then profile downstream accuracy. If performance drops on boundary cases, switch to semantic chunking. When latency is critical, keep stride minimal; when accuracy matters, increase overlap or adopt hierarchical encoding. Explain this trade‑off map to interviewers: “We’ll begin simple and only add complexity where the data shows a clear benefit.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
