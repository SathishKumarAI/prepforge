---
qid: ing_2a078b0f4a__faang__local
question: What's different about optimistic UI when the backend is an LLM rather than
  a CRUD API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 437
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:20:55-05:00'
sources: []
---

**Clarify**  
The interviewer asks how an *optimistic UI*—which updates the view before a server response—behaves when the backend is a large language model (LLM) instead of a conventional CRUD API.  
Assumptions:  
- The LLM generates text or data on‑demand, not stored records.  
- Latency can be higher and responses less deterministic.  

**Approach**  
1. Identify what state changes the UI expects from the backend.  
2. Map those expectations to LLM outputs (e.g., “create a summary” vs. “persist an item”).  
3. Design optimistic updates that reflect the *intent* rather than a concrete stored value.  

**Depth**  
- **CRUD**: Optimistic update replaces local data with the new record, rolling back if the POST fails.  
- **LLM**: The UI can immediately display the requested output (e.g., a draft summary), but since the LLM may later refine or correct it, the optimistic state is *tentative* and must be reconciled once the final response arrives.  
- Rollback isn’t about data loss; it’s about content revision—displaying “loading…” placeholders that get replaced by the LLM’s final text.  
- Use a version token to merge incremental responses or cancel outdated ones if the user changes input mid‑generation.  

**Edge Cases**  
- Network drop: show cached output and flag “offline”.  
- Divergent LLM outputs: keep a history of drafts so users can revert.  
- Long‑running generation: progress bars instead of full optimistic content.  

**Optimize & Communicate**  
Explain that with an LLM the optimistic UI shifts from *data persistence* to *content provisionality*. Emphasize using incremental streaming, versioning, and graceful degradation to keep UX snappy while acknowledging the inherently mutable nature of generated text. This demonstrates structured reasoning, technical depth, and a clear communication strategy—key FAANG interview strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
