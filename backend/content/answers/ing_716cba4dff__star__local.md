---
qid: ing_716cba4dff__star__local
question: 'Explain: Installing Visual Studio Code — GitHub - Asabeneh/30-Days-Of-Python:
  The 30 Days of Python programming challenge is a step-by-step guide to learn the
  Python programming language in 30 days. This challenge may take more than 100 days.
  Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 325
output_tokens: 399
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:12-05:00'
sources: []
---

**Situation**  
During the first week of a self‑paced “30 Days of Python” bootcamp I hit a wall: my code was not running in a clean environment and version control felt like an extra chore. The instructor suggested cloning Asabeneh’s GitHub repo into VS Code, but I had never installed VS Code on Windows.

**Task**  
I needed to set up VS Code, install the Python extension, clone the repository, and get the example notebooks running so I could experiment with the exercises.

**Action**  
1. Downloaded the .zip installer from the VS Code website, ran it with admin rights, and added “code” to my PATH.  
2. Opened VS Code, opened the Extensions view (Ctrl+Shift+X), searched for “Python” by Microsoft, and installed it—this automatically pulled in Pylance for type checking.  
3. Installed Git via the command line (`winget install --id=Git.Git`), then used `git clone https://github.com/Asabeneh/30-Days-Of-Python.git`.  
4. Opened the cloned folder with **File → Open Folder**; VS Code auto‑detected the `requirements.txt` and prompted me to create a virtual environment (`Python: Create Environment`).  
5. Ran `pip install -r requirements.txt` inside the new env, verified that Jupyter notebooks opened in the editor, and executed the first lesson cells.

**Result**  
Within 45 minutes I had a fully functional local development stack, all dependencies installed, and could run the sample scripts with no errors. The setup saved me roughly an hour of debugging later on, and taught me how to streamline VS Code workflows for any future data‑science projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
