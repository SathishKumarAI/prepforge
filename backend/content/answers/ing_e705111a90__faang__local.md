---
qid: ing_e705111a90__faang__local
question: A team ships prompt changes on vibes - the founder tries five favourite
  prompts and merges. How do you move them to eval maturity without halting shipping?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 430
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:44-05:00'
sources: []
---

**Clarify**  
You’re running a continuous‑delivery pipeline for prompt engineering: the founder iterates on five “favorite” prompts and merges them into production while you want to shift toward an *evaluation‑maturity* model (systematic metrics, A/B testing, automated regression). The constraints: no shipping pause, minimal developer friction, and keeping business value high.

**Approach**  
1. **Introduce a side‑branch “eval‑track”** that runs in parallel with the main branch.  
2. **Automated test harness**: for every merge to eval‑track run a suite of unit tests (token length, safety filters) + an A/B rollout script that serves a small percentage of traffic to the new prompt.  
3. **Metric collection**: instrument user engagement signals (time‑on‑page, click‑through, satisfaction survey) and feed them into a lightweight analytics pipeline.  
4. **Decision gate**: only after two consecutive successful metric thresholds does the change get promoted to main.  

**Depth**  
- The eval‑track is implemented as a feature flag in the prompt store; rollout percentage is controlled via a simple config.  
- Complexity: O(1) for each merge, but the analytics pipeline introduces O(n log n) aggregation per day (acceptable).  
- Trade‑offs: slight latency overhead during evaluation, but no impact on user experience because traffic is split.

**Edge cases**  
- Prompt that causes safety violations → immediate rollback.  
- Metric drift due to seasonality → use a rolling window and statistical significance tests.  
- Developer forgetting to tag a prompt as “eval” → enforce via CI lint rule.

**Optimize & communicate**  
Iterate on the threshold values based on early data, and document the process in an internal wiki so new hires can understand the “evaluate‑then‑ship” cycle. Explain to stakeholders that shipping continues uninterrupted while quality improves systematically—turning ad‑hoc founder tweaks into data‑driven decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
