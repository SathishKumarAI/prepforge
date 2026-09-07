---
qid: ing_3a32b61e4d__faang__local
question: How do you decide on a chunking strategy, and how do you know your chunking
  is any good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 446
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:38-05:00'
sources: []
---

**Clarify**

You’re asked how to pick a *chunking* (i.e., splitting text into manageable pieces) for an LLM pipeline and how to validate that choice.  
Assumptions I’d confirm:  
1. What is the downstream task? (QA, summarization, retrieval‑augmented generation?)  
2. What is the token budget per request?  
3. Do we have overlap requirements or strict boundaries (sentences, paragraphs)?  

**Approach**

1. **Define objectives** – maximize relevance while staying within token limits and latency constraints.  
2. **Prototype multiple strategies** – sentence‑level, paragraph‑level, sliding windows with overlap, semantic clustering via embeddings.  
3. **Measure performance** – compute task metrics (e.g., F1 for QA) and resource metrics (tokens used, inference time).  

**Depth**

- *Sliding window* is simple: fixed length + overlap = `k`. Complexity O(n), memory linear in n.  
- *Semantic clustering*: embed chunks, cluster with k‑means; reduces redundancy but costs O(n·d) for embeddings and O(k·n) for assignment.  
- Evaluate recall of relevant content: build a relevance oracle (human or golden answers) to see if the chunk contains the answer span.

**Edge Cases**

- Extremely long documents → window size too small, missing context.  
- Highly repetitive text → overlap unnecessary; clustering may collapse distinct sections.  
- Non‑textual data (tables, code) → tokenization breaks semantics.

**Optimize & Communicate**

Iteratively reduce chunk size until latency meets SLA, then adjust overlap to recover lost recall. Use A/B testing in production: deploy two strategies and compare downstream metrics plus cost per request. Communicate trade‑offs clearly—smaller chunks = cheaper but risk lower accuracy; larger chunks = higher accuracy but higher compute and potential token overflow. This structured loop satisfies FAANG interviewers’ emphasis on clarity, depth, and measurable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
