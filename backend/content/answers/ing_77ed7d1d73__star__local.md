---
qid: ing_77ed7d1d73__star__local
question: 'Explain: Round 5: Take-home defence (30 minutes) — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:56-05:00'
sources: []
---

**Situation:**  
During my senior capstone, our team was tasked with delivering a machine‑learning prototype for a smart‑home startup. The client demanded an end‑to‑end solution that could be demonstrated within two weeks, and we had to present it in a formal defense before both the faculty panel and potential investors.

**Task:**  
I was responsible for creating a “take‑home defence” mock interview kit: a reproducible notebook, a concise slide deck, and a set of probing questions with model answers that would help us rehearse our pitch and anticipate tough queries about data bias, deployment latency, and cost scaling.

**Action:**  
Using JupyterLab I built an interactive pipeline in Python (pandas for preprocessing, scikit‑learn for modeling, SHAP for interpretability). I containerised the notebook with Docker to ensure identical environments for all reviewers. The slide deck was crafted in PowerPoint with a clear narrative arc: problem statement → data insights → model performance (AUC 0.87) → deployment plan (edge inference < 50 ms on Raspberry Pi). I drafted five mock interview questions—e.g., “How would you mitigate label drift over time?”—and wrote concise, evidence‑based answers. I then ran a dry‑run with teammates, collecting feedback on clarity and timing.

**Result:**  
Our defense went live without technical hiccups; the panel praised the reproducibility of our kit and the depth of our prepared responses. We secured a 20% increase in funding for prototype production. Personally, I learned how packaging code, documentation, and narrative into a single “take‑home” artifact can turn a complex project into an engaging, defensible story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
