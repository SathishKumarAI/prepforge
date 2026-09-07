---
qid: ing_687f5e9cf0__faang__local
question: 'Explain: Building an Agentic RAG with Fallback to Websearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 526
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:28-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to build a *retrieval‑augmented generation (RAG)* system that behaves like an agent: it can ask for user clarification, search its knowledge base, and when the KB is insufficient, fall back to a live web search. I’ll assume we have:  

- A vector store of domain documents  
- An LLM capable of grounding answers in retrieved passages  
- API access to a web‑search engine (e.g., Bing)  

**2️⃣ Approach**  
1. **Prompt engineering**: give the LLM a *role* (“you are an assistant that first consults your knowledge base, then searches the web if needed”).  
2. **Retrieval**: query the vector store with user intent; rank top‑k passages.  
3. **Decision logic**: let the model decide whether the retrieved content suffices (e.g., by checking confidence scores or explicit “I’m not sure” token).  
4. **Fallback**: if unsure, trigger a web search API call, fetch results, and re‑rank them.  
5. **Response synthesis**: combine passages with citations, ensuring no hallucinations.

**3️⃣ Depth**  
- Retrieval uses FAISS or Elastic for sub‑ms latency; top‑k=5 suffices.  
- LLM prompt includes “If you can answer confidently, cite passage IDs.”  
- Confidence metric: softmax over a binary *“has enough info”* token.  
- Web search is throttled to 1 request per user query to respect rate limits.  
Complexity: retrieval O(log N), web API O(1); overall latency ~200–300 ms + LLM inference.

**4️⃣ Edge Cases**  
- Ambiguous queries → ask clarifying question.  
- Retrieval returns no passages → auto‑search.  
- Web search yields low‑quality links → filter by domain reputation.  
Test with synthetic “unknown” topics and measure hallucination rate.

**5️⃣ Optimize & Communicate**  
- Cache recent web results to reduce repeat searches.  
- Use a lightweight summarizer for long passages before feeding the LLM.  
Explain each step in interview: why we trust retrieval first (fast, controlled), when we need the web (novelty), and how we guard against hallucination with explicit citations. This showcases structured reasoning, depth, and practical trade‑offs—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
