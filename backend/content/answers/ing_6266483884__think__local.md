---
qid: ing_6266483884__think__local
question: 'Explain: Glean plug-in for Cursor, Claude Code, and Codex ​'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 469
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:31:15-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume “Glean” refers to a search‑and‑suggestion engine that indexes code bases.  
- “Cursor”, “Claude Code”, and “Codex” are three distinct IDE plugins that expose Glean’s functionality to developers.  
- The goal is to explain how each plug‑in consumes Glean, not the internals of Glean itself.

**2️⃣ Adopt a *plug‑in → API → UI* mental model**  
- Think of every plug‑in as a thin client: it talks to Glean over an HTTP/GraphQL endpoint, receives structured suggestions, and renders them in its own editor UI.  
- Map the lifecycle: user action → request → response → display.

**3️⃣ Step through each plug‑in**  
1. **Cursor** – integrates with the built‑in code editor; on a cursor event it sends the current file context to Glean, receives “next line” or “bug fix” suggestions, and shows them inline as ghost text.  
2. **Claude Code** – wraps Claude’s language‑model UI but replaces the “search” button with a Glean query; results appear in a side panel that can be inserted into the code.  
3. **Codex** – adds a command palette entry “Search Glean”; it fetches snippet suggestions and inserts them directly at the cursor, also offering a quick‑open preview.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate Glean’s indexing logic with the plug‑in UI behavior.  
- Remember that each plug‑in may impose its own rate limits or caching strategy; blame issues on the client, not Glean.  
- Beware of mislabeling “suggestion” vs. “search result”; they’re distinct payloads.

**5️⃣ Sanity‑check & communicate**  
- Verify each plug‑in’s README for API endpoints and UI hooks.  
- Explain that all three share the same core data but differ in how they present it (inline ghost text, side panel, or command palette).  
- Conclude by summarizing the shared architecture and unique user experience of each plug‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
