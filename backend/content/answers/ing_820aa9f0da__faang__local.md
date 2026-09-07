---
qid: ing_820aa9f0da__faang__local
question: 'Explain: The Dependency Rule — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:47:06-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of the *Dependency Rule* from the Clean Coder blog. I’ll assume the interviewer wants a concise definition, why it matters in ML pipelines, and how to apply it. No code is required—just conceptual clarity.

**Approach**  
1. Define the rule in plain terms.  
2. Explain its purpose: keeping components decoupled.  
3. Give an example from a typical ML workflow (feature extraction → model training).  
4. Mention trade‑offs and edge cases.

**Depth**  
> **Dependency Rule:** *“A component should only depend on the abstract interface of another, not on its concrete implementation.”*  
In practice this means:  
- The data‑preprocessing step depends only on a *feature‑vector interface*, not on the specific library that produced it.  
- The model training module receives an abstraction like `FeatureExtractor`, allowing you to swap out scikit‑learn, Spark, or custom code without touching the trainer.

Benefits:  
- **Testability** – mock interfaces for unit tests.  
- **Maintainability** – change a feature source (e.g., from CSV to streaming) without rewriting downstream logic.  
- **Parallel evolution** – teams can work on different layers independently.

Trade‑offs: adding indirection can slightly increase boilerplate and may hide performance nuances if the abstraction is too coarse.

**Edge Cases**  
- When the interface needs to expose new methods, all dependent modules must be updated—potentially breaking the rule.  
- For very simple pipelines, the overhead of interfaces may outweigh benefits; a pragmatic “if‑size > threshold” guard helps.

**Optimize & Communicate**  
I’d recommend starting with minimal interfaces and iteratively refactoring as the system grows. I’d explain this to interviewers by showing a diagram: `DataLoader → FeatureExtractor (interface) → ModelTrainer`, emphasizing that each arrow represents a dependency on an abstraction, not a concrete class. This demonstrates structured thinking, clear communication, and depth in understanding ML engineering best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
