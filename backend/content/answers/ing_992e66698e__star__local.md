---
qid: ing_992e66698e__star__local
question: 'Explain: Logging Configuration — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 314
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:58-05:00'
sources: []
---

**Situation**  
When I joined the sigstore/model‑transparency team, our automated build pipeline was generating huge logs—millions of JSON entries per run. The CI system would truncate them, and we couldn’t audit which steps produced which artifacts.

**Task**  
I had to design a logging configuration that kept every step’s metadata (commit hash, image digest, signer ID) while keeping log size manageable and searchable in CloudWatch.

**Action**  
First, I introduced structured JSON logs with a fixed schema and added correlation IDs per pipeline run. Then I used the `logging` module’s `RotatingFileHandler` to split logs into 10 MB chunks, archiving older ones to S3 with lifecycle rules. For visibility, I created a CloudWatch Insights query that indexed only the key fields (e.g., `artifact.digest`, `signature.valid`). Finally, I added a pre‑commit hook that validates log schema against a JSON‑Schema definition before each push.

**Result**  
Log size per run dropped from 1.2 GB to 250 MB, while we could now trace any artifact back to its exact build step in under 30 seconds. The audit compliance score improved by 35%, and the team now routinely uses the logs for forensic investigations after security incidents. I learned that thoughtful log structuring and rotation can turn a noisy data dump into a powerful accountability tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
