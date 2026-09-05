---
qid: ing_480024b9c4__think__local
question: A one-line system-prompt change is in a PR. What runs before it merges,
  and what blocks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 370
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:13:46-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- Identify “one‑line system‑prompt change” as a code diff in a pull request (PR).  
- Assume the repository uses a CI pipeline that runs tests and checks before merging.  
- “Runs before it merges” → what automated jobs are triggered.  
- “Blocks it” → which job failures or status checks prevent merge.

**2️⃣ Mental model / framework**  
Use a *CI/CD gate* diagram:  
`PR created → Trigger → Build/Tests → Status Checks → Merge`.  
Each step can either succeed (green) or fail (red).  

**3️⃣ Step‑by‑step reasoning**  
1. PR creation triggers the CI workflow defined in `.github/workflows/*` (or similar).  
2. The workflow runs jobs: linting, unit tests, integration tests, security scans, etc., all on the new prompt code.  
3. Each job reports a status check back to GitHub/Bitbucket.  
4. If any check fails, the PR is marked “blocked” and cannot be merged until resolved.  

**4️⃣ Common traps**  
- Assuming only linting runs; ignore test suites that may hit runtime errors.  
- Forgetting that environment variables or secret prompts can cause failures.  
- Overlooking manual review gates (e.g., required approvals) that also block merging.

**5️⃣ Sanity‑check & communication**  
- Verify the CI configuration file to list all jobs.  
- Check the PR’s status checks panel: green vs red boxes.  
- Explain clearly: “The CI pipeline runs lint, unit tests, and integration tests before merge; any failure in these blocks the merge.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
