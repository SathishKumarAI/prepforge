---
qid: ing_0d2f41cb7a__think__local
question: 'Explain: Cody — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 536
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:35:11-05:00'
sources: []
---

We need to output the metacognition as requested.**1️⃣ Clarify & set assumptions**  
- The user asks about *“Cody – Cody - Sourcegraph docs”*.  
- Assume they want a concise explanation of what Cody is, its purpose, and key features as described in the official Sourcegraph documentation.  
- Note that “Cody” is an AI coding assistant integrated into Sourcegraph.

**2️⃣ Mental model / framework**  
Use a *“Product‑Feature Overview”* template:  
1. What it is (definition).  
2. Core purpose/benefit.  
3. How it works (technology & integration).  
4. Key features/use‑cases.  
5. Typical deployment context.

**3️⃣ Step‑by‑step reasoning**  
- Start with the definition from docs: Cody is an AI assistant built on OpenAI’s models, embedded in Sourcegraph.  
- Explain its goal: to help developers write, understand, and refactor code faster by providing contextual suggestions inside the editor or web UI.  
- Describe integration: runs as a browser extension, VS Code plugin, or via the Sourcegraph web interface; it uses the repository’s context (files, commits) to generate accurate answers.  
- List features: autocomplete, explain code snippets, generate tests, refactor suggestions, inline chat, and “Cody for Docs” that auto‑generates documentation from code.  
- Mention deployment: self‑hosted Sourcegraph + Cody server or cloud‑managed version; requires an API key.

**4️⃣ Common traps to avoid**  
- Don’t confuse Cody with GitHub Copilot or other LLM tools—highlight its tight coupling to Sourcegraph’s search and indexing.  
- Avoid over‑technical jargon (e.g., “LLM inference engine”) unless the audience is advanced; keep it accessible.  
- Don’t mention proprietary details that aren’t in docs (e.g., pricing models) unless explicitly asked.

**5️⃣ Sanity‑check & communicate**  
- Re‑read the answer to ensure each bullet ties back to a doc statement.  
- Speak as if explaining to a developer unfamiliar with Sourcegraph: “Cody is basically an AI helper that lives inside your code browser.”  
- End with a quick call‑to‑action: “Try it in your Sourcegraph instance by enabling the Cody extension and typing ‘/cody’ in any file.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
