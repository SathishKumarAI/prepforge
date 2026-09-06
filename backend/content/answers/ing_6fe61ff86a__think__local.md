---
qid: ing_6fe61ff86a__think__local
question: 'Explain: A user reports the RAG assistant gave a wrong answer. Walk me
  through your triage.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 488
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:22:55-05:00'
sources: []
---

**1️⃣ Clarify the situation (and state assumptions)**  
   - Ask the user for the exact question they asked and the assistant’s reply.  
   - Confirm which version of the RAG system they used (model, knowledge cutoff, data source).  
   - Assume the user wants a factual correction, not just an apology.

**2️⃣ Mental model: “Error‑diagnosis loop”**  
   - *Input → Retrieval → Generation → Output.*  
   - Each link can introduce faults: wrong prompt interpretation, stale or missing documents, hallucination during generation, post‑processing glitches.

**3️⃣ Step‑by‑step triage**  

| Step | Action | Why |
|------|--------|-----|
| a. Re‑run the query on the same knowledge base | Validate if the system still reproduces the error | Checks for transient issues (caching, API hiccup) |
| b. Inspect retrieved documents | Verify that the correct facts are present and ranked appropriately | Retrieval bias often causes misinformation |
| c. Examine the prompt to the LLM | Ensure no ambiguous wording or contradictory instructions | Prompt errors can steer generation off‑track |
| d. Look at post‑processing rules | Confirm no filters or truncations altered the answer | Sanitization steps sometimes remove correct info |
| e. Compare with authoritative source | Cross‑check with a trusted database or web search | Provides ground truth for correction |

**4️⃣ Common traps to avoid**  
   - *Assuming the LLM hallucinated*: often the issue is missing context in retrieval.  
   - *Overlooking user wording*: a subtle rephrase can change intent.  
   - *Ignoring versioning*: newer model releases may have different behavior.

**5️⃣ Sanity‑check & communicate**  

1. Summarize findings succinctly: “The system retrieved the correct documents, but the prompt caused the LLM to misinterpret…”  
2. Offer a corrected answer and explain the fix (e.g., adjust retrieval ranking or refine the prompt).  
3. Advise on preventive steps: update knowledge base, tweak prompt templates, add sanity checks in post‑processing.  

This structured triage ensures you isolate the fault source, provide an accurate correction, and prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
