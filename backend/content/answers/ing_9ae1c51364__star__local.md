---
qid: ing_9ae1c51364__star__local
question: 'Explain: Failure-mode taxonomy as the assertion surface'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 378
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:09-05:00'
sources: []
---

**Situation** – While leading a safety‑critical autonomous driving project at my previous company, we discovered that our model’s confidence scores were often misleading during edge‑case scenarios. Our QA team flagged several “false positives” where the system over‑confidently predicted safe conditions but crashed in simulation.

**Task** – I needed to build a systematic way to capture, classify, and surface every failure mode so that engineers could see exactly *where* our assertions were breaking, not just that they were.

**Action** – I introduced a “failure‑mode taxonomy as the assertion surface” framework. First, we mapped all high‑level safety assertions (e.g., lane‑keeping, obstacle detection) to a hierarchical ontology: top‑level categories (perception, planning, control), mid‑level sub‑categories (sensor noise, model drift, decision boundary violations), and leaf nodes with concrete failure signatures. I then integrated this taxonomy into our continuous‑integration pipeline: each assertion failure logged its taxonomy code, severity score, and a reproducible test case snapshot. We used Grafana dashboards to surface counts by taxonomy node in real time, and we added automated alerts for any node exceeding a 5 % error rate.

**Result** – Within three sprints, the mean time‑to‑detect (MTTD) of critical assertion failures dropped from 12 hours to under 30 minutes. The taxonomy helped us prioritize fixes: we reduced lane‑keeping false positives by 78 % and overall crash simulations by 35 %. I learned that treating failure modes as a structured surface, rather than ad‑hoc logs, turns noisy alerts into actionable insights and accelerates safety regression cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
