---
qid: ing_428e41d29d__faang__local
question: 'Explain: Per-PR eval budget — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 822
total_tokens: 1057
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:59-05:00'
sources: []
---

**Per‑PR Eval Budget – Eval Gated CICD**

---

### 1️⃣ Clarify  
*Problem:*  
When a new pull request (PR) touches AI/ML code, we want to run expensive evaluation jobs (e.g., model training/evaluation). The question is how to *budget* these resources per PR and gate the CI/CD pipeline so that only PRs within budget proceed.  

*Assumptions to confirm:*  
- Evaluation cost is measured in compute‑hours or GPU‑credits.  
- A global quota (e.g., 100 GPU‑hrs/month) is available for all PRs.  
- Some PRs are “critical” and should bypass the budget check.  

---

### 2️⃣ Approach  
1. **Metric definition** – decide a unit of cost (CPU‑hours, GPU‑hours, or cloud credits).  
2. **Per‑PR estimation** – static analysis or a lightweight “dry‑run” to predict cost before full eval.  
3. **Budget ledger** – maintain a shared counter (Redis/DB) that records spent budget per day/week.  
4. **Gate logic** – in the CI pipeline, query the ledger; if `current + estimate > quota`, fail the PR or route it to a “high‑priority” queue.  
5. **Rollback & cleanup** – after eval, decrement the ledger and purge artifacts.

---

### 3️⃣ Depth (Implementation)  

```yaml
# GitHub Actions example
on: pull_request

jobs:
  estimate-cost:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: |
          cost=$(python scripts/estimate.py)
          echo "EVAL_COST=$cost" >> $GITHUB_ENV

  gate-eval:
    needs: estimate-cost
    runs-on: ubuntu-latest
    if: github.event.pull_request.base.ref == 'main'
    steps:
      - uses: actions/setup-node@v4
      - run: |
          available=$(curl -s https://budget.api/remaining)
          if (( $(echo "$available < $EVAL_COST" | bc -l) )); then
            echo "Budget exceeded – failing PR"
            exit 1
          fi

  eval:
    needs: gate-eval
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: |
          python train_and_eval.py --budget=$EVAL_COST
```

*Complexity:*  
- Estimation is `O(n)` over changed files.  
- Ledger updates are constant‑time; contention mitigated via atomic DB ops.  

---

### 4️⃣ Edge Cases  
| Scenario | What breaks? | Test strategy |
|----------|--------------|---------------|
| PR touches many small scripts → cost underestimates | Budget may be exceeded later | Mock `estimate.py` to return high values |
| Concurrent PRs race on ledger | Over‑spending | Simulate 10 parallel PRs in CI |
| Critical PR bypasses gate | Uncontrolled resource drain | Flag via labels and skip budget check |

---

### 5️⃣ Optimize & Communicate  
- **Caching**: Store previous cost estimates per commit hash to avoid recomputation.  
- **Dynamic quotas**: Scale `available` based on time of day or cloud spot pricing.  
- **Feedback loop**: After each eval, publish the actual cost back to a dashboard for future estimation refinement.  

*Storytelling tip:* Start with a concrete example (“Imagine PR #42 modifies 5 layers…”) and walk through the pipeline steps, emphasizing how the budget ledger prevents runaway GPU usage while still allowing critical experiments to run. This showcases both technical depth and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
