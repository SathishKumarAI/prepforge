---
qid: ing_527710ec1f__think__local
question: 'Explain: Use case: User searches keywords — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 445
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:26:25-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is being requested?* Explain why a user would search “keywords” in the context of a GitHub repo (e.g., `system-design-primer/solutions/system_design/twitter/README.md`).  
- *Assumptions:* The reader knows basic Git/GitHub operations, understands that “master” is a branch name, and has a general sense of ML systems.

**2️⃣ Adopt a mental model**  
Use the **“Problem → Solution → Implementation”** framework:  
1. Identify the user problem (finding relevant docs).  
2. Outline the solution strategy (searching by keyword across repo paths).  
3. Map to concrete GitHub features (Search bar, `in:file`, `path:` filters).

**3️⃣ Step‑by‑step reasoning**  
- *Problem:* A developer needs quick access to a specific README that describes Twitter’s system design within the primer repo.  
- *Solution:* Leverage GitHub’s search syntax: `repo:donnemartin/system-design-primer in:file path:"solutions/system_design/twitter/README.md"`.  
- *Implementation:* Explain how the UI shows results, how to refine with additional keywords (e.g., “scalability”), and how to open the file directly.

**4️⃣ Common pitfalls to avoid**  
- Forgetting that `master` is just a branch; mention that you can filter by branch with `branch:master`.  
- Over‑relying on fuzzy search—highlight that exact path matching gives deterministic results.  
- Neglecting case sensitivity or special characters in file names.

**5️⃣ Sanity check & verbalize**  
- Recount the steps aloud to ensure each link (problem → GitHub search syntax → result) is clear.  
- Verify with a quick test: run the query on GitHub, confirm the README appears.  
- Summarize: “Use the built‑in search bar with path and branch filters to locate the exact file you need.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
