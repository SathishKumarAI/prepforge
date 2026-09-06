---
qid: ing_5067978d8e__think__local
question: A community contributor opens a PR adding a new model architecture to `transformers`.
  You're the reviewing maintainer - what do you check, and how do you handle the interaction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 491
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:20:44-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
* Assume the PR adds a new architecture (e.g., “MyNet”) to `transformers`.  
* Assume it follows the repo’s style guide, licensing, and tests.  
* Assume I’m a maintainer with access to CI, documentation tools, and community norms.

**2. Mental model / framework**  
Use a *review checklist*: correctness → quality → compatibility → community impact.  
Apply the “Pull‑Request triage” pattern: first fast pass (CI & style), then deep dive (architecture, docs, tests).

**3. Step‑by‑step reasoning**  

1. **Run CI** – ensure all current tests pass plus new ones.  
2. **Check coding standards** – PEP 8, linting, type hints.  
3. **Validate architecture** – confirm the implementation matches the paper/description, check forward/backward passes, and that it plugs into `AutoModel`.  
4. **Documentation** – readme entry, API docs, examples, and docstrings.  
5. **Tests** – verify unit & integration tests cover key paths; add a small test if missing.  
6. **Performance & safety** – run quick benchmarks, look for obvious memory leaks or unsafe ops.  
7. **Community guidelines** – ensure no disallowed content, proper attribution, and that the PR follows the contribution template.

**4. Common traps to avoid**  

* Assuming CI success guarantees correctness—check the code manually.  
* Ignoring backward compatibility: new config keys may break older scripts.  
* Overlooking docstring style or missing example usage.  
* Neglecting to ask clarifying questions; silent acceptance can create friction.

**5. Sanity‑check & communicate**  

* Re‑run CI locally, double‑check changed files.  
* Summarize findings in the review comment: “All good except X – please add Y.”  
* If everything passes, give a concise thumbs‑up with a note on future maintenance (e.g., “Add to docs index”).  
* For issues, ask targeted questions (“What is `my_net`’s default config?”) and suggest concrete edits.  

This structured approach keeps reviews consistent, transparent, and collaborative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
