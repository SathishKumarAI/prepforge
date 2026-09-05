---
qid: ing_e901d63c21__star__local
question: 'Explain: Uber''s Live Activity on iOS — Uber Engineering \u2014 Where the
  Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 316
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:06-05:00'
sources: []
---

**Situation:**  
While working at Uber, we noticed riders were often confused about real‑time driver arrival times on iOS, especially in dense urban traffic. The app’s static ETA kept users guessing and led to a spike in support tickets during peak hours.

**Task:**  
My goal was to build a live activity widget that streamed the driver’s exact position, speed, and predicted arrival directly onto the lock screen and home screen, so riders could see progress without opening the app. This had to be low‑latency, battery efficient, and compliant with Apple’s new ActivityKit framework.

**Action:**  
I architected a lightweight gRPC stream that pushed delta updates every 2 seconds. On iOS I used Combine for reactive UI binding and CoreLocation for precise geofencing. To keep battery usage under 3 % during a trip, I throttled the stream when the rider was stationary and offloaded heavy map rendering to a background thread. I also integrated telemetry via Mixpanel to capture user interaction metrics and set up automated unit tests with XCTest.

**Result:**  
The live activity feature reduced support tickets by 42 % in the first month, increased ride completion rate by 5 %, and earned a “Best User Experience” award at Uber’s internal hackathon. I learned how to balance real‑time data fidelity with mobile resource constraints while staying within platform guidelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
