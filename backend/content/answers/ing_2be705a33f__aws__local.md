---
qid: ing_2be705a33f__aws__local
question: 'Explain: Protected vs Private — GitHub - Anshul619/Java: This repo contains
  java \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 456
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:16-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> **Situation:** In a recent sprint I was tasked with refactoring a legacy Java codebase hosted on GitHub. The team needed to expose certain utility classes to internal modules while keeping sensitive implementation details hidden from external consumers.  
> 
> **Task:** Decide between using `protected` and `private` access modifiers in the API, ensuring both security and maintainability, and document the decision for future onboarding.  
> 
> **Action:**  
> 1. **Dive Deep** into the code graph: I used *SonarQube* to generate a dependency matrix, revealing that 23% of classes had public methods accessed by only two internal packages.  
> 2. I mapped each class’s usage pattern against AWS CodeCommit and GitHub Actions to understand CI impact.  
> 3. For **internal consumers** (same package or subclass), I switched the modifier from `private` to `protected`, allowing subclasses in other modules to override behavior without exposing implementation to external repos.  
> 4. For truly encapsulated utilities, I retained `private`.  
> 5. Added Javadoc tags and a static analysis rule in CodeBuild that flags any accidental use of `protected` outside the allowed packages.  
> 
> **Result:** Post‑refactor, our automated tests ran 18% faster due to reduced reflection overhead, and the code review cycle shrank from 3 days to 1 day. The new rule prevented a potential leakage that could have exposed internal logic in 4 downstream services—saving an estimated $12K in potential audit costs.  
> 
> **Leadership Principles:** *Ownership* (I owned the refactor end‑to‑end), *Dive Deep* (used SonarQube and CI metrics), *Bias for Action* (implemented rule immediately).  

**Bar‑raiser notes I’d listen for:** clear ownership, evidence of deep technical analysis, quantified impact, and a learning loop—e.g., what if the rule was ignored?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
