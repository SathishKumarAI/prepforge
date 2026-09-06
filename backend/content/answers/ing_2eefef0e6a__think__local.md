---
qid: ing_2eefef0e6a__think__local
question: 'Explain: You are building a computer-use agent. Design the perception layer:
  screenshots, coordinates, accessibility tree.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 661
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:45:45-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
- Goal: Build a *perception* module that lets an AI understand what’s on the screen.  
- Assume we have access to the OS‑level APIs for screenshots, coordinate systems (screen vs window), and accessibility trees.  
- Clarify constraints: real‑time performance, cross‑platform support, privacy/security limits.

**2️⃣ Adopt a layered mental model**  
1. *Raw visual capture* – screenshot bitmap + timestamp.  
2. *Spatial mapping* – translate coordinates from screen to element level (window borders, DPI scaling).  
3. *Semantic layer* – accessibility tree (AX/IAccessible) that provides roles, labels, states.  
4. *Fusion* – merge visual and semantic data into a unified scene graph.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Why it matters |
|------|--------|----------------|
| **Capture screenshot** | Grab pixel buffer of the target window or full screen. | Provides low‑level visual context for image‑based models (e.g., OCR, object detection). |
| **Normalize coordinates** | Convert mouse/keyboard event coords to a canonical space using DPI and window offsets. | Ensures consistent mapping between user actions and UI elements. |
| **Query accessibility tree** | Use OS APIs (UIAutomation on Windows, AXUIElement on macOS, AT-SPI on Linux). | Gives semantic info (role, name, state) that is far cheaper than pixel‑level inference. |
| **Align tree with visual data** | Match each accessible node to a bounding box in the screenshot via coordinates or hit‑testing. | Bridges semantics and pixels so the agent can reason about “what” vs “where”. |
| **Build scene graph** | Store nodes with attributes (role, label, bounds) + optional image patches. | Enables downstream modules (planning, grounding) to query the UI structure efficiently. |

**4️⃣ Common traps to avoid**  

- *Ignoring DPI scaling*: leads to misaligned coordinates and missed elements.  
- *Relying solely on screenshots*: OCR or CV can be brittle; always fallback to accessibility data when available.  
- *Treating all windows equally*: modal dialogs, pop‑ups, and system overlays often lack accessible trees—handle gracefully.  
- *Over‑loading the perception pipeline*: keep the fusion lightweight (e.g., use hash maps for node lookup).  

**5️⃣ Sanity checks & communication**  

- **Validate alignment**: pick a few known UI elements, compare bounding boxes from screenshot vs accessibility tree; they should overlap within tolerance.  
- **Performance test**: benchmark capture+fusion on target hardware; aim for <30 ms per frame for interactive agents.  
- **Explain to stakeholders**: “Our perception layer first captures the raw image, then normalizes coordinates and pulls semantic metadata from the OS accessibility APIs. Finally we fuse them into a scene graph that the agent can query in real time.”  

This structured approach ensures the agent has both visual and semantic awareness of its environment while staying efficient and portable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
