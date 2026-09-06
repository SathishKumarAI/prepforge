---
qid: ing_af4c809ae8__fp__local
question: 'Explain: Sang Michael Xie — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 357
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:20-05:00'
sources: []
---

**Sang Michael Xie – “Home” (CS 324)**  
The *home* page is the entry‑point to a student’s machine‑learning portfolio. Its design follows a simple optimisation principle: **maximise information density while minimising cognitive load**.  

1. **Problem framing** – The site must quickly convey who Sang is, what he has achieved in CS 324 (e.g., projects, coursework), and how those skills can be leveraged by employers or collaborators.  
2. **Structure as a decision tree** – The layout mirrors a binary search: top‑level navigation (“About”, “Projects”, “Contact”) splits into sub‑nodes that reveal deeper detail only when the user asks for it. This reduces visual clutter and respects the *law of least astonishment*.  
3. **Content hierarchy** – Headings and typographic scale encode importance; a brief bio provides context, followed by project thumbnails (interactive or static) that link to Jupyter notebooks or GitHub repos. The page uses responsive design so the same decision tree works on desktop and mobile.  

**Non‑obvious insight:**  
The “Home” page is not merely an introduction—it functions as a *probabilistic model* of user intent. By placing the most probable next step (e.g., viewing a project) in the centre, the design leverages Bayes’ rule: P(next step|position) is maximised where users are likely to look first. This subtle bias improves click‑through without explicit prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
