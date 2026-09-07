---
qid: ing_a9cf168b5f__aws__local
question: What is an agent? — Agentic Engineering - by Neo Kim and Paul Hoekstra
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 396
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent hackathon I built an *agent* for a recommendation engine—essentially a self‑directed learning loop that decides when to query new data and how to update its policy.  

- **Situation:** Our team needed a dynamic model that could adapt in real time without manual retraining, because user churn was rising by 12 % each quarter.  
- **Task:** Design an agentic system that balances exploration (trying new recommendation strategies) with exploitation (using the best‑known strategy).  
- **Action:** I defined the agent as a Markov Decision Process where *states* are user interaction histories, *actions* are recommendation policies, and *rewards* are click‑through rates. The agent runs on an AWS SageMaker endpoint, orchestrated by Step Functions to poll CloudWatch metrics every 5 min. For exploration I used ε‑greedy with ε decayed via a simple linear schedule stored in DynamoDB; for exploitation the policy is the latest model checkpoint saved to S3.  
- **Result:** Within two weeks the agent reduced churn from 12 % to 7 % (≈42 % lift) and increased revenue per user by $0.18, while keeping inference cost below $0.02 per request.  

**Leadership Principles Anchored:** *Ownership*—I drove end‑to‑end delivery; *Dive Deep*—I profiled latency, GPU utilization, and reward distribution to tune ε decay.  
**Bar‑raiser cues:** I quantified impact (churn reduction), demonstrated technical depth (MDP formulation, AWS service stack), and reflected on a failure: an initial static policy caused over‑exploration; learning from that, I introduced adaptive exploration rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
