---
qid: vq_3ed5254e33__star__local
question: Which of the following is not correct about a View ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:58-05:00'
sources: []
---

**Situation:**  
During a mobile‑app refactor for our e‑commerce platform, the new “Product Detail” screen kept crashing on older devices (Android 5.1). The crash logs pointed to a `NullPointerException` inside a custom `ViewGroup` that we had rewritten in Kotlin.

**Task:**  
I needed to identify why the view was failing, fix it so that it rendered correctly across all API levels, and ensure the layout stayed responsive without sacrificing performance.

**Action:**  
First, I reproduced the crash on an emulator with API 21 and added `View.debugMode` logs. The stack trace revealed that the custom view was trying to inflate a child layout using a context that had already been detached during the activity’s recreation. To solve this, I switched from `LayoutInflater.from(context)` to `LayoutInflater.from(parent.getContext())`, guaranteeing a valid context. Next, I refactored the view’s measurement logic: instead of hard‑coding pixel values, I used `TypedValue.applyDimension()` with `dp` units and cached the measured height to avoid redundant layout passes. Finally, I added unit tests that inflate the view in different screen densities and checked for `LayoutParams` consistency.

**Result:**  
After deploying the patch, crash reports dropped from 12 % of sessions to 0 %. The view now measures itself in under 1 ms on a Pixel 3a, improving overall frame rate by ~5 %. I learned that context leaks are a common source of view crashes and that caching measurements can yield measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
