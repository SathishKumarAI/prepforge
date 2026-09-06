---
qid: ing_6708edcf79__fp__local
question: 'Explain: How to use visual studio code — GitHub - Asabeneh/30-Days-Of-Python:
  The 30 Days of Python programming challenge is a step-by-step guide to learn the
  Python programming language in 30 days. This challenge may take more than 100 days.
  Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 496
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:16-05:00'
sources: []
---

**Why this workflow works**

The *30‑Days‑of‑Python* repository is a linear learning path.  
Each day’s exercise lives in its own folder, so you can treat the repo as a **sequential build system**: pull a commit → run the script → commit your answer.  
Git provides version control; VS Code gives an integrated terminal and editor that understands Python syntax. Together they form a minimal *continuous‑integration* loop: code → test → push.

---

### Step‑by‑step

| What | How |
|------|-----|
| **Clone the repo** | `git clone https://github.com/Asabeneh/30-Days-Of-Python.git` |
| **Open in VS Code** | `code 30-Days-Of-Python/` (or use *File → Open Folder*). |
| **Create a branch per day** | `git checkout -b day-01`. This isolates your work and keeps the main branch clean. |
| **Run the exercise** | In the terminal: `python3 1_hello_world.py`. VS Code’s *Run Python File in Terminal* button also works. |
| **Commit** | `git add .` → `git commit -m "Day 1 solution"`. |
| **Push** | `git push origin day-01`. |
| **Move to the next day** | `git checkout main`, pull latest, repeat with a new branch (`day‑02`). |

---

### One non‑obvious insight

**Use VS Code’s *Source Control* panel to view diffs per line as you type.**  
Because each exercise is short, seeing exactly which lines changed from the original solution helps reinforce syntax patterns and catch subtle bugs—something a plain `git diff` after the fact rarely reveals.

---

### Quick sanity check

After pushing your branch, open the repo’s GitHub page → *Compare & pull request* to verify that the diff shows only your changes. If everything looks good, merge or keep it for personal backup.  

Repeat daily; by the end you’ll have a fully‑functional, self‑documented Python portfolio—all managed through VS Code and Git.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
