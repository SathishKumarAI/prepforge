---
qid: ing_a7ce438404__faang__local
question: 'Explain: Shell commands and scripting — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 501
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:14:42-05:00'
sources: []
---

**Clarify**  
We’re asked how to embed AI into a shell‑command‑and‑scripting interview at Meta: give concrete prompts, show how an AI assistant can help candidates write Bash scripts or troubleshoot commands, and demonstrate the workflow.

**Approach**  
1. Outline the typical interview flow (prompt → candidate code → AI feedback).  
2. Show example prompts that target parsing, file manipulation, and process control.  
3. Illustrate the AI’s role: auto‑completion, error detection, performance hints, and documentation lookup.  

**Depth**  
- **Prompt 1:** “Write a Bash script to find all `.log` files larger than 10 MB in `/var/log`, compress them with `gzip`, and move to `/archive`. Include error handling.”  
  *AI Response:* Suggests `find /var/log -type f -name '*.log' -size +10M -print0 | while IFS= read -r -d '' file; do gzip "$file" && mv "${file}.gz" /archive/ || echo "Failed $file"; done`.  
- **Prompt 2:** “Explain how to use `xargs` safely with a list of filenames that may contain spaces.”  
  *AI Response:* Provides `printf '%s\0' "${files[@]}" | xargs -0 -I{} command {}` and warns about `xargs`’ default delimiter.  

The AI can auto‑complete commands, suggest best practices (e.g., using `set -euo pipefail`), point to relevant man pages (`man gzip`, `info find`), and run a dry‑run simulation via container exec.

**Edge Cases**  
- Files with special characters or no write permission → test error messages.  
- Large directories causing memory pressure → recommend streaming solutions.  
- Missing utilities (e.g., `gzip` not installed) → fallback to alternatives like `tar -czf`.  

**Optimize & Communicate**  
Iterate: first draft, AI critique, candidate refines. Highlight trade‑offs: using `find | xargs` vs. a pure Bash loop; choosing `-exec gzip {} \;` for simplicity versus performance. Conclude by summarizing that the AI acts as an interactive pair programmer, accelerating correctness and learning during the interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
