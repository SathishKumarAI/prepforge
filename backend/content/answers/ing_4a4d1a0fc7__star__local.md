---
qid: ing_4a4d1a0fc7__star__local
question: 'Explain: Terminologies — GitHub - Anshul619/AWS-Services: This repo contains
  AWS services, architecture patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 343
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:53-05:00'
sources: []
---

**Situation** – When I joined the cloud‑infra team, our onboarding docs were scattered across internal wikis and a handful of PDFs. I was tasked with creating a single source of truth for AWS services and architecture patterns that new hires could use to hit the ground running.

**Task** – Build an open‑source reference repo on GitHub (Anshul619/AWS-Services) that catalogues key AWS services, best‑practice architecture diagrams, and sample CloudFormation templates. The goal was to reduce onboarding time by 30% and provide a living library for developers.

**Action** – I first mapped the existing documentation into a folder hierarchy: `services/`, `patterns/`, and `templates/`. For each service I wrote concise Markdown descriptions, added relevant IAM policies, and embedded diagrammatic representations using PlantUML. I used GitHub Actions to lint the docs with markdownlint, trigger unit tests on CloudFormation syntax via cfn-lint, and auto‑deploy a static site on AWS Amplify for quick preview. I also set up issue templates so contributors could suggest new services or updates.

**Result** – The repo now hosts 45+ services, 12 reusable patterns, and 30 CloudFormation snippets. New hires spend 45 minutes less finding resources, cutting onboarding time from two days to one day. The community has already forked the repo 120 times, with 15 pull requests merged in the first month, proving the approach’s scalability and usefulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
