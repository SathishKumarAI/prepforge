---
qid: ing_f66a1cc67e__faang__local
question: 'Explain: Train/dev/test split for the judge — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 474
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:13:07-05:00'
sources: []
---

**Clarify**  
The question asks how a “judge” system (e.g., an automated grader) should handle **train / dev / test** splits when evaluating AI models under a *gated CI/CD* workflow. I’ll assume: 1) the judge runs on a public repo, 2) each push triggers training, validation, and final testing, 3) we want reproducible results without leaking test labels.

**Approach**  
1. Create deterministic random seeds for splitting.  
2. Maintain separate data buckets: *train*, *dev* (validation), *test*.  
3. During CI/CD, only train on the train set; use dev for hyper‑parameter tuning and early stopping; lock test until final merge or release.  
4. Store split indices in a versioned config so all runs are comparable.

**Depth**  
- **Data isolation**: The test set is read‑only to the judge; its labels are hidden until a “final” build passes all gates.  
- **Reproducibility**: Use a fixed seed (e.g., 42) and store split files in Git LFS or a shared bucket, ensuring identical splits across runs.  
- **Metrics**: Compute dev metrics on every PR; if they exceed thresholds, block merge. On the release gate, run test metrics and publish results.  
- **Complexity**: Splitting is O(n). Training remains unchanged; only CI/CD scripts differ.

**Edge Cases**  
- *Data drift*: If new data arrives, regenerate splits and re‑run all branches.  
- *Imbalanced classes*: Ensure stratified sampling to keep class ratios consistent.  
- *Small datasets*: Use cross‑validation instead of a single dev/test split.

**Optimize & Communicate**  
Explain that this pattern mirrors industry practice: continuous training on train/dev, gated release after unseen test evaluation. It guarantees that performance claims are trustworthy and that merges cannot accidentally leak test information. Highlight trade‑offs—extra storage for split files vs. the benefit of reproducibility—and reassure interviewers that the solution scales to millions of samples by chunking data and using distributed training pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
