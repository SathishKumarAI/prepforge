---
qid: ing_402101ae95__star__local
question: 'Explain: Connect With Me — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 376
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:31-05:00'
sources: []
---

**Situation**  
When I joined the product team at a fintech startup, we were launching a new “Connect With Me” widget for our mobile app that let users share their profile link across email, SMS, and QR code. Our analytics showed only 12 % of users actually used it, and churn was higher among those who didn’t.  

**Task**  
I needed to redesign the feature so that at least 35 % of active users would share their contact link within the first month after activation, while keeping latency under 200 ms and ensuring GDPR compliance.  

**Action**  
First, I mapped the user flow in Figma and ran a heat‑map analysis on the current UI; the “Share” button was buried behind two taps. I moved it to the top‑right corner of the profile screen and added a one‑tap “Copy Link” shortcut. For QR code generation, I switched from a third‑party API to an in‑app library (ZXing) that cached images locally, cutting the response time by 60 %. I also added a short tooltip explaining privacy settings, which I implemented with a lightweight React component that lazy‑loads only when the user hovers. Finally, I set up A/B tests using LaunchDarkly to roll out changes incrementally and tracked shares via Mixpanel.  

**Result**  
After deployment, share activity jumped from 12 % to 38 % within two weeks, surpassing our target. The feature also reduced server load by 25 % thanks to local caching. I learned that small UI tweaks combined with efficient tech choices can dramatically improve user engagement and system performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
