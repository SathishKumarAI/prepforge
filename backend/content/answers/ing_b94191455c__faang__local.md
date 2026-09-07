---
qid: ing_b94191455c__faang__local
question: 'Q: How would you design a system that lets non-technical users automate
  desktop tasks using AI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 464
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:55-05:00'
sources: []
---

**Clarify**  
We need an end‑to‑end platform where a non‑tech user can record, edit and schedule routine desktop actions (clicks, keystrokes, file moves) and have AI augment or replace them. Key assumptions:  
- Users run Windows/macOS/Linux desktops.  
- They want a simple UI, no scripting knowledge.  
- The system should learn from context (time of day, app state).  

**Approach**  
1. **User‑friendly recorder** – GUI wizard that captures mouse/keyboard events and visual cues.  
2. **Semantic parser** – NLP model turns recorded steps into high‑level intents (“copy email attachment to folder”).  
3. **AI inference engine** – uses vision + state‑tracking to decide next step, fill forms, or correct errors.  
4. **Workflow editor** – drag‑and‑drop blocks with conditional logic (if‑else, loops).  
5. **Execution sandbox** – isolated process that can safely replay actions and interact with APIs.  

**Depth**  
- Recorder logs coordinates + timestamps; normalizes to relative positions using screen scaling detection.  
- Parser uses a fine‑tuned transformer trained on scripted workflows (e.g., AutoHotkey, Power Automate).  
- Inference engine runs a lightweight vision model (YOLOv5) for UI element detection and a rule‑based fallback.  
- Execution sandbox leverages OS accessibility APIs; logs every action for audit. Complexity: O(N) per step; memory ~10 MB.  

**Edge Cases**  
- Dynamic layouts → re‑track elements each run.  
- Permissions (admin rights, protected apps).  
- Conflicting workflows → version control & conflict resolution UI. Tests: unit tests on parser, integration tests with real desktop scenarios, security sandbox checks.  

**Optimize & Communicate**  
Improve speed by caching element embeddings; add offline mode via model quantization. I’d explain the trade‑off between AI flexibility and deterministic safety, emphasizing how the editor lets users override AI decisions for critical tasks. This balances usability, reliability, and performance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
