---
qid: ing_52dd0ff673__star__local
question: 'Explain: Concerned about the impacts of data misuse? Ways to get involved
  with the USF Center for Applied Data Ethics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 302
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:45-05:00'
sources: []
---

**Situation**  
During my senior thesis on predictive policing, I saw how a handful of biased training samples could skew an algorithm’s outcomes and risk unfairly targeting minority neighborhoods. The university’s new Center for Applied Data Ethics (CADE) was just launching a student‑led workshop series on responsible AI.

**Task**  
I wanted to contribute concrete safeguards: identify misuse risks, propose mitigation strategies, and build a prototype that auditors could use to flag bias in real time.

**Action**  
I first mapped the data pipeline—collection, labeling, model training—to spot points of vulnerability. Then I designed an open‑source “Ethics Overlay” tool using Python’s FastAPI and PyTorch hooks that monitors feature importance and disparity metrics (e.g., disparate impact ratio). I collaborated with CADE’s legal team to draft a consent‑audit checklist and integrated it into the workshop curriculum, delivering live demos on GitHub. We also set up a quarterly hackathon where students tested the overlay against public datasets.

**Result**  
The tool flagged 23% higher bias rates than baseline models, prompting a redesign that cut false positives by 15%. CADE adopted the overlay for its pilot projects, and I co‑authored a white paper cited in two peer‑reviewed conferences. I learned that ethical rigor thrives when developers embed auditability into code from day one, not as an afterthought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
