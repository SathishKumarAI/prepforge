---
qid: ing_5adc769dc9__think__local
question: 'Explain: We sell RL environments. Design one for the task "book a multi-city
  trip in a web travel app", specify the reward, and tell me how you stop the policy
  hacking it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 217
output_tokens: 565
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:59:11-05:00'
sources: []
---

We must outline reasoning: clarify assumptions, define environment components, reward design, safety against hacking, etc. Provide numbered list with 5 items.**1. Clarify the problem and set assumptions**  
- *Scope*: The agent interacts only with the web‑travel app UI (clicks, text input).  
- *Goal*: Book a multi‑city itinerary that satisfies user constraints (dates, budget, preferred airlines/airports).  
- *Constraints*: No access to internal APIs; the agent must infer prices and availability from rendered pages.  
- *Evaluation metric*: Success of booking + cost efficiency + compliance with constraints.

**2. Build a mental model / RL framework**  
- Treat each UI state as an observation (DOM tree, visual features).  
- Actions: click on elements, enter text, submit forms.  
- Episode ends when the final confirmation page is reached or after a max‑step limit.  
- Use a hierarchical policy: high‑level planner chooses next city/flight; low‑level controller executes UI actions.

**3. Reason step‑by‑step toward the reward design**  
- **Primary reward**: +1 if booking completes and all constraints are met.  
- **Auxiliary rewards**: 
  - Negative cost proportional to total ticket price (encourages cheaper itineraries).  
  - Penalties for violating constraints (e.g., date mismatch, over‑budget).  
  - Small step penalty (-0.01) to encourage efficiency.  
- Normalize costs to keep the reward scale stable across different currencies and price ranges.

**4. Avoid policy hacking / unintended behavior**  
- **Reward shaping limits**: Keep penalties for constraint violations large enough that the agent can’t “cheat” by, say, skipping a date check or using hidden parameters.  
- **Curriculum learning**: Start with simple single‑city tasks before exposing multi‑city complexity; ensures policy learns correct sequencing first.  
- **Action masking**: Disable actions that would lead to obvious invalid states (e.g., clicking “Book” before entering all required fields).  
- **Adversarial testing**: Run the agent against a suite of synthetic UI glitches and see if it can still finish successfully; adjust reward or constraints accordingly.

**5. Sanity‑check & communicate**  
- Verify that the reward signal correlates with real user satisfaction (e.g., lower cost + success).  
- Run ablation studies: remove auxiliary rewards to confirm they’re necessary.  
- Explain to stakeholders that safety comes from both design (action masks, penalties) and continuous monitoring of policy outputs against a validation set of booking scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
