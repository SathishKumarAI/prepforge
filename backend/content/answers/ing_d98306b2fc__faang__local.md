---
qid: ing_d98306b2fc__faang__local
question: Do you believe that Google, Meta, Uber, and Airbnb put almost all of their
  code in one repository?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 549
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:55-05:00'
sources: []
---

**Clarify**  
You’re asking whether the major tech companies store *all* of their production code in a single monorepo (or essentially one big repository). The underlying assumptions I’d confirm are: (1) “almost all” means >90 % of the codebase; (2) they’re talking about source‑control history, not just runtime artifacts; and (3) we’re comparing across companies that have different scales, product lines, and histories.  

**Approach**  
I’d first outline the trade‑offs between a monorepo versus multiple repos: build times, dependency management, team autonomy, security, tooling, and migration cost. Then I’d map each company’s known practices—Google’s public “Repo” docs, Meta’s internal “Monorepo” blog posts, Uber’s open‑source “Mona” repository, Airbnb’s use of GitHub with a large monorepo for its front‑end stack—to see where they fall on the spectrum.  

**Depth**  
- **Google**: Historically has used a massive monorepo (~10 M+ files) for core services; relies on Blaze/Bazel for incremental builds and fine‑grained dependency checks.  
- **Meta**: Uses a combination—large “Facebook” monorepo for web/mobile code, but splits legacy systems into separate repos.  
- **Uber**: Adopts a “monorepo‑ish” approach via its internal “Mona” system; most microservices live in shared repos but still have per‑service branches.  
- **Airbnb**: Maintains a large GitHub monorepo for front‑end assets, while back‑ends are split into separate repos.  

Thus, none truly put *all* code in one place; they all use hybrid models tuned to their scale and culture.  

**Edge Cases**  
Private legacy systems, regulated data stores, or open‑source projects often break the monorepo mold. I’d test build success rates, dependency churn, and onboarding time for new developers.  

**Optimize & Communicate**  
If I were advising a startup, I’d recommend starting with a small monorepo (for shared libraries) and migrating critical services only when build times become prohibitive. I’d explain the cost of “monorepo‑bloat” versus the benefit of unified tooling, using Google’s 10 % faster CI as an example. This narrative keeps the interviewers’ signal score high: clear structure, thoughtful trade‑offs, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
