---
qid: ing_a7ce438404__star__local
question: 'Explain: Shell commands and scripting — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 416
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:28-05:00'
sources: []
---

**Situation** – At my last role I was prepping for Meta’s AI‑assisted coding interview. The panel wanted to see if I could leverage a pre‑trained language model to auto‑generate bash scripts that solved real‑world DevOps problems, while still maintaining readability and performance.

**Task** – My goal was to build an end‑to‑end workflow: prompt the model with a concise problem statement, capture its shell code output, automatically lint it, run unit tests against a mock environment, and present a polished script that met Meta’s coding standards—all within 45 minutes of interview time.

**Action** – I wrote a small Python wrapper around OpenAI’s API. First, I used `curl` to send the prompt:  
```bash
curl https://api.openai.com/v1/chat/completions \
 -H "Authorization: Bearer $OPENAI_KEY" \
 -d '{"model":"gpt-4o","messages":[{"role":"user","content":"Generate a Bash script that backs up /var/www to /backup and logs the operation."}]}'
```
The response was piped into `jq` to extract the code block, then I passed it through `shellcheck` (via Docker) for linting. Next, I executed the script in a lightweight Alpine container, capturing stdout/stderr with `tee`. Finally, I used `diff` against an expected output file and displayed a concise pass/fail summary on the interview console.

**Result** – The entire pipeline ran in under 12 minutes, producing a clean script that passed all lint checks (0 errors) and logged correctly. Meta’s interviewers praised my ability to combine shell expertise with AI automation, and I learned how to orchestrate API calls, containerized testing, and real‑time feedback loops in production‑grade scripts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
