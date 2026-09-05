---
qid: ing_6a035498a7__star__local
question: 'Explain: Define Main & Core Classes/Entities — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 278
output_tokens: 340
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:29-05:00'
sources: []
---

**Situation:**  
While leading a fintech startup’s new credit‑scoring microservice, our team had to refactor a monolithic Java module that was becoming unmaintainable and slow during peak load.

**Task:**  
I needed to design a low‑level object model that cleanly separated responsibilities, enabled unit testing, and allowed future extension without breaking existing APIs.

**Action:**  
First, I identified the domain’s *core entities*: `Applicant`, `CreditScore`, `LoanProduct`, and `RiskProfile`. Each became a main class with well‑defined attributes and business methods. I then introduced *supporting classes*—`DataFetcher`, `ScoreCalculator`, `EligibilityEngine`—to encapsulate external data access, algorithmic logic, and rule evaluation. Using the **Strategy** pattern, I made `ScoreCalculator` pluggable so new scoring models could be added at runtime. The **Factory** pattern created entity instances from JSON payloads, keeping construction logic out of controllers. I also applied *composition over inheritance* to keep classes focused.

**Result:**  
The refactor cut the codebase by 35 % in lines and reduced API response time from 1.2 s to 320 ms under load. Unit coverage rose from 42 % to 78 %. I learned that defining clear, single‑responsibility core classes first provides a stable foundation for patterns like Strategy and Factory, making the system both testable and extensible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
