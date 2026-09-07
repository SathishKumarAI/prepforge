---
qid: ing_78954b1a9b__aws__local
question: 'Explain: Stripe — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 539
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:56-05:00'
sources: []
---

**Behavioral (STAR – Customer Obsession + Ownership)**  
*Situation*: While building a data‑science platform for Stripe’s fraud team, I discovered that the public GitHub repo “ombharatiya/FAANG‑Coding‑Interview‑Questions” contained duplicate questions and outdated solutions. *Task*: Clean up the repo, standardize documentation, and expose it as an internal learning resource. *Action*: I took full ownership—first performed a **dive deep** audit of all 350+ entries, wrote unit tests for each solution, and rewrote ambiguous prompts in plain English. I then built a lightweight CI pipeline on GitHub Actions that automatically runs linting, test coverage (≥90 %), and static analysis. Finally, I created an internal Confluence page linking to the repo, adding tagging metadata so engineers could search by skill level or topic. *Result*: The cleaned repository now hosts 310 unique questions with a 95 % pass rate on unit tests, reducing onboarding time for new hires by **30 %** and cutting repeated interview question cycles by **40 %**.  

**Technical Design (AWS Services)**  
- **S3**: Store raw markdown files as versioned objects; enable lifecycle policies to archive older iterations after 365 days.  
- **Lambda + CodeBuild**: Trigger on `push` events; compile Python/Java snippets, run tests, and publish a static site via **Amplify**.  
- **DynamoDB**: Maintain a lightweight index of question metadata (tags, difficulty) for fast lookup by the front‑end.  
- **CloudWatch + SNS**: Alert on test failures or stale content (>30 days).  

*Scalability*: The stateless Lambda functions scale automatically with traffic; S3 and DynamoDB provide linear scalability without provisioning. *Availability*: Multi‑AZ deployment of DynamoDB and Amplify guarantees 99.9 % uptime. *Cost*: Using serverless components keeps spend below $0.10/month for typical usage, with the ability to burst during large repo pushes.

**Bar‑raiser Notes**  
- Demonstrated **ownership** by leading the end‑to‑end cleanup.  
- Showed **dive deep** through detailed audit and test coverage.  
- Quantified impact with concrete metrics (30 % onboarding reduction).  
- Learned from initial failure: early versioning prevented accidental loss of solutions during refactor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
