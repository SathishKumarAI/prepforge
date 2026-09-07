---
qid: ing_72f2556e2d__faang__local
question: 'Explain: AutoGLM and CogAgent operate real GUIs - a phone or a browser
  - from screenshots, over tens of steps. Design the agent: perception, action space,
  and error recovery for a 50-step task.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 470
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:12-05:00'
sources: []
---

**Clarify**  
The task is to design an autonomous agent that can interact with a real GUI (e.g., a phone or web browser) solely from screenshots, performing up to 50 sequential steps. We assume the agent has access to image‑to‑text OCR, a rendering engine for click coordinates, and a policy network that maps perception → action.

**Approach**  
1. **Perception Module** – preprocess the screenshot with OCR + layout parsing (e.g., semantic segmentation of UI elements). Produce a structured scene graph: {type, text, bounding box}.  
2. **Action Space** – discrete actions: *click(x,y)*, *swipe(dir,dist)*, *input(text)*, *wait*. Each action is parameterized by coordinates or content extracted from the scene graph.  
3. **Policy** – a transformer that takes the scene graph + step‑count context and outputs an action distribution.  
4. **Error Recovery** – maintain a stack of past actions; on failure (no expected UI change), trigger *retry* with alternative parameters, or fallback to *backtrack* by invoking a learned “undo” policy.

**Depth**  
- Use Vision‑Language pretraining (e.g., CLIP) to embed visual features and textual tokens.  
- Train the policy via RL + supervised fine‑tuning on scripted demos.  
- Complexity: O(N log M) for scene graph construction, O(1) per action inference.  
- The agent stores a log of screenshots; similarity matching (SSIM) detects stuck states.

**Edge Cases**  
- Dynamic content (ads, pop‑ups): detect and filter via heuristics.  
- Timing delays: use *wait* with adaptive timeouts based on observed frame rates.  
- Unexpected navigation: trigger a global search for the target text.

**Optimize & Communicate**  
To improve robustness, implement hierarchical planning: high‑level subgoals (e.g., “login”, “browse”) that decompose into lower‑level actions. Explain to interviewers how each component scales, why we chose vision‑language embeddings for perception, and how the rollback mechanism guarantees convergence within 50 steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
