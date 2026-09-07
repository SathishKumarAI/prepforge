---
qid: ing_2eefef0e6a__faang__local
question: 'Explain: You are building a computer-use agent. Design the perception layer:
  screenshots, coordinates, accessibility tree.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 569
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:32:25-05:00'
sources: []
---

## 1️⃣ Clarify  
*Goal:* Build a perception layer that feeds a computer‑use agent with an up‑to‑date view of the UI so it can decide actions.  
*Assumptions to confirm:*  
- Target OS (Windows/Linux/macOS).  
- Desired fidelity: pixel‑perfect screenshots vs semantic UI elements.  
- Real‑time latency budget (< 200 ms).  
- Accessibility API availability and permissions.

## 2️⃣ Approach  
1. **Capture visual state** – take a full‑screen screenshot or region of interest.  
2. **Obtain spatial metadata** – use OS cursor position, window bounds, element coordinates.  
3. **Build semantic tree** – query the accessibility tree (AT) to map UI controls to coordinates and attributes.  
4. **Synchronize & index** – store image + AT snapshot in a lightweight DB keyed by timestamp.

## 3️⃣ Depth  
- **Screenshots:** Use OS‑native APIs (`BitBlt` on Windows, `CGWindowListCreateImage` on macOS) for minimal overhead; compress with JPEG2000 if bandwidth is an issue.  
- **Coordinates & cursor**: Poll `GetCursorPos()` / `CGEventSourceStateID`.  
- **Accessibility tree:** Traverse AT nodes via MSAA/IAccessible2 (Windows), AXUIElement APIs (macOS). Each node yields role, state, bounds, and text.  
- **Indexing:** Hash the screenshot to detect unchanged frames; only re‑process when hash differs. Complexity: O(N) over UI elements per refresh; memory ~ few MB.

## 4️⃣ Edge Cases  
- Modal dialogs or system pop‑ups that bypass AT.  
- Dynamic content (canvas, WebGL) where AT is sparse – fallback to image recognition.  
- Multi‑monitor setups – ensure coordinate space normalization.  
- Permission denied for AT access – degrade gracefully by using OCR on screenshots.

## 5️⃣ Optimize & Communicate  
- **Performance:** Cache AT nodes; only diff changes. Use async pipelines: screenshot → GPU buffer → ML inference → action queue.  
- **Robustness:** Validate bounds against screen size to avoid off‑screen clicks.  
- **Explainability:** Log the perceived state (image hash, AT summary) before each decision for debugging and audit trails.  

By layering raw visual data with structured semantic information, the agent gains both *where* something is and *what* it is, enabling precise, low‑latency interactions across diverse desktop environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
