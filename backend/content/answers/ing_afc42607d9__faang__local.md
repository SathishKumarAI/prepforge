---
qid: ing_afc42607d9__faang__local
question: 'Explain: ✍️ License: open-core split — GitHub - langwatch/langwatch: The
  platform for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 422
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:02-05:00'
sources: []
---

**Clarify**  
The question asks why *langwatch* uses an **open‑core split**: its core evaluation engine is open source, while advanced AI‑agent features are behind a paywall. Confirm assumptions: the repository hosts an LLM testing platform; “open‑core” means all foundational code is MIT/GPL‑style, but premium modules (e.g., agent orchestration, enterprise integrations) require a commercial license.

**Approach**  
1. Outline the business logic of open‑core.  
2. Map it to *langwatch*’s architecture.  
3. Highlight legal & technical trade‑offs.

**Depth**  
- **Open core**: Core libraries (data ingestion, metric calculation, test harness) are released under permissive MIT license so anyone can run or fork them.  
- **Closed extensions**: Agent orchestration, advanced prompt‑engineering pipelines, and cloud‑managed dashboards live in a separate repository/branch with an AGPL or proprietary license.  
- **Why this split?**  
  - *Community building*: Open core lowers friction for experimentation and contributions.  
  - *Revenue*: Closed modules deliver value (e.g., auto‑scaling, multi‑model orchestration) that enterprises are willing to pay for.  
  - *Security & compliance*: Sensitive agent logic can be protected while still allowing audit of the open core.

**Edge cases**  
- A contributor might merge closed code into the open repo accidentally → enforce CI gate checks.  
- License incompatibility if downstream projects use a different license (MIT + AGPL) → clarify dual‑licensing policy.

**Optimize & communicate**  
Explain that this model mirrors successful FAANG patterns: core APIs are public, premium features locked behind subscriptions. Emphasize the clear boundary in repo structure, automated CI checks for compliance, and transparent contributor guidelines to maintain a healthy ecosystem while monetizing advanced AI tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
