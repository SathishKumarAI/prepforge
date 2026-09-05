---
qid: ing_736002197f__star__local
question: 'Explain: Installing Python — GitHub - Asabeneh/30-Days-Of-Python: The 30
  Days of Python programming challenge is a step-by-step guide to learn the Python
  programming language in 30 days. This challenge may take more than 100 days. Follow
  your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 323
output_tokens: 353
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:22-05:00'
sources: []
---

**Situation**  
When I started the 30‑Days‑of‑Python challenge on GitHub, my laptop had an old Anaconda distribution that conflicted with the repo’s requirements. The project expected a clean Python 3.11 environment to run its notebooks and scripts.

**Task**  
I needed to set up a reproducible development stack: install the latest Python, create isolated virtual environments for each day, and ensure the challenge’s dependencies (pandas, numpy, matplotlib) were available without polluting my system packages.

**Action**  
I first uninstalled the legacy Anaconda via `conda remove --all`. Then I downloaded the official Python 3.11 installer from python.org, added it to PATH, and verified with `python --version`. Next, I used `pyenv` to manage multiple versions, creating a dedicated `30d-python` environment:  
```
pyenv virtualenv 3.11.4 30d-python
pyenv local 30d-python
pip install -r requirements.txt
```  
I scripted a simple `install.sh` that cloned the repo, activated the env, and ran `jupyter lab`. This script made it easy to jump from day 1 to day 30 without manual re‑setup.

**Result**  
Within two hours I had a clean, reproducible setup. All notebooks ran flawlessly, and my local environment remained isolated from global packages. The process cut down onboarding time for future collaborators by 75 % and taught me the value of version managers like `pyenv` in ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
