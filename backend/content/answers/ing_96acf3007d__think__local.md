---
qid: ing_96acf3007d__think__local
question: 'Explain: Making Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 456
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:05:20-05:00'
sources: []
---

**1️⃣ Clarify the goal & audience**  
   - What does “making changes” mean? (editing files, staging, committing, pushing)  
   - Who will read it? (ML practitioners new to Git, or seasoned devs needing a quick reference)  
   - Assume they have basic terminal skills but may not know all flags.

**2️⃣ Choose a mental framework**  
   - *Workflow ladder*: `edit → stage → commit → push`  
   - For each rung list the most common command(s) + minimal options.  
   - Group related commands (e.g., `git add`, `git reset`) under “Staging”.

**3️⃣ Build step‑by‑step reasoning**  
   - Start with **local edits**: `git status` → shows changes.  
   - Then **staging**: `git add <file>` or `-A`.  
   - **Committing**: `git commit -m "msg"`; mention `--amend` for quick fixes.  
   - **Branching & merging**: `git checkout -b branch`, `git merge branch`.  
   - Finally **pushing**: `git push origin <branch>`.  
   - Add shortcuts (`git ci -am "msg"`) and explain when to use them.

**4️⃣ Avoid common traps**  
   - Don’t over‑explain flags; keep cheat sheet concise.  
   - Remember `git rm` vs `git reset`; avoid confusing file removal with unstaging.  
   - Warn about committing large data files (use `.gitignore`, LFS).

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify each command works in a minimal repo test.  
   - Use bullet points, bold key terms, and a small “Quick FAQ” for edge cases.  
   - End with links to deeper docs or tutorials for those who want more detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
