---
qid: ing_42efd3c882__faang__local
question: 'Q: How do you test prompt changes before production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 494
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:51-05:00'
sources: []
---

**Clarify**  
We need a systematic way to validate that changing the prompt for an LLM‑powered feature (e.g., FAQ bot) won’t degrade quality or safety before rolling it out. Key assumptions:  
- We have baseline metrics (accuracy, latency, user satisfaction).  
- The model is deterministic enough that prompt tweaks produce measurable differences.  
- Production traffic can be safely split.

**Approach**  
1. **Define Success Criteria** – quantitative KPIs and qualitative guardrails.  
2. **Create a Prompt Test Suite** – unit tests on synthetic inputs + real user queries.  
3. **Run A/B or Multivariate Experiments** – expose each prompt variant to a controlled traffic shard.  
4. **Collect & Analyze Results** – statistical significance, drift detection, safety flags.  
5. **Rollback & Iterate** – if any metric falls below threshold, revert and refine.

**Depth**  
- *Prompt Test Suite*: Use 1K curated prompts covering edge cases (ambiguous, sarcastic, toxic). Run the model offline to capture outputs; compare against a gold standard or human annotations. Complexity: O(N) per prompt set.  
- *Experimentation*: Deploy two variants behind a feature flag. Traffic split 90/10 initially. Measure latency (<50 ms), accuracy (F1 >0.85), and safety (no toxic flags). Use Bayesian A/B testing for early stopping.  
- *Safety Layer*: Run outputs through a toxicity classifier; any score above threshold triggers immediate rollback.

**Edge Cases**  
- **Model drift**: If the underlying LLM updates, prompt performance may shift. Re‑run tests after each model version.  
- **Rare inputs**: Ensure test set covers low‑frequency but high‑impact queries (e.g., medical advice).  
- **Latency spikes**: Prompt length can affect inference time; monitor GPU queue times.

**Optimize & Communicate**  
- Automate the entire pipeline in CI/CD so prompt changes trigger automated tests, experiments, and alerts.  
- Summarize results in a lightweight dashboard for stakeholders—highlight KPI deviations and safety incidents.  
- Iterate quickly: use feedback loops to refine prompts and test coverage, ensuring continuous improvement without compromising user experience.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
