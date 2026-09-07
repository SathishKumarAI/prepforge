---
qid: ing_6fe61ff86a__faang__local
question: 'Explain: A user reports the RAG assistant gave a wrong answer. Walk me
  through your triage.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 448
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:03:12-05:00'
sources: []
---

**Clarify**  
The user says the Retrieval‑Augmented Generation (RAG) assistant returned an incorrect fact. I’ll confirm what “wrong” means—does it violate factual accuracy, misinterpret the query, or hallucinate? I’ll ask for the exact prompt, the assistant’s reply, and any source links the system surfaced.

**Approach**  
1. **Reproduce**: Run the same prompt through a fresh RAG instance to see if the error is deterministic.  
2. **Log inspection**: Pull the retrieval logs (top‑k documents, scores) and the LLM’s internal logits for the problematic token(s).  
3. **Source validation**: Verify the cited documents against authoritative references or external APIs.  
4. **Root‑cause analysis**: Check if it’s a retrieval miss (low similarity), an LLM hallucination, or a post‑processing bug.

**Depth**  
- If the document is irrelevant, improve the embedding model or adjust `k`.  
- If the LLM mis‑interprets context, fine‑tune with more counter‑examples or add prompt engineering to enforce “source‑check first”.  
- For hallucinations, enable a *truth-check* step that cross‑references multiple sources before finalizing the answer. Complexity: O(k log n) for retrieval; LLM inference is constant per token.

**Edge Cases**  
- Rare queries with no relevant docs → fallback to generic knowledge base.  
- Ambiguous user intent → ask clarifying follow‑up.  
- Source poisoning (malicious doc inserted) → whitelist trusted domains.

**Optimize & Communicate**  
I’ll present the findings in a concise report, highlighting the failure point and the mitigation strategy. I’d explain trade‑offs: increasing `k` improves coverage but adds latency; stricter truth‑checks reduce hallucinations but may cut off valid info. This demonstrates structured problem solving, depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
