---
qid: ing_6a035498a7__faang__local
question: 'Explain: Define Main & Core Classes/Entities — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 489
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:24-05:00'
sources: []
---

## Clarify  
You’re asking how to *identify* the primary objects that will drive an object‑oriented design (OOD) when building a system, e.g., in a low‑level design exercise.  
Assumptions:  
- The domain is known (e.g., an online bookstore).  
- Functional requirements are specified; we’re not starting from scratch.  

## Approach  
1. **Domain Decomposition** – list real‑world entities.  
2. **Role Analysis** – for each entity, determine responsibilities (`CRUD`, business logic, coordination).  
3. **Encapsulation & Cohesion** – group related data and behavior into a single class.  
4. **Identify Collaborations** – map associations (has‑a, owns‑a) and dependencies.  
5. **Apply Design Patterns** – if a relationship fits a known pattern (`Observer`, `Strategy`, etc.), use it to name the interface/abstract class.  

## Depth  
- **Core Classes** are those that hold state and enforce invariants; e.g., `Book`, `User`.  
- **Main Classes** orchestrate interactions: controllers, services, repositories.  
- **Interfaces / Abstracts** expose contracts (`IBookRepository`) decoupling implementation from usage.  
- **Helper/Utility classes** are stateless helpers (e.g., `PriceCalculator`).  

Use UML class diagrams to visualize: attributes → private; methods → public; associations → lines with multiplicity.

## Edge Cases  
- Over‑splitting can lead to “class explosion”; keep cohesion > coupling.  
- Missing a shared responsibility may force duplicate code later.  
- Circular dependencies between main classes must be avoided or resolved via dependency injection.

## Optimize & Communicate  
- **Refactor**: If two core classes share many methods, consider extracting an abstract superclass or interface.  
- **Document** rationale in comments or README (`// Handles persistence; decoupled from UI`).  
- When presenting, walk through the diagram, explaining each relationship and its justification, then highlight how patterns reduce future maintenance.

This structured pipeline mirrors FAANG interview expectations: clear problem restatement, systematic plan, deep technical detail, awareness of pitfalls, and a concise communication style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
