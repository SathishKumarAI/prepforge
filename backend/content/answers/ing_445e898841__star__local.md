---
qid: ing_445e898841__star__local
question: 'Explain: Web Browsers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 368
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:38-05:00'
sources: []
---

**Situation:**  
In my last role as a front‑end engineer at a media startup, we were rolling out a new video‑gallery page that had to load dozens of high‑resolution thumbnails and stream previews simultaneously. Users reported sluggish scrolling and occasional jank on mid‑range devices.

**Task:**  
I was tasked with improving the page’s rendering performance so that all assets loaded smoothly without blocking the UI thread, while keeping the bundle size minimal for mobile users.

**Action:**  
First I profiled the browser using Chrome DevTools to see where the main thread spent time. It turned out that each thumbnail fetch and image decode ran serially on the single UI thread – classic **concurrency** but no true parallelism. I refactored the code to use `Promise.allSettled` with a worker pool of Web Workers for decoding images, effectively offloading CPU‑intensive work from the main thread. I also leveraged Service Workers to cache thumbnails and used `requestIdleCallback` to schedule non‑critical prefetches. Finally, I replaced the blocking `innerHTML +=` loop with a virtual DOM diffing approach via React’s concurrent mode.

**Result:**  
The page’s initial paint dropped from 3.2 s to 1.4 s on a mid‑range device, and scroll jank fell below 15 ms frames (vs. 45 ms before). Users reported noticeably smoother interactions, and we saw a 12% lift in engagement time on the gallery page. I learned that true parallelism requires moving heavy tasks off the main thread, while concurrency alone can still bottleneck performance if not carefully managed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
