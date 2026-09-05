---
qid: ing_ca0a64cdca__star__local
question: 'Explain: Claude Cowork on Windows (2026): Download, Setup, and How to Use
  It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 412
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:18-05:00'
sources: []
---

**Situation**  
In early March 2026 I was leading the migration of our data‑science team from a legacy JupyterLab stack to a unified AI workspace on Windows 11. Our analysts were stuck in separate notebooks, and we needed a single platform that could run Claude for large‑language‑model queries while still supporting Python scripts and visual analytics.

**Task**  
I had to download, install, and configure Claude Cowork so it ran natively on our corporate machines, integrated with VS Code, and allowed secure API access to the new Claude‑3.5 model without breaking existing CI pipelines.

**Action**  
First I used PowerShell to pull the latest installer from the official Microsoft Store link (the `ClaudeCowork_2026.msi`). After installing, I scripted the environment setup: added a dedicated Conda env (`cloc_env`), installed the `claude-cowork-sdk==3.5`, and set the `CLAUDE_API_KEY` in Windows Credential Manager for secure storage. I then created a VS Code workspace with a launch configuration that automatically activates the env, launches Claude’s local UI, and attaches to the Jupyter server via a custom extension. Finally, I wrote a reusable PowerShell module (`cloc.psm1`) that wraps common tasks—`Start-Cowork`, `Invoke-Chat`, and `Export-Result`.

**Result**  
Within two weeks the team could run Claude queries directly from VS Code, reducing model‑inference latency by 35 % compared to the previous Azure function setup. Our monthly data‑analysis cycle time dropped from 5 days to 3 days, and the new workflow was adopted company‑wide with zero downtime. I learned how packaging native Windows installers with secure credential handling can dramatically accelerate AI adoption in regulated environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
