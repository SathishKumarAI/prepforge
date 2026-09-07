---
qid: ing_fcf789e76e__aws__local
question: 'Explain: editing document at all because only one'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 487
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:58-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was responsible for an internal knowledge‑base that stored millions of technical documents. A new compliance audit required us to *edit* every document so that the word “API” appeared only once per paragraph—any duplicate usage would trigger a warning in downstream services. The existing manual workflow took weeks, and the risk of human error was high.

**Action (A)**  
I owned the project from start to finish. First, I performed a *dive deep* analysis: I built an NLP pipeline using **Amazon Comprehend** for entity extraction, **AWS Lambda** for stateless processing, and **Amazon S3** as the source/destination bucket. The pipeline scanned each document, counted occurrences of “API”, flagged duplicates, and applied a deterministic replacement rule that kept only the first instance. I also added an **Amazon DynamoDB** table to track processed documents and their edit status.

To speed delivery, I used **AWS Step Functions** to orchestrate the Lambda functions in parallel across partitions of S3 objects, achieving *bias for action* while ensuring idempotency. I set up CloudWatch metrics to monitor throughput and error rates.

**Result (R)**  
The batch ran on a single day instead of 30, processing 4 M documents with an average latency of 0.8 s per file. The cost was $1.20 per 10 k documents—$12 k total—cutting the prior $45 k manual effort by ~73%. Post‑deployment audit scores improved from 82% to 100%, and downstream services no longer flagged duplicate “API” warnings.

**Key Learnings**  
- Ownership: I led cross‑functional communication with compliance, devops, and product teams.  
- Dive Deep: Profiling Lambda cold starts helped me reduce memory allocation from 1 GB to 512 MB without affecting accuracy.  
- Bar‑raiser cues: Quantified impact (time & cost savings), scalability (parallel S3 reads), and a post‑mortem that documented trade‑offs between rule complexity and runtime overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
