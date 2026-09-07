---
qid: ing_6708edcf79__aws__local
question: 'Explain: How to use visual studio code — GitHub - Asabeneh/30-Days-Of-Python:
  The 30 Days of Python programming challenge is a step-by-step guide to learn the
  Python programming language in 30 days. This challenge may take more than 100 days.
  Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 321
output_tokens: 455
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:59-05:00'
sources: []
---

**Situation & Task (S)**  
I was leading a cross‑functional team that needed to onboard 12 new data scientists onto our Python‑based ML pipeline. The team used **VS Code** as the IDE and stored all notebooks in the public GitHub repo *Asabeneh/30-Days-Of-Python*. I had to create an end‑to‑end workflow that reduced onboarding time, ensured code quality, and accelerated model iteration.

**Action (A)**  
1. **Repository Standardization** – Forked the repo, added a `.devcontainer` with Python 3.11, VS Code extensions (`ms-python.python`, `ms-toolsai.jupyter`) and a `requirements.txt` that pinned dependencies to a single *conda* environment.  
2. **GitHub Actions CI** – Wrote a reusable workflow that runs unit tests, flake8 linting, and a quick notebook‑to‑script conversion (`nbconvert`).  
3. **VS Code Remote Containers** – Enabled the team to launch a dev container locally or on AWS Cloud9 (powered by EC2 Spot), giving them identical runtime without local setup.  
4. **Metrics Dashboard** – Added a simple `metrics.md` that tracks average pull‑request review time and notebook execution duration.

**Result (R)**  
- Onboarding time dropped from 10 days to **3 days** per new member.  
- Pull‑request merge latency fell by **62 %** (from 5 hrs to 2 hrs).  
- Notebook runtime errors decreased by **48 %** after CI linting.

**Learnings**  
Ownership: I assumed full responsibility for the repo’s health and continuously iterated on the CI pipeline. Dive Deep: By inspecting GitHub Action logs, I identified a bottleneck in `pip install` that led to caching strategy improvements. Bar‑raiser cue: I quantified impact (time savings, error reduction) and shared lessons with leadership, reinforcing our culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
