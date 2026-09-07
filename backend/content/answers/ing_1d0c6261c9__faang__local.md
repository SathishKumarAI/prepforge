---
qid: ing_1d0c6261c9__faang__local
question: 'Explain: Getting started — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:42-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks you to explain how a developer would begin using **Cody**, the AI coding assistant built into Sourcegraph, by following the official documentation. Assume the audience is familiar with VS Code but new to Cody.

**2️⃣ Approach**  
Outline: (a) install/enable Sourcegraph extension; (b) create/associate an account; (c) configure authentication tokens; (d) launch Cody via the sidebar or command palette; (e) test a simple prompt.  

**3️⃣ Depth**  
- **Installation**: VS Code ➜ Extensions ➜ search “Sourcegraph” ➜ install.  
- **Account linkage**: after first run, it opens a web flow—sign in to your Sourcegraph instance or GitHub, then copy the generated OAuth token into VS Code’s settings (`sourcegraph.cody.accessToken`).  
- **Permissions**: explain that Cody needs read access to the repository and optional write for commit suggestions.  
- **Launching Cody**: press `Ctrl+Shift+C` (or use the “Cody” icon) to open the chat pane; type a query like *“Explain this function in plain English.”*  
- **First interaction**: show that Cody returns an inline explanation or code completion, demonstrating latency (~1‑2 s).  

**4️⃣ Edge Cases**  
- No network → Cody falls back to local cache.  
- Invalid token → error message prompting re-authentication.  
- Large repos → may take longer to index; advise waiting for the “Cody is ready” banner.  

**5️⃣ Optimize & Communicate**  
Mention that developers can tweak `sourcegraph.cody.maxTokens` or enable/disable the “auto‑fetch” feature in settings for performance trade‑offs. Conclude by stressing Cody’s integration with existing Sourcegraph search APIs, making it a seamless extension rather than a separate tool.  

*Word count: ~180 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
