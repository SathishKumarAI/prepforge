---
qid: ing_2f2967f082__faang__local
question: 'Explain: Design the eval harness for an LLM feature we''re shipping - treat
  it like you''d design a test framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 397
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:16-05:00'
sources: []
---

**Clarify**  
We need a reproducible, automated evaluation harness for a new LLM feature (e.g., few‑shot prompting).  
Assumptions to confirm:  
1. Feature outputs text; we’ll compare against ground truth or oracle.  
2. We have a labeled benchmark set and can generate synthetic queries.  
3. Evaluation must run nightly, produce metrics, and surface failures.

**Approach**  
1. **Input pipeline** – load curated prompts + expected answers.  
2. **Execution layer** – call the LLM via API with deterministic seeds (if applicable).  
3. **Metric engine** – compute accuracy, BLEU/ROUGE, perplexity, and a custom “semantic similarity” score using embeddings.  
4. **Reporting** – generate dashboards, alerts for regressions > threshold.  
5. **CI integration** – schedule nightly runs, cache model checkpoints to avoid re‑training.

**Depth**  
- Use a lightweight container per run; isolate GPU/CPU usage.  
- Cache embeddings locally; recompute only on new data.  
- Parallelize test cases across workers (O(N) time).  
- Store raw outputs for post‑hoc analysis.  
- Implement versioning of prompts to track drift.

**Edge Cases**  
- Model hangs or times out → set a hard timeout and flag as failure.  
- Non‑deterministic outputs → run multiple passes, take majority vote.  
- Empty or malformed responses → treat as zero score and log.

**Optimize & Communicate**  
- Refactor metric computation into reusable libraries to reduce duplication.  
- Use feature flags to roll out the harness incrementally.  
- Present results in a single page with trend lines; explain any anomalies during reviews.  

This framework gives us deterministic, scalable evaluation while keeping latency low and traceability high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
