---
qid: ing_a2b0590250__aws__local
question: How do you put eval gates into CI/CD for prompts and model versions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 496
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:00-05:00'
sources: []
---

**Situation / Task** – At my last role I led the launch of a generative‑AI product that shipped new prompts and model checkpoints every sprint. The risk was “model drift” breaking user experience. I owned the pipeline to guard against that.

**Action** –  
1. **Versioning & Metadata**: Every prompt file (`prompt.yaml`) and checkpoint (`s3://models/…`) is tagged with a semantic version in Git.  
2. **CI Guardrails**: In CodePipeline, after `git push` a Lambda checks the diff against an “approved‑prompts” whitelist; if new tokens exceed 20 % change, the build fails.  
3. **Evaluation Gate** – A Step Function triggers SageMaker Processing jobs that run unit tests (prompt‑to‑text accuracy) and a *human‑in‑the‑loop* scoring script on a hold‑out set. Results are stored in DynamoDB; Lambda compares them to baseline metrics (e.g., BLEU > 0.75, latency < 200 ms). If thresholds fall below 95 % of the last release, the pipeline stops and opens an SNS alert for the Ops team.  
4. **Deployment** – Successful builds deploy via CodeDeploy to an AppRunner container that serves the model endpoint (autoscaling on CloudWatch CPU/latency).

**Result** – The gate reduced production incidents by 68 % in Q3, cut manual QA time from 6 hrs to 30 min per release, and kept latency within SLA 99.9 % of the time.

**Leadership Principles**  
- **Ownership**: Built a self‑serving CI/CD that anyone could modify without gatekeepers.  
- **Dive Deep**: Instrumented every metric, stored raw logs in S3 for post‑mortem analysis.  

*Bar‑raiser notes*: I demonstrate ownership by automating the entire workflow, dive deep with granular metrics, quantify impact (incident reduction), and learned from an early failure where a missing prompt version caused a 12 hr outage—prompting the addition of the semantic‑diff check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
