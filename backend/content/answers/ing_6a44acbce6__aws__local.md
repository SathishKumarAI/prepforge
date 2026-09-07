---
qid: ing_6a44acbce6__aws__local
question: 'Explain: Training on Test Set — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 400
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:48-05:00'
sources: []
---

**Training on Test Set – An Anti‑Pattern**

*Leadership Principles:* **Customer Obsession** (we deliver reliable AI) & **Ownership** (I own model quality).

**Situation:** My team built a recommendation engine for a streaming platform. During rapid prototyping we reused the same 80/20 split, but accidentally fed a portion of the test set into the training pipeline to “speed up” experimentation.

**Task:** I had to expose the flaw, correct our evaluation process, and re‑establish trustworthy metrics without delaying release.

**Action:**  
1. **Audit & Fix Pipeline** – Implemented a deterministic split using `sklearn.model_selection.train_test_split` with a fixed seed, stored splits in S3 as CSVs (versioned via Athena).  
2. **Automated Validation** – Added an AWS Step Functions workflow that triggers every training job: it pulls the test split, runs inference on the trained model, and publishes RMSE & AUC to CloudWatch.  
3. **Continuous Monitoring** – Deployed a Lambda that compares live user engagement against baseline; if drift > 5 %, alerts are sent to Slack.  
4. **Documentation & Training** – Created an internal wiki page detailing “Train‑Test Leakage” and ran a workshop for all ML engineers.

**Result:** After the fix, our model’s AUC improved from 0.72 (biased) to 0.84 (true). The new pipeline reduced manual review time by 60 % and prevented future leakage, ensuring every feature rollout is backed by honest metrics.

*Bar‑raiser cues:* clear ownership of data hygiene, deep dive into pipeline artifacts, quantified impact on model quality, and learning loop that turned a failure into a robust process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
