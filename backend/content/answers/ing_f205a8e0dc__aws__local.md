---
qid: ing_f205a8e0dc__aws__local
question: 'Explain: Provenance and Safety — Multimodal Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:07-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional AI team at my previous company, we were tasked to launch a multimodal content generator (text + image) for a consumer app that required strict provenance tracking and safety guarantees before public release.

**Action**  
*Owned* the solution by mapping user‑journey data to an end‑to‑end pipeline.  
1. **Provenance** – Each generation request was wrapped in a *metadata token* stored in Amazon DynamoDB (TTL 30 days). The token included user ID, model version, and input hash; we used AWS Key Management Service (KMS) to encrypt it.  
2. **Safety** – We built a safety microservice on AWS Lambda that queried the OpenAI moderation API and our own custom classifier (SageMaker endpoint) before forwarding the prompt to Amazon Bedrock. The Lambda chain ran in parallel, returning a composite “safe” flag with an 99.9 % accuracy benchmark (validated against a manually labeled test set of 10k samples).  
3. **Audit & Rollback** – All outputs were stored in S3 with immutable Object Lock; we used EventBridge to trigger a CloudWatch alarm if the provenance token was missing, ensuring compliance.

*Delivered Results* – The launch cut time‑to‑market by 40 % compared to our legacy batch system and reduced false‑positive moderation incidents from 7.5 % to <0.3 %. Cost per request dropped from $0.12 (custom GPU fleet) to <$0.04 using Bedrock.

**Reflection / Learnings**  
I *dive deep* into the trade‑off between latency (Lambda cold starts vs. API Gateway) and cost, ultimately choosing Lambda@Edge for global distribution. The bar‑raiser would look for my ownership of data integrity, quantified safety impact, and willingness to iterate on failure points—each iteration reduced false negatives by 15 % after retraining the classifier.

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
