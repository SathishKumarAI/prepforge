---
qid: ing_afc42607d9__star__local
question: 'Explain: ✍️ License: open-core split — GitHub - langwatch/langwatch: The
  platform for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 303
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:38-05:00'
sources: []
---

**Situation:**  
At a startup building an LLM evaluation platform, our internal team had built a robust set of metrics and dashboards that were heavily used by data scientists. The product was gaining traction on GitHub (langwatch/langwatch), but we realized the core analytics engine contained proprietary optimizations that could give us competitive advantage.

**Task:**  
We needed to open‑source the majority of the code to attract contributors while protecting our intellectual property and revenue stream from the advanced inference pipeline.

**Action:**  
I drafted an “open‑core” license strategy: the public repository would be under a permissive MIT license, exposing all data‑collection, metric‑calculation, and UI components. The core inference engine was moved to a separate private repo with a commercial license, accessible only via a paid API key. We added clear boundaries in the documentation, automated CI checks that enforce no cross‑repo code leakage, and used GitHub’s `CODE_OF_CONDUCT` to manage contributor expectations.

**Result:**  
Within three months we had 45 contributors, 12 PRs merged per month, and a 30% increase in community‑generated plugins. Meanwhile, the private core module generated $120k in annual recurring revenue. I learned that a well‑defined open‑core model can fuel ecosystem growth without compromising business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
