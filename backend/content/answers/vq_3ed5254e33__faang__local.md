---
qid: vq_3ed5254e33__faang__local
question: Which of the following is not correct about a View ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 528
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:56-05:00'
sources: []
---

**Clarify**  
The interview asks you to pick the statement that *doesn’t* hold true for an Android `View`.  Think of a `View` as a UI component that handles layout, drawing and input events.

Assumptions:  
- We’re talking about the base `android.view.View` class (not subclasses).  
- The options involve lifecycle callbacks, measurement, focus, or threading rules.

**Approach**  
1. Enumerate the core properties of a `View`.  
2. Map each property to the typical statements that could be presented as “correct.”  
3. Identify which statement contradicts those facts.

**Depth**  

| Property | Correct fact | Example “wrong” statement |
|----------|--------------|---------------------------|
| **Layout** | The layout pass calls `onMeasure()` → `setMeasuredDimension()`, then `onLayout()` to position children. | *“`onLayout()` is called before `onMeasure()`.”* |
| **Drawing** | Drawing occurs in the UI thread via `draw(Canvas)`; custom drawing must be on that thread. | *“You can call `invalidate()` from any background thread.”* |
| **Focus** | A view can receive focus only if it’s focusable and visible; otherwise focus is passed to a parent. | *“A non‑focusable view will still gain focus when touched.”* |
| **Threading** | All public APIs that touch the UI must run on the main thread; background threads cannot modify views directly. | *“UI components are thread‑safe and can be updated from any thread.”* |

The statement that is *not correct* is therefore:  
> “You can call `invalidate()` (or update a view) from any background thread.”

**Edge Cases**  
- A custom view might override `onMeasure` incorrectly, leading to zero size.  
- Calling `requestLayout()` from a worker thread throws an exception.  
- If a view is not focusable, touch‑to‑focus logic may misbehave.

**Optimize & Communicate**  
Explain that the core of Android’s UI framework hinges on single‑threaded rendering; violating this rule leads to race conditions and crashes. Emphasize that understanding these constraints helps you design robust, performant UIs—exactly what FAANG teams value when building large‑scale mobile apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
