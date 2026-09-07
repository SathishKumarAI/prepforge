---
qid: ing_b4b4b56d4f__aws__local
question: A new model version rolled out and quality is bad. Walk me through the rollback.
  What's different from rolling back code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 557
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:07-05:00'
sources: []
---

**Situation & Task (S)**  
At a prior role I launched an AI recommendation model (v2) that hit production in March. Within 12 hrs the A/B test showed a 15 % drop in click‑through rate and a 7 % increase in latency, costing us ~$120K/day in ad revenue loss.

**Action (A)**  
1. **Immediate rollback plan** – I created an *immutable* versioned artifact in S3 (`model/v2.tar.gz`) and a corresponding Lambda that served `v1`.  
2. **Feature‑flag switch** – Using AWS AppConfig, I toggled the flag to route 100 % traffic back to v1 while keeping v2 live for diagnostics.  
3. **Data‑driven diagnostics** – Pulled CloudWatch logs and SageMaker batch transform results; discovered a bias in the training data that caused the latency spike.  
4. **Automated rollback pipeline** – Added Step Functions to orchestrate the flag flip, metrics verification (SQS + SNS), and optional re‑train trigger.

**Result (R)**  
The rollback restored baseline CTR within 30 min, saving ~$3M/month in projected revenue loss. The new pipeline cut manual rollback time from hours to minutes and introduced a “canary” test that reduced future deployment risk by 90 %.

---

### What the bar‑raiser looks for
- **Ownership**: I owned the incident, drove cross‑team coordination, and updated runbooks.  
- **Dive Deep**: I pinpointed data bias via SageMaker logs, not just surface symptoms.  
- **Quantified Impact**: 15 % CTR loss → $120K/day; rollback saved ~$3M/month.  
- **Learning from Failure**: Instituted automated canary checks and a stricter data validation step before next release.

---

#### Key AWS Services & Trade‑offs
| Service | Why |
|---------|-----|
| **S3 + Lambda** | Immutable artifacts → fast, cost‑effective rollback |
| **AppConfig** | Central flag control with zero‑downtime toggles |
| **Step Functions** | Orchestrates multi‑service rollback workflow; adds 5 % latency but ensures consistency |
| **CloudWatch / SageMaker Batch** | Real‑time metrics for quick decision making |

The approach balances **availability** (immediate traffic redirection), **scalability** (Lambda scales with traffic), and **cost** (minimal overhead vs. full redeployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
