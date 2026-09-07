---
qid: ing_a29785336e__faang__local
question: How do you version and govern prompts in production? Someone asks which
  prompt produced a bad output three weeks ago - can you answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 531
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:02:36-05:00'
sources: []
---

**Clarify**  
We’re asked: *How do we version and govern prompts in production so that, when a user reports a bad output from three weeks ago, we can trace exactly which prompt was used?*  
Assumptions to confirm:  
- Prompts are stored centrally (e.g., DB or file store).  
- Each request logs an identifier.  
- Multiple teams may modify prompts over time.

**Approach**  
1. **Prompt registry** – a single source of truth with immutable records.  
2. **Semantic versioning** (`vMAJOR.MINOR.PATCH`) for each prompt revision.  
3. **Metadata tagging** (author, purpose, target model).  
4. **Audit trail** – every change is logged in an event store.  
5. **Runtime injection** – the API layer fetches the exact version by ID from the registry and passes it to the LLM.

**Depth**  
- Store prompts in a SQL/NoSQL table: `prompt_id, version, content, created_at, author, changelog`.  
- Use immutable storage (e.g., S3 objects with key `${prompt_id}_v${version}.txt`).  
- Every API call records `prompt_id` and `version` into the request log.  
- On a bug report, we query logs for that timestamp → retrieve `prompt_id`, `version`.  
- The audit log shows who changed it and why (e.g., “removed offensive phrasing”).  
Complexity: O(1) lookup for prompt; audit queries are O(log n). Trade‑off is slight storage overhead vs traceability.

**Edge Cases**  
- Prompt deleted or overwritten without retention → use immutable buckets.  
- Multiple prompts with same content but different IDs → enforce uniqueness via hash.  
- Human error in tagging → automated CI that validates metadata before promotion.

**Optimize & Communicate**  
- Automate version bump on merge requests; integrate tests to catch regressions.  
- Provide a UI for “prompt lineage” so stakeholders see evolution history.  
- Narrate the process: “When a user flagged an issue, we pulled the request log → identified `prompt_id=abc123`, `v2.1`. The audit trail shows it was last edited by X on 2024‑06‑10 to remove a template phrase.”  

This guarantees reproducibility, accountability, and fast root‑cause analysis in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
