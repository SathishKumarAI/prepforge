---
qid: ing_69f21a32ca__faang__local
question: 'Q71: How do you build a production LLM evaluation pipeline using LLM-as-a-Judge?
  What are the failure modes?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 557
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:08-05:00'
sources: []
---

**Q71 – Building a Production LLM Evaluation Pipeline with “LLM‑as‑a‑Judge”**

| Stage | What to do |
|-------|------------|
| **Clarify** | • Goal: quantify model quality (accuracy, bias, safety) at scale.<br>• Assumptions: we have labeled reference data, a judge LLM with a known prompt template, and infra for parallel inference. |
| **Approach** | 1. **Data layer** – ingest benchmark sets + live user logs. <br>2. **Generation tier** – run candidate models on inputs in batches (GPU‑optimized). <br>3. **Judge tier** – feed each response to the judge LLM with a fixed prompt that scores or ranks outputs. <br>4. **Aggregation & alerting** – compute metrics, drift thresholds, and trigger ops alerts. |
| **Depth** | • Judge prompts are “gold‑standard” templates; we cache embeddings to avoid re‑prompting. <br>• Use vectorized batching (e.g., 32× per GPU) → ~O(N) latency. <br>• Store raw logs + judge scores in a time‑series DB for trend analysis. <br>• Validate the judge’s calibration via A/B tests against human raters; update prompt if drift is detected. |
| **Edge Cases** | • Judge hallucinations → add sanity checks (token‑entropy filter). <br>• Long outputs exceed token limits – truncate with a “continue” cue. <br>• Model output in unsupported language or format – fallback to a generic error score. |
| **Optimize & Communicate** | • Cache judge embeddings for repeated inputs to cut GPU usage by ~30%. <br>• Parallelize across shards; use autoscaling to handle traffic spikes. <br>• Document the pipeline as a CI/CD artifact, so stakeholders see metrics in real time and can rollback if scores fall below SLA. |

**Failure modes & mitigations**

| Mode | Symptom | Fix |
|------|---------|-----|
| Judge mis‑scoring (bias) | System reports high quality while humans disagree | Re‑prompt, retrain judge on new data |
| Latency spikes | Evaluation queue grows beyond threshold | Scale GPU pool, add caching |
| Data drift | Reference labels become stale | Periodic human audit and refresh |
| Security breach | Judge receives malicious inputs | Input sanitization & rate limiting |

This structured pipeline balances **speed**, **accuracy**, and **trustworthiness**—key for any FAANG‑level production LLM evaluation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
