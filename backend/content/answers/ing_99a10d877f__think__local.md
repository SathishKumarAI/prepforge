---
qid: ing_99a10d877f__think__local
question: 'Explain: Pattern: Critic/Verifier — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 424
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:15:37-05:00'
sources: []
---

**Meta‑Cognitive Roadmap for Explaining “Pattern: Critic/Verifier – Design Patterns”**

1. **Clarify the Scope & Assumptions**  
   * Identify what “Critic/Verifier” refers to (e.g., a design pattern that separates validation logic from core business logic).  
   * Assume the audience knows basic OOP and design‑pattern terminology but not this specific pattern.  

2. **Choose a Mental Model / Framework**  
   * Use the *“Separation of Concerns”* lens: map out responsibilities (core domain vs. verification).  
   * Relate to familiar patterns like *Strategy*, *Decorator*, or *Facade* to anchor understanding.

3. **Step‑by‑Step Reasoning**  
   1. Define the problem: why validation logic can clutter core code.  
   2. Show how a Critic/Verifier object encapsulates checks, returns result objects or throws exceptions.  
   3. Illustrate interaction: client calls `verify()` before proceeding; pattern may chain multiple verifiers (pipeline).  
   4. Contrast with alternatives (inline checks, policy objects) and highlight trade‑offs.

4. **Common Traps to Avoid**  
   * Mixing verification with business logic → violates SRP.  
   * Over‑engineering: a simple guard clause can suffice; the pattern shines when rules are reusable or evolve independently.  
   * Forgetting that verifiers may need context (e.g., user roles); show dependency injection.

5. **Sanity‑Check & Communicate**  
   * Verify that each bullet directly addresses the question and stays within 150–220 words.  
   * Use concrete code snippets to ground abstract ideas; keep them short.  
   * End with a quick recap: “Critic/Verifier isolates validation, promotes reuse, and keeps domain models clean.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
