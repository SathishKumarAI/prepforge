---
qid: ing_6708edcf79__star__local
question: 'Explain: How to use visual studio code — GitHub - Asabeneh/30-Days-Of-Python:
  The 30 Days of Python programming challenge is a step-by-step guide to learn the
  Python programming language in 30 days. This challenge may take more than 100 days.
  Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 327
output_tokens: 363
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:01-05:00'
sources: []
---

**Situation** – In late March, I was tasked with contributing to the “30‑Days‑of‑Python” learning repo on GitHub. The repository had a growing issue list but no clear workflow for new contributors, and my team needed a reproducible setup so everyone could run the notebooks locally.

**Task** – My goal was to create a step‑by‑step guide that showed how to clone the repo, set up VS Code with the right extensions, install dependencies, and push changes back to GitHub—all while keeping the repository clean and well‑documented.

**Action** – I opened VS Code, installed the *Python* and *GitLens* extensions for linting and inline blame. Using the terminal, I ran `git clone https://github.com/Asabeneh/30-Days-Of-Python.git` and created a new branch named `feature/setup-guide`. Inside the repo, I added a `setup.md` file that walked through creating a virtual environment (`python -m venv .venv`), activating it, and running `pip install -r requirements.txt`. I also added VS Code launch configurations in `.vscode/launch.json` so the notebooks could be debugged. Finally, I committed with a clear message, pushed the branch, and opened a pull request for review.

**Result** – The PR was merged within two days; the new guide is now part of the README, reducing onboarding time by 40 % for new contributors. I learned how to leverage VS Code’s Git integration to streamline collaboration and how documenting environment setup can dramatically improve project accessibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
