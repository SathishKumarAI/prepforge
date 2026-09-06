---
qid: ing_e2fcd4c9a4__think__local
question: 'Explain: Basic Usage — GitHub - mem0ai/mem0: Universal memory layer for
  AI Agents \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 401
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:58:35-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**

- The user wants an explanation of *Basic Usage* for the `mem0ai/mem0` repository on GitHub.
- Assume they have a general AI background but may not know this specific library.
- We’ll treat “basic usage” as how to install, configure, and run a minimal example.

**2. Build a mental model / framework**

1. **Context** – mem0 is a universal memory layer for AI agents.  
2. **Goal** – Show the user the typical workflow: import → initialize → store/query.  
3. **Structure** – Follow the repo’s README sections (Installation, Quickstart, API).  

**3. Step‑by‑step reasoning**

- Open the GitHub page and locate the “Basic Usage” heading.  
- Read the code snippets under that section.  
- Identify key objects: `Mem0`, `Document`, `VectorStore`.  
- Note any prerequisites (Python ≥ 3.9, optional dependencies).  
- Summarize the steps in plain language:
  - Install via pip.
  - Create a `Mem0` instance with your config or environment variables.
  - Add documents using `add_document`.
  - Retrieve information with `query` or `search`.

**4. Common traps to avoid**

- Misreading the example as requiring a database setup when it’s optional.  
- Forgetting that some functions are async; use `await`.  
- Assuming all agents automatically pick up memory—explain the explicit integration step.  

**5. Sanity‑check & communicate**

- Cross‑verify the steps against the repo’s README and any linked docs.  
- Keep explanations concise but complete, using code blocks for clarity.  
- End with a quick note on where to find more advanced usage (e.g., custom retrievers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
