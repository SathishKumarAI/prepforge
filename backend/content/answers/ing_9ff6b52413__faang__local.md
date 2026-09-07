---
qid: ing_9ff6b52413__faang__local
question: You have a 200k-token context with instructions and 50 documents. Where
  do you put what, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 480
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:02-05:00'
sources: []
---

**Clarify**  
You’re given a *200 000‑token* prompt that must contain: (1) a set of instructions for the model, and (2) fifty documents (≈4 k tokens each). The goal is to maximise the likelihood that the LLM uses all relevant docs while respecting the token budget.  
Assumptions I’d confirm:  
- Are the instructions fixed or can they be shortened?  
- Do we need all 50 docs, or just a subset per query?  
- Is the model’s output limited (e.g., 1 k tokens)?

**Approach**  
1. **Token budget allocation** – split the prompt into *instruction block* + *document block*.  
2. **Prioritise documents** – rank by relevance to the instructions or use a retrieval‑augmented strategy.  
3. **Chunking & summarisation** – compress lower‑priority docs with concise summaries, keeping key facts.

**Depth**  
- **Instruction block**: 4–5 k tokens (≈2 % of budget).  
- **Document block**: ~196 k tokens left → ≈3.9 k tokens per doc × 50 = 195 k, leaving headroom for system prompts and safety constraints.  
If fewer docs are needed, allocate more to the instruction block or add a “context window” meta‑instruction (e.g., “focus on sections A–C”).  
Complexity: O(n) token counting; retrieval cost is negligible if pre‑ranked.

**Edge Cases**  
- Token overflow when docs exceed 196 k → fallback summarisation.  
- Over‑compression loses critical nuance, hurting answer quality.  
- Instruction block too long triggers truncation; test with boundary values (190–200 k).

**Optimize & Communicate**  
1. Use a lightweight embedding model to score doc relevance offline.  
2. Store top‑k docs in the prompt; keep a “fallback list” for rare queries.  
3. Explain to interviewers: “We balance token budget by prioritising instructions and selectively including documents, ensuring we stay within 200 k while preserving essential content.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
